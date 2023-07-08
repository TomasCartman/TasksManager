const putDateToTask = task => {
    const date = new Date()
    const dateArr = date.toLocaleString('pt-br').split(' ')
    task.createDate = dateArr[0].slice(0, dateArr[0].length-1)
    task.createTime = dateArr[1]
    return task
}

export default { putDateToTask }