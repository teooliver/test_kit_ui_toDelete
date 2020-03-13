import React from "react";

const Tiles = ({ imgSrc }) => {
  return (
    <div>
      <div class="container">
        <div class="aspect-ratio-box">
          <div class="content center">
            <h1>Home</h1>
            {imgSrc && (
              <img className="content__logo" src={`${imgSrc}`} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
