import React from "react";

const Scripting = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Scripting</h3>

            <div className="skills__box">
                <div className='skills__group'>
                    <div className='skills__data cust__icon'>
                        <i class='bx bxl-tux'></i>
                        <div>
                            <h3 className='skills__name'>Shell Scripting</h3>
                            <span className='skills__level'>3.8/5</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bxl-python cust__icon' ></i>
                        <div>
                            <h3 className='skills__name'>Python</h3>
                            <span className='skills__level'>3.8/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scripting;
