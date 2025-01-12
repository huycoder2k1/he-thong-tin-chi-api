import pool from '../config/db.js';

export const getAllTasks = async () => {
  const [rows] = await pool.query('SELECT * FROM tasks');
  return rows;
};

export const getTaskById = async (task_id) => {
  const [rows] = await pool.query('SELECT * FROM tasks WHERE task_id = ?', [task_id]);
  return rows[0];
};

export const createTask = async (taskData) => {
  const { task_name, description, assigned_date, due_date } = taskData;
  const [result] = await pool.query(
    'INSERT INTO tasks (task_name, description, assigned_date, due_date) VALUES (?, ?, ?, ?)',
    [task_name, description, assigned_date, due_date]
  );
  return result.insertId;
};

export const updateTask = async (task_id, taskData) => {
  const { task_name, description, assigned_date, due_date } = taskData;
  const [result] = await pool.query(
    'UPDATE tasks SET task_name = ?, description = ?, assigned_date = ?, due_date = ? WHERE task_id = ?',
    [task_name, description, assigned_date, due_date, task_id]
  );
  return result.affectedRows;
};

export const deleteTask = async (task_id) => {
  const [result] = await pool.query('DELETE FROM tasks WHERE task_id = ?', [task_id]);
  return result.affectedRows;
};
