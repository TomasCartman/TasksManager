import './Tasks.css'
import React, { Component } from 'react'
import Task from './Task'
import Main from '../templates/Main'
import repository from '../../controller/repository'

const initialState = {
    tasks: [],
    isCompletedTasks:
        window.location.pathname === '/tasks' ? false : true
}

export default class Tasks extends Component {

    state = { ...initialState }

    componentDidMount() {
        this.getTasks()
    }

    getTasks() {
        repository.getTasks()
            .then(resp => {
                const respTasks = resp.data
                const tasks = respTasks.filter(task => task.isFinished === this.state.isCompletedTasks)
                this.setState({ tasks })
            })
    }

    setTaskAsFinished(task) {
        task.isFinished = true
        repository.putTask(task)
        const list = this.state.tasks.filter(task => task.isFinished === this.state.isCompletedTasks)
        this.setState({ tasks: list })
    }

    deleteTask(id) {
        repository.deleteTask(id)
        const list = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks: list })
    }

    renderTasks() {
        return (
            this.state.tasks.map(task => {
                return (
                    <div className='tasks' key={task.id}>
                        <Task title={task.title} taskContent={task.task}
                            creationDate={task.createDate} creationTime={task.createTime} />
                        <div className='button-group'>
                            <button type='button' className='green'
                                onClick={() => this.setTaskAsFinished(task)}>Concluida</button>
                            <button type='button' className='yellow'>Editar</button>
                            <button type='button' className='red'
                                onClick={() => this.deleteTask(task.id)} >Remover</button>
                        </div>
                        <hr className='cl hr' />
                    </div>
                )
            })
        )
    }

    render() {
        const headerName = this.state.isCompletedTasks ? 'Tarefas Concluídas' : 'Tarefas Não Concluídas'

        return (
            <Main header={headerName} >
                {this.renderTasks()}
            </Main>
        )
    }
}