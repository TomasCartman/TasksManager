import axios from 'axios'

const baseUrl = 'http://localhost:3001/tasks'

function getTasks() {
    return axios.get(baseUrl)
}

function putTask(task) {
    return axios.put(`${baseUrl}/${task.id}`, task)
}

function deleteTask(id) {
    return axios.delete(`${baseUrl}/${id}`)
}

function postTask(task) {
    const date = new Date()
    const dateArr = date.toLocaleString('pt-br').split(' ')
    task.createDate = dateArr[0].slice(0, dateArr[0].length-1)
    task.createTime = dateArr[1]
    return axios.post(`${baseUrl}`, task)
}

export default { getTasks, putTask, deleteTask, postTask }