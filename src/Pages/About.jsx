import Hero from "../components/Hero/Hero";
import "./About.css";
import NAvbar from "../components/Nav/Navbar";
import aboutImg from "../assets/Blog.png";
import logo from "../assets/logo.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";


const About = () => {

  /* =========================
     BLOG POSTS DATA
  ========================= */

  const posts = [
    {
      id: 1,
      image: blog1,
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      category: "Wood",
    },

    {
      id: 2,
      image: blog2,
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      category: "Handmade",
    },

    {
      id: 3,
      image: blog3,
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      category: "Wood",
    },

    {
      id: 4,
      image: blog4,
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      category: "Interior",
    },

    {
      id: 5,
      image: blog5,
      title: "Colorful office redesign",
      date: "03 Aug 2022",
      category: "Design",
    },
  ];


  return (

    <>

  

      {/* =========================
          HERO
      ========================= */}

      <Hero
        image={aboutImg}
        logo={logo}
        subtitle="Home"
        title="About Us"
        breadcrumb="About Us"
        pageType="inner"
      />


      {/* =========================
          BLOG SECTION
      ========================= */}

      <section className="blog-page">

        <div className="blog-container">


          {/* =========================
              LEFT SIDE
          ========================= */}

          <main className="blog-posts">

            {posts.slice(0, 3).map((post) => (

              <article
                className="blog-post"
                key={post.id}
              >

                {/* Blog Image */}

                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-post-image"
                />


                {/* Meta Information */}

                <div className="post-meta">

                  <span>
                    👤 Admin
                  </span>

                  <span>
                    📅 {post.date}
                  </span>

                  <span>
                    🏷 {post.category}
                  </span>

                </div>


                {/* Blog Title */}

                <h2>
                  {post.title}
                </h2>


                {/* Description */}

                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer
                  malesuada nunc. In nulla posuere
                  sollicitudin aliquam ultrices.
                </p>


                {/* Read More */}

                <a
                  href="#"
                  className="read-more"
                >
                  Read more
                </a>

              </article>

            ))}


            {/* =========================
                PAGINATION
            ========================= */}

            <div className="pagination">

              <button className="active">
                1
              </button>

              <button>
                2
              </button>

              <button>
                3
              </button>

              <button className="next">
                Next
              </button>

            </div>

          </main>


          {/* =========================
              RIGHT SIDEBAR
          ========================= */}

          <aside className="blog-sidebar">


            {/* SEARCH */}

            <div className="blog-search">

              <input
                type="text"
                aria-label="Search"
              />

              <button type="button">
                🔍
              </button>

            </div>


            {/* =========================
                CATEGORIES
            ========================= */}

            <div className="sidebar-section">

              <h3>
                Categories
              </h3>

              <ul className="categories">

                <li>
                  <span>Crafts</span>
                  <span>2</span>
                </li>

                <li>
                  <span>Design</span>
                  <span>8</span>
                </li>

                <li>
                  <span>Handmade</span>
                  <span>7</span>
                </li>

                <li>
                  <span>Interior</span>
                  <span>1</span>
                </li>

                <li>
                  <span>Wood</span>
                  <span>6</span>
                </li>

              </ul>

            </div>


            {/* =========================
                RECENT POSTS
            ========================= */}

            <div className="sidebar-section recent-section">

              <h3>
                Recent Posts
              </h3>


              <div className="recent-posts">

                {posts.map((post) => (

                  <div
                    className="recent-post"
                    key={post.id}
                  >

                    <img
                      src={post.image}
                      alt={post.title}
                    />


                    <div className="recent-content">

                      <h4>
                        {post.title}
                      </h4>

                      <span>
                        {post.date}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* =================================================
          FEATURES SECTION
      ================================================= */}

      <section className="features">

        <div className="features-container">


          {/* FEATURE 1 */}

          <div className="feature-item">

            <div className="feature-icon">
              🏆
            </div>

            <div className="feature-content">

              <h3>
                High Quality
              </h3>

              <p>
                crafted from top materials
              </p>

            </div>

          </div>


          {/* FEATURE 2 */}

          <div className="feature-item">

            <div className="feature-icon">
              ✓
            </div>

            <div className="feature-content">

              <h3>
                Warranty Protection
              </h3>

              <p>
                Over 2 years
              </p>

            </div>

          </div>


          {/* FEATURE 3 */}

          <div className="feature-item">

            <div className="feature-icon">
              ▣
            </div>

            <div className="feature-content">

              <h3>
                Free Shipping
              </h3>

              <p>
                Order over 150 $
              </p>

            </div>

          </div>


          {/* FEATURE 4 */}

          <div className="feature-item">

            <div className="feature-icon">
              ◉
            </div>

            <div className="feature-content">

              <h3>
                24 / 7 Support
              </h3>

              <p>
                Dedicated support
              </p>

            </div>

          </div>


        </div>

      </section>

    </>

  );

};


export default About;