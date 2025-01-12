import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
  } from '../models/taskModel.js';
  
  export const fetchAllTasks = async () => {
    return await getAllTasks();
  };
  
  export const fetchTaskById = async (task_id) => {
    const task = await getTaskById(task_id);
    if (!task) {
      throw new Error('Task không tồn tại');
    }
    return task;
  };
  
  export const addTask = async (taskData) => {
    return await createTask(taskData);
  };
  
  export const modifyTask = async (task_id, taskData) => {
    const updatedRows = await updateTask(task_id, taskData);
    if (updatedRows === 0) {
      throw new Error('Task không tồn tại');
    }
    return updatedRows;
  };
  
  export const removeTask = async (task_id) => {
    const deletedRows = await deleteTask(task_id);
    if (deletedRows === 0) {
      throw new Error('Task không tồn tại');
    }
    return deletedRows;
  };
  