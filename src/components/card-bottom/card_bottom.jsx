import React from 'react'
import './card-bottom.css'
import images1 from '../../assets/image1.png'
import images2 from '../../assets/image2.png'
import images3 from '../../assets/image3.png'
import images4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const card_bottom = () => {
  return (
      <div className="reasons card_bottom" id="reasons">
          <div className="left-r">
              <img src={images1} alt="" />
              <img src={images2} alt="" />
              <img src={images3} alt="" />
              <img src={images4} alt="" />
          </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div><img src={tick} alt="" /><span>over 140+ expert coaches</span></div>
          <div><img src={tick} alt="" /><span>train smarter and faster than before</span></div>
          <div><img src={tick} alt="" /><span>1 free program for new member</span></div>
          <div><img src={tick} alt="" /><span>reliable partners</span></div>
        </div>
        <span className='ourpartners'>our partners</span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default card_bottom