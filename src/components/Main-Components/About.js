import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Every great development begins with
              <br />
              an even <span>better story</span>
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            Since beginning my journey 2 years ago, I have become really
            pasionate about development. I enjoy reading, problem solving,
            spending time with my family and teaching them what i have learnt.
            I've done work for family, friends and buisness, I'm quiet
            confident, naturally curious, and perpetually working on improving
            my developing skills
          </p>
        </div>
      </div>
    </section>
  );
}
