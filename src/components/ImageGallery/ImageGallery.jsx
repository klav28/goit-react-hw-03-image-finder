export const ImageGallery = ({ imagesData }) => {
  console.log(imagesData);

  return (
    <>
      <h2>IMAGE GALLERY</h2>
      <ul>
        {imagesData.map(el => (
          <li key={el.id}>
            <img src={el.previewURL} alt={el.tags} />
          </li>
        ))}
      </ul>
    </>
  );
};
