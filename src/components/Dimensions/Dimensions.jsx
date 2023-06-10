import React, { useEffect, useState } from "react";
import { getAnimationsString } from "../../helpers/basicHelpers";

const Dimensions = ({dimensions,setSpriteCoordinates,setSpriteClassName}) => {
  const sprite = document.getElementById('sprite')
  const [xValue , setXValue] = useState(0);
  const [yValue , setYValue] = useState(0);
  const [angleValue , setAngleValue] = useState(90);

  const handleXOnChange = (e) => {
      const value = e.target.value;
      setXValue(value)
  } 

  useEffect(() => {
    if(dimensions){
      setSpriteClassName(getAnimationsString(dimensions));
    }
  }, [dimensions])
  
  const onKeyDownX = (e) => {
    if(e.key === 'Enter' && xValue){
      setSpriteCoordinates({y:sprite.offsetTop, x:Number(xValue) + sprite.offsetLeft})
    }
  }

  const onKeyDownY = (e) => {
    if(e.key === 'Enter' && yValue){
      setSpriteCoordinates({y:sprite.offsetTop + Number(yValue), x:sprite.offsetLeft})
    }
  }

  const onKeyDownAngle = (e) => {
    if(e.key === 'Enter' && angleValue){
      setSpriteClassName(`rotate-[${angleValue}deg]`)
    }
  }

  const handleYOnChange = (e) => {
    const value = e.target.value;
    setYValue(value)
  }

  const handleAngleOnChange = (e) => {
    const value = e.target.value;
    setAngleValue(value)
  }

  return (
    <div className="flex flex-col">
      <span className="text-lg p-2">Dimensions for the Pointer</span>
      <div className="p-2 flex flex-col">
        <span>Directions:</span>
        <span style={{padding:'3px'}}>x = <input onKeyDown={onKeyDownX} onChange={handleXOnChange} defaultValue={(dimensions && dimensions.x) || 0} style={{border: '1px solid black',borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
        <span style={{padding:'3px'}}>y = <input onKeyDown={onKeyDownY} onChange={handleYOnChange} defaultValue={(dimensions && dimensions.y) || 0} style={{border: '1px solid black' ,borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
        <span style={{padding:'3px'}}>Directions = <input onKeyDown={onKeyDownAngle} onChange={handleAngleOnChange} defaultValue={(dimensions && dimensions.angle) || 90} style={{border: '1px solid black' ,borderRadius: '6px', width: '50px', textAlign: 'center', color: 'blue'}}></input></span>
      </div>
    </div>
  );
};

export default Dimensions;
