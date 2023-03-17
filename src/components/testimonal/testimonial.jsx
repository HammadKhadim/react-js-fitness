import React from 'react'
import './testimonial.css'
const testimonial = () => {
  return (
      <div className="testimonial">
      <div className="left-t">
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span> Level Up</span>
        </div>
         <div>
          <span>Your Body</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </div>
      <div className="right-t">
        <form action="" className="email-container">
          <input type="email" name="user_email" placeholder="Enter Your Email" />
          <button className="join_noe">Join Now</button>
         </form>
      </div>
</div>
  )
}

export default testimonial