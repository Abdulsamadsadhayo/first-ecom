import React from "react";
import "./Products.css";

import p1 from "../../assets/product1.jpg";
import p2 from "../../assets/product 2.jpg";
import p3 from "../../assets/product3.jpg";
import p4 from "../../assets/product4.jpg";
import p5 from "../../assets/product5.jpg";
import p6 from "../../assets/product6.jpg";
import p7 from "../../assets/product7.jpg";
import p8 from "../../assets/product8.jpg";

const products = [
  {
    id: 1,
    image: p1,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    type: "red",
  },
  {
    id: 2,
    image: p2,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "",
    badge: "",
    type: "",
  },
  {
    id: 3,
    image: p3,
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    type: "red",
  },
  {
    id: 4,
    image: p4,
    title: "Respira",
    desc: "Outdoor bar table",
    price: "Rp 500.000",
    oldPrice: "",
    badge: "New",
    type: "green",
  },
  {
    id: 5,
    image: p5,
    title: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: "",
    badge: "",
    type: "",
  },
  {
    id: 6,
    image: p6,
    title: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    oldPrice: "",
    badge: "New",
    type: "green",
  },
  {
    id: 7,
    image: p7,
    title: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    type: "red",
  },
  {
    id: 8,
    image: p8,
    title: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: "",
    badge: "New",
    type: "green",
  },
];

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />

              {item.badge && (
                <span className={`badge ${item.type}`}>
                  {item.badge}
                </span>
              )}

              <div className="overlay">
                <button>Add to Cart</button>

                <div className="actions">
                  <span>🔗 Share</span>
                  <span>⚖ Compare</span>
                  <span>♡ Like</span>
                </div>
              </div>
            </div>

            <div className="content">
              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="price">
                <strong>{item.price}</strong>

                {item.oldPrice && (
                  <span>{item.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="show-btn">Show More</button>
    </section>
  );
};

export default Products;