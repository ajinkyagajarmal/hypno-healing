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
// src/Components/Gallery.jsx (using Swiper.js)

import React from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper modules we need (Autoplay, Pagination for dots)
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './Gallery.module.css';

// 3. Import Swiper core and module styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import your images
import gallery1 from '../Assets/gallery/gallery-1.webp';
import gallery2 from '../Assets/gallery/gallery-2.webp';
import gallery3 from '../Assets/gallery/gallery-3.webp';
import gallery4 from '../Assets/gallery/gallery-4.webp';
import gallery5 from '../Assets/gallery/gallery-5.webp';
import gallery6 from '../Assets/gallery/gallery-6.webp';
import gallery7 from '../Assets/gallery/gallery-7.webp';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallerySection} data-aos="fade-right">
      <div className={styles.container}>
        <h2 className={styles.title}>Our Gallery</h2>
        <p className={styles.subtitle}>A Glimpse of Our Event Gallery</p>
        
        <Swiper
          // 4. Configure Swiper using props
          modules={[Autoplay, Pagination]}
          spaceBetween={30} // The gap between slides in pixels
          slidesPerView={1} // Default slides per view (for mobile-first)
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // Responsive breakpoints for larger screens
          breakpoints={{
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={styles.swiperContainer}
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={imgSrc}
                alt={`Event gallery image ${index + 1}`}
                className={styles.slideImage}
                loading="lazy" // Native browser lazy loading
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;