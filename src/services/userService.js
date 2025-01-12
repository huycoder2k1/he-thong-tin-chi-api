import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } from '../models/userModel.js';
  
  export const fetchAllUsers = async () => {
    return await getAllUsers();
  };
  
  export const fetchUserById = async (user_id) => {
    const user = await getUserById(user_id);
    if (!user) {
      throw new Error('Người dùng không tồn tại');
    }
    return user;
  };
  
  export const addUser = async (userData) => {
    return await createUser(userData);
  };
  
  export const modifyUser = async (user_id, userData) => {
    const updatedRows = await updateUser(user_id, userData);
    if (updatedRows === 0) {
      throw new Error('Người dùng không tồn tại');
    }
    return updatedRows;
  };
  
  export const removeUser = async (user_id) => {
    const deletedRows = await deleteUser(user_id);
    if (deletedRows === 0) {
      throw new Error('Người dùng không tồn tại');
    }
    return deletedRows;
  };
  