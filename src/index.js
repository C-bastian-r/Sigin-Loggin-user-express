const app = require('./app');
const { connectToDB } = require("../src/db/databaseSquelize");

app.listen(app.get('port'), async()=>{
    console.log('corriendo en el puerto', app.get('port'));
    await connectToDB();
});