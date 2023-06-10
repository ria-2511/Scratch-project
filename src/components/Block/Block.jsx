import React, { useContext, useState } from 'react'
import { getBlockDetails } from '../../helpers/basicHelpers';
import { eventIds } from '../../constants/basic';
import Icon from '../Icon';
import { ActiveEventsContext } from '../../context/ActiveEventsContext';

const Block  = ({blockIndex,index,x,y,id,className}) => {
    const {textOne , textTwo , iconName, iconClass} = getBlockDetails(id);
    const { activeEvents, setActiveEvents } = useContext(ActiveEventsContext);
    const blockBackground = eventIds.includes(id) ? 'bg-yellow-500' : 'bg-blue-500';
    const [shadowUp , setShadowUp] = useState('');
    const [shadowDown , setShadowDown] = useState('');

    const onDragOverUp = (e) => {
        e.preventDefault();
        setShadowUp('bg-slate-200')
    }

    const onDragLeaveUp = (event) => {
        event.preventDefault();
        setShadowUp('')
    }
    const onDragOverDown = (e) => {
        e.preventDefault();
        setShadowDown('bg-slate-200')
    }

    const onDragLeaveDown = (event) => {
        event.preventDefault();
        setShadowDown('')
    }

    const onDropDown = (e) => {
        e.stopPropagation();
        const droppedElementId = e.dataTransfer.getData("text/plain");
        setShadowUp('')
        setShadowDown('')
        
        const newBlockObj = {
            spriteNum: activeEvents[1].spriteNum,
            x: activeEvents[blockIndex][index].x,
            y: activeEvents[blockIndex][index].y + e.target.clientHeight - 12,
            className: `absolute`,
            id: droppedElementId
        }

        const currentEvents = JSON.parse(JSON.stringify(activeEvents));
        currentEvents[blockIndex].push(newBlockObj);

        setActiveEvents(currentEvents);
    }

    const onDropUp = (e) => {
    }

    return (
        <>
            <div style={{top:`${y}px`,left:`${x}px`}} id={id} className={className === '' ? 'invisible': 'absolute'}>
                <div onDrop={onDropUp} className={`hover:w-20 h-3 ${shadowUp}`} onDragLeave={onDragLeaveUp} onDragOver={onDragOverUp} id={`droppableAreaUp_${id}`} />
                { <div id={id} draggable='true' className={`flex flex-row text-white ${blockBackground} px-2 py-1 text-sm cursor-pointer`}>
                    {textOne}
                    {(iconName && iconClass) ? <Icon name={iconName} size={15} className={iconClass}/> : <></>}
                    {textTwo}
                </div>}
            <div className={`hover:w-20 h-10 ${shadowDown} `} onDrop={onDropDown} onDragLeave={onDragLeaveDown} onDragOver={onDragOverDown} id={`droppableAreaDown_${id}`} />
            </div>
        </>
    )
}

export default Block;