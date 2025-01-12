import Joi from 'joi';

const taskSchema = Joi.object({
  task_name: Joi.string().max(100).required().messages({
    'string.empty': 'Task name là bắt buộc',
    'string.max': 'Task name không được dài quá 100 ký tự',
  }),
  description: Joi.string().optional().messages({
    'string.base': 'Mô tả phải là chuỗi',
  }),
  assigned_date: Joi.date().optional().messages({
    'date.base': 'Ngày được giao phải là định dạng ngày hợp lệ',
  }),
  due_date: Joi.date().optional().messages({
    'date.base': 'Ngày hết hạn phải là định dạng ngày hợp lệ',
  }),
});

export const validateTask = (taskData) => {
  const { error } = taskSchema.validate(taskData, { abortEarly: false }); 

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join('. '));
  }

  return true;
};
