const mongoose = require('mongoose');

const url = 'mongodb+srv://akhilyadav21262:1234@cluster0.e7l9gaq.mongodb.net/smartx?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports = mongoose;