import React from "react";
import "./organisation.css";
import FormNewRegistration from "../components/FormNewRegistration";

const Organisation = () => {
  return (
    <>
      <div className="top-nav-walk">
        <div className="link">Organisation</div>
        <div className="vl">|</div>
        <div className="link">Tenant</div>
        <div className="vl">|</div>
        <div className="link">New Organisation</div>
      </div>

      <FormNewRegistration />
    </>
  );
};

export default Organisation;
