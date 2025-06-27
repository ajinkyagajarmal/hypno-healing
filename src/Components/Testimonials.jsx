import React from 'react';
import styles from './Testimonials.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import a quote icon
import { FaQuoteRight } from 'react-icons/fa';

// Import your testimonial images
// import avatar1 from '../assets/avatar1.jpg'; 
// import avatar2 from '../assets/avatar2.jpg';
// import avatar3 from '../assets/avatar3.jpg';
// import avatar4 from '../assets/avatar4.jpg';
// import avatar5 from '../assets/avatar5.jpg';
// import avatar6 from '../assets/avatar6.jpg';


// --- Sample Testimonial Data (You can replace this with your actual data) ---
const testimonialsData = [
  {
    id: 1,
    text: "Since I have been in touch with Shweta di..she has become the guiding light in my life...I never take any major decisions without consulting her, if I'm stuck with some problem I know where will I find the solution..so trust me she is the best...my best wishes with you always. Keep guiding us.",
    name: "Divya Kukreti",
    title: "Corporate Professional",
    // image: avatar1,
  },
  {
    id: 2,
    text: "I always love the sessions with Ms.Shweta , beside being a amazing healer and reader, she is also a lovely person. After every session I have had with her so far i have always felt energised and empowered. Thank you so much Shweta!! 💕",
    name: "Subzar Moza",
    title: "Homemaker",
    // image: avatar2,
  },
  {
    id: 3,
    text: "My experience with her have never been unsatisfactory. We have been consulting her since we were neighbours many years back and continue to trust her for readings and advice. In my case whatever she says happens and comes true. Some she even predicted dates and they were 100% accurate.",
    name: "Priyanka Dujari",
    title: "Entrepreneur",
    // image: avatar3,
  },
  {
    id: 4,
    text: "She is not just a guide but a true friend. Her readings are precise and her remedies are simple yet powerful. I feel a sense of calm and clarity after every session. Highly recommended for anyone seeking spiritual guidance.",
    name: "Amit Singh",
    title: "Software Engineer",
    // image: avatar4,
  },
  {
    id: 5,
    text: "Shweta has a remarkable gift. Her insights have helped me navigate some of the most challenging periods of my life with confidence and grace. The energy she exudes is incredibly positive and uplifting.",
    name: "Rina Sharma",
    title: "Yoga Instructor",
    // image: avatar5,
  },
  {
    id: 6,
    text: "The accuracy of her astrological predictions is uncanny. She combines deep knowledge with genuine empathy, making each consultation both informative and healing. I am grateful for her guidance on my journey.",
    name: "Vikram Mehta",
    title: "Marketing Head",
    // image: avatar6,
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Testimonials</h2>
        <p className={styles.subtitle}>Words of praise by my valuable clients.</p>

        <div className={styles.sliderContainer}>
          <Swiper
            // --- Swiper.js Configuration ---
            modules={[Navigation, Autoplay]}
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Default number of slides to show
            navigation={true} // Enables arrow navigation
            loop={true} // Enables continuous looping
            autoplay={{
              delay: 5000, // 5 seconds interval
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            }}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="mySwiper" // A class for custom arrow styling
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                {/* We alternate card colors based on the index */}
                <div className={`${styles.testimonialCard} ${index % 2 === 0 ? styles.lightCard : styles.accentCard}`}>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.authorSection}>
                    {/* <img src={testimonial.image} alt={testimonial.name} className={styles.authorImage} /> */}
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.name}</span>
                      <span className={styles.authorTitle}>{testimonial.title}</span>
                    </div>
                  </div>
                  <FaQuoteRight className={styles.quoteIcon} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;