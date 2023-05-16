import StyledButton from './Button.component';
import PropTypes from 'prop-types';

export const Button = ({ buttonText, onLoadMore }) => {
  return (
    <StyledButton.Container>
      <StyledButton type="button" onClick={onLoadMore}>
        {buttonText}
      </StyledButton>
    </StyledButton.Container>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
