const express = require('express');
// we will use to set the path so back end can grab front end files to heruko can read them
const path = require('path');

const app = express();

// endpoints

// the slash means home page, second arugment is function. we are going to send file to heruko so we are making the path. 
// dirname is a variable of the location of our server file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

const port = 4005;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});