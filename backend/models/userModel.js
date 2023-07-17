const {Schema,model} = require('../connection');
// defining the structure data to store
const myschema = new Schema({
    name: String,
email: String,
password: String,

});

module.exports = model('user' , myschema);