import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GetInfo } from './src/core/GetInfo';
import { About } from './src/components/About';
import { Navbar } from './src/components/Navbar';

export default function GeoGround() {

    useEffect(() => {
        document.title='GeoGround.com';
        document.body.style.background = "linear-gradient(to bottom left, #FDF5CA, #A3E4DB)";

        document.querySelector('#footer').innerHTML="&copy;2022 DotGround - All rights reserved."

    })

    return(
        <React.Fragment>
            <Navbar/>
            <Routes>
                <Route path='/' element={<GetInfo/>}/>
                <Route exact='true' path='/weather2.0' element={<GetInfo/>}/>
                <Route exact='true' path='/home' element={<GetInfo/>}/>
                <Route exact='true' path='/about' element={<About/>} />
            </Routes>
        </React.Fragment>
    )
       
}

