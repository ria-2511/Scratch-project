import React, { useState } from 'react'
import Icon from "../components/Icon";
import { eventIds, motionIds } from '../constants/basic';

const GetBlocks = ({x,y,id, textOne , textTwo , iconName}) => {
    const blockBackground = eventIds.includes(id) ? 'bg-yellow-500' : 'bg-blue-500';
    const isEvent = eventIds.includes(id)
    const [shadowUp , setShadowUp] = useState('');
    const [shadowDown , setShadowDown] = useState('');

    const onDragOverUp = (e) => {
        e.preventDefault();
        setShadowUp('bg-slate-200')
    }

    const onDragLeaveUp = (event) => {
        event.preventDefault();
        console.log('gone');
        setShadowUp('')
    }
    const onDragOverDown = (e) => {
        e.preventDefault();
        setShadowDown('bg-slate-200')
    }

    const onDragLeaveDown = (event) => {
        event.preventDefault();
        console.log('gone');
        setShadowDown('')
    }

    const onDropDown = (e) => {
        const droppedElementId = e.dataTransfer.getData("text/plain");
        console.log(droppedElementId,e.target.previousElementSibling);
        setShadowUp('')
        setShadowDown('')
    }

    const onDropUp = (e) => {
        console.log(e);
    }

    return (
            <>
            <div onDrop={onDropUp} className={`hover:w-20 h-3 ${shadowUp}`} onDragLeave={onDragLeaveUp} onDragOver={onDragOverUp} id={`droppableAreaUp_${id}`} />
                { <div id={id} draggable='true' className={`flex flex-row text-white ${blockBackground} px-2 py-1 text-sm cursor-pointer`}>
                    {textOne}
                    {iconName ? <Icon name={iconName} size={15} className="text-green-600 mx-2"/> : <></>}
                    {textTwo}
                </div>}
            <div className={`hover:w-20 h-10 ${shadowDown} `} onDrop={onDropDown} onDragLeave={onDragLeaveDown} onDragOver={onDragOverDown} id={`droppableAreaDown_${id}`} />
      </> 
    )
}

export default GetBlocks;
