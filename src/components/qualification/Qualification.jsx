import React, { } from 'react'
import "./qualification.css";


const Qualification = () => {

      return (
        <section className='qualification section' id="education">
            <h2 className='section__title'> Qualification</h2>
            <br/>
            <div className="qualification__container container grid">
    
            <div className='qualification__content'>
                <div>
                    <h3 className='qualification__title'>B.E in Computer Science & Engineering</h3>
                    <div className='qualification__data'>
                            <div>
                                <span className='qualification__subtitle'>BMS Institute of Technology And Management</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 
                                        <span className='qualification__subtitle'> 2019-2023</span><br></br>
                                    <i class='bx bxs-report'></i>
                                        <span className='qualification__subtitle'> CGPA : 8.95</span><br></br>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    
            <div className='qualification__content'>
                <div>
                    <h3 className='qualification__title'>Class XII</h3>
                    <div className='qualification__data'>
                            <div>
                                <span className='qualification__subtitle'>Sathya Vidyalaya CBSE</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 
                                        <span className='qualification__subtitle'> 2019</span><br></br>
                                    <i class='bx bxs-report'></i>
                                        <span className='qualification__subtitle'> Percentage : 79.2</span><br></br>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className='qualification__content'>
                <div>
                    <h3 className='qualification__title'>Class X</h3>
                    <div className='qualification__data'>
                            <div>
                                <span className='qualification__subtitle'>Vijaya High School</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 
                                        <span className='qualification__subtitle'> 2017</span><br></br>
                                    <i class='bx bxs-report'></i>
                                        <span className='qualification__subtitle'> Percentage : 95.68</span><br></br>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
      );
    };

export default Qualification