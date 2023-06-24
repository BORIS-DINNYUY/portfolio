import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>SKILLS I HAVE DEVELOPED</h5>
      <h2>MY EXPERIENCE</h2>
      <div className="container__experience__container">
      <h1>Software Engineering Skills</h1>

        <ul>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures and Algorithms</li>
          <li>Problem-Solving and Critical Thinking</li>
          <li>Soft Skills</li>
        </ul>
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
