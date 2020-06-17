let dataBase = {};
const mongoose = require('mongoose');

dataBase.connectDb = async(callback) => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    await console.log('----------------------------');

}

dataBase.disconnectDb = async() => {
    mongoose.connection.close()
}

mongoose.connection.on('connected', function() {
    console.log("DB is connected");
});
mongoose.connection.on('error', function(err) {
    console.log(`DB error ${err}`);
});

mongoose.connection.on('disconnected', function() {
    console.log("DB is disconnected");
});

module.exports = dataBase;