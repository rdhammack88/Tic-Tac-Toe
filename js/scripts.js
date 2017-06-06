// TIC-TAC-TOE FUNCTIONALITY
/* Created by Dustin Hammack - May 2017 */

//Working completely except computer is dumb
// v.04 Bug fixes and code cleanup

$(function() {

    // DECLARING VARIABLES TO BE USED FOR CHOICE OF PLAYER & COMPUTER SIDE
    var player, computer, chosenSquare, computerChoice, idOf, randomNum, removeNum;
    var usedSquares = new Array();
    var allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
    var playerTurn = true, computerTurn = false;

    // IF THE PLAYER CHOOSES TO BE "X"
    $('#x').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'X';
        computer = 'O';

        // SPIN THE "X" AND "O" CARDS
        $('.side').addClass('rotate').delay(1000).slideUp(1500);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);

        // DISPLAY THE RESET BUTTON
        $('#reset').css({
            display: 'block',
            position: 'fixed',
            top: '50px',
            left: '40px'
        }).addClass('active');
    }); // END OF '#x.click'

    // IF THE PLAYER CHOOSES TO BE "O"
    $('#o').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'O';
        computer = 'X';

        // SPIN THE "X" AND "O" CARDS
        $('.side').addClass('rotate').delay(1000).slideUp(1500);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);

        // DISPLAY THE RESET BUTTON
        $('#reset').css({
            display: 'block',
            position: 'fixed',
            top: '50px',
            left: '40px'
        }).addClass('active');
    }); // END OF '#o.click'


    if(playerTurn === true) {
        // WHEN THE PLAYER CLICKS A BOARD POSITION
        $('.cards').click(function() {
            chosenSquare = $(this).attr('id');

            while(playerTurn == true) {
                if(usedSquares.length >= 9) {
                    $('.cards').prop('disabled', true);
                    alert('Tied game!');
                    break;
                } else {
                    if($(this).val() == '') {
                        $(this).val(player).css({'background': ' yellow', 'opacity': '.6'});
                        usedSquares.push(chosenSquare);
                        if(allCards.includes(chosenSquare)){
                            removeNum = allCards.indexOf(chosenSquare);
                            allCards.splice(removeNum,1);
                        }
                        playerTurn = false;
                        computerTurn = true;
                        setTimeout(whoWon, 200);
                        break;
                    } else {
                        // DO NOTHING BUT ALERT THE USER TO PICK ANOTHER SQUARE
                        alert("I'm sorry, please choose another square");
                        break;
                    }
                }
            }

            setTimeout(function() {

                while(computerTurn == true) {
                    if(usedSquares.length >= 9) {
                        $('.cards').prop('disabled', true);
                        alert('Tied game!');
                        break;
                    } else {
//                        randomNum = Math.floor(Math.random() * allCards.length);
//                        computerChoice = allCards[randomNum];
                        computersGo2();
                        idOf = '#' + computerChoice;
                        if(usedSquares.includes(idOf)) {
                            //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
                            continue;
                        } else {
                            $(idOf).val(computer).css({'background': ' green', 'opacity': '.6'});
                            usedSquares.push(computerChoice);
                            allCards.splice(randomNum,1);
                            computerTurn = false;
                            playerTurn = true;
                            setTimeout(whoWon, 200);
                            break;
                        }
                    }
                }
            }, 1000);
            console.log(allCards);
            console.log(usedSquares);
        }); // END OF '.cards.click'
    }

    function whoWon() {
        if($('#card1').val() === $('#card2').val() && $('#card1').val() === $('#card3').val()){
            if($('#card1').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card1').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card1').val() === $('#card5').val() && $('#card1').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card1').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card1').val() === $('#card7').val()) {
            if($('#card1').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card1').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card2').val() === $('#card5').val() && $('#card2').val() === $('#card8').val()) {
            if($('#card2').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card2').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card3').val() === $('#card6').val() && $('#card3').val() === $('#card9').val()){
            if($('#card3').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card3').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card3').val() === $('#card5').val() && $('#card3').val() === $('#card7').val()) {
            if($('#card3').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card3').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card4').val() === $('#card5').val() && $('#card4').val() === $('#card6').val()) {
            if($('#card4').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card4').val() === computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        } else if($('#card7').val() === $('#card8').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card7').val() === player) {
                alert('Congratulations player! You have won!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            } else if($('#card7').val() == computer) {
                alert('Haha! I am triumphent once again!');
                playerTurn = false;
                computerTurn = false;
                $('.cards').prop('disabled', true);
            }
        }

        return playerTurn, computerTurn;
    }

    //  FIRST FUNCTION TO CALL WHEN COMPUTER TURN === TRUE
    function computersGo1() {
//        computersGo2();
        if($('#card1').val() === $('#card2').val() && $('#card3').val() === ''){
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card3').val() && $('#card2').val() === '') {
            computerChoice = 'card2';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card3').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card5').val() && $('#card9').val() === '') {
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card9').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card9').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card4').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card7').val() && $('#card4').val() === '') {
            computerChoice = 'card4';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card7').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card5').val() && $('#card8').val() === '') {
            computerChoice = 'card8';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card8').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card8').val() && $('#card2').val() === '') {
            computerChoice = 'card2';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card6').val() && $('#card9').val() === ''){
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card9').val() && $('#card6').val() === '') {
            computerChoice = 'card6';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card6').val() === $('#card9').val() && $('#card3').val() === '') {
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card5').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card7').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card7').val() && $('#card3').val() === '') {
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card5').val() && $('#card6').val() === '') {
            computerChoice = 'card6';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card6').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card6').val() && $('#card4').val() === '') {
            computerChoice = 'card4';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card7').val() === $('#card8').val() && $('#card9').val() === '') {
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card7').val() === $('#card9').val() && $('#card8').val() === '') {
            computerChoice = 'card8';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#car8').val() === $('#card9').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);


        }else if($('#card1').val() === $('#card2').val() && $('#card4').val() === $('#card5').val()){
            if($('#card1').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card2').val() && $('#card4').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card2').val() && $('#card5').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card2').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card2').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card2').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card4').val() === $('#card5').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card4').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card5').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card3').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card2').val() === $('#card5').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card2').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card5').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card4').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card2').val() === $('#card5').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card2').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card5').val() === $('#card8').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card1').val() === $('#card7').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card1').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card1').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card4').val() === $('#card5').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card4').val() === $('#card6').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card5').val() === $('#card6').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card3').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card5').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card5').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card5').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card8').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card8').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card2').val() === $('#card8').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card2').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card2').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card5').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card5').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card5').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card6').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card6').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card6').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card2').val() === $('#card5').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card2').val() === $('#card8').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card5';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card5').val() === $('#card8').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card4').val() === $('#card7').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card4').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card4').val() === computer) {
                computerChoice = 'card1';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card6').val() && $('#card7').val() === $('#card8').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card6').val() && $('#card7').val() === $('#card9').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card8';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card6').val() && $('#card8').val() === $('#card9').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card7';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card4';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card8').val() && $('#card3').val() === $('#card6').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card9';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card8').val() && $('#card3').val() === $('#card9').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card6';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else if($('#card5').val() === $('#card8').val() && $('#card6').val() === $('#card9').val()) {
            if($('#card5').val() === player) {
                computerChoice = 'card3';
                randomNum = allCards.indexOf(computerChoice);
            } else if ($('#card5').val() === computer) {
                computerChoice = 'card2';
                randomNum = allCards.indexOf(computerChoice);
            }
        } else {
            randomNum = Math.floor(Math.random() * allCards.length);
            computerChoice = allCards[randomNum];
        }

//        } else {
//            computersGo2();
//        }

        console.log(computerChoice);
        return computerChoice, randomNum;
    };

    //  SECOND FUNCTION TO CALL WHEN COMPUTER TURN === TRUE
    function computersGo2() {
        if($('#card1').val() === $('#card2').val() && $('#card3').val() === ''){
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card3').val() && $('#card2').val() === '') {
            computerChoice = 'card2';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card3').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card5').val() && $('#card9').val() === '') {
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card9').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card9').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card4').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card1').val() === $('#card7').val() && $('#card4').val() === '') {
            computerChoice = 'card4';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card7').val() && $('#card1').val() === '') {
            computerChoice = 'card1';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card5').val() && $('#card8').val() === '') {
            computerChoice = 'card8';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card2').val() === $('#card8').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card8').val() && $('#card2').val() === '') {
            computerChoice = 'card2';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card6').val() && $('#card9').val() === ''){
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card9').val() && $('#card6').val() === '') {
            computerChoice = 'card6';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card6').val() === $('#card9').val() && $('#card3').val() === '') {
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card5').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card3').val() === $('#card7').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card7').val() && $('#card3').val() === '') {
            computerChoice = 'card3';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card5').val() && $('#card6').val() === '') {
            computerChoice = 'card6';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card4').val() === $('#card6').val() && $('#card5').val() === '') {
            computerChoice = 'card5';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card5').val() === $('#card6').val() && $('#card4').val() === '') {
            computerChoice = 'card4';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card7').val() === $('#card8').val() && $('#card9').val() === '') {
            computerChoice = 'card9';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#card7').val() === $('#card9').val() && $('#card8').val() === '') {
            computerChoice = 'card8';
            randomNum = allCards.indexOf(computerChoice);
        } else if($('#car8').val() === $('#card9').val() && $('#card7').val() === '') {
            computerChoice = 'card7';
            randomNum = allCards.indexOf(computerChoice);
        } else {
//            randomNum = Math.floor(Math.random() * allCards.length);
//            computerChoice = allCards[randomNum];

        }

        return computerChoice, randomNum;
    }

    // WHEN THE RESET BUTTON IS PRESSED, RESET THE GAME
    $('#reset').click(function(){
        // EMPTY THE LIST OF USED SQUARES AND RESET ALL VARIABLES
        usedSquares = [];
        player = null, computer = null, chosenSquare = null, computerChoice = null, idOf = null, randomNum = null, removeNum = null;
        allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
        playerTurn = true, computerTurn = false;

        $('#container').css('display', 'none');
        $('.side').fadeIn(2000).removeClass('rotate');
        $('.cards').val('').css("background",'white').prop('disabled', false);
        $(this).removeClass('active');
    }); // END OF '#reset.click'
});
