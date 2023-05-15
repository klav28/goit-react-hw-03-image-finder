export const ImageGallery = ({ imagesData }) => {
  console.log(imagesData);

  return (
    <>
      <h2>IMAGE GALLERY</h2>
      <ul>
        {imagesData.map(el => (
          <li>{el.previewURL}</li>
        ))}
      </ul>
    </>
  );
};
