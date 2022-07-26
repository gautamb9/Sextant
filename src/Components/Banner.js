import React from 'react'
import logo from './LOGO.JPG'
import bg from './background.jpg'

const Banner = () => {
  return (
    <div>
        <div >
            <img src={logo} id='logo'></img>
        </div>
        <div className='headbg'>
        <img src={bg} id='bg'></img>
            <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Banner