import React, { useContext } from "react";
import CatSprite from "../../components/CatSprite";
import { ActiveEventsContext } from "../../context/ActiveEventsContext";
import { getAnimationsString } from "../../helpers/basicHelpers";

const PreviewArea = () => {
  const { dimensions } = useContext(ActiveEventsContext);

  const className = getAnimationsString(dimensions);

  return (
    <div className="flex-none h-full p-2">
      <CatSprite className={className}/>
    </div>
  );
};

export default PreviewArea;
