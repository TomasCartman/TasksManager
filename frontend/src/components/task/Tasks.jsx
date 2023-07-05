import './Tasks.css'
import React, { Component } from 'react'
import Task from './Task'

export default class Tasks extends Component {
    render() {
        return (
            <div className='tasks'>
                <Task title="Tarefa 1" taskContent="Tenho que fazer essa tarefa aqui e tal..."
                    creationDate="05/07/2023" creationTime="15:11:21" />
                <hr className='cl hr'/>
                <Task title="Tarefa 2" taskContent="Devo fazer essa outra tarefa aqui também."
                    creationDate="04/07/2023" creationTime="07:45:56" />
            </div>
        )
    }
}