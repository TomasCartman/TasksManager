import React from "react"
import { Routes, Route } from 'react-router-dom'

import Tasks from '../components/task/Tasks'
import TaskForm from '../components/task/TaskForm'

const routes = props =>
    <Routes>
        <Route exact path='/' element={<Tasks />}  />  
        <Route path='/newTask' element={<TaskForm />} />
        <Route path='*' element={<Tasks />} />
    </Routes>

export default routes