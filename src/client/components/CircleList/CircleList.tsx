import * as React from "react";
import Circle from '../Circle/Circle';


const styles = require('./CircleList.scss');

const CircleList = ({ svgs }) => {
    const circleArray = svgs.map((circle, id) => {
        return <Circle 
            key={id} 
            source={svgs[id].source} 
            text={svgs[id].text}
        />
    })
    return (
        <div className={styles.circleList}>
           {circleArray}
        </div>
    )
}

export default CircleList