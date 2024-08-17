import React from 'react'
import heroIcon from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Frontend developer</h1>
          <p>
            Hi, I'm Ilya Stoyanov.
            <span>Frontend Developer from Sweden</span>
          </p>
          <p>
            I'm Frontend Developer and mentoring for beginners web development.
          </p>
          <p>
            My goal is to make the world a better place, to share my knowledge.
          </p>
          <p>I love my job and all that it encompasses.</p>
          <a
            className="hero-link"
            href="https://www.youtube.com/@ilyastoyanov-html-css-js-react"
            target="_blank"
            rel="noreferrer"
            title="Youtube channel Ilya Stoyanov"
          >
            my youtube channel
          </a>
        </div>
        <div className="img-container">
          <img src={heroIcon} alt="woman" />
        </div>
      </div>
    </section>
  );
}

export default Hero