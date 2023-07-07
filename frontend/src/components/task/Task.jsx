import './Task.css'
import React from 'react'

const task = props =>
    <div className='task'>
        <div className='title'>{props.title}</div>
        <hr className='hw' />
        <div className='task-content'>{props.task}</div>
        <div className='time'>
            <p>{props.createDate}</p>
            <p>{props.createTime}</p>
        </div>
    </div>

export default task