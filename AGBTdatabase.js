/*Brian Treichel & Alex Galka
 Creates the database and tables for the project and can drop them
 Project Folder: AGBTFinalProject/js
 File Name: AGBTdatabase.js
 Revision History: 10-04-2016 Created
 */
var db;

function errorHandler(tx, error){
    console.error("SQL Error: " + tx + " (" + error.code + ") -- " + error.message);
}
function successTransaction(){
    console.info("Success: Transaction Successful");
}

var DB={
    createDatabase: function(){
        var shortName = "AGBTGamerzoneDB";
        var version = "1.0";
        var displayName = "DB for Gamerzone App";
        var dbSize = 2 * 1024 * 1024;
        console.info("Creating Database...");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
        function dbCreateSuccess(){
            console.info("Success: Database Creation Successful");
        }
    },
    createTables: function(){
        function txFunction(tx){
            var options = [];
            var sqlConsoles = "CREATE TABLE IF NOT EXISTS consoles(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL," +
                "purchaseDate DATE," +
                "numControllers INTEGER(8)," +
                "favourite VARCHAR(1));";
            tx.executeSql(sqlConsoles, options, successSQL, errorHandler);
            var sqlGames = "CREATE TABLE IF NOT EXISTS games(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "title VARCHAR(20) NOT NULL," +
                "consoleId INTEGER NOT NULL," +
                "developer VARCHAR(30)," +
                "releaseDate DATE," +
                "purchaseDate DATE," +
                "playing VARCHAR(1)," +
                "completed VARCHAR(1));";
            tx.executeSql(sqlGames, options, successSQL, errorHandler);
            function successSQL(){
                console.info("Success: Table has been created");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropGameTable: function(){
        function txFunction(tx){
            var options = [];
            console.info("Dropping Table");
            var sql = "DROP TABLE IF EXISTS games;";
            tx.executeSql(sql, options, successDropGames, errorHandler);
            function successDropGames(){
                console.info("Success: Table(s) Drop Successful");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    dropConsoleTable: function(){
        function txFunction(tx){
            var options = [];
            console.info("Dropping Table");
            var sql = "DROP TABLE IF EXISTS consoles;";
            tx.executeSql(sql, options, successDropConsoles, errorHandler);
            function successDropConsoles(){
                console.info("Success: Tabled Dropped Successfully");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
