import './App.css'
import React from "react"
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Nav from '../components/templates/Nav'

const app = props =>
    <BrowserRouter>
        <div className="app">
            <Nav />
            <Routes />
        </div>
    </BrowserRouter>

export default app