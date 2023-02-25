const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static(__dirname + '/public'));
app.listen(PORT, ()=>{
    console.log("The Server Has Started\nListening on port :", PORT, `\nTo Access on local Machine ctrl + click on ==> http://localhost:${PORT}/`)
});
app.get('/', (req,res)=>{
    console.log("A New User Just Connected")
    res.sendFile(__dirname + '/index.html')
});