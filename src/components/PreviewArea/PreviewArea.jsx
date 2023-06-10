import React from "react";
import CatSprite from "../../components/CatSprite";
import { getAnimationsString } from "../../helpers/basicHelpers";

const PreviewArea = ({dimensions}) => {
  const className = getAnimationsString(dimensions);

  return (
    <div className="flex-none h-full p-2">
      <CatSprite className={className}/>
    </div>
  );
};

export default PreviewArea;
