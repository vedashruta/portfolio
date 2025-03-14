import React from "react";

const Cloud = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Cloud & CI/CD</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-aws cust__icon"></i>
            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">3.9/5</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-docker"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">4/5</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-kubernetes"></i>
            <div>
              <h3 className="skills__name">Kubernetes</h3>
              <span className="skills__level">3.6/5</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="cust__icon"></i>
            <div>
              <h3 className="skills__name">Jenkins</h3>
              <span className="skills__level">3.6/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
