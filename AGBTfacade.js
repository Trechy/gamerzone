/*  Brian Treichel & Alex Galka
    Project Folder: AGBTFinalProject
    File Name: AGBTfacade.js
    Revision History: 13-04-2016 Created
 */
function getCurrent(){
    function successSelectAll(tx, results){
        var htmlCode = "";
        for(var i=0; i < results.rows.length; i++){
            var row = results.rows[i];
            var completed = "";
            if(row['completed'] == "true"){
                completed = "Yes";
            }
            else{
                completed = "No";
            }
            if(row['playing'] == "true") {
                htmlCode += "<li>" +
                    "<h4>" + row['title'] + "</h4>" +
                    "<p>Developer: " + row['developer'] + "</p>" +
                    "<p>Purchase Date: " + row['purchaseDate'] + "</p>" +
                    "<p>Completed: " + completed + "</p>" +
                "</li>";
            }
        }
        var currentLv = $("#AGBTCurrentList");
        currentLv = currentLv.html(htmlCode);
        currentLv.listview("refresh");
    }
    Game.selectAll(successSelectAll);
}
function updateConsoleDropdown(){
    function successSelectAll(tx, results){
        var htmlCode = "";
        for(var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];
            htmlCode += "<option value='" + row['id'] + "'>" + row['name'] + "</option>";
            var cmbConsole1 = $("#cmboConsole1");
            cmbConsole1 = cmbConsole1.html(htmlCode);
            cmbConsole1.selectmenu("refresh");

        }
    }
    Console.selectAll(successSelectAll);
}
function updateConsoleDropdownforUpdate(){
    function successSelectAll(tx, results){
        var htmlCode = "";
        for(var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += "<option value='" + row['id'] + "'>" + row['name'] + "</option>";
            var cmbConsole2 = $("#cmboConsole2");
            cmbConsole2 = cmbConsole2.html(htmlCode);
            cmbConsole2.selectmenu("refresh");
        }
    }
    Console.selectAll(successSelectAll);
}
function getGames(){
    function successSelectAll(tx, results){
        var htmlCode = "";
        for(var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];
            var completed = "";
            if(row['completed'] == "true"){
                completed = "Yes";
            }
            else{
                completed = "No";
            }
            htmlCode += "<li><a data-role='button' data-row-id='" + row['id'] + "' href='#''>" +
            "<h4>" + row['title'] + "</h4>" +
            "<p>Developer: " + row['developer'] + "</p>" +
            "<p>Purchase Date: " + row['purchaseDate'] + "</p>" +
            "<p>Completed: " + completed + "</p>" +
            "</a></li>";
        }
        var lv = $("#AGBTGameList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#AGBTGameList a").on("click", clickHandler);
        function clickHandler(){
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#AGBTUpdateGame");
        }
    }
    Game.selectAll(successSelectAll);
}
function getConsoles(){
    function successSelectAll(tx, results){
        var htmlCode = "";
        for(var i = 0; i < results.rows.length; i++){
            var row = results.rows[i];
            var playing = "";
            if(row['favourite'] == "true"){
                playing = "Yes";
            }
            else{
                playing = "No";
            }
            htmlCode += "<li><a data-role='button' data-row-id='" + row['id'] + "' href='#''>" +
                "<h4>" + row['name'] + "</h4>" +
                "<p>Purchase Date: " + row['purchaseDate'] + "</p>" +
                "<p>Favourite: " + playing + "</p>" +
                "</a></li>";
        }
        var lv = $("#AGBTConsoleList");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#AGBTConsoleList a").on("click", clickHandler);
        function clickHandler(){
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#AGBTUpdateConsole");
        }
    }
    Console.selectAll(successSelectAll);
}
function addGame(){
    if(doValidate_frmAddGame()){
        console.info("Valid input, ready to be inserted");
        var title = $("#txtTitle1").val();
        var platform = $("#cmboConsole1").val();
        var developer = $("#txtDev1").val();
        var releaseDate = $("#datRelease1").val();
        var purchaseDate = $("#datPurchase1").val();
        var playing;
        if($("#chkPlaying1").prop("checked")){
             playing = true;
        }
        else {
            playing = false;
        }
        var completed;
        if($("#chkCompleted1").prop("checked")){
            completed = true;
        }
        else{
            completed = false;
        }
        var options = [title, platform, developer, releaseDate, purchaseDate, playing, completed];
        Game.insert(options);
        $("#frmAddGame")[0].reset();
        $(location).prop('href', "#AGBTMyGames");
    }
}
function showCurrentGame(){
    var id = localStorage.getItem("id");
    var options = [id];
    function successSelect(tx, results){
        var row = results.rows[0];
        $("#txtTitle2").val(row['title']);
        $("#cmboConsole2").val(row['consoleId']);
        $("#cmboConsole2").selectmenu("refresh");
        $("#txtDev2").val(row['developer']);
        $("#datRelease2").val(row['releaseDate']);
        $("#datPurchase2").val(row['purchaseDate']);
        if(row['playing'] == "true"){
            $("#chkPlaying2").prop("checked", true);
        }
        else{
            $("#chkPlaying2").prop("checked", false);
        }
        if(row['completed'] == "true"){
            $("#chkCompleted2").prop("checked", true);
        }
        else{
            $("#chkCompleted2").prop("checked", false);
        }
        $("#frmUpdateGame :checkbox").checkboxradio("refresh");
    }
    Game.select(options, successSelect);
}
function updateGame(){
    if(doValidate_frmUpdateGame()){
        var id = localStorage.getItem("id");
        var title = $("#txtTitle2").val();
        var platform = $("#cmboConsole2").val();
        var developer = $("#txtDev2").val();
        var releaseDate = $("#datRelease2").val();
        var purchaseDate = $("#datPurchase2").val();
        var playing;
        if($("#chkPlaying2").prop("checked")){
            playing = true;
        }
        else {
            playing = false;
        }
        var completed;
        if($("#chkCompleted2").prop("checked")){
            completed = true;
        }
        else{
            completed = false;
        }
        var options = [title, platform, developer, releaseDate, purchaseDate, playing, completed, id];
        Game.update(options);
        $(location).prop('href', "#AGBTMyGames");
    }
}
function deleteGame(){
    var id = localStorage.getItem("id");
    var options = [id];
    Game.delete(options);
    $(location).prop('href', "#AGBTMyGames");
}
function addConsole(){
    if(doValidate_frmAddConsole()){
        console.info("Valid input, ready to be inserted");
        var name = $("#txtName1").val();
        var purchaseDate = $("#datConsolePurchase1").val();
        var numControllers = $("#numControllers1").val();
        var favourite;
        if($("#chkFavourite1").prop("checked")){
            favourite = true;
        }
        else{
            favourite = false;
        }
        var options = [name, purchaseDate, numControllers, favourite];
        Console.insert(options);
        $("#frmAddConsole").val().reset();
        $(location).prop('href', "#AGBTMyConsoles");
    }
}
function showCurrentConsole(){
    var id = localStorage.getItem("id");
    var options = [id];
    function successSelect(tx, results){
        var row = results.rows[0];
        $("#txtName2").val(row['name']);
        $("#datConsolePurchase2").val(row['purchaseDate']);
        $("#numControllers2").val(row['numControllers']);
        var favourite;
        if(row['favourite'] == "true"){
            $("#chkFavourite2").prop("checked", true);
        }
        else{
            $("#chkFavourite2").prop("checked", false);
        }
        $("#frmUpdateConsole :checkbox").checkboxradio("refresh");
    }
    Console.select(options, successSelect);
}
function updateConsole(){
    if(doValidate_frmUpdateConsole()){
        console.info("Valid input, ready to be inserted");
        var name = $("#txtName2").val();
        var purchaseDate = $("#datConsolePurchase2").val();
        var numControllers = $("#numControllers2").val();
        var favourite;
        if($("#chkFavourite1").prop("checked")){
            favourite = true;
        }
        else{
            favourite = false;
        }
        var options = [name, purchaseDate, numControllers, favourite, id];
        Console.update(options);
        $(location).prop('href', "#AGBTMyConsoles");
    }
}
function deleteConsole(){
    var id = localStorage.getItem("id");
    var options = [id];
    Console.delete(options);
    $(location).prop('href', "#AGBTMyConsole");
}
function clearGamesTable(){
    var results = confirm("Do you want to remove all games?");
    try{
        if(results){
            DB.dropGameTable();
            alert("All Games Removed");
            location.reload();
        }
    }
    catch(e){
        alert("Error: " + e);
    }
}
function clearConsolesTable(){
    var results = confirm("Do you want to remove all consoles?");
    try{
        if(results){
            DB.dropConsoleTable();
            alert("All Consoles Removed");
            location.reload();
        }
    }
    catch(e){
        alert("Error: " + e);
    }
}