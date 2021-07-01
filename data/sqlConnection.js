var mysql = require('mysql');

con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "webchat",
    debug : false
});

con.connect((err) => {
    if(err) console.log(err.message);
})

module.exports = con 