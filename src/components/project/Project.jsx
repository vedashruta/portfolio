import React ,{useState} from 'react'
import './project.css';

export const Project = () => {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(index)=>{
        setToggleState(index);
    }

  return (
    <section className='services section' id="project">
        <h2 className='section__title'> Projects</h2>
        <br/>
        
        <div className="services__container container grid">

        <div className='services__content'>
            <div className='services__item'>
                <i className='bx bx-desktop services__icon'></i>
                <h3 className='services__title'>Netflix Clone</h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(1)}>View more<i className='uil uil-arrow-right services__button-icon'></i></span>

            <div className={toggleState===1 ? "services__modal active-modal": "services__modal"}> 
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Netflix Clone</h3>
                    
                    <ul className="services__modal-services grid">
                    <p className="services__modal-info">The Netflix Clone project is an ambitious endeavor to craft a remarkable web application that mirrors the renowned streaming platform, Netflix</p> 
                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info"> User Authentication</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info"> Custom Video Player</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">User Profiles</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Categories & genres</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Watchlist & History</p>
                        </li>
                        

                    </ul>
                    <p className="services__modal-info"><br/><b>Techstack</b><br/>Frontend: Angular<br/> Backend : Go(GoLang)<br/> Database : MongoDb</p>
                </div>
            </div>
        </div>

        {/* <div className='services__content'>
            <div>
                <i className='bx bxs-user-account services__icon'></i>
                <h3 className='services__title'>Payroll<br/>Management</h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(2)}>View more<i className='uil uil-arrow-right services__button-icon'></i></span>

            <div className={toggleState===2 ? "services__modal active-modal": "services__modal"}> 
                <div className="services__modal-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Payroll Management System</h3>
                    
                    <ul className="services__modal-services grid">
                    <p className="services__modal-info">an easy to use payroll software solution to manage employees and their benefits</p> 
                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info"> Easy Setup - Quickly setup new employees or add existing ones. </p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info"> Customizable Reports - Generate reports based on specific criteria.</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Leave Management - Manage sick days, vacation,and personal leave.</p>
                        </li>

                    </ul>
                    <p className="services__modal-info"><br/><b>Technologies used:</b><br/>Frontend : HTML, CSS,JavaScript <br/>Backend : PHP <br/>Database : SQL</p>
                </div>
            </div>
        </div>

        <div className='services__content'>
            <div>
                <i className='bx bx-bitcoin services__icon'></i>
                <h3 className='services__title'>Crypto Insights<br/>Application<br/></h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(3)}>View more<i className='uil uil-arrow-right services__button-icon'></i></span>

            <div className={ toggleState===3 ? "services__modal active-modal": "services__modal"} > 
                <div className="services__modal-content">
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">CryptX</h3>
                    <ul className="services__modal-services grid">
                    <p className="services__modal-info"> an app with access to a variety of resources that can help you make informative decisions</p> 
                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Track over 100+ cryptocurrencies with a few clicks on your phone and get updates on their prices,trends, and more.</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Receive alerts and notifications to help you make informed decisions.</p>
                        </li>

                        <li className="services__modal-service"> 
                            <i className="bx bx-check-double services__modal-icon"></i> 
                            <p className="services__modal-info">Check out the market capitalization of these currencies before investing money into them.</p>
                        </li>

                    </ul>
                    <p className="services__modal-info"><br/><b>Technologies used:</b><br/> Java, Android Studio</p>
                </div>
            </div>
        </div> */}

        </div>
    </section>
  );
};
