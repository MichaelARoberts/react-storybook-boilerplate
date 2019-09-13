import React from "react";
import "./HelloWorld.scss";

const HelloWorld = props => {
  return (
    <div className="hello-world">
      <p>{props.msg}</p>
    </div>
  );
};

export default HelloWorld;
