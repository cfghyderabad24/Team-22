import React, { useRef } from 'react'
import './OurTeam.css'
import next_btn from '../../assests/images/next_btn.png'
import back_btn from '../../assests/images/back_btn.png'
import user1 from '../../assests/images/user1.png'
import user2 from '../../assests/images/user2.png'
import user3 from '../../assests/images/user3.png'
import user4 from '../../assests/images/user4.png'
import user5 from '../../assests/images/user5.png'
import user6 from '../../assests/images/user6.png'

const Tests = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='tests'>
            <img src={next_btn} alt=" " className='next-btn' onClick={slideForward} />
            <img src={back_btn} alt=" " className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>John Wood</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                            <p>At age 35, John left his position as Director of Business Development for Microsoft’s Greater China region to found Room to Read. Seventeen years later, with over 30,000 schools and communities served, millions have been impacted by John’s decision to help a headmaster in Nepal fill his school’s library. John’s award-winning memoir, Leaving Microsoft to Change the World recounts how he used the business acumen gained during his career in technology to develop one of the fastest-growing nonprofits in history.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user5} alt="" />
                                <div>
                                    <h3>Erin Ganju</h3>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                            <p>Erin Ganju is a Co-founder, former CEO, former COO and Emeritus Board Member of Room to Read, an organization that believes World Change Starts with Educated Children.® Room to Read envisions a world in which all children can pursue a quality education that enables them to reach their full potential and contribute to their communities and the world. From the early start-up days of Room to Read, Erin was instrumental in the design and implementation of the organization’s scalable, replicable model for improving the quality of education around the world. </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Dr. Geetha Murali</h3>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                            <p>"Dr. Geetha Murali is the chief executive officer (CEO) of Room to Read, a leading international education organization that believes World Change Starts with Educated Children. As CEO, Geetha has been a driving force behind the exponential scale of Room to Read’s quality programs – achieving presence in 24 countries and benefiting more than 39 million children to date.  </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Heather Simpson</h3>
                                    <span>Chief Program Officer</span>
                                </div>
                            </div>
                            <p>Heather Simpson is the chief program officer of Room to Read, an organization that believes World Change Starts with Educated Children. Heather is responsible for the design, implementation, and monitoring of Room to Read’s Literacy and Girls’ Education & Gender Equality portfolios in 23 countries. Heather leads the development of Room to Read’s overall educational program strategy and oversees the global programs teams. She serves as a critical member of the senior leadership team helping to set strategic direction for Room to Read’s programs and growth. </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Christabel Pinto</h3>
                                    <span>Vice President, Literacy</span>
                                </div>
                            </div>
                            <p>Christabel Pinto is an educator with more than 20 years of experience teaching children, facilitating teacher professional development, designing education programs, and engaging communities in Africa, Asia, and the United States. In her role as the vice president for literacy at Room to Read, she leads the design and execution of Room to Read’s literacy portfolio across 21 countries with the goal of ensuring all children acquire both the skills to read and a deep desire to do so.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user6} alt="" />
                                <div>
                                    <h3>Cynthia Orme</h3>
                                    <span>Chief People and Technology Officer</span>
                                </div>
                            </div>
                            <p>Cynthia Orme is the chief people and technology officer of Room to Read, an organization that believes World Change Starts with Educated Children. Cynthia is responsible for the design, implementation and operations of Room to Read’s people practices and technology infrastructure. In her role, she ensures that these elements act as key enablers of the organization’s mission. Cynthia serves as a critical member of the Executive Team, helping to set strategic direction for Room to Read’s programs, growth and infrastructure.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Tests