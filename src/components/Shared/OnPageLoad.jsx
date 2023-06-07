import React from "react";
import {LoadingSpinner} from "./LoadingSpinner";
export const OnPageLoad = () => {
  return (
    <>
      <div className="page-load-content">
        <h1>Loading Porfolio...</h1>
        <div className="loadem">
          <LoadingSpinner size="6" />
        </div>
      </div>
    </>
  );
};
