import { object, string } from 'yup';

const validationSchema = object({
  username: string().required(),
  userEmail: string().email().required(),
  message: string().min(30, 'Message must be at least 30 char.').required(),
});

export default validationSchema;
