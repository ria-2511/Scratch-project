import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MidArea from "../MidArea/MidArea";
import Icon from "../Icon";
import PreviewArea from "../PreviewArea/PreviewArea";
import Dimensions from "../Dimensions/Dimensions";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";
import { calculateDimensions } from "../../helpers/basicHelpers";

const MainPage = () => {
  const [activeEvents, setActiveEvents] = useState([[{
    className : '',
    x:0,
    y:0,
    id:''
  }]]);
  const [dimensions, setDimensions] = useState({
    x:0,
    y:0,
    angle:90
  });
  const newDimensions = calculateDimensions(activeEvents)
  const [spriteClassName, setSpriteClassName] =  useState('')
  const [spriteCoordinates, setSpriteCoordinates] = useState({x:null,y:null})
  const [spriteIndex , setSpriteIndex] = useState(0);
  const doesIsSpriteExist = (activeEvents[0] === "event-spriteClick")

  const handleFlagClick = () => {
    if(activeEvents[1][0].id === 'event-Flag') {
      setDimensions(newDimensions);
    }
    else return;
  }

  if(doesIsSpriteExist){
    document.getElementById("clone_event-spriteClick").addEventListener('click',()=>{
      setDimensions(newDimensions)
    })
  }

  return (
    <ActiveEventsContext.Provider value={{ activeEvents,spriteClassName,spriteCoordinates,setActiveEvents, spriteIndex, setSpriteIndex }}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar /> <MidArea />
          </div>
          <div className="flex flex-col w-1/3 h-screen">
            <div onClick={handleFlagClick} id="greenFlag">
              <Icon
                name="flag"
                size={15}
                className="text-green-600 m-2 h-3/6 cursor-pointer"
              />
            </div>
            <div className="w-inherit h-3/6 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <div>
                <PreviewArea/>
              </div>
            </div>
            <div className="w-inherit h-2/6 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 mt-2">
              <Dimensions dimensions={dimensions} setSpriteClassName={setSpriteClassName} setSpriteCoordinates={setSpriteCoordinates} />
            </div>
          </div>
        </div>
      </div>
    </ActiveEventsContext.Provider>
  );
};

export default MainPage;
