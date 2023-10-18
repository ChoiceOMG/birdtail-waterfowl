import React from "react";
import {
  CarouselContainer,
  CarouselSlide,
  CarouselImage,
  SectionDetails,
  SectionTitle,
  SectionDescription,
} from "./CarouselStyles";

const Carousel = () => {
  const sections = [
    {
      image: "/image1.jpg",
      title: "Section 1 Title",
      description: "Section 1 Description",
    },
    {
      image: "/image2.jpg",
      title: "Section 2 Title",
      description: "Section 2 Description",
    },
    {
      image: "/image3.jpg",
      title: "Section 3 Title",
      description: "Section 3 Description",
    },
    {
      image: "/image4.jpg",
      title: "Section 4 Title",
      description: "Section 4 Description",
    },
  ];

  return (
    <CarouselContainer>
      {sections.map((section, index) => (
        <CarouselSlide key={index}>
          <CarouselImage src={section.image} alt={section.title} />
          <SectionDetails>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionDescription>{section.description}</SectionDescription>
          </SectionDetails>
        </CarouselSlide>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
