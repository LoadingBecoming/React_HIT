import React from "react";
import "../componentsCSS/banner.css";
import "../componentsCSS/all.css";
import Header from "./Header";
import { Footer } from "./Footer";
export const Banner = () => {
  return (
    <div className="wrapper">
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row fatrans">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 style={{ color: "#fff" }}>
                Better Solutions For Your Business
              </h1>
              <h2 style={{ color: "#fff" }}>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div class="d-flex justify-content-center justify-content-lg-start ">
                {" "}
                <a href="#about" class="btn-get-started scrollto">
                  <button type="button" class="btn btn-primary rounded-pill">
                    Get Started
                  </button>
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  class="glightbox btn-watch-video"
                >
                  <i class="fa fa-play-circle"></i>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      font: "-moz-initial",
                    }}
                  >
                    Watch Video
                  </span>
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate transpospicture"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
                class="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
