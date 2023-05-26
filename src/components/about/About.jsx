import React from 'react'
import './about.css'
import mine from '../../assets/mypic.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>GET TO KNOW ME</h5>
        <h2>ABOUT ME</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={mine} alt="Brown " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>1 Completed</small>
              </article>
            </div>
            <p>
              I am a young software engineer trained at the Faculty
              of Engineering of the University of Buea (FET). I enrolled for B.eng in
              2021.  I have always been passionate about technology and creating software
              that can make a difference in people's lives. I pursued my education in 
              software engineering to learn the skills necessary to turn my passion into
              a career. I enjoy working on challenging projects that allow me to use my
              creativity and problem-solving abilities to their fullest potential. 
              Outside of work, I enjoy staying up to date with the latest trends and
              advancements in technology, as well as exploring new programming
              languages and tools.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
