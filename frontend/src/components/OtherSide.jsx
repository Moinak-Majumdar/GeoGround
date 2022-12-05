import { useState, useEffect } from "react";

const OtherSide = ({ mood, dayNight, weather }) => {
  const [icon, setIcon] = useState("");
  const [day, togDay] = useState(true);
  
  useEffect(() => {
    if (dayNight === "d") {
      if (mood) {
        switch (mood) {
          case "Clouds":
            setIcon("wi wi-day-cloudy");
            break;
          case "Haze":
            setIcon("wi wi-day-haze");
            break;
          case "Clear":
            setIcon("wi wi-horizon-alt");
            break;
          case "Tornado":
            setIcon("wi wi-tornado");
            break;
          case "Sand":
            setIcon("wi wi-cloudy-gusts");
            break;
          case "Rain":
            setIcon("wi wi-day-rain-mix");
            break;
          case "Snow":
            setIcon("wi wi-day-snow-wind");
            break;
          case "Fog":
            setIcon("wi wi-day-fog");
            break;
          case "Dust":
            setIcon("wi wi-dust");
            break;
          case "Smoke":
            setIcon("wi wi-smoke");
            break;
          case "Mist":
            setIcon("wi wi-day-showers");
            break;
          case "Drizzle":
            setIcon("wi wi-day-storm-showers");
            break;
          case "Thunderstorm":
            setIcon("wi wi-day-thunderstorm");
            break;
          default:
            setIcon("wi wi-hot");
            break;
        }
      }
    }
    if (dayNight === "n") {
      togDay(false)
      if (mood) {
        switch (mood) {
          case "Clouds":
            setIcon("wi wi-night-alt-cloudy");
            break;
          case "Haze":
            setIcon("wi wi-night-alt-cloudy-windy");
            break;
          case "Clear":
            setIcon("wi wi-night-clear");
            break;
          case "Tornado":
            setIcon("wi wi-tornado");
            break;
          case "Sand":
            setIcon("wi wi-cloudy-gusts");
            break;
          case "Rain":
            setIcon("wi wi-night-rain");
            break;
          case "Snow":
            setIcon("wi wi-night-snow-wind");
            break;
          case "Fog":
            setIcon("wi wi-night-fog");
            break;
          case "Dust":
            setIcon("wi wi-dust");
            break;
          case "Smoke":
            setIcon("wi wi-smoke");
            break;
          case "Mist":
            setIcon("wi wi-night-showers");
            break;
          case "Drizzle":
            setIcon("wi wi-night-storm-showers");
            break;
          case "Thunderstorm":
            setIcon("wi wi-night-thunderstorm");
            break;
          default:
            setIcon("wi wi-night-alt-partly-cloudy");
            break;
        }
      }
    }
  }, [mood, dayNight]);
 
  const direction = {
    transform: `rotate(${weather.deg}deg)`
  }

  let rise_sec = weather.sunrise;
  let rise = new Date(rise_sec * 1000)
  const sunrise = `${rise.getHours()}:${rise.getMinutes()}:${rise.getSeconds()}`
  let set_sec = weather.sunset;
  let set = new Date(set_sec * 1000)
  const sunset = `${set.getHours()}:${set.getMinutes()}:${set.getSeconds()}`
  return (
    <>
      <section className="w-full">
        <div className="flex items-center justify-center mb-4">
          <h1 className="txt3 font-bold self-center text-2xl whitespace-nowrap animate-bounce">
            <span className="text-indigo-900">Location</span>
            <span className="text-pink-600">Stack</span>
          </h1>
        </div>
        {/* icon */}
        <div className="h-auto w-full flex justify-center px-6 py-4 text-6xl animate-pulse">
          <i className={`text-indigo-700  ${icon}`}
          ></i>
        </div>
        <h1 className="txt3 font-extrabold text-2xl capitalize text-pink-700 text-center animate-pulse">{weather.des}</h1>
        {/* temparature */}
        <div className="mt-2 flex justify-between px-4">
            <div>
              <h1 className="txt2 font-extrabold capitalize text-cyan-700">Avg:</h1>
              <h1 className="txt2 text-3xl font-extrabold text-violet-800">{weather.temp}&deg;c</h1>
            </div>
            <div>
              <h1 className="txt2 font-extrabold capitalize text-cyan-700">Feels Like:</h1>
              <h1 className="txt2 text-3xl font-extrabold text-pink-500">{weather.feels_like}&deg;c</h1>
            </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
            <div>
                {/* tempareture min max*/}
                <div className='inline-flex justify-center items-center txt2'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-3'>
                        <i className="wi wi-thermometer text-indigo-700"></i>
                    </p>
                    <h2 className="text-indigo-800 font-semibold">{"Min: "+weather.temp_min}&deg;c<br/>{"Max: "+weather.temp_max}&deg;c</h2>
                </div>
                {/* pressure */}
                <div className='inline-flex justify-center items-center txt2'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                        <i className="wi wi-barometer text-indigo-700"></i>
                    </p>
                    <h2 className="text-indigo-800 font-semibold">{`Pressure: ${weather.pressure}hPa`}</h2>
                </div>
                {/* clouds */}
                <div className='inline-flex justify-center items-center txt2'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                        <i className={day?"wi wi-day-cloudy-high text-indigo-700":"wi wi-night-cloudy-high text-indigo-700"}></i>
                    </p>
                    <div className="text-indigo-800 font-semibold">
                        <h1>{`Cloudiness: ${weather.clouds}%`}</h1>
                        <h1>{`Visibility ${weather.visibility}KM`}</h1>
                    </div>
                </div>
            </div>
            <div>
                {/* Himudity */}
                <div className='inline-flex justify-center items-center txt2'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                        <i className="wi wi-humidity text-indigo-700"></i>
                    </p>
                    <h2 className="text-indigo-800 font-semibold">{`humidity: ${weather.humidity}%  `}</h2>
                </div>
                {/* wind */}
                <div className='inline-flex justify-center items-center txt2'>
                    <p className='text-3xl h-full flex justify-center items-center my-4 mx-2'>
                      <i className="wi wi-wind-direction text-indigo-700" style={direction}></i>
                    </p>
                    <div className="text-indigo-800 font-semibold">
                        <h1>{`Wind speed: ${weather.speed} m/s`}</h1>
                        <h1>{`At: ${weather.deg}`}&deg;N</h1>
                    </div>
                </div>
                <div className='h-16'></div>
            </div>
        </div>
        <div className=" flex flex-col">
            <div className='inline-flex items-center txt2'>
                <p className='text-3xl h-full flex justify-center items-center my-2 mx-2'>
                    <i className="wi wi-sunrise" style={{color:'#FFF200'}}></i>
                </p>
                <h2 className="txt3 font-semibold">
                  <span className="txt2 font-semibold" style={{color:'#FFF200'}}>Sunrise:</span>{` ${sunrise}`}
                </h2>
            </div>
            <div className='inline-flex items-center txt2'>
                <p className='text-3xl h-full flex justify-center items-center my-2 mx-2'>
                    <i className="wi wi-sunset" style={{color:'#F98404'}}></i>
                </p>
                <h2 className="txt3 font-semibold">
                  <span className="txt2 font-semibold" style={{color:'#F98404'}}>Sunset:</span>{` ${sunset} `}
                </h2>
            </div>
        </div>
        <div className="mt-4 flex flex-col">
          <h1 className="text-xl">
            <span className="font-extrabold txt2 mr-2 text-blue-900">
              Latitude:
            </span>
            <span className="txt1">{weather.lat}&deg;</span>
          </h1>
          <h1 className="text-xl">
            <span className="font-extrabold txt2 mr-2 text-blue-900">
              Longitude:
            </span>
            <span className="txt1">{weather.lon}&deg;</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export { OtherSide };
