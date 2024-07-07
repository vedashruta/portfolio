import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Experience from './components/experience/Experience';
import {Project} from './components/project/Project';
import Skills from './components/skills/Skills'; 
import { Footer } from './components/footer/Footer';
import { Scrollup } from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Qualification />
        {/* <Experience /> */}
        {/* <Project /> */}
        <Skills />
      </main>
      <Footer/>
      <Scrollup />
    </>
  )
}

export default App
