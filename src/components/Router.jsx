import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cine from './Cine'
import Musica from './Musica'
import Home from './Home'
export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/cine' element={<Cine/>}></Route>
                <Route path='/musica' element={<Musica/>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
