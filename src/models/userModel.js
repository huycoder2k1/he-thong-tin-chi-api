import pool from '../config/db.js';

export const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

export const getUserById = async (user_id) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
  return rows[0];
};

export const createUser = async (userData) => {
  const { username, password, full_name, email, role } = userData;
  const [result] = await pool.query(
    'INSERT INTO users (username, password, full_name, email, role) VALUES (?, ?, ?, ?, ?)',
    [username, password, full_name, email, role || 'student']
  );
  return result.insertId;
};

export const updateUser = async (user_id, userData) => {
  const { username, password, full_name, email, role } = userData;
  const [result] = await pool.query(
    'UPDATE users SET username = ?, password = ?, full_name = ?, email = ?, role = ? WHERE user_id = ?',
    [username, password, full_name, email, role, user_id]
  );
  return result.affectedRows;
};

export const deleteUser = async (user_id) => {
  const [result] = await pool.query('DELETE FROM users WHERE user_id = ?', [user_id]);
  return result.affectedRows;
};
