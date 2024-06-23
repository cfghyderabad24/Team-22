import React from 'react'
import './Programs.css'
import event1 from '../../assests/images/event1.jpg'
import event2 from '../../assests/images/event2.jpg'
import event3 from '../../assests/images/event3.jpg'



const Programs = () => {
    return (
        <div className='events'>
            <div className="event">
                <img src={event1} alt=" " />
                <div className="caption">
                    <p>Library Program</p>
                </div>
            </div>
            <div className="event">
                <img src={event2} alt=" " />
                <div className="caption">
                    <p>Instruction Program</p>
                </div>
            </div>
            <div className="event">
                <img src={event3} alt=" " />
                <div className="caption">
                    <p>Girl's Education</p>
                </div>
            </div>
        </div>
    )
}

export default Programs