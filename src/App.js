import React, {useState}  from 'react';
import './App.css';
import Map from './components/Map/Map'
import Search from './components/Search/Search'
import SideResults from './components/SideResults/SideResults'
import { Row, Col } from 'antd'



function App() {

    const [geoData, setGeoData] = useState(null)
    const [cities, setCities] = useState(null)

    return (
        <div className='app'>
            <h1>Weather Control</h1>      
            <Row className='app-row'>
                <Col span={19}>
                    <Search geoData={geoData} setCities={setCities}/> 
                    <Map setGeoData={setGeoData} cities={cities} setCities={setCities}/>
                </Col>
                <Col span={5} className='results-col'>
                    <SideResults geoData={geoData} cities={cities}/>           
                </Col>
            </Row>
        </div>
    )
}


export default App
