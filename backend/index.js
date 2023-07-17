const express = require('express');

const app = express();
const port = 8000;

 const userRouter = require('./routers/userRouter');
const laptopRouter = require('./routers/blogRouter');



// middleware
// app.use(cors());
app.use(express.json());
 app.use('/user', userRouter);
app.use('/laptop', laptopRouter)

//  to accept request from client`
// routing
app.get('/', (req,res) => {
    res.send('response from backend');
});

app.get('/add', (req,res) => {
    res.send('response from add route');
});

// update
app.get('/update', (req,res) => {
    res.send('response from update');
});

// delete
app.get('/delete', (req,res) => {
    res.send('response from delete');
});

app.listen(port, ()=>{
    console.log("server chal gya");
});
