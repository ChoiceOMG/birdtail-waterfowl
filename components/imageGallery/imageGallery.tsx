import Link from "next/link";
import React from "react";

const images = [
  {
    url: "image1.jpg",
    title: "Image 1 Title",
    link: "/link1",
  },
  {
    url: "image2.jpg",
    title: "Image 2 Title",
    link: "/link2",
  },
  // Add more images here...
];

const imageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <Link href={image.link}>
            <a>
              <img src={image.url} alt={image.title} />
              <div className="image-title">{image.title}</div>
            </a>
          </Link>
        </div>
      ))}

      <style jsx>{`
        .image-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .image-wrapper {
          position: relative;
          cursor: pointer;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          transition: filter 0.3s;
        }

        .image-wrapper img:hover {
          filter: blur(5px);
        }

        .image-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 8px 16px;
          border-radius: 5px;
          display: none;
        }

        .image-wrapper:hover .image-title {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default imageGallery;
