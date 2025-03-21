import React, { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="gallery-page">
      <h2>📸 Campus Photo Gallery</h2>
      <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
      
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
