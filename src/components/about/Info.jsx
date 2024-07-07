import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className='about__title'>Projects</h3>
            <span className='about__subtitle'>2+ Projects</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-sitemap about__icon'></i>

            <h3 className='about__title'>Skills</h3>
            <span className='about__subtitle'>Multi Domain</span>
        </div>

        <div className='about__box'>
            <i class='bx bx-medal about__icon'></i>

            <h3 className='about__title'>Certifications</h3>
            <span className='about__subtitle'>4+</span>
        </div>
    </div>
  )
}

export default Info