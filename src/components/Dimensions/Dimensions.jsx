import React, { useContext } from "react";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";

const Dimensions = () => {
  const { dimensions } = useContext(ActiveEventsContext);  
  return (
    <div className="flex flex-col">
      <span className="text-lg p-2">Dimensions for the Pointer</span>
      <div className="p-2 flex flex-col">
        <span>Directions:</span>
        <span>x = {(dimensions && dimensions.x) || 0}</span>
        <span>y = {(dimensions && dimensions.y) || 0}</span>
        <span>Directions = {(dimensions && dimensions.angle) || 90}</span>
      </div>
    </div>
  );
};

export default Dimensions;
