export function calculateDimensions (activeEvents) {
    const dimensions = {
        x : 0,
        y : 0,
        angle : 90
    }

    const control = (eventId) => {
        switch(eventId) {
            case ('motion-move10steps') : {
                dimensions.x += 10
                break;
            }
            case ('motion-turn15DegreesAntiClock') : {
                dimensions.angle -= 15
                break;
            }
            case ('motion-turn15DegreesClock') : {
                dimensions.angle += 15
                break;
            }
            default : {}
        }
    }
    
    // eslint-disable-next-line array-callback-return
    activeEvents.map((eventBlocks) => {
        return (
            eventBlocks.map((event) => {
                control(event.id)
            })
        )
    })
    return dimensions;
}

export const getAnimationsString = (dimensions) => {
    let baseString = 'transform transition delay-1500'
    
    const xData = dimensions && dimensions.x / 10;
    const anglesData = dimensions && ((dimensions.angle - 90) / 15);
    const animationsStrings = {
        xClass : `ml-${xData*4}`,
        yClass : 'ml-4',
        angleClass : `${anglesData<0 ? '-' : ''}rotate-${Math.abs(anglesData*15)}`
    }

    if(dimensions && dimensions.x > 0){
        baseString = `${baseString} ${animationsStrings.xClass}`
    }
    if(dimensions && dimensions.angle !== 180){
        baseString = `${baseString} ${animationsStrings.angleClass}`
    }
    
    return baseString;
  }

export const getBlockDetails = (id) => {
    switch(id) {
        case 'event-Flag' : {
            return({
                textOne : 'When',
                textTwo : 'Clicked',
                iconName: 'flag',
                iconClass: 'text-green-600 mx-2'
            })
        }
        case 'event-spriteClick' : {
            return({
                textOne : 'When this sprite clicked',
                textTwo : '',
                iconName: ''
            })
        }
        case 'motion-move10steps' : {
            return({
                textOne : 'Move 10 steps',
                textTwo : '',
                iconName: ''
            })
        }
        case 'motion-turn15DegreesAntiClock' : {
            return({
                textOne : 'Turn',
                textTwo : '15 Degrees',
                iconName: 'undo',
                iconClass : 'text-white mx-2'
            })
        }
        case 'motion-turn15DegreesClock' : {
            return({
                textOne : 'Turn',
                textTwo : '15 Degrees',
                iconName: 'redo',
                iconClass: 'text-white mx-2'
            })
        }
    }
    return ({
                textOne : '',
                textTwo : '',
                iconName: ''
            })
}