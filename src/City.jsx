import React from 'react';

function City({ city }) {
    if (!city) {
        return <div>Loading...</div>; 
    }
    const { main, name, weather, coord } = city;
    

    if (!main || !name || !weather || !weather[0]|| !coord) {
        return <div>City data is incomplete</div>;
    }
    const{temp_max,temp_min,humidity}=main
    const{main:weatherMain,description,}=weather[0]
    const{lat,lon}=coord

    return (
        <div>
            <div>
        
                <h1>Max Temperature:{Math.floor(temp_max)}°C</h1>
                <h1>Min Temperature:{Math.floor(temp_min)}°C</h1>
                <h1>Humidity: {humidity}%</h1>
                <h1>Weather: {weatherMain} ({description})</h1>
                <h1>Latitude: {lat}</h1>
                <h1>Longitude: {lon}</h1>
            </div>
        </div>
    );
}

export default City;
