import React from "react";

import "./styles.scss";

const Card2 = () => {
  return (
    <div className="card2">
      <div className="imageContainer">
        <p>Tiago Costa</p>
        <div className="imageWrapper">
          <img
            src="https://alicantefootballacademy.com/wp-content/uploads/2021/04/how-to-get-scouted-in-football-soccer-768x432.jpg"
            alt=""
          />
        </div>
        <p className="role">CEO @ tiagocostadev.com</p>
      </div>
      <div className="card2Text">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
          laboriosam consequuntur nobis, alias eum ut nesciunt similique
          recusandae possimus?
        </p>
      </div>
    </div>
  );
};

export default Card2;
