import React from 'react'
import './package.css'
import { plansData } from '../data/plansData'
import righttick from '../../assets/whiteTick.png'

const packages = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-t" ></div>
            <div className="blur plans-blur-r" ></div>
      <div className="programs-header">
        <span className='stroke-text'>Ready to start</span>
        <span className='checks'>your journey</span>
        <span className='stroke-text'>now withus</span>
      </div>

      <div className="plans">
  {plansData.map((plan, i)=>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span><span>${plan.price}</span>
            <div className="features">
        {plan.features.map((feature, i) => (
          <div className="feature">
            <img src={righttick} alt="" />
            <span key={i}>{ feature}</span>
</div>
               ))}
      </div>
      
      <div><span>See More Benefits</span></div>
      <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default packages