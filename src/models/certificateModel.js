import pool from '../config/db.js';

export const getAllCertificates = async () => {
  const [rows] = await pool.query('SELECT * FROM certificates');
  return rows;
};

export const getCertificateById = async (certificate_id) => {
  const [rows] = await pool.query(
    'SELECT * FROM certificates WHERE certificate_id = ?',
    [certificate_id]
  );
  return rows[0];
};

export const createCertificate = async (certificateData) => {
  const { user_id, average_task_score, attendance_score } = certificateData;
  const [result] = await pool.query(
    'INSERT INTO certificates (user_id, average_task_score, attendance_score) VALUES (?, ?, ?)',
    [user_id, average_task_score, attendance_score]
  );
  return result.insertId;
};

export const updateCertificate = async (certificate_id, certificateData) => {
  const { average_task_score, attendance_score } = certificateData;
  const [result] = await pool.query(
    'UPDATE certificates SET average_task_score = ?, attendance_score = ? WHERE certificate_id = ?',
    [average_task_score, attendance_score, certificate_id]
  );
  return result.affectedRows;
};

export const deleteCertificate = async (certificate_id) => {
  const [result] = await pool.query(
    'DELETE FROM certificates WHERE certificate_id = ?',
    [certificate_id]
  );
  return result.affectedRows;
};
