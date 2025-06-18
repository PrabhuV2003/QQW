import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaRegStar, FaStar } from "react-icons/fa";

const testimonials = [
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "John Doe",
    role: "Product Manager",
    image: assets.ctabg,
    rating: 4,
  },
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "Jane Smith",
    role: "CTO",
    image: assets.ctabg,
    rating: 5,
  },
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "Alice Brown",
    role: "UX Designer",
    image: assets.ctabg,
    rating: 3,
  },
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "Charlie Stone",
    role: "Developer",
    image: assets.ctabg,
    rating: 4,
  },
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "Charlie Stone",
    role: "Developer",
    image: assets.ctabg,
    rating: 5,
  },
  {
    desc: "Lorem ipsum dolor sit amet. Non nesciunt ducimus aut explicabo impedit hic animi recusandae sit magnam facere",
    name: "Charlie Stone",
    role: "Developer",
    image: assets.ctabg,
    rating: 4,
  },
];

const Testimonial = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} color="#FFD700" size={20} />
      ) : (
        <FaRegStar key={i} color="#FFD700" size={20} />
      )
    );
  };

  return (
    <div className="testimonialContainer">
      <div className="testimonialHeader">
        <div className="customNavButtons">
          <div className="swiper-button-prev customPrev">‹</div>
          <h1 className="testimonialHead">Testimonial</h1>
          <div className="swiper-button-next customNext">›</div>
        </div>
      </div>

      <img className="cube cube1" src={assets.cube} alt="" />
      <img className="cube cube2" src={assets.cube} alt="" />
      <img className="cube cube3" src={assets.cube} alt="" />
      <img className="cube cube4" src={assets.cube} alt="" />

      <div className="testimonialSlider">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".customNext",
            prevEl: ".customPrev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cards">
                <img className="cardsOverlay" src={assets.cta_overlay} alt="" />
                <div className="cardContent">
                  <p className="cardDesc">{item.desc}</p>
                  <div className="starRating">{renderStars(item.rating)}</div>
                  <div className="cardProfile">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="name">{item.name}</p>
                      <p className="desc">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
