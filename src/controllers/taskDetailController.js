import {
    fetchAllTaskDetails,
    fetchTaskDetailById,
    addTaskDetail,
    modifyTaskDetail,
    removeTaskDetail,
  } from '../services/taskDetailService.js';
  import { validateTaskDetail } from '../validations/taskDetailValidation.js';
  
  export const getAllTaskDetails = async (req, res) => {
    try {
      const taskDetails = await fetchAllTaskDetails();
      res.status(200).json(taskDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getTaskDetailById = async (req, res) => {
    try {
      const { task_detail_id } = req.params;
      const taskDetail = await fetchTaskDetailById(task_detail_id);
      res.status(200).json(taskDetail);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  export const createTaskDetail = async (req, res) => {
    try {
      validateTaskDetail(req.body);
      const taskDetailId = await addTaskDetail(req.body);
      res.status(201).json({ message: 'Tạo chi tiết nhiệm vụ thành công', taskDetailId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateTaskDetail = async (req, res) => {
    try {
      validateTaskDetail(req.body);
      const { task_detail_id } = req.params;
      await modifyTaskDetail(task_detail_id, req.body);
      res.status(200).json({ message: 'Cập nhật chi tiết nhiệm vụ thành công' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteTaskDetail = async (req, res) => {
    try {
      const { task_detail_id } = req.params;
      await removeTaskDetail(task_detail_id);
      res.status(200).json({ message: 'Xóa chi tiết nhiệm vụ thành công' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  