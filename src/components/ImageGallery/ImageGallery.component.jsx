import styled from 'styled-components';

const StyledGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

StyledGallery.Container = styled.div`
  display: block;
  width: 100%;
  margin: 72px auto 0 auto;
  padding: 15px;
`;

export default StyledGallery;
