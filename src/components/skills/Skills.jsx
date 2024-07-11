import React from 'react'
import "./skills.css";
import Technologies from './Technologies';
import CICD from './CICD';
import Cloud from './Cloud';
import Scripting from './Scripting';
import LogManagement from './LogManagement';
import Database from './Database';

const Skills = () => {
  return (
    <section className='skills section' id="skills">
          <h2 className='section__title'> Skills</h2>
          <br></br>
        <div className='skills__container container grid'>
            <Technologies />
            <Database />
            <CICD />
            <Scripting />
            <LogManagement />
            <Cloud />
        </div>
    </section>
  )
} 

export default Skills