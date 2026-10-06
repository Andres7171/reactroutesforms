import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cine from './Cine'
import Musica from './Musica'
import Home from './Home'
import FormSimple from './FormSimple'
import Collatz from './Collatz'
import TablaMultiplicar from './TablaMultiplicar'
import TablaMultiplicarV2 from './TablaMultiplicarV2'
import SeleccionMultiple from './SeleccionMultiple'
export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cine' element={<Cine/>}></Route>
                <Route path='/musica' element={<Musica/>}></Route>
                <Route path='/form' element={<FormSimple/>}></Route>
                <Route path='/collatz' element={<Collatz/>}></Route>
                <Route path='/tabla' element={<TablaMultiplicar/>}></Route>
                <Route path='/tablav2' element={<TablaMultiplicarV2/>}></Route>
                <Route path='/select' element={<SeleccionMultiple/>}></Route>

            </Routes>
        </BrowserRouter>
    )
  }
}
