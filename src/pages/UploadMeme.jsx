import React from 'react'
import UploadImageDropzone from '../components/UploadImageDropzone'
import ImageGrid from "../components/ImageGrid";
import useImage from "../hooks/useImage";

const UploadMeme = () => {
  const imagesQuery = useImage();
  
  return (
		<div>
			<h1>Here you can upload your meme</h1>
			<UploadImageDropzone />
			<ImageGrid query={imagesQuery} />
		</div>
  );
}

export default UploadMeme
