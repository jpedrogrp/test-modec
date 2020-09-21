import React from 'react'
import classes from './Search.module.css'
import Axios from 'axios'


const Search = (props) =>{

    const searching = async () =>{
    try{
        const {data} = await Axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${props.geoData.lat}&lon=${props.geoData.lng}&cnt=15&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        props.setCities(data.list)
    }
    catch(error){
    console.log(error)
    }}

    return(
        <div>
            <button 
                className={classes.search} 
                onClick={searching} 
                disabled={!props.geoData}
                >
                <img src={props.geoData?'./search.png':'./search_disabled.png'} alt='search' width='70' height='70'/>
            </button>
            
        </div>
    )
}

export default Search