import React from 'react'
import './Contact.css'
import msg_icon from '../../assests/images/msg_icon.png'
import phone from '../../assests/images/phone.png'
import mail from '../../assests/images/mail.png'
import location from '../../assests/images/location.png'

const Contact = () => {


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt=" " /></h3>
                <p>Feel free to reach out to us. Your feedback, questions and suggestions are important to us.</p>
                <ul>
                    <li><img src={mail} alt=" " />info@roomtoread.org</li>
                    <li><img src={phone} alt=" " />+91 1234 567 890</li>
                    <li><img src={location} alt=" " />India</li>
                </ul>
            </div>

            <div className="contact-col">
                <form>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Your Mail</label>
                    <input type="email" name="email" placeholder="Enter your Email ID" required />
                    <label>Write your opinion here</label>
                    <textarea name="message" rows="6" placeholder="Your message here" required></textarea>
                    <button type="submit" className='btn dark-btn'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact