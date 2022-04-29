import React,{useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import '../../css/home.css'
import { Imgside } from './ImgSide';
import { OtherSide } from './OtherSide';
import { Svg1,Svg2 } from '../../svg/svg';
const Home = (props) => {

  const [place, setPlace] = useState('palta')
  
  function handleSubmit(e) {
    e.preventDefault();
    props.btn(place);
  }
  useEffect(() => {
    props.btn(place)
  },[])

  const img = props.other.img
    return(
    <>
        <section className="flex justify-center mt-16 md:mt-24 p-4 h-auto">
        <div className="flex-1 h-full max-w-4xl mx-auto shadow-2xl shadow-slate-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className={`${img} h-auto md:w-1/2`}>
                <div className='w-full flex justify-center'>
                    <form className='w-60 bg-slate-200 bg-opacity-80 mt-8 rounded-lg flex justify-center pb-2 shadow-2xl shadow-slate-500'
                          onSubmit={handleSubmit}>
                        <TextField label="Search Place" variant="standard"
                        value={place} onChange={(e) => {setPlace(e.target.value)}} required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <button type='submit' className='cursor-pointer' aria-label='Search'>
                               <SearchIcon className='text-indigo-500'/>
                              </button>
                            </InputAdornment>
                          ),
                          style: { fontSize: 15, fontWeight: 600 }
                          }}
                        InputLabelProps={{ style: { fontSize: 20, fontWeight: 800 } }}
                        />
                    </form>
                </div>
                <div className='flex items-center justify-center p-6 sm:p-12'>
                  <Imgside 
                    day={props.other.day}
                    dayNight={props.other.dayNight}
                    timezone={props.other.timezone}
                    gmt={props.other.gmt}
                    location={props.location}
                  />
                </div>
            </div>
            <div className='flex justify-center p-6 sm:p-12 md:w-1/2 bg-gradient-to-b from-zinc-200 to-slate-400'>
              <OtherSide
                 dayNight={props.other.dayNight}
                 weather={props.weather}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fixed bottom-0 right-0 opacity-90 -z-10">
          <Svg1/>
      </section>
      <section className="fixed bottom-0 right-0 opacity-30 -z-20">
          <Svg2/>
      </section>
    </>
    );
}

export {Home};