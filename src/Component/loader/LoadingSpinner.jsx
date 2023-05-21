import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    </div>
  );
};

export default LoadingSpinner;
