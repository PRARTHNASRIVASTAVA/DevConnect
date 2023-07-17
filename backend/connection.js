const mongoose = require('mongoose');

const url = 'mongodb+srv://prarthnasrivastava:sneha4041@cluster0.hvec3vx.mongodb.net/mymern?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;