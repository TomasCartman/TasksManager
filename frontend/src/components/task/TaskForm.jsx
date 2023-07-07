import './TaskForm.css'
import React, { Component } from 'react'
import Main from '../templates/Main'
import Button from '../templates/Button'
import repository from '../../controller/repository'

const initialState = {
    title: '',
    task: '',
    isFinished: false
}

export default class TaskForm extends Component {
    
    state = { ...initialState }
    
    handleInput(event) {
        const eTarget = event.target
        const state = { ...this.state }
        state[eTarget.name] = eTarget.value
        this.setState({ ...state })
    }

    clear() {
        this.setState({ ...initialState })
    }

    save() {
        const task = {...this.state}
        repository.postTask(task)
            .then(resp => {
                if(resp.status >= 200 && resp.status < 300) {
                    // Success
                    console.log('Success')
                    this.setState({ ...initialState })
                }
            })
    }

    render() {
        return (
            <Main header="Criar nova tarefa">
                <div className='divForm'>
                    <form className='form'>
                        <label>Título:</label>
                        <input type="text" id="title" name="title" onChange={e => this.handleInput(e)} 
                            value={this.state.title} />
                        <label>Tarefa:</label>
                        <textarea name='task' onChange={e => this.handleInput(e)} 
                            value={this.state.task} ></textarea>
                        <div className='button-group'>
                            <Button className='green' label="Adicionar"
                                onClick={() => this.save()} />
                            <Button className='red' label="Cancelar"
                                onClick={() => this.clear()} />
                        </div>
                    </form>
                </div>
            </Main>
        )
    }
}