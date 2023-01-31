const mongoose = require('mongoose');

const URI = 'mongodb+srv://progresa:progresa@cluster0.b3zddvo.mongodb.net/dbseries';

mongoose.connect(URI)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;