import React from 'react'
import '../Programs/program.css'
import { programsData } from '../data/programsData'
import rightarrow from '../../assets/rightArrow.png'
const program = () => {
  return (
      <div className="programs" id="programs">
          <div className="programs-header">
              <span className='stroke-text'>Explore our</span>
              <span className='checl'>Programs</span>
              <span className='stroke-text'>to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span><span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightarrow} alt="" />
            </div>
          </div>
        ))}
      </div>
</div>
      
  )
}

export default program