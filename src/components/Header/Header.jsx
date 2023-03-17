import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const header = () => {
  return (
    <div className="header">
      <img className="logos" src={logo} alt="" />
      <div><img src="" alt="" /></div>
        <ul className='header-menu'>
        <li><Link to='Hero' span={true} smooth={true}>𝕳𝖔𝖒𝖊</Link></li>
        <li><Link to='programs' span={true} smooth={true}>𝕻𝖗𝖔𝖌𝖗𝖆𝖒𝖘</Link></li>
        <li><Link to='card_bottom' span={true} smooth={true}>𝖂𝖍𝖞 𝖀𝖘</Link></li>
        <li><Link to='plans-container' span={true} smooth={true}>𝕻𝖑𝖆𝖓𝖘</Link></li>
        <li><Link to='testimonial' span={true} smooth={true}>𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘 </Link></li>
      </ul> 
   
      </div>
  )
}

export default header