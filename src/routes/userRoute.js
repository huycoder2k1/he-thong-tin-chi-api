import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/:user_id', getUserById);

router.post('/users', createUser);

router.put('/users/:user_id', updateUser);

router.delete('/users/:user_id', deleteUser);

export default router;
