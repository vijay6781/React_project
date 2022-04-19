import React from "react";
import "./Card.css";

function Card(props) {
  const totalInstalls =
    props.no_of_installs % 100 === 0
      ? props.no_of_installs
      : Math.floor(props.no_of_installs / 100) * 100 + "+";

  return (
    <>
      <div className="company-card">
        <div className="card-head">
          <img src={props.companyLogo} alt="Avana logo" />
          <label className="switch">
            <input type="checkbox" checked={props.checked} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="by-whom">By {props.byWhom}</div>
        <div className="card-body">
          <p>{props.description}</p>
        </div>
        <hr />
        <div className="card-footer">
          <div className="installs">{totalInstalls} Installs</div>
          <div className="pricing">
            Starting at ${props.subscription_price}/month
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
