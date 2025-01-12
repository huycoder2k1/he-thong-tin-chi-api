import {
    getAllTaskDetails,
    getTaskDetailById,
    createTaskDetail,
    updateTaskDetail,
    deleteTaskDetail,
  } from '../models/taskDetailModel.js';
  
  export const fetchAllTaskDetails = async () => {
    return await getAllTaskDetails();
  };
  
  export const fetchTaskDetailById = async (task_detail_id) => {
    const taskDetail = await getTaskDetailById(task_detail_id);
    if (!taskDetail) {
      throw new Error('Chi tiết nhiệm vụ không tồn tại');
    }
    return taskDetail;
  };
  
  export const addTaskDetail = async (taskDetailData) => {
    return await createTaskDetail(taskDetailData);
  };
  
  export const modifyTaskDetail = async (task_detail_id, taskDetailData) => {
    const updatedRows = await updateTaskDetail(task_detail_id, taskDetailData);
    if (updatedRows === 0) {
      throw new Error('Chi tiết nhiệm vụ không tồn tại');
    }
    return updatedRows;
  };
  
  export const removeTaskDetail = async (task_detail_id) => {
    const deletedRows = await deleteTaskDetail(task_detail_id);
    if (deletedRows === 0) {
      throw new Error('Chi tiết nhiệm vụ không tồn tại');
    }
    return deletedRows;
  };
  