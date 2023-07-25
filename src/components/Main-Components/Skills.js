import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://assets.stickpng.com/thumbs/5847f5c3cef1014c0b5e489d.png"
                    alt="HTML"
                    width="60"
                  />
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">HTML</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
                    alt="CSS"
                    width="60"
                  />
                  <h1 className="percent">85%</h1>
                </div>
                <p className="name">CSS</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
                    width="60"
                    alt="javascript vector logo yellow png transparent javascript vector"
                  />
                  <h1 className="percent">80%</h1>
                </div>
                <p className="name">Javascript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React" />
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
