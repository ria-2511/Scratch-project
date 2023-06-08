import React from "react";
import Icon from "../Icon";

const Sidebar = () => {
  const OnElementDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const onDragOver = (event) => {
    // add the delete functionality
  };

  return (
    <div
      id="sidebar"
      className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
    >
      <div className="font-bold"> {"Events"} </div>
      <div
        draggable="true"
        onDragStart={OnElementDrag}
        onDragOver={onDragOver}
        id="event-Flag"
        className="itemDrag flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When "}
    <Icon name="flag" size={15} className="text-green-600 mx-2" />
    {"clicked"}
      </div>
      <div
      draggable="true"
      onDragStart={OnElementDrag}
      onDragOver={onDragOver}
        id="event-spriteClick"
        className="itemDrag flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
      draggable="true"
      onDragStart={OnElementDrag}
      onDragOver={onDragOver}
        id="motion-move10steps"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Move 10 steps"}
      </div>
      <div
      draggable="true"
      onDragStart={OnElementDrag}
      onDragOver={onDragOver}
        id="motion-turn15DegreesAntiClock"
        className="itemDrag flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
      draggable="true"
      onDragStart={OnElementDrag}
      onDragOver={onDragOver}
        id="motion-turn15DegreesClock"
        className="itemDrag flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
    </div>
  );
};

export default Sidebar;
