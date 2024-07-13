import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Vedashrutha D S </h1>
            <ul className='footer__list'>
                <li>
                    <a href="#home" className='footer__link'>Home</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#experience" className='footer__link'>Experience</a>
                </li>

                <li>
                    <a href="#education" className='footer__link'>Qualification</a>
                </li>
                
                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>

            </ul>
            <div className='footer__social'>
                <a href='https://www.linkedin.com/in/vedashrutha-ds/' className='footer__social-link' target="blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href='https://github.com/Vedashrutha/' className='footer__social-link' target="blank">
                    <i class="bx bxl-github"></i>
                </a>

                <a href='https://www.instagram.com/vedashruta/' className='footer__social-link' target="blank">
                    <i class="bx bxl-instagram-alt"></i>
                </a>

                <a href='https://www.x.com/vedashruta/' className='footer__social-link' target="blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span  className='footer__copy'>&#169; Vedashrutha 2024-25. All rights Reserved</span>
        </div>
    </footer>
  )
}
