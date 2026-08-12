import React from "react";
import "./BrowseRange.css";

import dining from "../../assets/dining.png";
import living from "../../assets/living.png";
import bedroom from "../../assets/bedroom.png";

const BrowseRange = () => {
  const data = [
    {
      id: 1,
      title: "Dining",
      image: dining,
    },
    {
      id: 2,
      title: "Living",
      image: living,
    },
    {
      id: 3,
      title: "Bedroom",
      image: bedroom,
    },
  ];

  return (
    <section className="range">
      <div className="container">

        <div className="heading">
          <h2>Browse The Range</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="range-grid">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrowseRange;