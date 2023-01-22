async function getInfo(place) {
    
    let Response = {};

    try {
        let Weather = null
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${process.env.REACT_APP_WEATHER_KEY1}&units=metric`)

        const data = await res.json()

        let { coord, main, weather, visibility, sys, wind } = data
        const { lon, lat } = coord;
        const { main: mood, description: des } = weather[0];
        const { temp, temp_min, temp_max, pressure, humidity, feels_like } = main
        const { speed, deg } = wind;
        const clouds = data.clouds.all;
        const { sunrise, sunset, country: country_code } = sys;
        visibility >= '10000' ? visibility = '>10' : visibility = visibility / 1000;

        Weather = { mood, des, temp, temp_min, temp_max, feels_like, pressure, humidity, visibility, speed, deg, clouds, sunrise, sunset, lat, lon }

        const location = await getLocation(country_code, lat, lon);
        const time = await getTime(lat, lon);

        Response = { time, location, weather: Weather }

    } catch (Err) {
        console.log(Err)
        Response = { ...Response, weather: null }
    } finally {
        if (Response.location === null || Response.time === null || Response.weather === null) {
            return { error: 'place not found' }
        } else {
            return Response
        }
    }

    async function getTime(lat, long) {

        let Time = null
        try {
            const res = await fetch(`https://api.ipgeolocation.io/timezone?lat=${lat}&long=${long}&apiKey=${process.env.REACT_APP_TIME_KEY1}`)

            const data = await res.json()

            const { timezone, timezone_offset: gmt, date_time_txt, time_24, year } = data;

            const time = time_24;
            const time_arr = time.split(':')
            const imgParam = time_arr[0];
            let img, dayNight;

            if (imgParam >= 4 && imgParam < 9) {
                img = 'morning'
            } else if (imgParam >= 9 && imgParam < 16) {
                img = 'day'
            } else if (imgParam >= 16 && imgParam < 20) {
                img = 'evening'
            } else {
                img = 'night'
            }
            const d = date_time_txt.split(',')
            const day = `${d[0]}${d[1]}, ${year}`

            time_arr[0] >= 4 && time_arr[0] < 16 ? dayNight = 'd' : dayNight = 'n';

            Time = { timezone, gmt, day, img, dayNight }

            return Time
        }
        catch (err) {
            console.log(err)
            return null
        }

    }

    async function getLocation(country_code, lat, long) {

        let Location = null;

        try {
            const api1 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`);

            const data1 = await api1.json();
    
            const { locality, localityInfo } = data1;
            const { administrative } = localityInfo;
            const [ d1, d2, d3 ] = administrative;
            const { name: country, description: country_des } = d1;
            const { name: state, description: state_des } = d2;
            const { name: county, description: county_des } = d3;
            
            const api2 = await fetch(`https://api.bigdatacloud.net/data/country-info?code=${country_code}&key=${process.env.REACT_APP_COUNTRY_KEY1}&localityLanguage=en`);

            const data2 = await api2.json();

            const { nativeName: lang } = data2.isoAdminLanguages[0];
            const { name: currency, code: currency_code } = data2.currency;
            const { value: incomeLevel } = data2.wbIncomeLevel;
            const dialCode = data2.callingCode;
            const isoName = data2.isoNameFull;

            Location = { country, country_des, state, state_des, county, county_des, locality, lang, currency, currency_code, incomeLevel, dialCode, isoName}

            return Location
        } catch (error) {
            console.log(error)
            return null
        }

    }
}

export default getInfo