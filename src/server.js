const app = require('./app.js');

//Settings
app.set('AppName', 'LeangSoftware');
app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});