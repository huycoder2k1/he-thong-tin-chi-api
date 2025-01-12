import Joi from 'joi';

const certificateSchema = Joi.object({
  user_id: Joi.number().required().messages({
    'number.base': 'User ID phải là một số',
    'any.required': 'User ID là bắt buộc',
  }),
  average_task_score: Joi.number().min(0).max(10).optional().messages({
    'number.base': 'Điểm bài tập phải là một số',
    'number.min': 'Điểm bài tập không được nhỏ hơn 0',
    'number.max': 'Điểm bài tập không được lớn hơn 10',
  }),
  attendance_score: Joi.number().min(0).max(10).optional().messages({
    'number.base': 'Điểm chuyên cần phải là một số',
    'number.min': 'Điểm chuyên cần không được nhỏ hơn 0',
    'number.max': 'Điểm chuyên cần không được lớn hơn 10',
  }),
});

export const validateCertificate = (certificateData) => {
  const { error } = certificateSchema.validate(certificateData, { abortEarly: false }); 

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join('. '));
  }

  return true;
};
