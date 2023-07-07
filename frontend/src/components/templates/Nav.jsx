import './Nav.css'
import React from "react"
//import { Link } from 'react-router-dom'

const nav = props =>
    <aside className='menu-area'>
        <nav className='menu'>
            <a href="/tasks">Tarefas Não Concluídas</a>
            <a href="/tasksDone">Tarefas Concluídas</a>
            <a href="/newTask">Criar Nova Tarefa</a>
        </nav>
    </aside>

export default nav