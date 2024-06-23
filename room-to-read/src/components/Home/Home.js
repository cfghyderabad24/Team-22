import React, { useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { teacherData } = useSelector((state) => state.teacher);
  useEffect(() => {
    if (teacherData && teacherData?.status === 201) {
      navigate('/home');
      window.location.reload();
    }
  }, [teacherData]);

    
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Open the door to a world of imagination!</h1>
                <p>Dive into our vast collection, carefully curated to satisfy every literary craving.</p>
                <button className='btn'>Explore more</button>
            </div>
        </div>
    )
}

export default Home