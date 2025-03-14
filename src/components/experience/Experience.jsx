import React from "react";
import "./experience.css";

const experience = () => {
  return (
    <section className="experience section" id="experience">
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
                  <br></br>
                  <i class="bx bx-check">
                    Architected and Pioneered an Extract Transform Load (ETL)
                    pipeline to migrate 10 million+ S3 objects in a live
                    environment using Go routines and Redis with zero downtime
                  </i>
                  <br />
                  <i class="bx bx-check">
                    Integrated Elasticsearch for global search, reducing load on
                    MongoDB, improving search request performance by 70%
                  </i>
                  <br />
                  <i class="bx bx-check">
                    Engineered fail-over mechanism to seamlessly redirect search
                    traffic to MongoDB, ensuring 99.9% uptime during
                    elasticsearch outages
                  </i>
                  <br />
                  <i class="bx bx-check">
                    Proposed and implemented an on-demand fetch solution,
                    reducing server load by 80% while enhancing user experience
                    through optimized data retrieval
                  </i>
                  <br />
                  <i class="bx bx-check">
                    Integrated AWS SES for domain impersonation using Golang,
                    setting up DKIM, DMARC keys to enhance email authentication
                    and deliverability
                  </i>
                  <i class="bx bx-check">
                    Designed and implemented asynchronous callback services with
                    a 99.99% success rate making the system more reliable
                  </i>
                  <i class="bx bx-check">
                    Wrote shell scripts to automate package and repository
                    update tasks, leading to increased productivity and reduced
                    manual effort by saving 85% of the time
                  </i>
                  <i class="bx bx-check">
                    Authored Dockerfiles for automated scaling in cloud
                    deployments and for on-premise deployments
                  </i>
                  <br />
                  <br />
                  <i className="bx bx-trophy title-dark"> Key Achievements</i>
                  <br></br>
                  <span>
                    <i class="bx bx-check">
                      Proposed and implemented an on-demand fetch solution,
                      reducing server load by 80% while enhancing user
                      experience through optimized data retrieval
                    </i>
                    <br />
                    <i class="bx bx-check">
                      Developed a pipeline to migrate data from MongoDB to
                      Elasticsearch.
                    </i>
                    <br />
                    <i class="bx bx-check">
                      Enabled on-premise installations with a containerized
                      architecture, reducing manual setup efforts and improving
                      portability
                    </i>
                    <br />
                    <br />
                  </span>
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
                Software Engineer Trainee
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
                  <div className="key__responsibilities">
                    <span>
                      <i class="bx bx-check">
                        Developed a clone website under the guidance of senior
                        developers.
                      </i>
                      <br />
                      <i class="bx bx-check">
                        Implemented front-end and back-end functionalities to
                        mimic the original website's features.
                      </i>
                      <br />
                      <i class="bx bx-check">
                        Collaborated with team members to troubleshoot issues.
                      </i>
                      <br />
                      <i class="bx bx-check">
                        Documented development processes and maintained version
                        control using Git.
                      </i>
                    </span>
                  </div>
                  <br/>
                  <i className="bx bx-trophy title-dark"> Key Achievements</i>
                  <br></br>
                  <div className="achievements">
                    <span>
                      <i class="bx bx-check">
                        Successfully launched and maintained the clone website,
                        gaining hands-on experience in full-stack development
                        and enhancing technical skills in web development.
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
