import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import img4 from '../assets/img4.jpg'
import img2 from '../assets/img2.jpg'

const Services = () => {
  return (
    <div >
      <Carousel
      infiniteLoop={true} autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}
      >
        <div>
          <img src={img4} alt ="Item1"></img>
          <p className='legend'> Full stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2"></img>
          <p className='legend'> Peer-to-Peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services