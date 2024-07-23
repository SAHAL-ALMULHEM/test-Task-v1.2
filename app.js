const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoute = require('./routes/bookRoutes')
const authorRoute = require('./routes/authorRoutes')
const publisherRoute = require('./routes/publisherRoutes')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes'); 
const errorHandler = require('./middlwares/errorHandler');
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://sahalalmulhem:BYHyMZ6wdXQEvvsw@sahalcluster.v5wrfra.mongodb.net/publicationDB')
.then(() => console.log("MongoDB connected"))
.catch(err => console.error('connection error', err))


app.use('/api', bookRoute);
app.use('/api', authorRoute);
app.use('/api', publisherRoute);
app.use('/auth', authRoutes);
app.use('/auth', userRoutes);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
