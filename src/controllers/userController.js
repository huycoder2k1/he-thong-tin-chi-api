import {
    fetchAllUsers,
    fetchUserById,
    addUser,
    modifyUser,
    removeUser,
  } from '../services/userService.js';
  import { validateUser } from '../validations/userValidation.js';
  
  export const getAllUsers = async (req, res) => {
    try {
      const users = await fetchAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getUserById = async (req, res) => {
    try {
      const { user_id } = req.params;
      const user = await fetchUserById(user_id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  export const createUser = async (req, res) => {
    try {
      validateUser(req.body);
      const userId = await addUser(req.body);
      res.status(201).json({ message: 'Tạo người dùng thành công', userId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      validateUser(req.body);
      const { user_id } = req.params;
      await modifyUser(user_id, req.body);
      res.status(200).json({ message: 'Cập nhật người dùng thành công' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params;
      await removeUser(user_id);
      res.status(200).json({ message: 'Xóa người dùng thành công' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  