import axios from 'axios';

const WEATHER_KEY = '406468179e9fac175e2f5b7b2ceb3ab3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},ie`;
    const request = axios.get(url);

    console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}