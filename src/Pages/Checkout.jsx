import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import checkoutImg from "../assets/Blog.png";
import logo from "../assets/logo.png";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  /* =========================================================
     LOAD CART
  ========================================================= */
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  /* =========================================================
     HELPERS
  ========================================================= */
  const getPrice = (price) => {
    if (typeof price === "number") {
      return price;
    }

    if (typeof price === "string") {
      return Number(price.replace(/[^0-9.-]+/g, "")) || 0;
    }

    return 0;
  };

  const getQuantity = (item) => {
    return Number(item.quantity) || 1;
  };

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  /* =========================================================
     SUBTOTAL
  ========================================================= */
  const subtotal = cart.reduce((total, item) => {
    const price = getPrice(item.price);
    const quantity = getQuantity(item);

    return total + price * quantity;
  }, 0);

  /* =========================================================
     PLACE ORDER
  ========================================================= */
  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    alert("Order placed successfully!");

    // Clear cart after successful order
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        image={checkoutImg}
        logo={logo}
        subtitle="Home"
        title="Checkout"
        breadcrumb="Checkout"
        pageType="inner"
      />

      {/* =====================================================
          CHECKOUT
      ===================================================== */}

      <section className="checkout-page">
        <div className="checkout-container">

          {/* =================================================
              LEFT - BILLING DETAILS
          ================================================= */}

          <div className="billing-section">
            <h1>Billing details</h1>

            <form
              className="billing-form"
              onSubmit={handlePlaceOrder}
            >
              {/* First + Last Name */}
              <div className="name-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className="form-group">
                <label htmlFor="company">
                  Company Name (Optional)
                </label>

                <input
                  id="company"
                  type="text"
                />
              </div>

              {/* Country */}
              <div className="form-group">
                <label htmlFor="country">
                  Country / Region
                </label>

                <div className="select-box">
                  <select
                    id="country"
                    defaultValue="Pakistan"
                  >
                    <option value="Pakistan">
                      Pakistan
                    </option>

                    <option value="Sri Lanka">
                      Sri Lanka
                    </option>

                    <option value="India">
                      India
                    </option>

                    <option value="Bangladesh">
                      Bangladesh
                    </option>
                  </select>
                </div>
              </div>

              {/* Street Address */}
              <div className="form-group">
                <label htmlFor="street">
                  Street address
                </label>

                <input
                  id="street"
                  type="text"
                  required
                />
              </div>

              {/* Town / City */}
              <div className="form-group">
                <label htmlFor="city">
                  Town / City
                </label>

                <input
                  id="city"
                  type="text"
                  required
                />
              </div>

              {/* Province */}
              <div className="form-group">
                <label htmlFor="province">
                  Province
                </label>

                <div className="select-box">
                  <select
                    id="province"
                    defaultValue="Sindh"
                  >
                    <option value="Sindh">
                      Sindh
                    </option>

                    <option value="Punjab">
                      Punjab
                    </option>

                    <option value="Balochistan">
                      Balochistan
                    </option>

                    <option value="Khyber Pakhtunkhwa">
                      Khyber Pakhtunkhwa
                    </option>
                  </select>
                </div>
              </div>

              {/* ZIP */}
              <div className="form-group">
                <label htmlFor="zip">
                  ZIP code
                </label>

                <input
                  id="zip"
                  type="text"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                />
              </div>

              {/* Additional Information */}
              <div className="form-group">
                <textarea
                  className="additional-input"
                  placeholder="Additional information"
                  rows="5"
                ></textarea>
              </div>

              {/* =================================================
                  ORDER SUMMARY
              ================================================= */}

              <div className="order-section">

                {/* Header */}
                <div className="order-head">
                  <h2>Product</h2>
                  <h2>Subtotal</h2>
                </div>

                {/* =================================================
                    PRODUCTS FROM CART
                ================================================= */}

                {cart.length > 0 ? (
                  cart.map((item, index) => {
                    const price = getPrice(item.price);
                    const quantity = getQuantity(item);

                    const itemTotal =
                      price * quantity;

                    return (
                      <div
                        className="product-row"
                        key={item.id || index}
                      >
                        <span className="checkout-product-name">
                          {item.name ||
                            item.title ||
                            item.productName ||
                            "Product"}

                          <small>
                            {" "}
                            × {quantity}
                          </small>
                        </span>

                        <span>
                          {formatPrice(itemTotal)}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty-cart-message">
                    Your cart is empty.
                  </div>
                )}

                {/* Subtotal */}
                <div className="summary-row">
                  <span>Subtotal</span>

                  <span>
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Total */}
                <div className="total-row">
                  <span>Total</span>

                  <strong>
                    {formatPrice(subtotal)}
                  </strong>
                </div>

                <div className="divider"></div>

                {/* =================================================
                    PAYMENT
                ================================================= */}

                <div className="payment-section">

                  {/* Bank Transfer */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={
                        paymentMethod === "bank"
                      }
                      onChange={() =>
                        setPaymentMethod("bank")
                      }
                    />

                    <span>
                      Direct Bank Transfer
                    </span>
                  </label>

                  {paymentMethod === "bank" && (
                    <p className="payment-description">
                      Make your payment directly into
                      our bank account. Please use your
                      Order ID as the payment reference.
                      Your order will not be shipped until
                      the funds have cleared in our account.
                    </p>
                  )}

                  {/* Cash On Delivery */}
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={
                        paymentMethod === "cod"
                      }
                      onChange={() =>
                        setPaymentMethod("cod")
                      }
                    />

                    <span>
                      Cash On Delivery
                    </span>
                  </label>

                  {paymentMethod === "cod" && (
                    <p className="payment-description">
                      Pay for your order when it is
                      delivered to your address.
                    </p>
                  )}
                </div>

                {/* Privacy */}
                <p className="privacy-text">
                  Your personal data will be used to
                  support your experience throughout this
                  website, to manage access to your account,
                  and for other purposes described in our{" "}
                  <strong>privacy policy.</strong>
                </p>

                {/* Place Order */}
                <button
                  type="submit"
                  className="place-order"
                  disabled={cart.length === 0}
                >
                  Place order
                </button>

              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="checkout-features">
        <div className="features-container">

          {/* High Quality */}
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fa-solid fa-trophy"></i>
            </div>

            <div className="feature-content">
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>

          {/* Warranty */}
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fa-solid fa-certificate"></i>
            </div>

            <div className="feature-content">
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>

          {/* Shipping */}
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fa-solid fa-truck"></i>
            </div>

            <div className="feature-content">
              <h3>Free Shipping</h3>
              <p>Order over $150</p>
            </div>
          </div>

          {/* Support */}
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fa-solid fa-headset"></i>
            </div>

            <div className="feature-content">
              <h3>24 / 7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Checkout;