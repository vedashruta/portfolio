/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Database = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Database</h3>

            <div className="skills__box">
                <div className='skills__group'>

                <div className="skills__data">
                        <i class="bx bxl-mongodb cust__icon"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">3.8/5</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bxs-data cust__icon"></i>
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">3.8/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Database