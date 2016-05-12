/*  Brian Treichel & Alex Galka
    Holds all the basic functions and redirecting of the html
    Project Folder: AGBTFinalProject
    File Name: AGBTglobal.js
    Revision History: 13-04-2016 Created
*/
function pageCurrentlyPlaying_show(){
    getCurrent();
}
function pageAddGame_show(){
    updateConsoleDropdown();
}
function pageUpdateGame_show(){
    updateConsoleDropdownforUpdate();
    showCurrentGame();
}
function btnAddGame_click(){
    $(location).prop('href', "#AGBTAddGame");
}
function btnClearGames_click(){
    clearGamesTable();
}
function btnSaveGame_click(){
    addGame();
}
function btnCanelGame_click(){
    $(location).prop('href', "#AGBTMyGames");
}
function btnAddConsole_click(){
    $(location).prop('href', "#AGBTAddConsole");
}
function btnClearConsoles_click(){
    clearConsolesTable();
}
function btnSaveConsole_click(){
    addConsole();
}
function btnCanelConsole_click(){
    $(location).prop('href', "#AGBTMyConsoles");
}
function btnUpdateGame_click(){
    updateGame();
}
function btnDeleteGame_click(){
    deleteGame();
}
function pageMyGames_show(){
    getGames();
}
function pageMyConsoles_show(){
    getConsoles();
}
function pageUpdateConsole_show(){
    updateConsoleDropdown();
    showCurrentConsole();
}
function btnEnter_click(){
    $(location).prop('href', "#AGBTCurrentlyPlaying");
}
function btnUpdateConsole_click(){
    updateConsole();
}
function btnDeleteConsole_click(){
    deleteConsole();
}
function initDB(){
    console.info("Creating Database");
    try{
        DB.createDatabase();
        if(db){
            console.info("Creating Tables...");
            DB.createTables();
        }
    }
    catch(e){
        console.error("Error : (Fatal) Error in initDB(), can not proceed");
    }
}
function init(){
    $("#btnEnter").on("click", btnEnter_click);
    $("#AGBTAddGame").on("pageshow", pageAddGame_show);
    $("#AGBTUpdateGame").on("pageshow", pageUpdateGame_show);
    $("#btnAddGame").on("click", btnAddGame_click);
    $("#btnClearGames").on("click", btnClearGames_click);
    $("#btnSaveGame").on("click", btnSaveGame_click);
    $("#btnCancelGame").on("click", btnCanelGame_click);
    $("#btnAddConsole").on("click", btnAddConsole_click);
    $("#btnClearConsoles").on("click", btnClearConsoles_click);
    $("#btnSaveConsole").on("click", btnSaveConsole_click);
    $("#btnCancelConsole").on("click", btnCanelConsole_click);
    $("#AGBTMyGames").on("pageshow", pageMyGames_show);
    $("#AGBTMyConsoles").on("pageshow", pageMyConsoles_show);
    $("#AGBTCurrentlyPlaying").on("pageshow", pageCurrentlyPlaying_show);
    $("#btnUpdateGame").on("click", btnUpdateGame_click);
    $("#btnDeleteGame").on("click", btnDeleteGame_click);
    $("#AGBTUpdateConsole").on("pageshow", pageUpdateConsole_show);
    $("#btnUpdateConsole").on("click", btnUpdateConsole_click);
    $("#btnDeleteConsole").on("click", btnDeleteConsole_click);
    $("#btnCancelGame2").on("click", btnCanelGame_click);
    $("#btnCancelConsole2").on("click", btnCanelConsole_click);
}
$(document).ready(function(){
    initDB();
    init();
});
