var mysql = require('mysql')


// connexion configuration

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});

try {

    dbConnection.connect();
    console.log("connexion reussie")

} catch (error) {
    console.log("connexion echouée")

}



//dbConnection.connect()