//get all leads with new status
exports.getInvited = function(conn, callback) {
    var query = "SELECT t1.id, t1.category_id, t1.status, t1.contact_name, t1.contact_phone, t1.contact_email, t1.price, t1.description, t1.created_at, t2.name AS location, t2.postcode, t3.name AS category FROM hipages.jobs t1 INNER JOIN hipages.suburbs t2 ON t1.suburb_id = t2.id INNER JOIN hipages.categories t3 ON t1.category_id = t3.id WHERE t1.status = 'new';";

    conn.query(query, function(err, results){
        if(err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

//get all leads with accepted status
exports.getAccepted = function(conn, callback) {
    var query = "SELECT t1.id, t1.category_id, t1.status, t1.contact_name, t1.contact_phone, t1.contact_email, t1.price, t1.description, t1.created_at, t2.name AS location, t2.postcode, t3.name AS category FROM hipages.jobs t1 INNER JOIN hipages.suburbs t2 ON t1.suburb_id = t2.id INNER JOIN hipages.categories t3 ON t1.category_id = t3.id WHERE t1.status = 'accepted';";

    conn.query(query, function(err, results){
        if(err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

//get all leads with declined status
exports.getDeclined = function(conn, callback) {
    var query = "SELECT t1.id, t1.category_id, t1.status, t1.contact_name, t1.contact_phone, t1.contact_email, t1.price, t1.description, t1.created_at, t2.name AS location, t2.postcode, t3.name AS category FROM hipages.jobs t1 INNER JOIN hipages.suburbs t2 ON t1.suburb_id = t2.id INNER JOIN hipages.categories t3 ON t1.category_id = t3.id WHERE t1.status = 'declined';";

    conn.query(query, function(err, results){
        if(err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

exports.editStatus = function(conn, status, id, callback){
    var query = "UPDATE `jobs` SET `status` = ? WHERE `id` = ? ";

    conn.query(query, [status, id], function(error, results){
        if(error){
            callback(error);
        }else{
            callback(null, results);
        }
    });
};