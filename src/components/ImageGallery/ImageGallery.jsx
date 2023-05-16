import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import StyledGallery from './ImageGallery.component';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imagesData, onImageClick }) => {
  return (
    <>
      <StyledGallery>
        {imagesData.map(el => (
          <ImageGalleryItem
            key={el.id.toString()}
            imageData={el}
            onImageClick={onImageClick}
          />
        ))}
      </StyledGallery>
    </>
  );
};

ImageGallery.propTypes = {
  imagesData: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
