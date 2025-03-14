import React from "react";

const ProgrammingLanguages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Programming Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bxl-go-lang cust__icon"></i>
                        <div>
                            <h3 className="skills__name">Go (GoLang)</h3>
                            <span className="skills__level">4/5</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bxl-java cust__icon"></i>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">3.8/5</span>
                        </div>
                    </div>

                    <div className='skills__data cust__icon'>
                        <i class='bx bxl-tux'></i>
                        <div>
                            <h3 className='skills__name'>Shell Scripting</h3>
                            <span className='skills__level'>3.7/5</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bxl-python cust__icon' ></i>
                        <div>
                            <h3 className='skills__name'>Python</h3>
                            <span className='skills__level'>3.9/5</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgrammingLanguages;
