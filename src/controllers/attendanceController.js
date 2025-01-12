import {
    fetchAllAttendanceRecords,
    fetchAttendanceById,
    addAttendanceRecord,
    modifyAttendanceRecord,
    removeAttendanceRecord,
  } from '../services/attendanceService.js';
  import { validateAttendance } from '../validations/attendanceValidation.js';
  
  export const getAllAttendanceRecords = async (req, res) => {
    try {
      const records = await fetchAllAttendanceRecords();
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getAttendanceById = async (req, res) => {
    try {
      const { attendance_id } = req.params;
      const record = await fetchAttendanceById(attendance_id);
      res.status(200).json(record);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  export const createAttendanceRecord = async (req, res) => {
    try {
      validateAttendance(req.body);
      const recordId = await addAttendanceRecord(req.body);
      res.status(201).json({ message: 'Tạo record điểm danh thành công', recordId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateAttendanceRecord = async (req, res) => {
    try {
      validateAttendance(req.body);
      const { attendance_id } = req.params;
      await modifyAttendanceRecord(attendance_id, req.body);
      res.status(200).json({ message: 'Cập nhật record điểm danh thành công' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteAttendanceRecord = async (req, res) => {
    try {
      const { attendance_id } = req.params;
      await removeAttendanceRecord(attendance_id);
      res.status(200).json({ message: 'Xóa record điểm danh thành công' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  