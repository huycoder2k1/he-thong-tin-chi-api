import Joi from 'joi';

const attendanceSchema = Joi.object({
  user_id: Joi.number().required().messages({
    'number.base': 'User ID phải là một số',
    'any.required': 'User ID là bắt buộc',
  }),
  attendance_date: Joi.date().required().messages({
    'date.base': 'Ngày điểm danh phải là định dạng ngày hợp lệ',
    'any.required': 'Ngày điểm danh là bắt buộc',
  }),
  status: Joi.string().valid('Có mặt', 'Vắng mặt').required().messages({
    'any.only': "Trạng thái không hợp lệ ('Có mặt', 'Vắng mặt')",
    'any.required': 'Trạng thái là bắt buộc',
  }),
});

export const validateAttendance = (attendanceData) => {
  const { error } = attendanceSchema.validate(attendanceData, { abortEarly: false }); 

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join('. '));
  }

  return true;
};
