// import React from 'react';
// import Slider from 'react-slick';
// import styles from './Gallery.module.css';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// // This function generates the paths to the images in your public/gallery folder
// const images = Array.from({ length: 7 }, (_, i) => `/gallery/gallery-${i + 1}.webp`);

// const Gallery = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerPadding: '40px',
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600, // Mobile
//         settings: {
//           slidesToShow: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="gallery" className={styles.gallerySection} data-aos="fade-up">
//       <div className="container">
//         <h2 className={styles.title}>Our Gallery</h2>
//         <p className={styles.subtitle}>A Glimpse of Our Event Gallery</p>
//         <Slider {...settings}>
//   {images.map((imgSrc, index) => (
//     <div key={index}>
//       <div className={styles.slide}>
//         <img
//           src={imgSrc}
//           alt={`Plot view ${index + 1}`}
//           className={styles.slideImage}
//         />
//       </div>
//     </div>
//   ))}
// </Slider>
//       </div>
//     </section>
//   );
// };

// export default Gallery;







// src/Components/Gallery.jsx

// src/Components/Gallery.jsx (Final, Optimized Version)

import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Gallery.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- IMPORT IMAGES DIRECTLY (BEST PRACTICE) ---
// This allows React's build process to optimize them and catch errors.
import gallery1 from '../Assets/gallery/gallery-1.webp';
import gallery2 from '../Assets/gallery/gallery-2.webp';
import gallery3 from '../Assets/gallery/gallery-3.webp';
import gallery4 from '../Assets/gallery/gallery-4.webp';
import gallery5 from '../Assets/gallery/gallery-5.webp';
import gallery6 from '../Assets/gallery/gallery-6.webp';
import gallery7 from '../Assets/gallery/gallery-7.webp';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];


// --- Custom Arrow Components (Unchanged) ---
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.slickArrow} ${styles.slickNext}`} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styles.slickArrow} ${styles.slickPrev}`} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};


const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // --- PERFORMANCE UPGRADE ---
    // 'ondemand' will only load images as they are about to slide into view.
    lazyLoad: 'ondemand', 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, dots: false, arrows: false },
      },
    ],
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Gallery</h2>
        <p className={styles.subtitle}>A Glimpse of Our Event Gallery</p>
        
        {/* The sliderContainer no longer needs a min-height */}
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {images.map((imgSrc, index) => (
              <div key={index} className={styles.slideWrapper}>
                {/* The slide element will now have aspect-ratio set in CSS */}
                <div className={styles.slide}>
                  <img
                    src={imgSrc}
                    alt={`Event gallery image ${index + 1}`}
                    className={styles.slideImage}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;