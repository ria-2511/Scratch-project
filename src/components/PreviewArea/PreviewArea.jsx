import React from "react";
import CatSprite from "../../components/CatSprite";
import { getAnimationsString } from "../../helpers/basicHelpers";

const PreviewArea = () => {
  return (
    <div className="flex-none h-full p-2">
      <CatSprite/>
    </div>
  );
};

export default PreviewArea;
