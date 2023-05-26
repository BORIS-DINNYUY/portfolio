import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>SKILLS I HAVE DEVELOPED</h5>
      <h2>MY EXPERIENCE</h2>
      <div className="container__experience__container">
       <h2>
        <marquee behavior="" direction="top"> I have over 3 years experience in hardware maintenance.
         I was able to archieve all of this back in Yaounde where our workshop was based.
         Apart from the maintenance(computer repairs) i got some marketting skills since we
         also dealt with buying and selling of computers and other related materials.  </marquee>
       </h2>
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
