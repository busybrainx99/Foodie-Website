import React from "react";

function Content(props) {
  return (
    <div className="food">
      <img src={props.img} alt="food_img" />
      <h1>{props.name}</h1>
      <p>{props.details}</p>
    </div>
  );
}

export default Content;
