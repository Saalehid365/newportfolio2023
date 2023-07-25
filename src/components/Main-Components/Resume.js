import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2022 - Present</span>
              <h2>Frontend developer</h2>
              <p>Developy</p>
              <h2>Freelance Developer</h2>
              <p>Idevelop365 ltd</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2020 - 2022</span>
              <h2>Domestic Appliance Engineer</h2>
              <p>Kingdom appliances</p>
              <h2>Transport Dispatch Supervisor</h2>
              <p>Washcraft Ltd</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2017 - 2020</span>
              <h2>Automotive Parts Advisor</h2>
              <p>Carspares ltd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
