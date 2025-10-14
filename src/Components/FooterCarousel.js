// FooterCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './FooterCarousel.css'; // Import your custom styles

const FooterCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      img: "https://image.freepik.com/free-photo/spaghetti-with-carbonara-sauce_1216-324.jpg",
      title: "Chicken for two Roasted",
      price: "$21",
      description: "There was a time when Chinese food in this country meant (Americanized) Cantonese food."
    },
    {
      img: "https://image.freepik.com/free-photo/dishes-with-healthy-waffles_1220-367.jpg",
      title: "Chicken for two Roasted",
      price: "$21",
      description: "There was a time when Chinese food in this country meant (Americanized) Cantonese food."
    },
    {
      img: "https://image.freepik.com/free-photo/top-view-of-tasty-noodles-with-prawns_1203-1769.jpg",
      title: "Chicken for two Roasted",
      price: "$21",
      description: "There was a time when Chinese food in this country meant (Americanized) Cantonese food."
    },
    {
      img: "https://image.freepik.com/free-photo/burguer-with-garnish_1088-72.jpg",
      title: "Chicken for two Roasted",
      price: "$21",
      description: "There was a time when Chinese food in this country meant (Americanized) Cantonese food."
    },
    {
      img: "https://image.freepik.com/free-photo/delicious-pastry-with-chicken_1203-1616.jpg",
      title: "Chicken for two Roasted",
      price: "$21",
      description: "There was a time when Chinese food in this country meant (Americanized) Cantonese food."
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Slider {...settings} id="customers-testimonials">
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="shadow-effect">
                    <img className="img-responsive" src={testimonial.img} alt={testimonial.title} />
                    <div className="item-details">
                      <h5>{testimonial.title} <span>{testimonial.price}</span></h5>
                      <p>{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCarousel;
