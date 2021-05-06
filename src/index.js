require('dotenv').config();
require('./backend/connectDbs/mongoconnect');
const app = require('./backend/server');

app.listen(app.get('port'), ()=>{
    console.log('Server on Port ' + app.get('port'))
});