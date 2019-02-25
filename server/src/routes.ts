import * as express from 'express';
import * as mysql from 'mysql';

const db = require('./db');
const router = express.Router();

//connect to hipages database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hipages",
    database: "hipages"
});

//test db connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//redirect /api to invited endpoint by default
router.get("/", function(req, res) {
    res.redirect('/api/invited');
});

router.get('/invited', function (req, res) {	
    db.getInvited(connection, function(error, results){
        if(error){
            res.send({success: false, message:error});
        }else{
            res.status(200).json(results);
        }
    });
});

//endpoint for changing 'new' status to either 'accepted' or 'declined'
router.put('/edit/:id', function (req, res) {
	var	id = req.params.id;
	var status = req.body.status;
    
	db.editStatus(connection, status, id, function(error, results){
		if(error){
			res.status(500).json({'error' : error.message});
		}else{
			res.status(200).json({'success' : true, 'data' : results});
		}
	});
});

router.get('/accepted', function (req, res) {	
    db.getAccepted(connection, function(error, results){
        if(error){
            res.send({success: false, message:error});
        }else{
            res.status(200).json(results);
        }
    });
});

router.get('/declined', function (req, res) {	
    db.getDeclined(connection, function(error, results){
        if(error){
            res.send({success: false, message:error});
        }else{
            res.status(200).json(results);
        }
    });
});

module.exports = router;