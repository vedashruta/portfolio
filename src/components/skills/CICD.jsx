/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const CICD = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>CI/CD</h3>

            <div className="skills__box">
                <div className='skills__group'>

                    <div className='skills__data'>
                        <i class='bx bxl-docker'></i>
                        <div>
                            <h3 className='skills__name'>Docker</h3>
                            <span className='skills__level'>3/5</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='bx bxl-kubernetes'></i>
                        <div>
                            <h3 className='skills__name'>Kubernetes</h3>
                            <span className='skills__level'>3/5</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i class='cust__icon' >
                            </i>
                        <div>
                            <h3 className='skills__name'>Jenkins</h3>
                            <span className='skills__level'>3/5</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CICD