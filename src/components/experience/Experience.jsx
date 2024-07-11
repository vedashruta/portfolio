import React from "react";
import "./experience.css";

const experience = () => {
    return (
        <section className="experience__section" id="experience">
            <h2 className="section__title"> Professional experience</h2>
            <br />
            <div className="experience__container container grid">
                <div className="experience__content">
                    <div>
                        <h3 className="experience__title">
                            Signdesk |{" "}
                            <span className="experience__subtitle">
                                Associate Software Engineer
                            </span>
                        </h3>
                        <div className="experience__data">
                            <div>
                                <div className="experience__calendar">
                                    <i className="bx bx-calendar-alt">
                                        {" "}
                                        June 2023-Current |{" "}
                                        <i className="bx bx-map-pin"> Bengaluru</i>
                                    </i>
                                    <br></br>
                                    <i className="bx bxs-component title-dark"> Key Responsibilities</i>
                                    <br></br>
                                    <div className="key__responsibilities">
                                        <span>
                                            <i class="bx bx-check">
                                                Collaborated in an R&D team to develop
                                                architecture-level packages utilized by developers.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Designed and implemented APIs and core functionalities
                                                for the product.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Created new Microservices to enhance scalability and
                                                modularity of the application.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Conducted code reviews and provided technical guidance to
                                                junior developers.
                                            </i>
                                        </span>
                                    </div>
                                    <i className="bx bx-trophy title-dark"> Achievements</i>
                                    <br></br>
                                    <div className="achievements">
                                        <span>
                                            <i class="bx bx-check">
                                                Implemented Elasticsearch integration and real-time data processing.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Developed a pipeline to migrate data from MongoDB to Elasticsearch.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Key achievement : Spearheaded the implementation of an email-ticketing system, enhancing communication and workflow efficiency within the product.
                                            </i>
                                            <br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience__content">
                    <div>
                        <h3 className="experience__title">
                            Signdesk |{" "}
                            <span className="experience__subtitle">
                                Software Engineer Trainee Intern
                            </span>
                        </h3>
                        <div className="experience__data">
                            <div>
                                <div className="experience__calendar">
                                    <i className="bx bx-calendar-alt">
                                        {" "}
                                        March 2023-June 2023 |{" "}
                                        <i className="bx bx-map-pin"> Bengaluru</i>
                                    </i>
                                    <br></br>
                                    <i className="bx bxs-component title-dark"> Key Responsibilities</i>
                                    <br></br>
                                    <div className="key__responsibilities">
                                        <span>
                                            <i class="bx bx-check">
                                                Developed a clone website under the guidance of senior developers.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Implemented front-end and back-end functionalities to mimic the original website's features.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Collaborated with team members to troubleshoot issues.
                                            </i>
                                            <br />
                                            <i class="bx bx-check">
                                                Documented development processes and maintained version control using Git.
                                            </i>
                                        </span>
                                    </div>
                                    <i className="bx bx-trophy title-dark"> Achievements</i>
                                    <br></br>
                                    <div className="achievements">
                                        <span>
                                            <i class="bx bx-check">
                                            Successfully launched and maintained the clone website, gaining hands-on experience in full-stack development and enhancing technical skills in web development.
                                            </i>
                                            <br />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default experience;
