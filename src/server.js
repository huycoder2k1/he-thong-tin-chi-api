import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js'; 
import taskRoutes from './routes/taskRoute.js';
import taskDetailRoutes from './routes/taskDetailRoute.js';
import attendanceRoutes from './routes/attendanceRoute.js';
import certificateRoutes from './routes/certificateRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', taskDetailRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', certificateRoutes);

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
