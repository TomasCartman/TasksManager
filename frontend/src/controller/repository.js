import axios from 'axios'
import utils from './utils'

const baseUrl = 'http://localhost:3001/tasks'

function getTasks() {
    return axios.get(baseUrl)
}

function getTask(id) {
    return axios.get(`${baseUrl}/${id}`)
}

function putTask(task) {
    const taskWithDate = utils.putDateToTask(task)
    return axios.put(`${baseUrl}/${taskWithDate.id}`, taskWithDate)
}

function deleteTask(id) {
    return axios.delete(`${baseUrl}/${id}`)
}

function postTask(task) {
    const taskWithDate = utils.putDateToTask(task)
    return axios.post(`${baseUrl}`, taskWithDate)
}

const exports = { getTasks, getTask, putTask, deleteTask, postTask }

export default exports