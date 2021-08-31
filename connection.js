
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://achref:rZXqM5HK5Eb74YIY@cluster0.gkybx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true},function(err){
    if(err){
        console.log(err)
        
    }
    else console.log("connect to data base");
    });


module.exports = mongoose;  