import * as React from "react";
import Circle from '../Circle/Circle';


const styles = require('./CircleList.scss');

const CircleList = ({ svgs }) => {
    const circleComponent = svgs.map((circle, i) => {
        return <Circle source={svgs[i].source} text={svgs[i].text}/>
    })
    return (
        <div className={styles.circleList}>
           {circleComponent}
        </div>
    )
}

export default CircleList