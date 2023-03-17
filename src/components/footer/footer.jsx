import React from 'react'
import './footer.css'
import github from '../../assets/github.png'
import linkdin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

const footer = () => {
  return (
    <div className="footer-container">
     
      <div className="footer">
        <div className="social-links">
              <img src={github} alt="" />
        <img src={linkdin} alt="" />
        <img src={instagram} alt="" />
          {/* <div className="logo-f">
        <img src={logo} alt="" />
</div> */}
        </div>
    
      </div>
      <div className="blur footer-blur-1"></div>
          <div className="blur footer-blur-2"></div>
   </div>
  )
}

export default footer