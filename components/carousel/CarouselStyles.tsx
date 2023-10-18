import styled from "styled-components";

// Carousel Container
export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 300px;
`;

// Carousel Slide
export const CarouselSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

// Carousel Image
export const CarouselImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

// Section Details
export const SectionDetails = styled.div`
  text-align: center;
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

// Section Description
export const SectionDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;
