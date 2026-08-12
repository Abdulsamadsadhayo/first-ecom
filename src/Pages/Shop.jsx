import React from "react";
import { Link } from "react-router-dom";
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
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";
import "./Shop.css";


const products = [
  {
    id: 1,
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: product1,
    badge: "-30%",
    sku: "SS001",
    description: "Stylish and comfortable cafe chair.",
    tags: "Chair, Home, Shop",
  },

  {
    id: 2,
    name: "Leviiosa",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "",
    image: product2,
    badge: "",
    sku: "SS002",
    description: "Modern and stylish chair.",
    tags: "Chair, Furniture, Home",
  },

  {
    id: 3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: product3,
    badge: "-50%",
    sku: "SS003",
    description: "Luxury big sofa for modern homes.",
    tags: "Sofa, Home, Shop",
  },

  {
    id: 4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "",
    image: product4,
    badge: "New",
    sku: "SS004",
    description: "Modern outdoor furniture.",
    tags: "Table, Outdoor, Home",
  },

  {
    id: 5,
    name: "Grifo",
    category: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: "",
    image: product5,
    badge: "",
    sku: "SS005",
    description: "Elegant and modern night lamp.",
    tags: "Lamp, Home, Decor",
  },

  {
    id: 6,
    name: "Muggo",
    category: "Small mug",
    price: "Rp 150.000",
    oldPrice: "",
    image: product6,
    badge: "New",
    sku: "SS006",
    description: "Simple and beautiful ceramic mug.",
    tags: "Mug, Kitchen, Home",
  },

  {
    id: 7,
    name: "Pingky",
    category: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 10.000.000",
    image: product7,
    badge: "-30%",
    sku: "SS007",
    description: "Comfortable and stylish bed set.",
    tags: "Bed, Bedroom, Furniture",
  },

  {
    id: 8,
    name: "Potty",
    category: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: "",
    image: product8,
    badge: "New",
    sku: "SS008",
    description: "Minimalist decorative flower pot.",
    tags: "Decor, Plant, Home",
  },

  {
    id: 9,
    name: "Leviosa",
    category: "Modern chair",
    price: "Rp 2.800.000",
    oldPrice: "",
    image: product9,
    badge: "",
    sku: "SS009",
    description: "Comfortable modern chair.",
    tags: "Chair, Furniture, Home",
  },

  {
    id: 10,
    name: "Mellon",
    category: "Modern sofa",
    price: "Rp 6.500.000",
    oldPrice: "Rp 8.000.000",
    image: product10,
    badge: "-20%",
    sku: "SS010",
    description: "Premium modern sofa.",
    tags: "Sofa, Living Room, Home",
  },

  {
    id: 11,
    name: "Asgaard",
    category: "Luxury sofa",
    price: "Rp 8.000.000",
    oldPrice: "",
    image: product11,
    badge: "",
    sku: "SS011",
    description: "Luxury sofa with premium comfort.",
    tags: "Sofa, Luxury, Home",
  },

  {
    id: 12,
    name: "Bergamo",
    category: "Modern dining table",
    price: "Rp 5.500.000",
    oldPrice: "",
    image: product12,
    badge: "New",
    sku: "SS012",
    description: "Beautiful modern dining table.",
    tags: "Table, Dining, Furniture",
  },
];


const Shop = () => {
  return (
    <>
      {/* =========================
          HERO
      ========================= */}

      <Hero
        image={aboutImg}
        logo={logo}
        subtitle="Home"
        title="Shop"
        breadcrumb="Shop"
        pageType="inner"
      />

      {/* =========================
          SHOP TOOLBAR
      ========================= */}

      <section className="shop-toolbar">
        <div className="shop-toolbar-container">

          <div className="filter-left">

            <button
              type="button"
              className="filter-button"
            >
              ☰
              <span>Filter</span>
            </button>

            <span className="showing-text">
              Showing 1–12 of 12 results
            </span>

          </div>


          <div className="sort-right">

            <div className="toolbar-item">

              <span>Show</span>

              <button
                type="button"
                className="number-box"
              >
                12
              </button>

            </div>


            <div className="toolbar-item">

              <span>Sort by</span>

              <button
                type="button"
                className="sort-box"
              >
                Default
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="products-section">

        <div className="products-container">

          <div className="products-grid">

            {products.map((product) => (

              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.badge && (

                    <span
                      className={
                        product.badge === "New"
                          ? "product-badge new"
                          : "product-badge sale"
                      }
                    >
                      {product.badge}
                    </span>

                  )}

                </div>


                <div className="product-info">

                  <h2>{product.name}</h2>

                  <p>{product.category}</p>

                  <div className="product-price">

                    <strong>
                      {product.price}
                    </strong>

                    {product.oldPrice && (

                      <del>
                        {product.oldPrice}
                      </del>

                    )}

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          PAGINATION
      ========================= */}

      <div className="pagination">

        <button
          type="button"
          className="pagination-active"
        >
          1
        </button>

        <button type="button">
          2
        </button>

        <button type="button">
          3
        </button>

        <button
          type="button"
          className="next-button"
        >
          Next
        </button>

      </div>

    </>
  );
};


export default Shop;
