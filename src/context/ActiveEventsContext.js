import { createContext } from "react";

export const ActiveEventsContext = createContext({
  activeEvents: [[{
    spriteNum: 0,
    className : '',
    x:0,
    y:0,
    id:''
  }]],
  spriteIndex: 0,
  setActiveEvents: () => {},
  setSpriteIndex : (index) => {index++},
  spriteClassName: '',
  spriteCoordinates: {
    x:undefined,
    y:undefined
  }
});
