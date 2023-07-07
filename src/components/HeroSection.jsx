import React from 'react'
import img1 from '../assets/images/image-hero-desktop.png'
import img6 from '../assets/images/image-hero-mobile.png'
import img2 from '../assets/images/client-audiophile.svg'
import img3 from '../assets/images/client-databiz.svg'
import img4 from '../assets/images/client-maker.svg'
import img5 from '../assets/images/client-meet.svg'

const HeroSection = () => {
  return (
    <section >

      <div className="content-side">

        <div className="pic-side2">
        <img src={img6} alt="hero-pic" />
      </div>

      
        <h1>Make</h1>
        <h1>Remote work</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt in blanditiis cupiditate expedita libero tempore iusto nisi nostrum accusantium error.
        </p>

        <button className='btn-1'>Learn more</button>

        <div className="brands">
        <img src={img2} alt="brand-pic" />
        <img src={img3} alt="brand-pic" />
        <img src={img4} alt="brand-pic" />
        <img src={img5} alt="brand-pic" />
        </div>
      </div>

      <div className="pic-side">
        <img src={img1} alt="hero-pic" />
      </div>

    </section>
  )
}

export default HeroSection