import React from "react";

const WebTechnology = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Web Technology</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-react cust__icon"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">3.8/5</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-angular"></i>
            <div>
              <h3 className="skills__name">Angular</h3>
              <span className="skills__level">3.7/5</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-nodejs cust__icon"></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">3.6/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebTechnology;
