//
const gameinitialize = (function (){





    return {

    };


})();


// Game module
const game = (function (){

    let gameboard = ['O','X','X','O','X','O','X','O','X'];
    

    function initializeboard(){
        

    }



    return {
        gameboard,
    };


})();



//Player factory
const Player = function (name) {

    let playername = '';

    function setName(name){
        playername = name;
    }

    function addMark(){

    }

    return {playername, addMark};
}
