import React from 'react'
import "./skills.css";
import ProgrammingLanguages from './ProgrammingLanguages';
import WebTechnology from './WebTechnology';
import Cloud from './Cloud';
import LogManagement from './LogManagement';
import Database from './Database';

const Skills = () => {
  return (
    <section className='skills section' id="skills">
          <h2 className='section__title'> Skills</h2>
          <br></br>
        <div className='skills__container container grid'>
            <ProgrammingLanguages />
            <Cloud />
            <Database />
            <WebTechnology />
            <LogManagement />
        </div>
    </section>
  )
} 

export default Skills