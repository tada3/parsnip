import * as api from '../api'

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function createTask(task) {
  return dispatch => {
    api.createTask(task).then(resp => {
      dispatch(createTaskSucceeded(resp.data))
    })
  }
}

export function createTaskSucceeded(task) {
  return {
    type: 'CREATE_TASK_SUCCEEDED',
    payload: {
      task
    }
  }
}

export function fetchTasks() {
  console.log('action fetchTasks 000')
  return dispatch => {
    console.log('action fetchTasks 100')
    api.fetchTasks().then(resp => {
      dispatch(fetchTasksSucceeded(resp.data))
    })
  }
}



export function fetchTasksSucceeded(tasks) {
  console.log('succeeded', tasks.length)
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}


export function editTask(id, params = {}) {
  return {
    type: 'EDIT_TASK',
    payload: {
      id,
      params,
    },
  };
}
