import "./Hero.css";

const Hero = ({
  image,
  logo,
  subtitle,
  title,
  description,
  buttonText,
  buttonLink = "#",
  pageType = "main",
  breadcrumb,
}) => {
  return (
    <section
      className={pageType === "inner" ? "inner-hero" : "hero"}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {pageType === "inner" ? (
          <>
            {/* Logo Image */}
            {logo && (
              <img
                src={logo}
                alt="Logo"
                className="inner-hero-logo"
              />
            )}

            <h1>{title}</h1>

            <div className="inner-breadcrumb">
              <span>{subtitle}</span>

              <span className="breadcrumb-arrow">
                ›
              </span>

              <span>{breadcrumb}</span>
            </div>
          </>
        ) : (
          <>
            {subtitle && (
              <div className="hero-subtitle">
                {subtitle}
              </div>
            )}

            <h1>{title}</h1>

            {description && (
              <p className="hero-description">
                {description}
              </p>
            )}

            {buttonText && (
              <a href={buttonLink}>
                <button>{buttonText}</button>
              </a>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default Hero;