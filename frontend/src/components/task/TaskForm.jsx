import './TaskForm.css'
import React, { Component } from 'react'
import Main from '../templates/Main'
import axios from 'axios'

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
        const date = new Date()
        const dateArr = date.toLocaleString('pt-br').split(' ')
        task.createDate = dateArr[0].slice(0, dateArr[0].length-1)
        task.createTime = dateArr[1]
        axios.post('http://localhost:3001/tasks', task)
            .then(resp => {
                if(resp.status >= 200 && resp.status < 300) {
                    // Success
                    this.setState({ ...initialState })
                }
                console.log(resp)
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
                            <button type='button' className='green' 
                                onClick={() => this.save()} >Adicionar</button>
                            <button type='button' className='red'
                                onClick={() => this.clear()}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </Main>
        )
    }
}