// TIC-TAC-TOE FUNCTIONALITY
/* Created by Dustin Hammack - May 2017 */

$(function() {

    // DECLARING VARIABLES TO BE USED FOR CHOICE OF PLAYER & COMPUTER SIDE
    var player, computer, chosenSquare, computerChoice, idOf, randomNum, removeNum;
    var usedSquares = [];
//    var allCards = $('body').find('input').attr('id').toArray();
    var allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
//    var allCards = $('input');
    var playerTurn = true;
    var computerTurn = false;

//    alert(allCards);
    // IF THE PLAYER CHOOSES TO BE "X"
    $('#x').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'x';
        computer = 'o';

        // SPIN THE "X" AND "O" CARDS
        $('.side').addClass('rotate').delay(1000).slideUp(3000);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);

//        alert(allCards);//.attr('id');

        // DISPLAY THE RESET BUTTON
        $('#reset').css({
            display: 'block',
            position: 'fixed',
            top: '80px',
            left: '60px'
        }).addClass('active');

        // RETURN PLAYERS CHOICE OF "X" or "O"
        return player, computer;
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

        // RETURN PLAYERS CHOICE OF "X" or "O"
        return player, computer;
    });

    // WHEN THE PLAYER CLICKS A BOARD POSITION
    $('.cards').click(function() {
        $(this).val(player).css('background','yellow');

        chosenSquare = $(this).attr('id');
//        chosenSquare = document.getElementsByClassName(this)
//        while(playerTurn == true) {
        if(usedSquares.includes(chosenSquare)) {
//            alert("I'm sorry, please choose another square");
//            $(this).prop('disabled', true);
//                $('.cards').click(function() {
//                    $(this).val(player).css('background','yellow');
//                });
//                playerTurn = false;
//            break;
        } else {
            usedSquares.push(chosenSquare);
//            playerTurn = false;
//            $(this).prop('disabled', true);
//            allCards.splice(chosenSquare,1);
            if(allCards.includes(chosenSquare)) {
            alert('your on the right track!')
            removeNum = allCards.indexOf(chosenSquare);
            alert(removeNum);
            allCards.splice(removeNum,1);
        };
            playerTurn = false;
//            computerTurn = true;
//            return playerTurn;
//            break;
        };
//        };



        alert(chosenSquare);
        alert(usedSquares);
        alert(allCards.length);
        alert(allCards);
        computerTurn = true;

//        playerTurn = false;
//        computerTurn = true;
//        computerChoice = allCards[Math.floor(Math.random() * allCards.length)];
//        idOf = '#' + computerChoice;

//        document.getElementById( iden)

        while(computerTurn == true) {
            alert('computers turn');
            randomNum = Math.floor(Math.random() * allCards.length)
//            computerChoice = allCards[Math.floor(Math.random() * allCards.length)];
            computerChoice = allCards[randomNum];
            idOf = '#' + computerChoice;
            if(usedSquares.includes(computerChoice)) {
                alert('computer choosing again');
//                computerChoice = allCards[ Math.floor(Math.random() * allCards.length)];
                continue;
//                $(idOf).val(computer).css('background', ' green');
//                usedSquares.push(computerChoice);
//                allCards.splice(computerChoice,1);
//                computerTurn = false;
//                $(idOf).prop('disabled', true);
            } else {
                alert('computer choosing now')
//                document.getElementById(computerChoice).value(computer);
                $(idOf).val(computer).css('background', ' green');
//                $(computerChoice).val(computer).css('background', ' green');
                usedSquares.push(computerChoice);
                allCards.splice(randomNum,1);
                computerTurn = false

                alert(computerChoice);
                alert(usedSquares);
                alert(allCards.length);
                alert(allCards);
//                $(idOf).prop('disabled', true);
            };
        };

//        $(idOf).val(computer).css('background', ' green');
//        usedSquares.push(computerChoice);
//        computerTurn = false;

//        console.log('input #card4');

//        if(usedSquares.includes($(this).attr('id'))) {
//            alert("I'm sorry, please choose another square")
//        };



//        return chosenSquare, usedSquares, computerChoice;

    });
//    while(playerTurn !== true) {
//            if(usedSquares.includes(computerChoice)) {
////                alert('computer choosing again');
//                computerChoice = allCards[ Math.floor(Math.random() * allCards.length)];
//                $(idOf).val(computer).css('background', ' green');
//                usedSquares.push(computerChoice);
//                computerTurn = false;
//                break;
//            } else {
////                document.getElementById(computerChoice).value(computer);
//                $(idOf).val(computer).css('background', ' green');
//                usedSquares.push(computerChoice);
//                computerTurn = false
//                break;
//            };
//
//        };

    if(usedSquares.length == 9) {
        alert('game over!')
//        $(':input').attr(disabled);
    };

//    if($(this).jquery.inArray(usedSquares)) {
//            alert("I'm sorry, please choose another square")
//        };

    // WHEN THE RESET BUTTON IS PRESSED, RESET THE GAME
    $('#reset').click(function(){
        // EMPTY THE LIST OF USED SQUARES
        usedSquares = [];

        $('#container').css('display', 'none');
        $('.side').fadeIn(2000).removeClass('rotate');
        $('.cards').val('').css("background",'white');
        $(this).removeClass('active');
    });


});
