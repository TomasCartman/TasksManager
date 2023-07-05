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
        <div className='button-group'>
            <button className='green'>Concluida</button>
            <button className='yellow'>Editar</button>
            <button className='red'>Remover</button>
        </div>
    </div>

export default task