import React from "react";

const Task = () => {
  return (
    <div className="card_wrapper">
      <div className="card_content">
        <div className="card_content_top">HANDYMAN / TRADIES</div>
        <hr />
        <div className="card_content_mid">
          <div className="midleft">
            <div className="profilepic"></div>
            <div className="taskdesc">
              Assemble an Ikea Hemnes open wardrobe
            </div>
          </div>
          <div className="midright">$100</div>
        </div>
        <hr />
        <div className="card_content_bottom">
          <div className="star"></div>
          <span>5 stars</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
