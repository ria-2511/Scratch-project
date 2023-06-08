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
        }
    }
    
    activeEvents.map((event) => {
        control(event)
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