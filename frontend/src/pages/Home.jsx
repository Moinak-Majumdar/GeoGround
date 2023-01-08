import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/home.css'
import { ImgSide } from '../components/ImgSide';
import { OtherSide } from '../components/OtherSide';
import { Svg1, Svg2 } from '../svg/svg';
import OtherSideLoader from '../components/OtherSideLoader';
import ImgSideLoader from '../components/ImgSideLoader';
import PlaceError from '../components/PlaceError';

const Home = () => {

  const [place, setPlace] = useState('palta')
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)
  const [time, setTime] = useState(null)
  const [error, setError] = useState(false)
  const [loading, IsLoading] = useState(true)

  async function getPlace(args) {
    IsLoading(true)

    const option = {
      method: 'GET',
      url: `https://geoground-api-sever.onrender.com/getInfo?place=${args}`,
    }
    await axios.request(option).then((res) => {
      const data = res.data;

      if (data.error) {
        setError(true)
        IsLoading(true)
      } else {
        setError(false)
        IsLoading(false)
        setLocation(data.location)
        setTime(data.time)
        setWeather(data.weather)
      }
    }).catch((errors) => {
      setError(false)
      console.log(errors)
    })
  }

  useEffect(() => {
    getPlace('palta')
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    IsLoading(true)
    getPlace(place)
  }

  function newPlace(args) {
    IsLoading(true)
    setError(false)
    setPlace(args)
    getPlace(args)
  }
  if (error) {
    return (
      <>
        <PlaceError place={place} search={newPlace} />
      </>
    )
  }

  return (
    <>
      <section className="flex justify-center mt-16 md:mt-24 p-4 h-auto">
        <div className="flex-1 h-full max-w-4xl mx-auto shadow-2xl shadow-slate-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className={`${loading ? 'day' : time.img} imgBg h-auto md:w-1/2`}>
              <div className='w-full flex justify-center'>
                <form className='w-72 bg-slate-200 bg-opacity-80 mt-8 rounded-lg flex justify-center py-2 px-3 shadow-2xl shadow-slate-500'
                  onSubmit={handleSubmit}>
                  <TextField label="Search Place" variant="standard"
                    value={place} onChange={(e) => { setPlace(e.target.value) }} required fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <button type='submit' className='cursor-pointer' aria-label='Search'>
                            <SearchIcon className='text-indigo-500' />
                          </button>
                        </InputAdornment>
                      ),
                      style: { fontSize: 18, fontWeight: 500 }
                    }}
                    InputLabelProps={{ style: { fontSize: 20, fontWeight: 600 } }}
                  />
                </form>
              </div>
              <div className='flex items-center justify-center min-h-[600px] p-6 sm:p-12'>
                {loading ? <OtherSideLoader /> : <ImgSide
                  day={time.day}
                  dayNight={time.dayNight}
                  timezone={time.timezone}
                  gmt={time.gmt}
                  location={location}
                />}
              </div>
            </div>
            <div className='flex justify-center items-center min-h-[600px] p-6 sm:p-12 md:w-1/2 bg-gradient-to-b from-zinc-200 to-slate-400'>
              {loading ? <ImgSideLoader /> : <OtherSide
                dayNight={time.dayNight}
                weather={weather}
              />}
            </div>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 right-0 opacity-90 -z-10">
        <Svg1 />
      </section>
      <section className="fixed bottom-0 right-0 opacity-30 -z-20">
        <Svg2 />
      </section>
    </>
  );
}

export default Home;