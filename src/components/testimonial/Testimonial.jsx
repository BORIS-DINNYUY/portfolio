import React from "react";
import "./testimonials.css";
import IMG from "../../assets/mine.jpg";
import AV1 from "../../assets/tech1.jfif";
import AV2 from "../../assets/tech2.jfif";
import AV3 from "../../assets/tech3.jfif";
import AV4 from "../../assets/tech4.jfif";
import AV5 from "../../assets/tech5.jfif";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "The software engineering program at my university was challenging but rewarding. I learned a lot about the different aspects of software development, from design and coding to testing and deployment. The professors were all experts in their field and were always willing to help students. I also made some great friends in the program. Overall, I'm very glad I studied software engineering and I'm confident that it will help me in my career.",
      avatar: IMG,
      Cname: "Testimonial 1",
    },
    {
      id: 2,
      testimonial:
      "I was a bit nervous about starting the software engineering program at my university, but I quickly realized that I was in the right place. The program was well-designed and the professors were excellent. I learned a lot about software development and I also had the opportunity to work on some really cool projects. I'm now confident that I have the skills and knowledge necessary to succeed in the software engineering industry.",
      avatar: AV1,
      Cname: "Testimonial 2",
    },
    {
      id: 3,
      testimonial:
      "I chose to study software engineering because I was interested in the intersection of technology and business. The software engineering program at my university gave me the skills I needed to succeed in both areas. I learned about the different aspects of software development, as well as the business side of things like project management and marketing. I'm now working as a software engineer at a tech startup and I'm loving it.",
      avatar: AV2,
      Cname: "Testimonial 3",
    },
    {
      id: 4,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV3,
      Cname: "Testimonial 4",
    },
    {
      id: 5,
      testimonial:
      "I was a bit hesitant to pursue a career in software engineering, as I didn't have any prior experience in the field. However, after completing the software engineering program at my university, I feel confident that I have the skills and knowledge necessary to succeed in this field. The program was well-rounded and taught me a variety of topics, including software design, development, and testing. I also had the opportunity to work on several projects, which gave me hands-on experience in applying the skills I learned in the classroom. I would highly recommend the software engineering program at my university to anyone who is interested in a career in this field.",
      avatar: AV5,
      Cname: "Testimonial 5",
    },
    {
      id: 6,
      testimonial:
      "I chose to study software engineering because I was passionate about technology and wanted to learn how to create software that would make a difference in the world. The software engineering program at my university gave me the skills I needed to pursue my passion. I learned about the different aspects of software development, from design and coding to testing and deployment. I also had the opportunity to work on projects that were relevant to my interests, such as developing a mobile app that helps people find food banks in their area. I am now working as a software engineer at a non-profit organization and I am excited to use my skills to make a positive impact on the world.",
      avatar: AV4,
      Cname: "Testimonial 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
