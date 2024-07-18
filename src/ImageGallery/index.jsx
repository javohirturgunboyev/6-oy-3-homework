import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  'https://picsum.photos/id/1018/200/300',
  'https://picsum.photos/id/1021/200/300',
  'https://picsum.photos/id/1025/200/300',
  'https://picsum.photos/id/1033/200/300',
  'https://picsum.photos/id/1035/200/300',
  'https://picsum.photos/id/1042/200/300'
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Rasm Galereyasi</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Gallery ${index}`} 
            className="gallery-image" 
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <img src={selectedImage} alt="Selected" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
