import React,{ useState } from "react";
import {Home} from '../components/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function GetInfo () {

    function fnc(arg) {
       getPlace(arg)
    }
    //-----------------------------------------
    //HL5       get coordinate & weather         
    //-----------------------------------------
    const [location, setLocation] = useState({})
    const [weather, setWeather] = useState({});
    const [other, setOther] = useState({});
    const [err, setErr] = useState(false)
    const getPlace = async (arg) => {
       
        try{ 
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${process.env.REACT_APP_WEATHER_KEY1}&units=metric`

            const res = await fetch(url);
            const data = await res.json();

            const {lon, lat} = data.coord;
            const {main: mood,description: des} = data.weather[0];
            const {temp,temp_min,temp_max,pressure,humidity,feels_like}= data.main
            var visibility = data.visibility;
            const {speed,deg} = data.wind;
            const clouds = data.clouds.all;
            const {sunrise,sunset,country: country_code} = data.sys;
            (visibility >= '10000')?visibility='>10':visibility=visibility/1000;
            
            if(!data.error){
                getTime(lat,lon);
                getLocation(country_code,lat,lon)
                setWeather({mood,des,temp,temp_min,temp_max,feels_like,pressure,humidity,visibility,speed,deg,clouds,sunrise,sunset,lat,lon})
            }
        } 
        catch(error) {
            setErr(true)
            toast("⚠️ Invalid place")
            console.log(error)
        }
    }
    //---------------------------------
    //HL4       get location           
    //---------------------------------
    const getLocation = async (country_code,lat,long) => {
        try{
            let url1 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
            let url2 = `https://api.bigdatacloud.net/data/country-info?code=${country_code}&key=${process.env.REACT_APP_COUNTRY_KEY1}&localityLanguage=en`

            const res1 = await fetch(url1);
            const res2 = await fetch(url2);

            const data1 = await res1.json();
            const data2 = await res2.json();

            const {name: country, description: country_des} = data1.localityInfo.administrative[0]
            const {name: state, description: state_des} = data1.localityInfo.administrative[1]
            const {name: county, description: county_des} = data1.localityInfo.administrative[2]
            const locality = data1.locality;
            const {nativeName: lang} = data2.isoAdminLanguages[0];
            const {name: currency, code: currency_code} = data2.currency;
            const {value: incomeLevel} = data2.wbIncomeLevel;
            const dialCode = data2.callingCode;
            const isoName = data2.isoNameFull;

            setLocation({locality,country,country_des,state,state_des,county,county_des,lang,currency,currency_code,incomeLevel,dialCode,isoName})

        } 
        catch(error) {
            console.log(error)
        }
    }
    //---------------------------------
    //HL2       get Time               
    //---------------------------------
    const getTime = async (lat,long) => {
    
        try{
            let url = `https://api.ipgeolocation.io/timezone?&lat=${lat}&long=${long}&apiKey=${process.env.REACT_APP_TIME_KEY1}`;

            const res = await fetch(url);
            const data = await res.json();
            const {timezone,timezone_offset: gmt,date_time_txt,time_24: time,year} = data
            const time_arr = time.split(':')
            const imgParam = time_arr[0];
            var img = ''
            if(imgParam >= 4 && imgParam < 9) {
                img='morning'
            } else if (imgParam >= 9 && imgParam < 16) {
                img='day'
            } else if (imgParam >= 16 && imgParam < 20) {
                img='evening'
            } else {
                img='night'
            }
            const d = date_time_txt.split(',')
            const day = `${d[0]}${d[1]}, ${year}`
            var dayNight = '';
            (time_arr[0] >= 4 && time_arr[0] < 16)?dayNight='d':dayNight='n';
            setOther({timezone,gmt,day,img,dayNight});
        }
        catch(err) {
            console.log(err)
        }
    }

    
    return (
        <>
            <Home btn={fnc} 
                weather={weather}
                other={other}
                location={location}
            />
           {err && <ToastContainer position="bottom-center"/> }
        </>
    
    )

}