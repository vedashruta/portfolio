import React from 'react'
import "./skills.css";
import Development from './Development';
import CICD from './CICD';
import Cloud from './Cloud';
import Scripting from './Scripting';

const Skills = () => {
  return (
    <section className='skills section' id="skills">
          <h2 className='section__title'> Skills</h2>
          <br></br>
        <div className='skills__container container grid'>
            <Development />
            <CICD />
            <Scripting />
            <Cloud />
        </div>
    </section>
  )
} 

export default Skills