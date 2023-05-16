import StyledItem from './ImageGalleryItem.component';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imageData, onImageClick }) => {
  return (
    <StyledItem id={imageData.id} onClick={onImageClick}>
      <StyledItem.Image src={imageData.webformatURL} alt={imageData.tags} />
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
