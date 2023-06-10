import React, { useContext } from "react";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";

const Dimensions = () => {
  const { dimensions } = useContext(ActiveEventsContext); 
  const handleXOnChange = () => {

  } 

  const handleYOnChange = () => {

  }

  const handleAngleOnChange = () => {
    
  }
  return (
    <div className="flex flex-col">
      <span className="text-lg p-2">Dimensions for the Pointer</span>
      <div className="p-2 flex flex-col">
        <span>Directions:</span>
        <span style={{padding:'3px'}}>x = <input onChange={handleXOnChange} value={(dimensions && dimensions.x) || 0} style={{border: '1px solid black',borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
        <span style={{padding:'3px'}}>y = <input onChange={handleYOnChange} value={(dimensions && dimensions.y) || 0} style={{border: '1px solid black' ,borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
        <span style={{padding:'3px'}}>Directions = <input onChange={handleAngleOnChange} value={(dimensions && dimensions.angle) || 90} style={{border: '1px solid black' ,borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
      </div>
    </div>
  );
};

export default Dimensions;
