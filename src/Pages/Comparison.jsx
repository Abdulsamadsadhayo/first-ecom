import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Comparison.css";
import Hero from "../components/Hero/Hero";
import aboutImg from "../assets/Blog.png";
import logo from "../assets/logo.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product 2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const products = [
  {
    id: 1,
    name: "Syltherine",
    category: "Chairs",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    rating: 4.5,
    reviews: 204,
    image: product1,
    description: "Stylish cafe chair made with high quality materials.",
    size: "Large",
    color: "Black",
    material: "Wood",
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Chairs",
    price: "Rp 2.000.000",
    oldPrice: "",
    rating: 4.5,
    reviews: 140,
    image: product2,
    description: "Modern and comfortable chair for your home.",
    size: "Medium",
    color: "Blue",
    material: "Wood",
  },
  {
    id: 3,
    name: "Lolito",
    category: "Sofas",
    price: "Rp 7.000.000",
    oldPrice: "Rp 9.000.000",
    rating: 4.8,
    reviews: 180,
    image: product3,
    description: "Luxury sofa designed for modern living rooms.",
    size: "Large",
    color: "Grey",
    material: "Fabric",
  },
  {
    id: 4,
    name: "Respira",
    category: "Sofas",
    price: "Rp 5.500.000",
    oldPrice: "",
    rating: 4.6,
    reviews: 120,
    image: product4,
    description: "Elegant sofa with a soft and comfortable finish.",
    size: "Large",
    color: "White",
    material: "Fabric",
  },
  {
    id: 5,
    name: "Grifo",
    category: "Tables",
    price: "Rp 3.500.000",
    oldPrice: "Rp 4.500.000",
    rating: 4.4,
    reviews: 95,
    image: product5,
    description: "Premium modern table for everyday use.",
    size: "Medium",
    color: "Brown",
    material: "Wood",
  },
  {
    id: 6,
    name: "Muggo",
    category: "Tables",
    price: "Rp 2.800.000",
    oldPrice: "",
    rating: 4.3,
    reviews: 88,
    image: product6,
    description: "Minimal table with a beautiful wooden finish.",
    size: "Medium",
    color: "Natural",
    material: "Wood",
  },
  {
    id: 7,
    name: "Pingky",
    category: "Beds",
    price: "Rp 8.000.000",
    oldPrice: "Rp 10.000.000",
    rating: 4.7,
    reviews: 150,
    image: product7,
    description: "Comfortable modern bed for a relaxing bedroom.",
    size: "King",
    color: "White",
    material: "Wood",
  },
  {
    id: 8,
    name: "Potty",
    category: "Beds",
    price: "Rp 6.500.000",
    oldPrice: "",
    rating: 4.5,
    reviews: 110,
    image: product8,
    description: "Beautiful bedroom furniture with modern design.",
    size: "Queen",
    color: "Brown",
    material: "Wood",
  },
];

const Comparison = () => {
  const location = useLocation();

  const [firstProduct, setFirstProduct] = useState(null);
  const [secondProduct, setSecondProduct] = useState(null);

  /*
    Get product ID sent from ProductDetail or CartPopup
  */
  useEffect(() => {
    const selectedId = location.state?.productId;

    if (!selectedId) {
      setFirstProduct(products[0]);
      setSecondProduct(products[1]);
      return;
    }

    const selectedProduct = products.find(
      (product) => product.id === Number(selectedId)
    );

    if (!selectedProduct) return;

    setFirstProduct(selectedProduct);

    /*
      Automatically find another product
      from the SAME CATEGORY
    */
    const sameCategoryProduct = products.find(
      (product) =>
        product.category === selectedProduct.category &&
        product.id !== selectedProduct.id
    );

    setSecondProduct(sameCategoryProduct || products[0]);
  }, [location.state]);

  /*
    Change second product
  */
  const handleSecondProductChange = (event) => {
    const selectedId = Number(event.target.value);

    const selectedProduct = products.find(
      (product) => product.id === selectedId
    );

    if (selectedProduct) {
      setSecondProduct(selectedProduct);
    }
  };

  /*
    Add product to cart
  */
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart`);
  };

  if (!firstProduct || !secondProduct) {
    return null;
  }

  /*
    Only products from the same category
  */
  const sameCategoryProducts = products.filter(
    (product) =>
      product.category === firstProduct.category &&
      product.id !== firstProduct.id
  );

  return (
    <>
      {/* =================================================
          HERO
      ================================================= */}

      <Hero
        image={aboutImg}
        logo={logo}
        subtitle="Home"
        title="Product Comparison"
        breadcrumb="Comparison"
        pageType="inner"
      />

      {/* =================================================
          COMPARISON
      ================================================= */}

      <section className="comparison-page">

        <div className="comparison-container">

          {/* LEFT INTRODUCTION */}

          <div className="comparison-intro">

            <h2>Go to Product Page for More Products</h2>

            <a href="/shop" className="view-more">
              View More
            </a>

          </div>

          {/* FIRST PRODUCT */}

          <div className="comparison-product">

            <div className="product-image-box">
              <img
                src={firstProduct.image}
                alt={firstProduct.name}
              />
            </div>

            <h2>{firstProduct.name}</h2>

            <p className="comparison-price">
              {firstProduct.price}
            </p>

            <div className="rating">

              <span className="stars">
                {"★".repeat(Math.floor(firstProduct.rating))}
              </span>

              <span className="rating-number">
                {firstProduct.rating}
              </span>

              <span className="review-count">
                {firstProduct.reviews} Reviews
              </span>

            </div>

          </div>

          {/* SECOND PRODUCT */}

          <div className="comparison-product">

            <div className="product-image-box">
              <img
                src={secondProduct.image}
                alt={secondProduct.name}
              />
            </div>

            <h2>{secondProduct.name}</h2>

            <p className="comparison-price">
              {secondProduct.price}
            </p>

            <div className="rating">

              <span className="stars">
                {"★".repeat(Math.floor(secondProduct.rating))}
              </span>

              <span className="rating-number">
                {secondProduct.rating}
              </span>

              <span className="review-count">
                {secondProduct.reviews} Reviews
              </span>

            </div>

          </div>

          {/* CHOOSE PRODUCT */}

          <div className="choose-product">

            <label>Choose a Product</label>

            <select
              value={secondProduct.id}
              onChange={handleSecondProductChange}
            >
              {sameCategoryProducts.map((product) => (
                <option
                  key={product.id}
                  value={product.id}
                >
                  {product.name}
                </option>
              ))}
            </select>

          </div>

        </div>


        {/* =================================================
            COMPARISON TABLE
        ================================================= */}

        <div className="comparison-table">

          <div className="table-row table-heading">

            <div className="table-label">
              General
            </div>

            <div></div>
            <div></div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Product
            </div>

            <div>
              {firstProduct.name}
            </div>

            <div>
              {secondProduct.name}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Category
            </div>

            <div>
              {firstProduct.category}
            </div>

            <div>
              {secondProduct.category}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Description
            </div>

            <div>
              {firstProduct.description}
            </div>

            <div>
              {secondProduct.description}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Price
            </div>

            <div>
              {firstProduct.price}
            </div>

            <div>
              {secondProduct.price}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Size
            </div>

            <div>
              {firstProduct.size}
            </div>

            <div>
              {secondProduct.size}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Color
            </div>

            <div>
              {firstProduct.color}
            </div>

            <div>
              {secondProduct.color}
            </div>

          </div>


          <div className="table-row">

            <div className="table-label">
              Material
            </div>

            <div>
              {firstProduct.material}
            </div>

            <div>
              {secondProduct.material}
            </div>

          </div>


          {/* ADD TO CART */}

          <div className="table-row cart-row">

            <div></div>

            <div>
              <button
                className="comparison-cart-btn"
                onClick={() => handleAddToCart(firstProduct)}
              >
                Add To Cart
              </button>
            </div>

            <div>
              <button
                className="comparison-cart-btn"
                onClick={() => handleAddToCart(secondProduct)}
              >
                Add To Cart
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

      <div className="comparison-features">

        <div>
          <h3>🏆 High Quality</h3>
          <p>crafted from top materials</p>
        </div>

        <div>
          <h3>🛡 Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>

        <div>
          <h3>🚚 Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>

        <div>
          <h3>🎧 24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>

      </div>


    </>
  );
};

export default Comparison;