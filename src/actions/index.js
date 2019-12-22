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


export function editTask(id, params) {
  return (dispatch, getState) => {
    var tasks = getState().tasks
    var currentTask = getTaskById(tasks, id)
    var updatedTask = Object.assign({}, currentTask, params)
    api.editTask(id, updatedTask).then(
      resp => {
        dispatch(editTaskSucceeded(resp.data))
      }
    )
  }
}


export function editTaskSucceeded(task) {
  console.log('SUCCEEDED', task)
  return {
    type: 'EDIT_TASK_SUCCEEDED',
    payload: {
      task,
    },
  };
}

function getTaskById(tasks, id) {
  return tasks.find(t => t.id === id)
}