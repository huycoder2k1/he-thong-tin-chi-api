import pool from '../config/db.js';

export const getAllTaskDetails = async () => {
  const [rows] = await pool.query('SELECT * FROM task_details');
  return rows;
};

export const getTaskDetailById = async (task_detail_id) => {
  const [rows] = await pool.query(
    'SELECT * FROM task_details WHERE task_detail_id = ?',
    [task_detail_id]
  );
  return rows[0];
};

export const createTaskDetail = async (taskDetailData) => {
  const { task_id, user_id, progress_status, score } = taskDetailData;
  const [result] = await pool.query(
    'INSERT INTO task_details (task_id, user_id, progress_status, score) VALUES (?, ?, ?, ?)',
    [task_id, user_id, progress_status || 'Chưa làm', score]
  );
  return result.insertId;
};

export const updateTaskDetail = async (task_detail_id, taskDetailData) => {
  const { progress_status, score } = taskDetailData;
  const [result] = await pool.query(
    'UPDATE task_details SET progress_status = ?, score = ? WHERE task_detail_id = ?',
    [progress_status, score, task_detail_id]
  );
  return result.affectedRows;
};

export const deleteTaskDetail = async (task_detail_id) => {
  const [result] = await pool.query(
    'DELETE FROM task_details WHERE task_detail_id = ?',
    [task_detail_id]
  );
  return result.affectedRows;
};
