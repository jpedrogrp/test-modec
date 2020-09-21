import React, { useCallback, useState, useRef } from 'react'
import {
    GoogleMap, 
    useLoadScript, 
    Marker,
    InfoWindow 
} from "@react-google-maps/api"
import mapStyles from './mapsStyles'

const mapContainerStyle = {    
    height: "100vh",
}

const center = {
    lat: -23.5505,
    lng: -46.6333,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const libraries = ["places"]; //avoid uncessary render, and avoid misplace of map

const Map = (props) =>{

    const [pin, setPin] = useState([])
    const [selected, setSelected] = useState(null);


    const onMapClick = useCallback((event) =>{
        console.log(event)
        setSelected(null)
        props.setCities(null)
        setPin(() => [
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                coord: (event.hb.x + event.hb.y),
            }])

        const geoData = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        }
        props.setGeoData(geoData)
    },[props])

    const mapRef = useRef();
    const onMapLoad = useCallback((map)=>{
        mapRef.current = map;
    },[])


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={9} 
                center={center} 
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
                >
                {pin.map(pin => <Marker 
                key={pin.coord} 
                position={{lat:pin.lat, lng:pin.lng}}
                icon={{
                    url:'./temperature.png',
                    scaledSize: new window.google.maps.Size(50, 50),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(10, 25)
                }}
                    onClick = {()=>{
                    setSelected(pin)
                    }} 
                />)}
                {selected ? 
                (<InfoWindow 
                    position={{lat:selected.lat, lng: selected.lng}} 
                    onCloseClick={()=>{setSelected(null)}}>
                    {props.cities == null ? 
                        <p>Use search for looking at the temperature today</p> : 
                        <div><h2>Temperature</h2>
                        <h3>{props.cities[0].name}</h3>
                        <p>min: {Math.round(props.cities[0].main.temp_min-273)} ºC</p>
                        <p>max: {Math.round(props.cities[0].main.temp_max-273)} ºC</p>
                        </div>} 
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )
}

export default Map