import * as React from 'react'
const development = require('../../static/svg/development.svg')
const styles = require('./Circle.scss');

const Circle = (props) => {

    return (
        <div className={styles.circle}>
            <div className={styles.circleImage}>
                <img src={props.source} alt=""/>
            </div>
            <div>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}

export default Circle;