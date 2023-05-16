import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PixabayAPI } from './Pixabay/pixabay_api';

const pixabayAPI = new PixabayAPI();

export class App extends Component {
  state = {
    queryString: '',
    imagesData: [],
  };

  fetchImages = async queryString => {
    pixabayAPI.query = this.state.queryString;
    const { data } = await pixabayAPI.fetchPhotos();
    this.setState({ imagesData: data.hits });
    console.log(data.hits);

    //       if (!data.total) {
    //         console.log('Images not found');
    //         return;
    //       }
    //     } catch {
    //       console.log(error);
    //     }
  };

  handleSearchSubmit = ev => {
    ev.preventDefault();
    const { querystring } = ev.target;
    console.log(querystring.value);
    this.setState({ queryString: querystring.value });
    this.fetchImages();
  };

  render() {
    return (
      <>
        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        {/* {this.state.imagesData.lenght > 0 && ( */}
        <ImageGallery imagesData={this.state.imagesData} />
        {/* )} */}
      </>
    );
  }
}
