import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Professional Experience</h2>
      <div className="experience__container container grid">
        <div className="experience__content">
          <h3 className="experience__title">
            SignDesk | Associate Software Engineer
          </h3>
          <div className="experience__data">
            <p className="experience__calendar">
              <i className="bx bx-calendar-alt"></i> June 2023 - Current |{" "}
              <i className="bx bx-map-pin"></i> Bengaluru
            </p>
            <ul className="key__responsibilities experience__list">
              <li>
                {" "}
                Architected and Pioneered an Extract Transform Load (ETL)
                pipeline to migrate 10 million+ S3 objects in a live environment
                using Go routines and Redis with zero downtime
              </li>
              <li>
                {" "}
                Integrated Elasticsearch for global search, reducing load on
                MongoDB, improving search request performance by 70%
              </li>
              <li>
                {" "}
                Engineered fail-over mechanism to seamlessly redirect search
                traffic to MongoDB, ensuring 99.9% uptime during elasticsearch
                outages
              </li>
              <li>
                {" "}
                Proposed and implemented an on-demand fetch solution, reducing
                server load by 80% while enhancing user experience through
                optimized data retrieval
              </li>
              <li>
                {" "}
                Integrated AWS SES for domain impersonation using Golang,
                setting up DKIM, DMARC keys to enhance email authentication and
                deliverability
              </li>
              <li>
                {" "}
                Designed and implemented asynchronous callback services with a
                99.99% success rate making the system more reliable
              </li>
              <li>
                {" "}
                Automated package updates with shell scripts, reducing manual
                effort by 85%
              </li>
              <li>
                {" "}
                Authored Dockerfiles for scalable cloud and on-premise
                deployments
              </li>
            </ul>
            <p className="experience__highlight">
              <b>Key Achievements</b>
            </p>
            <ul className="key__responsibilities experience__list">
              <li> Designed on-demand fetch to reduce server load by 80%.</li>
              <li> Built MongoDB to Elasticsearch migration pipeline</li>
              <li>
                {" "}
                Enabled on-premise deployment with containerized architecture
              </li>
            </ul>
          </div>
        </div>

        <div className="experience__content">
          <h3 className="experience__title">
            Signdesk |{" "}
            <span className="experience__subtitle">
              Software Engineer Trainee
            </span>
          </h3>
          <div className="experience__data">
            <p className="experience__calendar">
              <i className="bx bx-calendar-alt"></i> March 2023 - June 2023 |{" "}
              <i className="bx bx-map-pin"></i> Bengaluru
            </p>
            <ul className="key__responsibilities experience__list">
              <li>
                {" "}
                Developed a clone website under senior developer guidance.
              </li>
              <li> Implemented front-end and back-end features</li>
              <li> Collaborated with team to troubleshoot issues</li>
              <li>
                {" "}
                Maintained documentation and used Git for version control
              </li>
            </ul>
            <p className="experience__highlight">
              <b>Key Achievements</b>
            </p>
            <ul className="key__responsibilities experience__list">
              <li>
                {" "}
                Successfully launched and maintained the clone website, gaining
                hands-on experience in full-stack development and enhancing
                technical skills in web development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
