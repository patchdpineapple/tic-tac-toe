//Player factory
const Player = function (name, mark) {

    this.name = name;
    this.mark = mark;

    const addMark = (e) => {
        let target = e.target;
        let index = Number(target.id);

        target.textContent = mark;
        game.gameboard.boardArray[index] = target.textContent;

        document.getElementById(`${index}`).removeEventListener('click', game.checkPlayerMark);


    };

    return { name, mark, addMark };
}

// Game module
const game = (function () {

    let _turn = null;
    let _turncounter = null;
    let Player1 = Player('Player1', 'O');
    let Player2 = Player('Player2', 'X');

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
        //index
        // horizontal     012, 345, 678
        // vertical       036, 147, 258
        // diagonal       048, 246

        let checkerArray = new Array(8);

        checkerArray[0] = gameboard.boardArray[0] + gameboard.boardArray[1] + gameboard.boardArray[2];
        checkerArray[1] = gameboard.boardArray[3] + gameboard.boardArray[4] + gameboard.boardArray[5];
        checkerArray[2] = gameboard.boardArray[6] + gameboard.boardArray[7] + gameboard.boardArray[8];

        checkerArray[3] = gameboard.boardArray[0] + gameboard.boardArray[3] + gameboard.boardArray[6];
        checkerArray[4] = gameboard.boardArray[1] + gameboard.boardArray[4] + gameboard.boardArray[7];
        checkerArray[5] = gameboard.boardArray[2] + gameboard.boardArray[5] + gameboard.boardArray[8];

        checkerArray[6] = gameboard.boardArray[0] + gameboard.boardArray[4] + gameboard.boardArray[8];
        checkerArray[7] = gameboard.boardArray[2] + gameboard.boardArray[4] + gameboard.boardArray[6];


        for (let i = 0; i < checkerArray.length; i++) {
            if (checkerArray[i] == 'OOO') {
                document.getElementById('winnerpage').classList.add('win1');
                displayWinnerPage(Player1.name);
                return;
            }
            else if (checkerArray[i] == 'XXX') {
                document.getElementById('winnerpage').classList.add('win2');
                displayWinnerPage(Player2.name);
                return;
            }
        }
        //draw
        if (_turncounter == 10) {
            document.getElementById('displayWinner').textContent = `It's a Draw!`;
            document.getElementById('winnerpage').classList.add('display');
        }

    }

    function displayWinnerPage(playername) {

        document.getElementById('displayWinner').textContent = `${playername} is the winner!`
        document.getElementById('winnerpage').classList.add('display');
    }


    function _setBoard() {

        for (let i = 0; i < gameboard.boardArray.length; i++) {
            document.getElementById(`${i}`).addEventListener('click', checkPlayerMark);
        }
    }

    function checkPlayerMark(e) {

        if (_turn == 1) {
            _turn = 2;
            _turncounter++;
            Player1.addMark(e);
            document.querySelector('.player1').classList.remove('playerturn');
            document.querySelector('.player2').classList.add('playerturn');
            _checkWinner();
        }
        else if (_turn == 2) {
            _turn = 1;
            _turncounter++;
            Player2.addMark(e);
            document.querySelector('.player2').classList.remove('playerturn');
            document.querySelector('.player1').classList.add('playerturn');
            _checkWinner();
        }
    }

    function start() {

        _turn = 1;
        _turncounter = 1;

        let name1 = document.getElementById('formPlayer1Name').value;
        let name2 = document.getElementById('formPlayer2Name').value;

        if (name1 == '')
            name1 = 'Player 1';

        if (name2 == '')
            name2 = 'Player 2';

        Player1.name = name1;
        Player2.name = name2;

        document.getElementById('player1name').textContent = Player1.name;
        document.getElementById('player2name').textContent = Player2.name;

        _setBoard();
        document.querySelector('.player1').classList.add('playerturn');
        document.getElementById('startpage').classList.remove('display');


    }

    function restartGame() {
        gameboard.resetBoard();
        _turn = 1;

        Player1.name = 'Player1';
        Player2.name = 'Player2';

        document.getElementById('winnerpage').classList.remove('display');
        document.getElementById('winnerpage').classList.remove('win1');
        document.getElementById('winnerpage').classList.remove('win2');
        document.querySelector('.player1').classList.remove('playerturn');
        document.querySelector('.player2').classList.remove('playerturn');
        document.getElementById('startpage').classList.add('display');
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
        checkPlayerMark,
        displayWinnerPage,
    };


})();


game.resetForm();
