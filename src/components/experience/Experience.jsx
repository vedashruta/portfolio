import React from 'react'
import "./experience.css";

const Experience = () => {
  return (
    <section className='exp section' id="experience">
        <h2 className='section__title'> Professional Experience</h2>
        <br/>
        <div className="exp__container container grid">

        <div className='exp__content'>
            <div>
                <h3 className='exp__title'>Signdesk</h3>
                <div className='qualification__data'>
                        <div>
                            <span className='qualification__subtitle'>Software Engineer</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'> June 2023-Current</i><br></br>
                                <span className='qualification__subtitle'>
                                    <i class='bx bx-check' ></i><br/>
                                    <i class='bx bx-check' ></i><br/>
                                    <i class='bx bx-check' ></i>
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className='exp__content'>
        </div>
    </div>
    </section>
  );
};


export default Experience