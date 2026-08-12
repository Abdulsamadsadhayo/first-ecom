import React from "react";
import "./Gallery.css";

import img1 from "../../../assets/gallery/img1.jpg";
import img2 from "../../../assets/gallery/img2.jpg";
import img3 from "../../../assets/gallery/img3.jpg";
import img4 from "../../../assets/gallery/img4.jpg";
import img5 from "../../../assets/gallery/img5.jpg";
import img6 from "../../../assets/gallery/img6.jpg";
import img7 from "../../../assets/gallery/img7.jpg";
import img8 from "../../../assets/gallery/img8.jpg";
import img9 from "../../../assets/gallery/img9.jpg";

const images = [
  { id: 1, image: img1, className: "tall" },
  { id: 2, image: img2, className: "wide" },
  { id: 3, image: img3, className: "normal" },
  { id: 4, image: img4, className: "normal" },
  { id: 5, image: img5, className: "tall" },
  { id: 6, image: img6, className: "normal" },
  { id: 7, image: img7, className: "small" },
  { id: 8, image: img8, className: "small" },
  { id: 9, image: img9, className: "normal" },
];

function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-heading">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className="gallery-grid">
        {images.map((item) => (
          <div key={item.id} className={`gallery-item ${item.className}`}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;