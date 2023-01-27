const mongoose = require('mongoose');

const URI = 'URL de conexión de MONGODB a aplicación';

mongoose.connect(URI)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;