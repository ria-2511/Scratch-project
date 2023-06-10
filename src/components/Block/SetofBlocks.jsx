import React from 'react';
import Block from './Block';

const SetOfBlocks = ({blocks,blockIndex}) => {
    return (
        <>
            {blocks.map((block,index) => {
                return(
                    <Block
                        blockIndex={blockIndex}
                        index={index}
                        key={block.id}
                        x={block.x}
                        y={block.y}
                        id={`${block.id}`}
                        name={`${block.id}.${index}`}
                        className={block.className}
                    />
                )
            })}
        </>
    )
}

export default SetOfBlocks;