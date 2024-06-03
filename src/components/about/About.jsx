/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Studies</h5>
              <small>Software Engineering Completed</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>People</h5>
              <small>10+ Teamwork Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed University Projects</small>
            </article>
          </div>
          <p>
            What I anticipate from an excellent workplace is the chance to apply
            all of my personal and intellectual skills, align with corporate
            objectives, refine processes for managing IT requests, and execute
            projects more efficiently. I'm committed to giving my best,
            continuously learning, and adhering to instructions diligently.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
