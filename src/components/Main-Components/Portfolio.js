import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import honest from "./honest.png";
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a href="../assets/images/naqi.png" data-lightbox="example-1">
                    <img src={honest} alt="Portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="/">React</a>
                    </li>
                    <li>
                      <a href="/">Stripe</a>
                    </li>
                    <li>
                      <a href="/">Firebase</a>
                    </li>
                    <li>
                      <a href="https://github.com/Saalehid365/naqinaturals">
                        Source Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://papaya-madeleine-982262.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a
                    href="https://papaya-madeleine-982262.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Honestly Healthy - Ecommerce website
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/khanooz.png"
                    data-lightbox="example-1"
                  >
                    <img src="../assets/images/khanooz.png" alt="Portfolio" />
                  </a>

                  <img src="../assets/images/khanooz.png" alt="Portfolio" />

                  <ul className="portfolio-categories">
                    <li>
                      <a href="/">React</a>
                    </li>
                    <li>
                      <a href="/">Stripe</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="/">Al-khanooz - Ecommerce website</a>
                </h2>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/kingdom.png"
                    data-lightbox="example-1"
                  >
                    <img src="../assets/images/kingdom.png" alt="Portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="/">React</a>
                    </li>
                    <li>
                      <a href="/">Firebase</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.taskly-dashboard.com">
                    Kingdom Appliance - CRM
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/masjid.png"
                    data-lightbox="example-1"
                  >
                    <img src="../assets/images/masjid.png" alt="portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="/">React</a>
                    </li>
                    <li>
                      <a href="/">Firebase</a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Saalehid365/-MasjidBirrAlWalidayn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sorce code
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.almusa3ada.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.almusa3ada.com" target="blank">
                    Masjid Al-musa3ada - Fund raising website
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
