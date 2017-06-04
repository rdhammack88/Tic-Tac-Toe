// TIC-TAC-TOE FUNCTIONALITY
/* Created by Dustin Hammack - May 2017 */

$(function() {

    // DECLARING VARIABLES TO BE USED FOR CHOICE OF PLAYER & COMPUTER SIDE
    var player, computer, chosenSquare, computerChoice, idOf, randomNum, removeNum;
    var usedSquares = [];
    var allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
    var playerTurn = true, computerTurn = false;

    // IF THE PLAYER CHOOSES TO BE "X"
    $('#x').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'x';
        computer = 'o';

        // SPIN THE "X" AND "O" CARDS
        $('.side').addClass('rotate').delay(1000).slideUp(1500);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);

        // DISPLAY THE RESET BUTTON
        $('#reset').css({
            display: 'block',
            position: 'fixed',
            top: '80px',
            left: '60px'
        }).addClass('active');
    });

    // IF THE PLAYER CHOOSES TO BE "O"
    $('#o').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'o';
        computer = 'x';

        // SPIN THE "X" AND "O" CARDS
        $('.side').addClass('rotate').delay(1000).fadeOut(1000);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);

        // DISPLAY THE RESET BUTTON
        $('#reset').css({
            display: 'block',
            position: 'fixed',
            top: '80px',
            left: '60px'
        }).addClass('active');
    });

    // WHEN THE PLAYER CLICKS A BOARD POSITION
    $('.cards').click(function() {
//        $(this).val(player).css('background','yellow');
        chosenSquare = $(this).attr('id');

        while(playerTurn == true) {

            if(usedSquares.length >= 9) {
                alert('game over!');
                break;
            } else {
                if($(this).val() == '') {
                    $(this).val(player).css('background','yellow');
                    usedSquares.push(chosenSquare);
                    if(allCards.includes(chosenSquare)){
                        removeNum = allCards.indexOf(chosenSquare);
                        allCards.splice(removeNum,1);
//                        alert('hello there')
                    };
                    playerTurn = false;
                    computerTurn = true;
                    break;

                } else {
                    // DO NOTHING BUT ALERT THE USER TO PICK ANOTHER SQUARE
                    alert("I'm sorry, please choose another square");
                    break;
                };
            };
        };


//        alert(allCards);
//        alert(usedSquares);
//        alert(usedSquares.length);

//        if(usedSquares.length >= 9) {
//            alert('game over!')
//        };

        setTimeout(function() {
            alert('computers turn');
        },400);

        setTimeout(function() {

            while(computerTurn == true) {

                if(usedSquares.length >= 9) {
                    alert('game over!');
                    break;
                } else {
//                    setTimeout(function() {
//                        alert('computers turn');
//                    },100);
                    randomNum = Math.floor(Math.random() * allCards.length);
                    computerChoice = allCards[randomNum];
                    idOf = '#' + computerChoice;
                    if(usedSquares.includes(idOf)) {
                        //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
                        continue;
                    } else {
//                        alert('computer choosing now')
                        $(idOf).val(computer).css('background', ' green');
                        usedSquares.push(computerChoice);
                        allCards.splice(randomNum,1);
                        computerTurn = false;
                        playerTurn = true;
                        break;
                    };
                };
            };
        }, 1000);
    });

//        alert(usedSquares.length);
//        if(usedSquares.length == 9) {
//            alert('game over!')
//        };

    // WHEN THE RESET BUTTON IS PRESSED, RESET THE GAME
    $('#reset').click(function(){
        // EMPTY THE LIST OF USED SQUARES AND RESET ALL VARIABLES
        usedSquares = [];
        player = null, computer = null, chosenSquare = null, computerChoice = null, idOf = null, randomNum = null, removeNum = null;
        allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
        playerTurn = true, computerTurn = false;

        $('#container').css('display', 'none');
        $('.side').fadeIn(2000).removeClass('rotate');
        $('.cards').val('').css("background",'white');
        $(this).removeClass('active');
    });
});
