import React from "react";
import Avatar from "../avatar";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-details">
        <div className="card-section">
          <p className="card-label">
            <span className="card-label-light">From:</span> Foo bar
            {`<foo.bar@gmail.com>`}
          </p>
          <p className="card-label">
            <span className="card-label-light">Subject:</span> Lorem Ipsum
          </p>
        </div>
        <div className="card-section">
          <p className="card-body-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            nemo!
          </p>
          <p>
            26/11/2024, 10:30am <button className="fav-btn">favorite</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
