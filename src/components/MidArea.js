import React, { useEffect } from "react";

export default function MidArea() {
  // when the element over the drag component to add a shape shadow to join elements
  const onDragOver = (event) => {
    event.preventDefault();
  }

  // when the element is dropped into the zone
  const onDrop = (event) => {
    event.preventDefault();
    // grabbing the id of the dropped ID
    const droppedElementId = event.dataTransfer.getData("text/plain")
    const droppedElement = document.getElementById(droppedElementId);
    const copyOfDroppedElement = droppedElement.cloneNode(true);
    document.getElementById('dropArea').appendChild(copyOfDroppedElement)
  }

  return <div onDrop={onDrop} onDragOver={onDragOver} id="dropArea" className="flex-col h-full overflow-auto">{"mid area"}</div>;
}
