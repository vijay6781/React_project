import React from "react";
import "./PluginCategoryHeader.css";

function PluginCategoryHeader(props) {
  return (
    <>
      <div className="plugin-cat-header">
        <div className="title">{props.title}</div>
        <hr />
      </div>
    </>
  );
}

export default PluginCategoryHeader;
