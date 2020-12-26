//
const gamemaster = (function () {





    return {

    };


})();


// Game module
const game = (function () {

    let _turn = 1;
    let Player1 = {};
    let Player2 = {};

    //Player factory
    const Player = function (name, mark) {

        this.name = name;
        this.mark = mark;

        const addMark = (e) => {
            let target = e.target;
            let index = Number(target.id);

            target.textContent = mark;
            gameboard.boardArray[index] = target.textContent;

            let old_element = document.getElementById(target.id);
            let new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);

        };

        return { name, mark, addMark };
    }


    let gameboard = {
        boardArray: ['', '', '', '', '', '', '', '', ''],

        fillBoard: function () {
            for (let i = 0; i < this.boardArray.length; i++) {
                document.getElementById(`${i}`).textContent = this.boardArray[i];

            }
        },

        resetBoard: function () {
            for (let i = 0; i < this.boardArray.length; i++) {
                document.getElementById(`${i}`).textContent = '';

            }
            this.boardArray = ['', '', '', '', '', '', '', '', ''];
        },
    };

    function _checkWinner() {


    }

    function _displayWinner() {

    }

    function _setBoard() {


        for (let i = 0; i < gameboard.boardArray.length; i++) {
            document.getElementById(`${i}`).addEventListener('click', (e) => {


                if (_turn == 1) {
                    Player1.addMark(e);
                    _turn = 2;
                    document.querySelector('.player1').classList.remove('playerturn');
                    document.querySelector('.player2').classList.add('playerturn');

                }
                else if (_turn == 2) {
                    Player2.addMark(e);
                    _turn = 1;
                    document.querySelector('.player2').classList.remove('playerturn');
                    document.querySelector('.player1').classList.add('playerturn');

                }

            });
        }

    }







    function start() {


        let name1 = document.getElementById('formPlayer1Name').value;
        let name2 = document.getElementById('formPlayer2Name').value;
        Player1 = Player(name1, 'O');
        Player2 = Player(name2, 'X');

        document.getElementById('player1name').textContent = Player1.name;
        document.getElementById('player2name').textContent = Player2.name;

        _setBoard();
        document.querySelector('.player1').classList.add('playerturn');
        document.getElementById('startpage').style.display = "none";

    }

    function restartGame() {
        gameboard.resetBoard();
        _turn = 1;
        document.getElementById('startpage').style.display = "flex";
        Player1 = {};
        Player2 = {};

    }

    function resetForm() {
        document.getElementById('formPlayer1Name').value = '';
        document.getElementById('formPlayer2Name').value = '';
    }




    return {
        gameboard,
        start,
        resetForm,
        restartGame,
        Player1,
        Player2,
    };


})();





game.resetForm();
