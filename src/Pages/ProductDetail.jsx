import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import "./ProductDetail.css";
import Footer from "../components/Footer/Footer";
// Product images
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

/* =========================================================
   PRODUCTS
========================================================= */

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
    description:
      "Stylish and comfortable cafe chair designed for modern interiors.",
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
    description:
      "Modern and stylish chair with a comfortable design.",
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
    description:
      "Luxury big sofa that provides excellent comfort and elegance.",
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
    description:
      "Modern outdoor bar table and stool set for stylish spaces.",
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
    description:
      "Elegant night lamp with a modern and attractive design.",
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
    description:
      "Simple and beautiful ceramic mug for everyday use.",
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
    description:
      "Comfortable and stylish bed set designed for modern bedrooms.",
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
    description:
      "Minimalist decorative flower pot suitable for modern homes.",
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
    description:
      "Comfortable modern chair with a clean and elegant appearance.",
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
    description:
      "Premium modern sofa designed for comfortable living spaces.",
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
    description:
      "Luxury sofa with premium comfort and sophisticated design.",
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
    description:
      "Beautiful modern dining table perfect for contemporary homes.",
    tags: "Table, Dining, Furniture",
  },
];

/* =========================================================
   HELPERS
========================================================= */

// Convert:
// "Rp 2.500.000" -> 2500000
const getPriceValue = (price) => {
  if (typeof price === "number") {
    return price;
  }

  return Number(String(price).replace(/[^\d]/g, "")) || 0;
};

// Format:
// 2500000 -> "Rp 2,500,000.00"
const formatPrice = (price) => {
  return `Rp ${Number(price).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

// Read cart safely
const getStoredCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Could not read cart:", error);
    return [];
  }
};

// Save cart
const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify other components in the same application
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (error) {
    console.error("Could not save cart:", error);
  }
};

/* =========================================================
   PRODUCT DETAIL
========================================================= */

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  /* =======================================================
     STATES
  ======================================================= */

  const [selectedImage, setSelectedImage] = useState(
    product?.image || null
  );

  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState("L");

  const [selectedColor, setSelectedColor] =
    useState("purple");

  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  /* =======================================================
     LOAD CART
  ======================================================= */

  useEffect(() => {
    setCartItems(getStoredCart());

    const handleCartUpdate = () => {
      setCartItems(getStoredCart());
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, []);

  /* =======================================================
     RESET PRODUCT STATE
  ======================================================= */

  useEffect(() => {
    if (!product) {
      return;
    }

    setSelectedImage(product.image);
    setQuantity(1);
    setSelectedSize("L");
    setSelectedColor("purple");
  }, [product]);

  /* =======================================================
     PRODUCT NOT FOUND
  ======================================================= */

  if (!product) {
    return (
      <>
        <div className="product-not-found">
          <h1>Product Not Found</h1>

          <p>
            The product you are looking for does not exist.
          </p>

          <Link to="/shop">
            Back To Shop
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  /* =======================================================
     RELATED PRODUCTS
  ======================================================= */

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  /* =======================================================
     QUANTITY
  ======================================================= */

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = () => {
    const existingCart = getStoredCart();

    const existingIndex = existingCart.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );

    let updatedCart;

    if (existingIndex !== -1) {
      updatedCart = existingCart.map((item, index) => {
        if (index !== existingIndex) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      });
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        image: product.image,

        // IMPORTANT:
        // Cart page receives a NUMBER
        price: getPriceValue(product.price),

        // Keep formatted price too if needed elsewhere
        formattedPrice: product.price,

        quantity,

        size: selectedSize,
        color: selectedColor,
      };

      updatedCart = [
        ...existingCart,
        newItem,
      ];
    }

    saveCart(updatedCart);
    setCartItems(updatedCart);

    // Open shopping cart popup
    setCartOpen(true);
  };

  /* =======================================================
     OPEN CART
  ======================================================= */

  const handleCartButton = () => {
    const currentCart = getStoredCart();

    setCartItems(currentCart);
    setCartOpen(true);
  };

  /* =======================================================
     REMOVE CART ITEM
  ======================================================= */

  const removeCartItem = (id, size, color) => {
    const currentCart = getStoredCart();

    const updatedCart = currentCart.filter(
      (item) =>
        !(
          item.id === id &&
          item.size === size &&
          item.color === color
        )
    );

    saveCart(updatedCart);
    setCartItems(updatedCart);
  };

  /* =======================================================
     CART SUBTOTAL
  ======================================================= */

  const subtotal = cartItems.reduce(
    (total, item) => {
      const itemPrice = getPriceValue(item.price);

      return (
        total +
        itemPrice * Number(item.quantity || 0)
      );
    },
    0
  );

  /* =======================================================
     SHARE
  ======================================================= */

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name}`,
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Product link copied!");
      }
    } catch (error) {
      console.log("Share cancelled.");
    }
  };

  /* =======================================================
     CLOSE CART
  ======================================================= */

  const closeCart = () => {
    setCartOpen(false);
  };

  /* =======================================================
     GO TO CART
  ======================================================= */

  const goToCart = () => {
    setCartOpen(false);
    navigate("/cart");
  };

  /* =======================================================
     GO TO CHECKOUT
  ======================================================= */

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    setCartOpen(false);
    navigate("/checkout");
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <section className="product-breadcrumb">
        <div className="breadcrumb-container">

          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <Link to="/shop">
            Shop
          </Link>

          <span className="breadcrumb-divider"></span>

          <span className="current-product">
            {product.name}
          </span>

        </div>
      </section>


      {/* =====================================================
          PRODUCT DETAIL
      ====================================================== */}

      <section className="product-detail-section">
        <div className="product-detail-container">

          {/* =================================================
              PRODUCT GALLERY
          ================================================== */}

          <div className="product-gallery">

            <div className="product-thumbnails">

              {[1, 2, 3, 4].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    selectedImage === product.image
                      ? "thumbnail active"
                      : "thumbnail"
                  }
                  onClick={() =>
                    setSelectedImage(product.image)
                  }
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${item}`}
                  />
                </button>
              ))}

            </div>

            <div className="product-main-image">

              <img
                src={selectedImage}
                alt={product.name}
              />

              {product.badge && (
                <span
                  className={
                    product.badge === "New"
                      ? "detail-badge new"
                      : "detail-badge sale"
                  }
                >
                  {product.badge}
                </span>
              )}

            </div>

          </div>


          {/* =================================================
              PRODUCT INFORMATION
          ================================================== */}

          <div className="product-details">

            <h1>
              {product.name}
            </h1>


            {/* PRICE */}

            <div className="detail-price">

              <span className="current-price">
                {product.price}
              </span>

              {product.oldPrice && (
                <span className="detail-old-price">
                  {product.oldPrice}
                </span>
              )}

            </div>


            {/* RATING */}

            <div className="rating-row">

              <div className="stars">
                ★★★★★
              </div>

              <span className="rating-line"></span>

              <span className="review-text">
                5 Customer Review
              </span>

            </div>


            {/* DESCRIPTION */}

            <p className="short-description">
              {product.description}
            </p>


            {/* SIZE */}

            <div className="option-group">

              <p className="option-title">
                Size
              </p>

              <div className="size-options">

                {["L", "XL", "XS"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={
                      selectedSize === size
                        ? "size-button selected"
                        : "size-button"
                    }
                    onClick={() =>
                      setSelectedSize(size)
                    }
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>


            {/* COLOR */}

            <div className="option-group">

              <p className="option-title">
                Color
              </p>

              <div className="color-options">

                <button
                  type="button"
                  aria-label="Purple"
                  className={
                    selectedColor === "purple"
                      ? "color purple selected-color"
                      : "color purple"
                  }
                  onClick={() =>
                    setSelectedColor("purple")
                  }
                />

                <button
                  type="button"
                  aria-label="Black"
                  className={
                    selectedColor === "black"
                      ? "color black selected-color"
                      : "color black"
                  }
                  onClick={() =>
                    setSelectedColor("black")
                  }
                />

                <button
                  type="button"
                  aria-label="Gold"
                  className={
                    selectedColor === "gold"
                      ? "color gold selected-color"
                      : "color gold"
                  }
                  onClick={() =>
                    setSelectedColor("gold")
                  }
                />

              </div>

            </div>


            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="product-actions-detail">

              {/* QUANTITY */}

              <div className="quantity-box">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>

              </div>


              {/* ADD TO CART */}

              <button
                type="button"
                className="add-to-cart-detail"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>


              {/* COMPARE */}

              <Link
                to="/comparison"
                state={{
                  selectedProduct: product,
                }}
                className="compare-button"
              >
                + Compare
              </Link>

            </div>


            <div className="detail-line"></div>


            {/* =================================================
                PRODUCT META
            ================================================== */}

            <div className="product-meta">

              <div>
                <span>SKU</span>
                <b>:</b>
                <p>{product.sku}</p>
              </div>

              <div>
                <span>Category</span>
                <b>:</b>
                <p>{product.category}</p>
              </div>

              <div>
                <span>Tags</span>
                <b>:</b>
                <p>{product.tags}</p>
              </div>

              <div>
                <span>Share</span>
                <b>:</b>

                <div className="social-icons">

                  <button
                    type="button"
                    onClick={handleShare}
                  >
                    f
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                  >
                    in
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                  >
                    𝕏
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <section className="description-section">

        <div className="description-container">

          <div className="description-tabs">

            <button
              type="button"
              className="active"
            >
              Description
            </button>

            <button type="button">
              Additional Information
            </button>

            <button type="button">
              Reviews [5]
            </button>

          </div>


          <div className="description-content">

            <p>
              {product.description}
            </p>

            <p>
              Designed with a balance of style and
              functionality, this product brings
              comfort and elegance to your home.
              Carefully selected materials provide
              excellent quality while the modern
              design makes it suitable for a variety
              of interiors.
            </p>

          </div>


          <div className="description-images">

            <div>
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div>
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}

      <section className="related-products-section">

        <div className="related-container">

          <h2>
            Related Products
          </h2>

          <div className="related-grid">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="related-card"
              >

                <div className="related-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  {item.badge && (
                    <span
                      className={
                        item.badge === "New"
                          ? "related-badge new"
                          : "related-badge sale"
                      }
                    >
                      {item.badge}
                    </span>
                  )}

                </div>


                <div className="related-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.category}
                  </p>

                  <div className="related-price">

                    <strong>
                      {item.price}
                    </strong>

                    {item.oldPrice && (
                      <del>
                        {item.oldPrice}
                      </del>
                    )}

                  </div>

                </div>

              </Link>
            ))}

          </div>


          <Link
            to="/shop"
            className="show-more-products"
          >
            Show More
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />


      {/* =====================================================
          CART OVERLAY
      ====================================================== */}

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={closeCart}
        />
      )}


      {/* =====================================================
          SHOPPING CART POPUP
      ====================================================== */}

      {cartOpen && (
        <aside className="cart-popup">

          {/* HEADER */}

          <div className="cart-popup-header">

            <h2>
              Shopping Cart
            </h2>

            <button
              type="button"
              className="cart-popup-close"
              onClick={closeCart}
              aria-label="Close cart"
            >
              ×
            </button>

          </div>


          {/* ITEMS */}

          <div className="cart-popup-items">

            {cartItems.length === 0 ? (
              <div className="empty-cart">

                <p>
                  Your cart is empty.
                </p>

                <Link
                  to="/shop"
                  onClick={closeCart}
                >
                  Continue Shopping
                </Link>

              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  className="popup-cart-item"
                  key={`${item.id}-${item.size}-${item.color}`}
                >

                  <div className="popup-cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  <div className="popup-cart-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.quantity} ×{" "}
                      <span>
                        {formatPrice(item.price)}
                      </span>
                    </p>

                    <small>
                      Size: {item.size} | Color: {item.color}
                    </small>

                  </div>


                  <button
                    type="button"
                    className="popup-remove"
                    onClick={() =>
                      removeCartItem(
                        item.id,
                        item.size,
                        item.color
                      )
                    }
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </button>

                </div>
              ))
            )}

          </div>


          {/* FOOTER */}

          {cartItems.length > 0 && (
            <div className="cart-popup-footer">

              <div className="popup-subtotal">

                <span>
                  Subtotal
                </span>

                <strong>
                  {formatPrice(subtotal)}
                </strong>

              </div>


              <div className="popup-buttons">

                {/* CART */}

                <button
                  type="button"
                  onClick={goToCart}
                >
                  Cart
                </button>


                {/* CHECKOUT */}

                <button
                  type="button"
                  onClick={goToCheckout}
                >
                  Checkout
                </button>


                {/* COMPARISON */}

                <Link
                  to="/comparison"
                  state={{
                    selectedProduct:
                      products.find(
                        (item) =>
                          item.id ===
                          cartItems[0]?.id
                      ) || product,
                  }}
                  onClick={closeCart}
                >
                  Comparison
                </Link>

              </div>

            </div>
          )}

        </aside>
      )}


      {/* =====================================================
          FLOATING CART BUTTON
      ====================================================== */}

      <button
        type="button"
        className="floating-page-cart"
        onClick={handleCartButton}
      >
        Cart
      </button>

    </>
  );
};

export default ProductDetail;