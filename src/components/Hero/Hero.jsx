import React from 'react'
import Header from '../Header/Header'
import Gym from '../../assets/hearts.png'
import bodyguy from '../../assets/withoutbackground.png'
import './Hero.css'
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-add">
          <motion.div
            initial={{ left: mobile? "165px":'220px' }}
            whileInView={{ left: '8px' }}
            transition={{...transition, type:'tween'}}>
          </motion.div>
              <span>𝚃𝙷𝙴 𝙱𝙴𝚂𝚃 𝙶𝚈𝙼 𝙲𝙻𝚄𝙱 𝙸𝙽 𝚃𝙷𝙴 𝙿𝙰𝙺𝙸𝚂𝚃𝙰𝙽</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>𝖘𝖍𝖆𝖕𝖊</span>
            <span> Your </span>
          </div>
          <div><span>Ideal 𝔅𝔒𝔇𝔜</span>
          </div>
          <div>
            <span className='works'>
𝚆𝚘𝚛𝚔  𝚃𝚘𝚍𝚊𝚢 𝕹𝖔 𝕲𝖆𝖎𝖓 𝕹𝖔 𝕻𝖆𝖎𝖓
            </span>
            
          </div>
        </div>
        {/* end slogan*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={150} start={90} delay={4} preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={200} start={90} delay={4} preFix="+"/>
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span><NumberCounter end={250} start={90} delay={4} preFix="+"/></span>
            <span>fitness program</span>
          </div>
        </div>
        { /*button*/}
        <div className="learnmore">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div
           initial={{ right: '-1rem' }}
                  whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={Gym} alt="" />
          <span>ʜᴇᴀʀᴛ ʀᴀᴛᴇ</span>
          <span>116 вρм</span>
        </motion.div>

        {/**hero images */}

        <img src={bodyguy} alt="" className="hero-img" />
      </div>
    </div>
  )
}

export default Hero