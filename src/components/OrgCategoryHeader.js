import React from "react";
import "./OrgCategoryHeader.css";

function OrgCategoryHeader(props) {
  return (
    <>
      <div className="org-cat-header">
        <div className="title">{props.title}</div>
        <hr />
      </div>
    </>
  );
}

export default OrgCategoryHeader;
