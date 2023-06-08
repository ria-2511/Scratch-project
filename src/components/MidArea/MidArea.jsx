import React, { useContext } from "react";
import { events, motions } from "../../constants/basic";
import { ActiveEventsContext } from "../../context/activeEventsContext";

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
    if (activeEvents.length === 0 && events.includes(activeElement.id)) {
      return true;
    }
    if (
      activeEvents.length > 0 &&
      motions.includes(activeElement.id) &&
      events.includes(activeEvents[0])
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

    if (rulesCheck(droppedElement)) {
      const clone = droppedElement.cloneNode(true);
      clone.id = `clone_${droppedElementId}`
      clone.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
      })
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
