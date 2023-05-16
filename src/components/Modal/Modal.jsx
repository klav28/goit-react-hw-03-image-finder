import StyledModal from './Modal.component';
import PropTypes from 'prop-types';

export const ModalWindow = ({ largeImage, modalClose }) => {
  return (
    <StyledModal.Backdrop onClick={modalClose}>
      <StyledModal>
        <img src={largeImage.largeImageURL} alt={largeImage.tags} />
      </StyledModal>
    </StyledModal.Backdrop>
  );
};

ModalWindow.propTypes = {
  largeImage: PropTypes.object.isRequired,
};
