import React from "react";
import { Circles } from "react-loader-spinner";

function LoadingCircles() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <Circles
        className="h-20 w-20 bg-[#60a5fa]"
        color="#60a5fa"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingCircles;
