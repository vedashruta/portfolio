import React from "react";

const Development = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Development</h3>

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
                        <i class="bx bxl-react cust__icon"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">3.5/5</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bxl-mongodb cust__icon"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">4/5</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bxl-postgresql cust__icon"></i>
                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                            <span className="skills__level">3.8/5</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Development;
