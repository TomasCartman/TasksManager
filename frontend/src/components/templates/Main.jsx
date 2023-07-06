import './Main.css'
import React from 'react'
import Tasks from '../task/Tasks'

const main = props =>
    <main className='content'>
        <div className='header'>{props.header}</div>
        <hr className='cl' />
        {props.children}
    </main>

export default main