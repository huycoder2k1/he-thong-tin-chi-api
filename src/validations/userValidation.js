import Joi from 'joi';

const userSchema = Joi.object({
    username: Joi.string().max(50).required().messages({
      'string.empty': 'Username là bắt buộc',
      'string.max': 'Username không được dài quá 50 ký tự',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': 'Password là bắt buộc',
      'string.min': 'Password phải dài ít nhất 6 ký tự',
    }),
    full_name: Joi.string().max(100).optional().messages({
      'string.max': 'Full name không được dài quá 100 ký tự',
    }),
    email: Joi.string().email().max(100).optional().messages({
      'string.email': 'Email không hợp lệ',
      'string.max': 'Email không được dài quá 100 ký tự',
    }),
    role: Joi.string().valid('admin', 'student').optional().messages({
      'any.only': 'Role không hợp lệ, chỉ chấp nhận admin hoặc student',
    }),
});
  

export const validateUser = (userData) => {
  const { error } = userSchema.validate(userData, { abortEarly: false }); 

  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join('. '));
  }

  return true;
};
