import React, { useContext, useState } from "react";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";
import SetOfBlocks from "../Block/SetofBlocks";

const MidArea = () => {
  const { activeEvents,setActiveEvents, spriteIndex, setSpriteIndex } = useContext(ActiveEventsContext);
  // when the element over the drag component to add a shape shadow to join elements
  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  // when the element is dropped into the zone
  const onDrop = (event) => {
    event.preventDefault();
    // grabbing the id of the dropped ID
    const droppedElementId = event.dataTransfer.getData("text/plain");
    const newBlockObj = {
      spriteNum: spriteIndex,
      x: event.screenX - 100,
      y: event.screenY - 180,
      className: `absolute`,
      id: droppedElementId
    }

    setSpriteIndex((index) => index + 1)
    const currentEvents = JSON.parse(JSON.stringify(activeEvents));
    const newBlocksArr = [newBlockObj]
    currentEvents.push(newBlocksArr);

    setActiveEvents(currentEvents);
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      id="dropArea"
      className="flex-1 h-full overflow-auto"
    >
      <span className="flex">
        {activeEvents.map((blocks,index) => {
          return (
            <SetOfBlocks key={index} blocks={blocks} blockIndex={index} />
          )
        })}
      </span>
    </div>
  )
};

export default MidArea;
