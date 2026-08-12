import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import cartImg from "../assets/Blog.png";
import logo from "../assets/logo.png";
import "./Cart.css";

/* =========================================================
   HELPERS
========================================================= */

const getPrice = (price) => {
  if (typeof price === "number") {
    return price;
  }

  return Number(
    String(price || "").replace(/[^\d.-]/g, "")
  ) || 0;
};

const formatPrice = (price) => {
  return `Rs. ${getPrice(price).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const getCart = () => {
  try {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart)
      ? parsedCart
      : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
};

const saveCart = (cart) => {
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

/* =========================================================
   CART COMPONENT
========================================================= */

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(getCart);

  /* =======================================================
     SYNC CART
  ======================================================= */

  useEffect(() => {
    const syncCart = () => {
      setCart(getCart());
    };

    window.addEventListener(
      "cartUpdated",
      syncCart
    );

    window.addEventListener(
      "storage",
      syncCart
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        syncCart
      );

      window.removeEventListener(
        "storage",
        syncCart
      );
    };
  }, []);

  /* =======================================================
     UPDATE CART
  ======================================================= */

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    saveCart(updatedCart);
  };

  /* =======================================================
     UNIQUE ITEM KEY
  ======================================================= */

  const getItemKey = (item) => {
    return [
      item.id,
      item.size || "",
      item.color || "",
    ].join("-");
  };

  /* =======================================================
     INCREASE QUANTITY
  ======================================================= */

  const increaseQuantity = (item) => {
    const itemKey = getItemKey(item);

    const updatedCart = cart.map((cartItem) => {
      if (getItemKey(cartItem) !== itemKey) {
        return cartItem;
      }

      return {
        ...cartItem,
        quantity:
          Number(cartItem.quantity || 0) + 1,
      };
    });

    updateCart(updatedCart);
  };

  /* =======================================================
     DECREASE QUANTITY
  ======================================================= */

  const decreaseQuantity = (item) => {
    const itemKey = getItemKey(item);

    const updatedCart = cart
      .map((cartItem) => {
        if (getItemKey(cartItem) !== itemKey) {
          return cartItem;
        }

        const newQuantity =
          Number(cartItem.quantity || 1) - 1;

        return {
          ...cartItem,
          quantity: newQuantity,
        };
      })
      .filter(
        (cartItem) =>
          Number(cartItem.quantity) > 0
      );

    updateCart(updatedCart);
  };

  /* =======================================================
     MANUAL QUANTITY
  ======================================================= */

  const handleQuantityChange = (
    item,
    value
  ) => {
    const quantity = Number(value);

    if (
      !Number.isFinite(quantity) ||
      quantity < 1
    ) {
      return;
    }

    const itemKey = getItemKey(item);

    const updatedCart = cart.map((cartItem) => {
      if (getItemKey(cartItem) !== itemKey) {
        return cartItem;
      }

      return {
        ...cartItem,
        quantity: Math.floor(quantity),
      };
    });

    updateCart(updatedCart);
  };

  /* =======================================================
     REMOVE PRODUCT
  ======================================================= */

  const removeItem = (item) => {
    const itemKey = getItemKey(item);

    const updatedCart = cart.filter(
      (cartItem) =>
        getItemKey(cartItem) !== itemKey
    );

    updateCart(updatedCart);
  };

  /* =======================================================
     CLEAR CART
  ======================================================= */

  const clearCart = () => {
    updateCart([]);
  };

  /* =======================================================
     TOTALS
  ======================================================= */

  const subtotal = cart.reduce(
    (total, item) => {
      const price = getPrice(item.price);
      const quantity =
        Number(item.quantity) || 1;

      return total + price * quantity;
    },
    0
  );

  const total = subtotal;

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="cart-page">

      {/* ===================================================
          HERO
      =================================================== */}

      <Hero
        image={cartImg}
        logo={logo}
        subtitle="Home"
        title="Cart"
        breadcrumb="Cart"
        pageType="inner"
      />

      {/* ===================================================
          CART SECTION
      =================================================== */}

      <section className="cart-section">
        <div className="cart-container">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="cart-products-wrapper">

            {/* TABLE HEADER */}

            {cart.length > 0 && (
              <div className="cart-header">

                <div className="cart-header-product">
                  Product
                </div>

                <div className="cart-header-price">
                  Price
                </div>

                <div className="cart-header-quantity">
                  Quantity
                </div>

                <div className="cart-header-subtotal">
                  Subtotal
                </div>

              </div>
            )}

            {/* =================================================
                EMPTY CART
            ================================================= */}

            {cart.length === 0 && (
              <div className="empty-cart">

                <div className="empty-cart-icon">
                  🛒
                </div>

                <h2>
                  Your cart is empty
                </h2>

                <p>
                  You haven't added any products
                  to your cart yet.
                </p>

                <button
                  type="button"
                  className="continue-shopping-btn"
                  onClick={
                    handleContinueShopping
                  }
                >
                  Continue Shopping
                </button>

              </div>
            )}

            {/* =================================================
                ALL CART PRODUCTS
            ================================================= */}

            {cart.map((item, index) => {
              const itemKey =
                getItemKey(item);

              const price =
                getPrice(item.price);

              const quantity =
                Number(item.quantity) || 1;

              const itemSubtotal =
                price * quantity;

              return (
                <div
                  className="cart-product"
                  key={`${itemKey}-${index}`}
                >

                  {/* PRODUCT */}

                  <div className="cart-product-info">

                    <div className="cart-product-image">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={
                            item.name ||
                            "Product"
                          }
                        />
                      ) : (
                        <div className="cart-no-image">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="cart-product-details">

                      <span className="cart-product-name">
                        {item.name ||
                          item.title ||
                          item.productName ||
                          "Product"}
                      </span>

                      {item.size && (
                        <span className="cart-product-option">
                          Size: {item.size}
                        </span>
                      )}

                      {item.color && (
                        <span className="cart-product-option">
                          Color: {item.color}
                        </span>
                      )}

                    </div>

                  </div>

                  {/* PRICE */}

                  <div className="cart-product-price">
                    {formatPrice(price)}
                  </div>

                  {/* QUANTITY */}

                  <div className="cart-quantity-wrapper">

                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(event) =>
                        handleQuantityChange(
                          item,
                          event.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() =>
                        increaseQuantity(item)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>

                  {/* SUBTOTAL */}

                  <div className="cart-product-subtotal">
                    {formatPrice(
                      itemSubtotal
                    )}
                  </div>

                  {/* REMOVE */}

                  <button
                    type="button"
                    className="remove-cart-item"
                    onClick={() =>
                      removeItem(item)
                    }
                    aria-label={`Remove ${
                      item.name ||
                      "product"
                    }`}
                  >
                    🗑
                  </button>

                </div>
              );
            })}

            {/* =================================================
                CART ACTIONS
            ================================================= */}

            {cart.length > 0 && (
              <div className="cart-actions">

                <button
                  type="button"
                  className="continue-shopping-btn"
                  onClick={
                    handleContinueShopping
                  }
                >
                  Continue Shopping
                </button>

                <button
                  type="button"
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>

              </div>
            )}

          </div>

          {/* =================================================
              RIGHT SIDE - TOTALS
          ================================================= */}

          <aside className="cart-totals">

            <h2>
              Cart Totals
            </h2>

            <div className="cart-total-row">

              <span>
                Subtotal
              </span>

              <span className="cart-total-light">
                {formatPrice(subtotal)}
              </span>

            </div>

            <div className="cart-total-row cart-total-final">

              <span>
                Total
              </span>

              <span>
                {formatPrice(total)}
              </span>

            </div>

            <button
              type="button"
              className="checkout-button"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Check Out
            </button>

          </aside>

        </div>
      </section>

      {/* ===================================================
          BENEFITS
      =================================================== */}

      <section className="cart-benefits">

        <div className="cart-benefit-item">

          <div className="cart-benefit-icon">
            <span>♜</span>
          </div>

          <div className="cart-benefit-content">
            <h3>
              High Quality
            </h3>

            <p>
              crafted from top materials
            </p>
          </div>

        </div>

        <div className="cart-benefit-item">

          <div className="cart-benefit-icon">
            <span>✓</span>
          </div>

          <div className="cart-benefit-content">
            <h3>
              Warranty Protection
            </h3>

            <p>
              Over 2 years
            </p>
          </div>

        </div>

        <div className="cart-benefit-item">

          <div className="cart-benefit-icon">
            <span>▣</span>
          </div>

          <div className="cart-benefit-content">
            <h3>
              Free Shipping
            </h3>

            <p>
              Order over $150
            </p>
          </div>

        </div>

        <div className="cart-benefit-item">

          <div className="cart-benefit-icon">
            <span>♧</span>
          </div>

          <div className="cart-benefit-content">
            <h3>
              24 / 7 Support
            </h3>

            <p>
              Dedicated support
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Cart;