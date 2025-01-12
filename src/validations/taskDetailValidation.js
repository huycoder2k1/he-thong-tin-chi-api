import Joi from 'joi';

const taskDetailSchema = Joi.object({
  task_id: Joi.number().required().messages({
    'number.base': 'Task ID phải là một số',
    'any.required': 'Task ID là bắt buộc',
  }),
  user_id: Joi.number().required().messages({
    'number.base': 'User ID phải là một số',
    'any.required': 'User ID là bắt buộc',
  }),
  progress_status: Joi.string()
    .valid('Chưa làm', 'Đang làm', 'Hoàn Thành')
    .optional()
    .messages({
      'any.only': "Trạng thái tiến độ không hợp lệ ('Chưa làm', 'Đang làm', 'Hoàn Thành')",
    }),
  score: Joi.number().min(0).max(10).optional().messages({
    'number.base': 'Điểm phải là một số',
    'number.min': 'Điểm không được nhỏ hơn 0',
    'number.max': 'Điểm không được lớn hơn 10',
  }),
});

export const validateTaskDetail = (taskDetailData) => {
  const { error } = taskDetailSchema.validate(taskDetailData, { abortEarly: false }); 

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join('. '));
  }

  return true;
};
