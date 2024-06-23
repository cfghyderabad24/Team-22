import React from 'react'
import './About.css'
import about from '../../assests/images/about.jpeg'
import play_icon from '../../assests/images/play_icon.jpg'
const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h2>ABOUT OUR COMMUNITY</h2>
                <h4>World Change Starts With Educated Children</h4>
                <p>Founded in 2000 on the belief that World Change Starts with Educated Children, Room to Read is creating a world free from illiteracy and gender inequality. We are achieving this goal by helping children in historically low-income communities develop literacy skills and a habit of reading, and by supporting girls as they build skills to succeed in school and negotiate key life decisions. We collaborate with governments and other partner organizations to deliver positive outcomes for children at scale. Room to Read has benefited more than 32 million children and has worked in 21 countries and in more than 49,000 communities, providing additional support through remote solutions that facilitate learning beyond the classroom. Room to Read aims to benefit 40 million children by 2025. Learn more at https://www.roomtoread.org </p>
            </div>
        </div>
    )
}

export default About