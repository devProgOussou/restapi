const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const userRouter = require('./routes/user.routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
