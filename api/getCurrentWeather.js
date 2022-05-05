const apiKey = '40a5f7559101e8312445dfae9a9b0db1';
const url = (params) => {
    if (typeof params === 'string') {
        return `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=${apiKey}`;
    }
    return `http://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.log}&appid=${apiKey}`
}
export const getResult = async (params) => {
    const axios = require('axios');
    let results = [];
    await axios.get(url(params)).then((response) => {
        const data = response.data
        const locationName = (data.sys.country + ', ' + ' ' + data.name)
        const temperatureMin = data.main.temp_min
        const temperatureMax = data.main.temp_max
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currentTemperature = data.main.temp
        results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity];
    }).catch(err => console.log(err));
    console.log(results);
    return results;
}
