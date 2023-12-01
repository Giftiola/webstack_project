import React from "react";
import LoadingCircles from "./LoadingCircles";

function LoadingOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <LoadingCircles />
    </div>
  );
}

export default LoadingOverlay;