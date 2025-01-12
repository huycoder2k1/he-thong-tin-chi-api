import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:task_id', getTaskById);

router.post('/tasks', createTask);

router.put('/tasks/:task_id', updateTask);

router.delete('/tasks/:task_id', deleteTask);

export default router;
