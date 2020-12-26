//
const gamemaster = (function () {





    return {

    };


})();


// Game module
const game = (function () {

    let _turn = 1;


    let gameboard = {
        boardArray: ['O', 'X', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],

        fillBoard: function () {
            for (let i = 0; i < this.boardArray.length; i++) {
                document.getElementById(`${i}`).textContent = this.boardArray[i];

            }
        },

        resetBoard: function () {
            for (let i = 0; i < this.boardArray.length; i++) {
                document.getElementById(`${i}`).textContent = '';

            }
        },



    };

    function _checkWinner() {


    }

    function _displayWinner() {

    }

    function _setBoard() {
        for (let i = 0; i < gameboard.boardArray.length; i++) {
            document.getElementById(`${i}`).addEventListener('click', (e) => {
                let target = e.target;
                if(_turn == 1){
                    target.textContent = 'O';
                    _turn = 2;
                }
                else if(_turn == 2){
                    target.textContent = 'X';
                    _turn = 1;
                }


            });
        }

    }

    



    function start() {
        _setBoard();

        let name1 = document.getElementById('formPlayer1Name').value;
        let name2 = document.getElementById('formPlayer2Name').value;
        document.getElementById('player1name').textContent = name1;
        document.getElementById('player2name').textContent = name2;
        document.getElementById('startpage').style.display = "none";

    }

    function resetForm() {
        document.getElementById('formPlayer1Name').value = '';
        document.getElementById('formPlayer2Name').value = '';
    }




    return {
        gameboard,
        start,
        resetForm,
    };


})();



//Player factory
const Player = function (name, mark) {

    let playername = '';

    function setName(name) {
        playername = name;
    }

    function addMark() {
        game.gameboard.markboard('O');
    }

    return { playername, addMark };
}

game.resetForm();
