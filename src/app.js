const express = require('express');
const path = require('path');

const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(logger);

// ✅ THIS LINE IS IMPORTANT
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/tasks', taskRoutes);

// ❌ REMOVE THIS (important)
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

app.use(errorHandler);

module.exports = app;