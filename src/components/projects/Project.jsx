import React, { useState } from "react";
import "./project.css";

export const Project = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="project">
      <h2 className="section__title"> Projects</h2>
      <br />

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-link services__icon"></i>
            <h3 className="services__title">
              ToolChain
              <br />
              Go
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">ToolChain Go</h3>

              <ul className="services__modal-services grid">
                <p className="services__modal-info">
                  Toolchain Go is an all-in-one developer toolbox—efficient,
                  reliable, and always ready. Whether you're encoding messages,
                  encrypting data, or blocking intrusive web ads, it streamlines
                  your workflow without missing a beat.
                </p>
                <li className="services__modal-service">
                  <i className="bx bx-check-double services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    Base64 Encoding & Decoding
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-check-double services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    AES Encryption & Decryption
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-check-double services__modal-icon"></i>
                  <p className="services__modal-info">
                    Cryptographic Key Generation
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-check-double services__modal-icon"></i>
                  <p className="services__modal-info">File Operations</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bx-check-double services__modal-icon"></i>
                  <p className="services__modal-info">Data Conversion</p>
                </li>
              </ul>
              <p className="services__modal-info">
                <br />
                <b>Language</b>
                <br />
                Go(GoLang)
              </p>

              <p className="services__modal-info">
                <br />
                <i className="bx bxl-github services__modal-icon">
                  <b>
                    <a
                      href="https://github.com/vedashruta/toolchain-go"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </b>
                </i>

                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-desktop services__icon"></i>
            <h3 className="services__title">
              Netflix
              <br />
              Clone
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Netflix Clone</h3>

              <ul className="services__modal-services grid">
                <p className="services__modal-info">
                  The Netflix Clone project is an ambitious endeavor to craft a
                  remarkable web application that mirrors the renowned streaming
                  platform, Netflix
                </p>
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
              <p className="services__modal-info">
                <br />
                <b>Techstack</b>
                <br />
                Frontend: Angular
                <br /> Backend : Go(GoLang)
                <br /> Database : MongoDb
              </p>

              <p className="services__modal-info">
                <br />
                <i className="bx bxl-github services__modal-icon">
                  <b>
                    <a
                      href="https://github.com/vedashruta/netflix-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </b>
                </i>

                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-code-alt services__icon"></i>
            <h3 className="services__title">
              TCP Server 
              <br />
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">TCP Go</h3>

              <ul className="services__modal-services grid">
                <p className="services__modal-info">
                This project demonstrates a simple TCP client-server communication in Go. The client connects to a TCP server, sends messages, and receives responses. This example demonstrates basic TCP communication, including handling multi-word messages and concurrent connections.
                </p>
              </ul>
              <p className="services__modal-info">
                <br />
                <b>Language</b>
                <br />
                Go(GoLang)
              </p>

              <p className="services__modal-info">
                <br />
                <i className="bx bxl-github services__modal-icon">
                  <b>
                    <a
                      href="https://github.com/vedashruta/tcp-go"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </b>
                </i>

                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
