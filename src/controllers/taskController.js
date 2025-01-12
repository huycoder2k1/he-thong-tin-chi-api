import {
    fetchAllTasks,
    fetchTaskById,
    addTask,
    modifyTask,
    removeTask,
  } from '../services/taskService.js';
  import { validateTask } from '../validations/taskValidation.js';
  
  export const getAllTasks = async (req, res) => {
    try {
      const tasks = await fetchAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getTaskById = async (req, res) => {
    try {
      const { task_id } = req.params;
      const task = await fetchTaskById(task_id);
      res.status(200).json(task);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  export const createTask = async (req, res) => {
    try {
      validateTask(req.body);
      const taskId = await addTask(req.body);
      res.status(201).json({ message: 'Tạo task thành công', taskId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateTask = async (req, res) => {
    try {
      validateTask(req.body);
      const { task_id } = req.params;
      await modifyTask(task_id, req.body);
      res.status(200).json({ message: 'Cập nhật task thành công' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      const { task_id } = req.params;
      await removeTask(task_id);
      res.status(200).json({ message: 'Xóa task thành công' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  