import express from 'express';
import {
  getAllAttendanceRecords,
  getAttendanceById,
  createAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
} from '../controllers/attendanceController.js';

const router = express.Router();

router.get('/attendance', getAllAttendanceRecords);

router.get('/attendance/:attendance_id', getAttendanceById);

router.post('/attendance', createAttendanceRecord);

router.put('/attendance/:attendance_id', updateAttendanceRecord);

router.delete('/attendance/:attendance_id', deleteAttendanceRecord);

export default router;
