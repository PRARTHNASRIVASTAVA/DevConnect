const {Schema,model} = require('../connection');


const myschema = new Schema({
    title : String,
    description : String,
    image : File,
    user : String,
    createdAt : {type : Date, default: Date.now},
});
module.exports = model('blogs', myschema );
