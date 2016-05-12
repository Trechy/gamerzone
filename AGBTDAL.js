/*  Brian Treichel & Alex Galka
 Holds the actions towards the database
 Project Folder: AGBTFinalProject
 File Name: AGBTDAL.js
 Revision History: 13-04-2016 Created
 */
var Game={
    insert: function(options){
        function txFunction(tx){
            var sql="INSERT INTO games(title, consoleId, developer, releaseDate, purchaseDate, playing, completed)" +
                "VALUES (?, ?, ?, ?, ?, ?, ?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
            function successInsert(){
                console.info("Success: Insert Successful");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM games WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(callback){
        function txFunction(tx){
            var options = [];
            var sql = "SELECT * FROM games;";
            tx.executeSql(sql, options, callback, successTransaction);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){
        function txFunction(tx){
            var sql = "UPDATE games " +
                "SET title=?, consoleId=?, developer=?, releaseDate=?, purchaseDate=?, playing=?, completed=?" +
                "WHERE id=?;";
            function successUpdate(){
                console.info("Success: Update Complete");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){
        function txFunction(tx){
            var sql = "DELETE FROM games WHERE id=?;";
            function successDelete(){
                console.info("Success: Delete Complete");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
var Console={
    insert: function(options){
        function txFunction(tx){
            var sql="INSERT INTO consoles(name, purchaseDate, numControllers, favourite)" +
                "VALUES (?, ?, ?, ?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
            function successInsert(){
                console.info("Success: Insert Successful");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM consoles WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(callback){
        function txFunction(tx){
            var options = [];
            var sql = "SELECT * FROM consoles;";
            tx.executeSql(sql, options, callback, successTransaction);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options){
        function txFunction(tx){
            var sql = "UPDATE games " +
                "SET name=?, purchaseDate=?, numControllers=?, favourite=?" +
                "WHERE id=?;";
            function successUpdate(){
                console.info("Success: Update Complete");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function(options){
        function txFunction(tx){
            var sql = "DELETE FROM consoles WHERE id=?;";
            function successDelete(){
                console.info("Success: Delete Complete");
            }
            tx.executeSql(sql, options, successDelete, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
