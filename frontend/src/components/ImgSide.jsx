import { useState, useEffect } from 'react';

const ImgSide = ({ dayNight, location, day, timezone, gmt }) => {

    const { locality, country, country_des, state, state_des, county, county_des, lang, currency, currency_code, incomeLevel, dialCode, isoName } = location;
    const [light, toggleLight] = useState(true)
    useEffect(() => {
        if (dayNight === 'd') {
            toggleLight(true);
        }
        if (dayNight === 'n') {
            toggleLight(false);
        }
    }, [dayNight])

    return (
        <section className='w-full'>
            <h1 className='text-2xl txt3 font-bold'>
                <span style={light ? { color: '#fff200' } : { color: '#49ff00' }}>{day}</span>
            </h1>
            <h1 className='text-xl txt1 font-bold mt-1'>
                <span className={light ? 'text-yellow-400' : 'text-cyan-300'}>Timezone</span>
                <span style={light ? { color: '#06FF00' } : { color: '#fff200' }}>: {timezone}</span>
            </h1>
            <h1 className='txt1 font-bold'>
                <span className={light ? 'text-yellow-400' : 'text-teal-300'}>Timezone Ofset</span>
                <span style={light ? { color: '#06FF00' } : { color: '#fff200' }}>: {gmt}GMT</span>
            </h1>
            <h1 className='txt2 font-extrabold capitalize text-lg mt-1'>
                <span style={light ? { color: '#40DFEF' } : { color: '#fff56d' }}>ISOName: </span>
                <span className='capitalize text-xl' style={light ? { color: '#FFFBE7' } : { color: '#32FF6A' }}>{isoName}</span>
            </h1>
            <h1 className='txt2 font-extrabold text-lg'>
                <span style={light ? { color: '#40DFEF' } : { color: '#FFF56D' }}>Locality</span>
                <span className={light ? 'text-green-400' : 'text-slate-200'}>{`: ${locality}`}</span>
            </h1>
            <h1 className='txt1 font-extrabold text-lg'>
                <span style={light ? { color: '#28FFBF' } : { color: '#44FADD' }}>{`${county},${county_des}.`}</span><br />
                <span style={light ? { color: '#28FFBF' } : { color: '#44FADD' }}>{`${state},${state_des}.`}</span><br />
                <span style={light ? { color: '#28FFBF' } : { color: '#44FADD' }}>{`${country},${country_des}.`}</span>
            </h1>
            <div className='flex flex-col py-4'>
                <h1 className='txt2 font-extrabold text-lg'>
                    <span style={light ? { color: '#FFFBE7' } : { color: '#FFF56D' }}>Official language</span>
                    <span className={light ? 'txt1 text-cyan-300' : 'txt3 text-slate-200'}>{`: ${lang}`}</span>
                </h1>
                <h1 className='txt2 font-extrabold text-lg mt-2'>
                    <span style={light ? { color: '#FFFBE7' } : { color: '#FFF56D' }}>Economic level</span>
                    <span className={light ? 'txt3 text-cyan-300' : 'txt3 text-slate-200'}>: {incomeLevel}</span>
                </h1>
                <div className='mt-3'>
                    <h1 className='txt2 font-extrabold text-lg'>
                        <span style={light ? { color: '#FFFBE7' } : { color: '#FFF56D' }}>Currency</span>
                        <span className={light ? 'txt1 text-cyan-300' : 'txt1 text-slate-200'}>: {currency} ({currency_code})</span>
                    </h1>
                </div>
                <h1 className='txt2 font-extrabold mt-1 text-lg'>
                    <span style={light ? { color: '#FFFBE7' } : { color: '#FFF56D' }}>Dial Code</span>
                    <span className={light ? 'txt1 text-cyan-300' : 'txt1 text-slate-200'}>: +{dialCode}</span>
                </h1>
            </div>
        </section>
    );
}

export { ImgSide };