import {
    getAllAttendanceRecords,
    getAttendanceById,
    createAttendanceRecord,
    updateAttendanceRecord,
    deleteAttendanceRecord,
  } from '../models/attendanceModel.js';
  
  export const fetchAllAttendanceRecords = async () => {
    return await getAllAttendanceRecords();
  };
  
  export const fetchAttendanceById = async (attendance_id) => {
    const attendance = await getAttendanceById(attendance_id);
    if (!attendance) {
      throw new Error('Record điểm danh không tồn tại');
    }
    return attendance;
  };
  
  export const addAttendanceRecord = async (attendanceData) => {
    return await createAttendanceRecord(attendanceData);
  };
  
  export const modifyAttendanceRecord = async (attendance_id, attendanceData) => {
    const updatedRows = await updateAttendanceRecord(attendance_id, attendanceData);
    if (updatedRows === 0) {
      throw new Error('Record điểm danh không tồn tại');
    }
    return updatedRows;
  };
  
  export const removeAttendanceRecord = async (attendance_id) => {
    const deletedRows = await deleteAttendanceRecord(attendance_id);
    if (deletedRows === 0) {
      throw new Error('Record điểm danh không tồn tại');
    }
    return deletedRows;
  };
  