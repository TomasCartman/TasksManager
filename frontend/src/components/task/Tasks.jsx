import './Tasks.css'
import React, { Component } from 'react'
import Task from './Task'
import Main from '../templates/Main'
import Button from '../templates/Button'
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

    filteredByCompleteTasks = task => task.isFinished === this.state.isCompletedTasks

    getTasks() {
        repository.getTasks()
            .then(resp => {
                const respTasks = resp.data
                const tasks = respTasks.filter(this.filteredByCompleteTasks)
                this.setState({ tasks })
            })
    }

    setTaskAsFinished(task) {
        task.isFinished = true
        repository.putTask(task)
        const list = this.state.tasks.filter(this.filteredByCompleteTasks)
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
                        <Task {...task} />
                            {this.renderButtons(task)}
                        <hr className='cl hr' />
                    </div>
                )
            })
        )
    }

    renderButtons(task) {
        return (
            <div className='button-group'>

                {this.state.isCompletedTasks ? '' :
                    <Button label="Concluído" className="green"
                        onClick={() => this.setTaskAsFinished(task)} />}

                {this.state.isCompletedTasks ? '' : <Button label="Editar" className="yellow" />}

                <Button label="Excluir" className="red"
                    onClick={() => this.deleteTask(task.id)} />
            </div>
        )
    }

    render() {
        const headerName = this.state.isCompletedTasks ? 'Tarefas Concluídas' : 'Tarefas Não Concluídas'

        return (
            <Main header={headerName} >
                {this.renderTasks()}
                {this.state.tasks.length === 0 ? 'Nenhuma tarefa nesta lista.' : ''}
            </Main>
        )
    }
}