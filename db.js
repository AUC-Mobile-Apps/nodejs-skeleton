var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "my_database"
});

con.connect((err) => {
    if (err) {
        console.error("Failed to connect to database- throwing error:");
        throw err;
    }
        console.log("Connected to database succesfully.");
    }
);

module.exports.mycon = con;