import React from 'react'
import ProfileCard from '../components/ProfileCard';

const profiles = () => {
  return (
    <div className='wrapper'>
        <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#99ffcc' }}>hello</div>
      <div className='profileInfo'></div>
    </div>

    <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#ffcad3' }}>hello</div>
      <div className='profileInfo'></div>
    </div>


    <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#cceeff' }}>hello</div>
      <div className='profileInfo'></div>
    </div>


    <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#ffff99' }}>hello</div>
      <div className='profileInfo'></div>
    </div>

    <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#ff8080' }}>hello</div>
      <div className='profileInfo'></div>
    </div>

    <div className='profileCard'>
      <div className='banner' style={{ backgroundColor: '#ddccff' }}>hello</div>
      <div className='profileInfo'></div>
    </div>

    </div>
  )
}

export default profiles