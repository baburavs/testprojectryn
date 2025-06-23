import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./TestimonialSection.module.scss";

const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    quote:
      "Synergys resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    avatar: "src/assets/man.png",
    quoteIcon: "src/assets/quote.svg",
  },
  {
    name: "Floyd Miles",
    company: "eBay",
    quote:
      "Synergys resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    avatar: "src/assets/man.png",
    quoteIcon: "src/assets/quote.svg",
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    arrows: false, // disable default arrows
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.heading}>
        <img src="src/assets/Star.svg" alt="icon" />
        What they say
      </h2>

      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((review, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.content}>
              <div className={styles.left}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={styles.avatar}
                />
                <div>
                  <h5>{review.name}</h5>
                  <p>{review.company}</p>
                </div>
              </div>
              <div className={styles.right}>
                <img
                  src={review.quoteIcon}
                  alt="quote"
                  className={styles.quoteIcon}
                />
                <p className={styles.quote}>{review.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows BELOW the slider */}
      {/* <div className={styles.navButtons}>
        <button
          className={styles.sliderBtn}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img
            src="src/assets/arrow.svg"
            alt="Previous"
            className={styles.prevIcon}
          />
        </button>
        <button
          className={styles.sliderBtn}
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src="src/assets/arrow.svg" alt="Next" />
        </button>
      </div> */}
    </div>
  );
};

export default TestimonialSection;
