import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import { Svg2 } from '../svg/svg';

const About = () => {
    return(
    <>
        <section className="flex justify-center mt-16 md:mt-24 p-4">
            <div className="flex-1 h-full max-w-5xl mx-auto shadow-2xl shadow-slate-900 rounded-3xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className='h-auto lg:w-1/2' layout="responsive">
                        <div className='w-full flex justify-center'>
                            <img src={require('../css/images/me.jpg')} alt='my_photo' className="h-96 sm:h-auto w-full"/>
                        </div>
                    </div>
                    <div className='flex px-6 sm:px-12 lg:w-1/2 bg-transparent flex-col'>
                        <h1 className='text-cyan-400 font-bold text-2xl bg-gray-800 w-auto h-10 flex items-center justify-center rounded-3xl mt-8'><span className='text-slate-100 animate-pulse'>Geo</span>Ground</h1>
                        <p className='mt-4 txt1 text-base font-semibold'>
                            <span className='italic underline'>GeoGround</span> is a webapp that describe  the place and weather of user's choice.
                            <br/>It is created using <a href="https://reactjs.org/" target="_MOINAK" className='text-cyan-400 underline'>ReactJs</a>, <a href="https://mui.com/" target="_MOINAK" className='text-blue-500 underline'>MaterialUi</a> and <a href="https://tailwindcss.com/" target="_MOINAK" className='text-teal-400 underline'>TailwindCss</a>. All the responses of GeoGround based on api fetch result. APIs are from - 1.<a href="https://openweathermap.org/" target="_MOINAK" className='text-orange-400 underline'>OpenWeatherMap</a><br/>
                            2.<a href="https://ipgeolocation.io/" target="_MOINAK" className='text-indigo-500 underline'>IpGeoLocation</a><br/>
                            3.<a href="https://www.bigdatacloud.com/" target="_MOINAK" className='text-orange-500 underline'>BigDataCloud</a>
                        </p>
                        <p className='mt-2 txt1 text-base font-semibold'>
                            <span className='underline uppercase'>note</span>: this app was created to demonstrate asynchronous behavior of JavaScript, <span className='text-pink-600 font-extrabold italic'>NOT FOR ACTUAL USE</span>. All apis are of free version. <span className='text-blue-400'>(330queries/day)</span>
                        </p>
                        <p className='mt-2 txt1 text-base font-semibold'>
                            <span className='italic underline'>GeoGround</span> is created by <span className='text-indigo-500'>Moinak Majumdar</span>.(a college student)<br/>
                            Thank you very much, ❤️ Have a nice day. <br/>
                            Feel free to connect... 
                        </p>
                        <div className='relative flex justify-center my-4'>
                            <a href='https://www.facebook.com/moinak.majumdar.9' target="_MOINAK" className='mx-2' style={{color:'#4267B2'}}>
                                <Tooltip title="facebook" placement='bottom' className='z-10'>
                                    <FacebookIcon fontSize='large'/>
                                </Tooltip>
                            </a>
                            <a href='https://github.com/Moinak-Majumdar' target='_blank' rel="noreferrer" className='mx-2'>
                                <Tooltip title="github" placement='bottom' className='z-10'>
                                    <GitHubIcon fontSize='large'/>
                                </Tooltip>
                            </a>
                            <a href='https://www.linkedin.com/in/moinak-majumdar-b7a85b238/' target='_blank' rel="noreferrer" className='mx-2' style={{color: '#0077b5'}}>
                                <Tooltip title='linkedin' placement='bottom' className='z-10'>
                                    <LinkedInIcon fontSize='large'/>
                                </Tooltip>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="fixed bottom-0 right-0 opacity-20 -z-10">
          <Svg2/>
        </section>
    </>
    );
}

export default About;