import React from 'react'
import { Tooltip, Button } from 'antd';
import classes from './TempTooltip.module.css'
import 'antd/dist/antd.css';

const TempTooltip = (props) => {

    const text = (
        <div>
            <p>Temperature</p>
            <p>min: {Math.round(props.cities.main.temp_min-273)} ºC</p>
            <p>max: {Math.round(props.cities.main.temp_max-273)} ºC</p>
        </div>);

    const buttonWidth = "80%";
    return(
        <div >
            <div className={classes.tooltip} style={{ color: "white", width: buttonWidth, marginLeft: "10%", float: 'left' }}>
                <Tooltip placement="left" title={text}>
                    <Button block className={classes.btn}>{props.children}</Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default TempTooltip