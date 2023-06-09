import React, { useContext } from "react";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";
import { eventIds, motionIds } from "../../constants/basic";

const MidArea = ({setActiveEvents}) => {
  const { activeEvents } = useContext(ActiveEventsContext);
  const currentEvents = [...activeEvents];

  // when the element over the drag component to add a shape shadow to join elements
  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  const rulesCheck = (activeElement) => {
    if (activeEvents.length === 0 && eventIds.includes(activeElement.id)) {
      return true;
    }
    if (
      activeEvents.length > 0 &&
      motionIds.includes(activeElement.id) &&
      eventIds.includes(activeEvents[0])
    ) {
      return true;
    }
    return false;
  };

  // when the element is dropped into the zone
  const onDrop = (event) => {
    event.preventDefault();
    // grabbing the id of the dropped ID
    const droppedElementId = event.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(droppedElementId);
    const isEvent = eventIds.includes(droppedElementId)

    if (rulesCheck(droppedElement)) {
      const clone = droppedElement.cloneNode(true);
      clone.id = `clone_${droppedElementId}`
      clone.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
      })
      if(isEvent) {
        clone.className="flex flex-row w-60 flex-wrap bg-yellow-500 text-white px-2 py-1 text-sm cursor-pointer"
      }
      else {
        clone.className="flex flex-row w-60 flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
      }
      event.target.appendChild(clone);
      currentEvents.push(droppedElementId)
      setActiveEvents(currentEvents)
  }}


  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      id="dropArea"
      className="flex-1 h-full overflow-auto"
    >
      <span className="flex justify-center">Mid Area</span>
    </div>
  )
};

export default MidArea;
