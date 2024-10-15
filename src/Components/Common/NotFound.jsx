import React from "react";

import NotFoundImage from "/images/not-found.webp"

function NotFound() {
  return (
    <div>
      <img className="my-20 mx-auto" src={NotFoundImage} alt="" />
    </div>
  );
}

export default NotFound;
