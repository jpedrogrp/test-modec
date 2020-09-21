import React from 'react'
import classes from './OtherPlaces.module.css'
import Tooltip from '../UI/Tooltip/Tooltip'



const text = <p className={classes.holder}>Select a place in the map and use search to look at the temperature of the 15 places near the chosen point</p> 

//fazer steps na lateral

const otherPlaces = (props) =>{

    console.log("cities other places ",props.cities)

    return(
        <div>
            <h1 className={classes.Result}>
                {props.cities == null ?
                 text : 
                 props.cities.map(
                    (cities) =>{
                    return(
                        <div key={cities.id} className={classes.Places}>
                            <Tooltip cities={cities}>{cities.name}</Tooltip>
                        </div>)
                    })}
            </h1>
        </div>
    )
}

export default otherPlaces