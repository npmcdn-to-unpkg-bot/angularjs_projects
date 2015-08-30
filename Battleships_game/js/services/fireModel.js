battleShips.factory('fireModel', function fireModel(boardConfig) {

    function parseGuess(guess) {

        var alphabet = boardConfig.alphabet;

        if (guess === null || guess.length >= 4) {
            alert(boardConfig.GUESS_INSTRUCTIONS);
        } else {
            var firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);
            // var column = guess.slice(1, 3);


            if (isNaN(row) || isNaN(column)) {
                alert(boardConfig.NOT_VALID);
            } else if (row < 0 || row >= boardConfig.boardSize ||
                column < 0 || column >= boardConfig.boardSize) {
                alert(boardConfig.NOT_BOARD);
            } else {
                return row + column;
            }
        }
        return null;
    };

    return {
        fire: parseGuess
    };

});