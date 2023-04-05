const mongoose = require ('mongoose');
const express=require('express');
const app=express();
require('dotenv').config();

const DB = 'mongodb+srv://novinakoli23:aeBpwmcNYaJKIWYL@cluster0.iwo83nk.mongodb.net/moviebook?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
}).then(()=>{
    console.log("connected");
}).catch((err) =>console.log("no connection"));

// DB CONNECTION
const Connection=require('./utils/dbConnect');
Connection();

const UserRouter=require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const movieRouter = require('./routes/moviesRoutes');
const bookingRouter=require('./routes/bookingRoutes');
const cors=require('cors');
// PORT NUMBER 
const PORT=process.env.PORT;
app.use(cors());


// middleware routes
app.use(express.json());
app.use('/users',UserRouter);
app.use('/admin',adminRouter);
app.use('/movies',movieRouter);
app.use('/booking',bookingRouter)



app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})