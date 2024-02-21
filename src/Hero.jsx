import React from 'react'
import heroIcon from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Sartorial cardigan selvage, enamel pin listicle gastropub 8-bit gochujang palo santo humblebrag normcore solarpunk neutra gluten-free. Yr glossier banh mi, schlitz fashion axe gluten-free art party selfies before they sold out gochujang polaroid occupy. Lumbersexual helvetica messenger bag, cray big mood vice listicle DIY af williamsburg mixtape artisan blue bottle. Cliche hoodie portland, four loko selvage subway tile prism praxis chicharrones actually humblebrag. Yes plz migas gorpcore praxis kitsch vinyl artisan. Listicle tumeric hammock put a bird on it brunch dreamcatcher church-key wayfarers cronut.
                </p>
            </div>
            <div className="img-container">
                <img src={heroIcon} alt="woman" />
            </div>
        </div>
    </section>
  )
}

export default Hero