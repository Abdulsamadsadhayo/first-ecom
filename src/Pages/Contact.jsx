import "./Contact.css";
import Hero from "../components/Hero/Hero";
import contactImg from "../assets/Blog.png";
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactImg})`,
        }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <img
            src={logo}
            alt="Logo"
            className="contact-hero-logo"
          />

          <h1>Contact</h1>

          <div className="contact-breadcrumb">
            <span>Home</span>

            <span className="breadcrumb-arrow">
              <i className="fa-solid fa-chevron-right"></i>
            </span>

            <span>Contact</span>
          </div>

        </div>
      </section>


      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section className="contact-section">

        {/* Heading */}

        <div className="contact-heading">

          <h2>Get In Touch With Us</h2>

          <p>
            For More Information About Our Product &amp; Services.
            Please Feel Free To Drop Us An Email. Our Staff Always
            Be There To Help You Out. Do Not Hesitate!
          </p>

        </div>


        <div className="contact-container">

          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}

          <div className="contact-info">

            {/* Address */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3>Address</h3>

                <p>
                  236 5th SE Avenue, New
                  <br />
                  York NY10000, United
                  <br />
                  States
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <h3>Phone</h3>

                <p>
                  Mobile: (+84) 546-6789
                  <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>

            </div>


            {/* Working Time */}

            <div className="contact-info-item">

              <div className="contact-icon">
                <i className="fa-regular fa-clock"></i>
              </div>

              <div>
                <h3>Working Time</h3>

                <p>
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>

            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <div className="contact-form">

            <form>

              {/* Name */}

              <div className="form-group">

                <label htmlFor="name">
                  Your name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                />

              </div>


              {/* Email */}

              <div className="form-group">

                <label htmlFor="email">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                />

              </div>


              {/* Subject */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                />

              </div>


              {/* Message */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hi! I'd like to ask about"
                ></textarea>

              </div>


              {/* Submit */}

              <button type="submit">
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =========================================
          BENEFITS SECTION
      ========================================= */}

      <section className="contact-benefits">

        <div className="benefits-container">

          {/* High Quality */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <i className="fa-solid fa-trophy"></i>
            </div>

            <div>
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>

          </div>


          {/* Warranty */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <i className="fa-solid fa-award"></i>
            </div>

            <div>
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>

          </div>


          {/* Free Shipping */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>

            <div>
              <h3>Free Shipping</h3>
              <p>Order over 150 $</p>
            </div>

          </div>


          {/* Support */}

          <div className="benefit-item">

            <div className="benefit-icon">
              <i className="fa-solid fa-headset"></i>
            </div>

            <div>
              <h3>24 / 7 Support</h3>
              <p>Dedicated support</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;