import express from 'express';
import {
  getAllTaskDetails,
  getTaskDetailById,
  createTaskDetail,
  updateTaskDetail,
  deleteTaskDetail,
} from '../controllers/taskDetailController.js';

const router = express.Router();

router.get('/task-details', getAllTaskDetails);

router.get('/task-details/:task_detail_id', getTaskDetailById);

router.post('/task-details', createTaskDetail);

router.put('/task-details/:task_detail_id', updateTaskDetail);

router.delete('/task-details/:task_detail_id', deleteTaskDetail);

export default router;
