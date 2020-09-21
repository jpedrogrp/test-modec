import React from 'react'
import classes from './SideResults.module.css'
import TempTooltip from '../TempTooltip/TempTooltip'
import QueueAnim from 'rc-queue-anim'

const stepOneTxt = 'Select a place in the map'
const stepTwoTxt = 'Now click on the search button'
const resultTxt = 'We found these locations near the chosen point'

const SideResults = (props) =>{
    return(        
        <div className={classes.cities} >            
            <h1 className={classes.cities}>{!props.geoData?stepOneTxt:props.cities == null ?stepTwoTxt:resultTxt}</h1>
            <div>                         
                {props.cities && props.cities.map(
                    (cities) =>{
                    return(
                        <div >                            
                            <QueueAnim ease={[[0.175, 0.885, 0.32, 1.275]]}>   
                                <div key={cities.id} className={classes.places}>
                                    <TempTooltip cities={cities}> {cities.name} </TempTooltip>
                                </div>                                                        
                            </QueueAnim>
                        </div>
                        )
                    })}            
            </div>
        </div>

    )
}

export default SideResults