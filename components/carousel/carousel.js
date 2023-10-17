import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
const carouselItems = [
  {
    image: "/item1.jpg",
    title: "About Us",
    description:
      "Guiding for waterfowl in one of the most concentrated flyways in Canada has provided me with a great waterfowl education. Working in a professional environment has taught a great deal about running a successful waterfowl operation.",
  },
  {
    image: "/item2.jpg",
    title: "Lodging and Amenities",
    description:
      "6 Private cabins that accommodate 2-4 hunters Full Bath with Plumbing | Bunk Beds | Wifi | Bar Fridge | Electric Heat | Cedar Interior | Cozy Northern Experience",
  },
  {
    image: "/item2.jpg",
    title: "The Manitoba Hunting Experience",
    description:
      "Description for Item 2Our goal is to deliver you the ultimate hunting or fishing experience with first class lodging at a price you can afford. Book your waterfowl hunt of a lifetime now through Birdtail Waterfowl, the best hunting outfitter in Canada!",
  },
  {
    image: "/item2.jpg",
    title: "Duck Hunting",
    description:
      "Few things in life compare to the thrill of a heart pounding duck hunt. Birdtail Waterfowl knows how to show our guests the fast paced almost frantic waves of ducks buzzing decoy spreads.",
  },
];

const carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default carousel;
export { carouselItems };
