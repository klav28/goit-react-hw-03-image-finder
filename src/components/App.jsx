import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ModalWindow } from './Modal/Modal';
import { Button } from './Button/Button';
import { PixabayAPI } from './Pixabay/pixabay_api';

const pixabayAPI = new PixabayAPI();

export class App extends Component {
  state = {
    queryString: '',
    imagesData: [],
    isLoading: false,
    totalHits: 0,
    isModalShow: false,
    largeImage: '',
    page: 1,
  };

  handleSearchSubmit = ev => {
    ev.preventDefault();
    const { querystring } = ev.target;
    this.setState({ queryString: querystring.value });
    this.setState({ page: 1 });
    this.setState({ imagesData: [] });
  };

  handleImageClick = ev => {
    const currentID = Number(ev.currentTarget.id);
    console.log(currentID);
    this.setState({
      largeImage: this.state.imagesData.find(el => el.id === currentID),
    });
    this.setState({ isModalShow: true });
  };

  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.queryString !== this.state.queryString ||
      prevState.page < this.state.page
    ) {
      pixabayAPI.query = this.state.queryString;
      pixabayAPI.page = this.state.page;
      try {
        this.setState({ isLoading: true });
        const { data } = await pixabayAPI.fetchPhotos();

        this.setState({ imagesData: [...this.state.imagesData, ...data.hits] });
        this.setState({ totalHits: data.totalHits });
      } catch {
        console.log(Error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        <ImageGallery
          imagesData={this.state.imagesData}
          onImageClick={this.handleImageClick}
        />
        {this.state.isModalShow && (
          <ModalWindow
            largeImage={this.state.largeImage}
            modalClose={() => {
              this.setState({ isModalShow: false });
            }}
          ></ModalWindow>
        )}
        {this.state.page * 12 < this.state.totalHits && (
          <Button buttonText="LOAD MORE" onLoadMore={this.onLoadMore} />
        )}
      </>
    );
  }
}
