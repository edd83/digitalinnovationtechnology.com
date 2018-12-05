import * as React from 'react'
const styles = require('./Circle.scss');
const lol = require('../../static/svg/timer.svg');

const Circle = ({ source, text }) => {
    return (
        <div className={styles.circle}>
            <div className={styles.circleImage}>
                <img src={lol} alt=""/>
            </div>
            <div>
                <h2>{text}</h2>
            </div>
        </div>
    )
}

export default Circle;
