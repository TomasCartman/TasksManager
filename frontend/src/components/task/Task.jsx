import './Task.css'
import React from 'react'

const task = props =>
    <div className='task'>
        <div className='title'>{props.title}</div>
        <hr className='hw' />
        <div className='task-content'>{props.taskContent}</div>
        <div className='time'>
            <p>{props.creationDate}</p>
            <p>{props.creationTime}</p>
        </div>
    </div>

export default task