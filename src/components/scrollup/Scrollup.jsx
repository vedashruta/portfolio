import React from 'react'
import "./scrollup.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 500) 
      scrollUp.classList.add("show-scroll");
    else 
      scrollUp.classList.remove("show-scroll");
  });
  return (
    <button className='scrollup' onClick={scrollToTop} >
      <i className='uil uil-arrow-up scrollup__icon'></i>
    </button>
  )
}
