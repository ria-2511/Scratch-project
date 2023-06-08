export function calculateDimensions (activeEvents) {
    const dimensions = {
        x : 0,
        y : 0,
        angle : 180
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
        console.log(dimensions && dimensions.angle);
        const anglesData = dimensions && (Math.abs(180 - dimensions.angle) / 15);
        const animationsStrings = {
        xClass : `ml-${xData*4}`,
        yClass : 'ml-4',
        angleClass : `rotate-${anglesData*15}`
        }

        if(dimensions && dimensions.x > 0){
        baseString = `${baseString} ${animationsStrings.xClass}`
        }
        if(dimensions && dimensions.angle !== 180){
        baseString = `${baseString} ${animationsStrings.angleClass}`
        }
    
    console.log(baseString);
    return baseString;
  }