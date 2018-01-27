"user strict";

const 	express = 	require("express"),
		app =		express();


function server(){

    app.use(express.static('public'));
    
    app.get('/login', function (req, res) {
        res.send('ok');
    });
    
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}

module.exports = server;
