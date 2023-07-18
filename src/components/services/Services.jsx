import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/*UI/UX Design*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research and Analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Interface Design</p>
            </li>
          </ul>
        </article>
        {/*Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive Website Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Integration and Web Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance and Updates</p>
            </li>
          </ul>
        </article>
        {/*Content Creation*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Content Writing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog and Article Creation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Marketing Strategies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Content Creation (Images, Infographics, etc.)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Editing and Proofreading</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Management and Posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation for Advertising Campaigns</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Guide and Manual Creation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
