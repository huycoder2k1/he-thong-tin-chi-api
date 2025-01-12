import pool from '../config/db.js';

export const getAllAttendanceRecords = async () => {
  const [rows] = await pool.query('SELECT * FROM attendance');
  return rows;
};

export const getAttendanceById = async (attendance_id) => {
  const [rows] = await pool.query(
    'SELECT * FROM attendance WHERE attendance_id = ?',
    [attendance_id]
  );
  return rows[0];
};

export const createAttendanceRecord = async (attendanceData) => {
  const { user_id, attendance_date, status } = attendanceData;
  const [result] = await pool.query(
    'INSERT INTO attendance (user_id, attendance_date, status) VALUES (?, ?, ?)',
    [user_id, attendance_date, status]
  );
  return result.insertId;
};

export const updateAttendanceRecord = async (attendance_id, attendanceData) => {
  const { attendance_date, status } = attendanceData;
  const [result] = await pool.query(
    'UPDATE attendance SET attendance_date = ?, status = ? WHERE attendance_id = ?',
    [attendance_date, status, attendance_id]
  );
  return result.affectedRows;
};

export const deleteAttendanceRecord = async (attendance_id) => {
  const [result] = await pool.query(
    'DELETE FROM attendance WHERE attendance_id = ?',
    [attendance_id]
  );
  return result.affectedRows;
};
