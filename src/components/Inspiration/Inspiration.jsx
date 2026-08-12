import React, { useEffect, useState } from "react";
import "./Inspiration.css";

import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jfif";

const rooms = [
  {
    id: 1,
    image: room1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
  },
  {
    id: 2,
    image: room2,
    number: "02",
    category: "Living Room",
    title: "Modern Space",
  },
  {
    id: 3,
    image: room3,
    number: "03",
    category: "Dining Room",
    title: "Luxury Dining",
  },
];

const Inspiration = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rooms.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="inspiration">

      <div className="left-content">
        <h2>
          50+ Beautiful rooms
          <br />
          inspiration
        </h2>

        <p>
          Our designer already made a lot of beautiful room
          prototypes that inspire you.
        </p>

        <button className="explore-btn">
          Explore More
        </button>
      </div>

      <div className="slider-wrapper">

        <div
          className="slider"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {rooms.map((room) => (
            <div className="slide" key={room.id}>

              <img src={room.image} alt={room.title} />

              <div className="slide-info">

                <span>
                  {room.number} —— {room.category}
                </span>

                <h3>{room.title}</h3>

                <button className="card-btn">
                  →
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Inspiration;