import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080'

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export function fetchTasks() {
    console.log('api fetchTasks')
    return client.get('/tasks')
}

export function createTask(params) {
    return client.post('/tasks', params)
}



export function editTask(id, task) {
    return client.put(`/tasks/${id}`, task)
}
