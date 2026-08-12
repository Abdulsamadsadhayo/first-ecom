import Hero from "../components/Hero/Hero";
import heroImage from "../assets/hero.png";
import BrowseRange from "../components/BrowseRange/BrowseRange";
import Products from "../components/Products/Products";
import Inspiration from "../components/Inspiration/Inspiration";
import Gallery from "../components/Inspiration/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Hero
        image={heroImage}
        subtitle="New Arrival"
        title="Discover Our New Collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        buttonText="BUY NOW"
      />

      <BrowseRange />

      <Products />

      <Inspiration />

      <Gallery />
    </>
  );
};

export default Home;