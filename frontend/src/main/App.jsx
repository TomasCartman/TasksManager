import './App.css'
import React from "react"
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'

const app = props =>
    <div className="app">
        <Nav />
        <Main header="Tarefas Não Concluídas" />
    </div>

export default app