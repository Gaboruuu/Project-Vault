import React from "react";
import Header from "../../commons/components/Header";
import Footer from "../../commons/components/Footer";
import "./About.css";

import SimpleFooter from "../../commons/components/SimpleFooter";

import github from "../../assets/logos/github.png";
import insta from "../../assets/logos/insta.png";
import x from "../../assets/logos/X.png";
import facebook from "../../assets/logos/facebook.png";
import me from "../../assets/images/about_page/about-me.jpg";

function About() {
  const handleButtonClick = (destination) => {
    window.location.href = destination;
  };
  return (
    <div>
      <Header />
      <div className="abtP-page-container">
        <div className="abtP-main-container">
          <div className="abtP-left-container">
            <div className="abtP-left-content">
              <div>
                <div className="shadow">
                  <div className="abtP-image-container">
                    <img src={me} alt="about image" />
                  </div>
                </div>

                <h2>Gabriel Gabor "Gaboruu"</h2>
                <h3>Developer</h3>
              </div>

              <ul className="abtP-socials-container">
                <li
                  onClick={() =>
                    handleButtonClick("https://www.instagram.com/gaboruul/")
                  }
                >
                  <img src={insta} />
                </li>
                <li
                  onClick={() =>
                    handleButtonClick("https://twitter.com/gaboruuu")
                  }
                >
                  <img src={x} />
                </li>
                <li
                  onClick={() =>
                    handleButtonClick("https://www.facebook.com/iamgoobi/")
                  }
                >
                  <img src={facebook} />
                </li>
              </ul>
            </div>
          </div>

          <div className="abtP-right-container">
            <h1>
              Hello<span>!</span>
            </h1>
            <h2>Here's who I am & what I do</h2>
            <div className="abtP-buttons-container">
              <button type="button" className="btn btn-pink">
                resume / CV
              </button>
              <button
                type="button"
                className="btn btn-pink"
                onClick={() => handleButtonClick("https://github.com/Gaboruuu")}
              >
                Git hub
              </button>
            </div>

            <div className="abtP-text-container">
              <p>
                My name is Gabor Gabriel Ionut, and at 19 years old, I find
                myself reflecting on a journey that began with a fascination for
                computers at a tender age. It all started with games – their
                immersive worlds and endless possibilities captured my
                imagination. Little did I know then that this passion would
                shape my future.
              </p>
              <p>
                As I delved deeper into the world of gaming, I began to develop
                a keen interest in computer technology and its applications
                beyond just entertainment. Despite the uncertainty of what lay
                ahead, I made a bold decision to pursue a path aligned with my
                passion.
              </p>
              <p>
                Now, as I look back, I realize that my journey has been one of
                self-discovery and growth. What began as a simple love for games
                has evolved into a drive to understand and contribute to the
                ever-evolving landscape of technology.
              </p>
              <p>
                While my journey may have started with games, it has led me to
                explore a multitude of possibilities within the realm of
                computer science. I am excited to see where this path takes me
                and the opportunities it presents for me to make a meaningful
                impact."
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default About;
