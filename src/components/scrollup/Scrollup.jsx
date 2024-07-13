import React from 'react'
import "./scrollup.css";
export const Scrollup = () => {
    window.addEventListener("scroll",function() {
        const scrollUp=document.querySelector(".scrollup");
        if(this.scrollY >= 500)  scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <a className='scrollup' onClick={Scrollup} href="#home">
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}
