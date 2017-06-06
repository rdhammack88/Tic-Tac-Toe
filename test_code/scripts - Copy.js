// TIC-TAC-TOE FUNCTIONALITY
/* Created by Dustin Hammack - May 2017 */

//Working completely except computer is dumb

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
    }); // END OF '#x.click'

    // IF THE PLAYER CHOOSES TO BE "O"
    $('#o').click(function() {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'o';
        computer = 'x';

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
    }); // END OF '#o.click'


    if(playerTurn === true) {
        // WHEN THE PLAYER CLICKS A BOARD POSITION
        $('.cards').click(function() {
            chosenSquare = $(this).attr('id');

            while(playerTurn == true) {
                if(usedSquares.length >= 9) {
                    alert('Tied game!');
                    $('.cards').prop('disabled', true);
                    break;
                } else {
                    if($(this).val() == '') {
                        $(this).val(player).css('background','yellow');
                        usedSquares.push(chosenSquare);
                        if(allCards.includes(chosenSquare)){
                            removeNum = allCards.indexOf(chosenSquare);
                            allCards.splice(removeNum,1);
                        };
                        playerTurn = false;
                        computerTurn = true;
                        setTimeout(whoWon, 200);
//                        whoWon();
                        break;
                    } else {
                        // DO NOTHING BUT ALERT THE USER TO PICK ANOTHER SQUARE
                        alert("I'm sorry, please choose another square");
                        break;
                    }
                }
            }
//            whoWon();


    //=========================================================
    //  ABOVE NOT WORKING, BELOW HALFWAY WORKS
    //=========================================================



//            if(computerTurn === true) {
//                setTimeout(function() {
//                    alert('computers turn');
//                },400);
//            };
//                setTimeout(function() {
//
//                    while(computerTurn == true) {
//                        if(usedSquares.length >= 9) {
//                            alert('game over!');
//                            $('.cards').prop('disabled', true);
//                            break;
//                        } else {
//                            randomNum = Math.floor(Math.random() * allCards.length);
//                            computerChoice = allCards[randomNum];
//                            idOf = '#' + computerChoice;
//                            if(usedSquares.includes(idOf)) {
//                                //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
//                                continue;
//                            } else {
//                                $(idOf).val(computer).css('background', ' green');
//                                usedSquares.push(computerChoice);
//                                allCards.splice(randomNum,1);
//                                computerTurn = false;
//                                playerTurn = true;
//                                break;
//                            };
//                        };
//                    };
//                }, 1000);


//            setTimeout(function() {
//                alert('computers turn');
//            },3000)
            setTimeout(function() {

                while(computerTurn == true) {
                    if(usedSquares.length >= 9) {
                        alert('Tied game!');
                        $('.cards').prop('disabled', true);
                        break;
                    } else {
                        randomNum = Math.floor(Math.random() * allCards.length);
                        computerChoice = allCards[randomNum];
                        idOf = '#' + computerChoice;
                        if(usedSquares.includes(idOf)) {
                            //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
                            continue;
                        } else {
                            $(idOf).val(computer).css('background', ' green');
                            usedSquares.push(computerChoice);
                            allCards.splice(randomNum,1);
                            computerTurn = false;
                            playerTurn = true;
                            setTimeout(whoWon, 200);
//                            whoWon();
                            break;
                        }
                    }
                }
            }, 1000);

//            whoWon();

//            },400);


//            if($('#card1').val() === $('#card2').val() && $('#card1').val() === $('#card3').val()){
//                if($('#card1').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card1').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card1').val() === $('#card5').val() && $('#card1').val() === $('#card9').val()) {
//                if($('#card1').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card1').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card1').val() === $('#card4').val() && $('#card1').val() === $('#card7').val()) {
//                if($('#card1').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card1').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card2').val() === $('#card5').val() && $('#card2').val() === $('#card8').val()) {
//                if($('#card2').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card2').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card3').val() === $('#card6').val() && $('#card3').val() === $('#card9').val()){
//                if($('#card3').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card3').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card3').val() === $('#card5').val() && $('#card3').val() === $('#card7').val()) {
//                if($('#card3').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card3').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card4').val() === $('#card5').val() && $('#card4').val() === $('#card6').val()) {
//                if($('#card4').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card4').val() === computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            } else if($('#card7').val() === $('#card8').val() && $('#card7').val() === $('#card9').val()) {
//                if($('#card7').val() === player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                } else if($('#card7').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//                    playerTurn = false;
//                    computerTurn = false;
//                }
//            }

    //=========================================================
    //  ABOVE HALFWAY WORKS
    //=========================================================

        }); // END OF '.cards.click'
    };



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


//if($('#card1').val() === $('#card2').val() && $('#card1').val() === $('#card3').val()){
//    if($('#card1').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card1').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card1').val() === $('#card5').val() && $('#card1').val() === $('#card9').val()) {
//    if($('#card1').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card1').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card1').val() === $('#card4').val() && $('#card1').val() === $('#card7').val()) {
//    if($('#card1').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card1').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card2').val() === $('#card5').val() && $('#card2').val() === $('#card8').val()) {
//    if($('#card2').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card2').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card3').val() === $('#card6').val() && $('#card3').val() === $('#card9').val()){
//    if($('#card3').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card3').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card3').val() === $('#card5').val() && $('#card3').val() === $('#card7').val()) {
//    if($('#card3').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card3').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card4').val() === $('#card5').val() && $('#card4').val() === $('#card6').val()) {
//    if($('#card4').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card4').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else if($('#card7').val() === $('#card8').val() && $('#card7').val() === $('#card9').val()) {
//    if($('#card7').val() == player) {
//        alert('Congratulations player! You have won!');
//    } else if($('#card7').val() == computer) {
//        alert('Haha! I am triumphent once again!');
//    };
//} else {
//      setTimeout(function() {
//                alert('computers turn');
//            },400);
//
//            setTimeout(function() {
//
//                while(computerTurn == true) {
//                    if(usedSquares.length >= 9) {
//                        alert('game over!');
//                        $('.cards').prop('disabled', true);
//                        break;
//                    } else {
//                        randomNum = Math.floor(Math.random() * allCards.length);
//                        computerChoice = allCards[randomNum];
//                        idOf = '#' + computerChoice;
//                        if(usedSquares.includes(idOf)) {
//                            //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
//                            continue;
//                        } else {
//                            $(idOf).val(computer).css('background', ' green');
//                            usedSquares.push(computerChoice);
//                            allCards.splice(randomNum,1);
//                            computerTurn = false;
//                            playerTurn = true;
//                            break;
//                        };
//                    };
//                };
//            }, 1000);
//};



    //=========================================================
    //  ABOVE & BELOW NOT WORKING
    //=========================================================


//            if(computerTurn === true) {
//                setTimeout(function() {
//                    alert('computers turn');
//                },400);
//            };
//                setTimeout(function() {
//
//                    while(computerTurn == true) {
//                        if(usedSquares.length >= 9) {
//                            alert('game over!');
//                            $('.cards').prop('disabled', true);
//                            break;
//                        } else {
//                            randomNum = Math.floor(Math.random() * allCards.length);
//                            computerChoice = allCards[randomNum];
//                            idOf = '#' + computerChoice;
//                            if(usedSquares.includes(idOf)) {
//                                //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
//                                continue;
//                            } else {
//                                $(idOf).val(computer).css('background', ' green');
//                                usedSquares.push(computerChoice);
//                                allCards.splice(randomNum,1);
//                                computerTurn = false;
//                                playerTurn = true;
//                                break;
//                            };
//                        };
//                    };
//                }, 1000);
//
//
//
//
//            if($('#card1').val() === $('#card2').val() && $('#card1').val() === $('#card3').val()){
//                if($('#card1').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card1').val() === $('#card5').val() && $('#card1').val() === $('#card9').val()) {
//                if($('#card1').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card1').val() === $('#card4').val() && $('#card1').val() === $('#card7').val()) {
//                if($('#card1').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card2').val() === $('#card5').val() && $('#card2').val() === $('#card8').val()) {
//                if($('#card2').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card3').val() === $('#card6').val() && $('#card3').val() === $('#card9').val()){
//                if($('#card3').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card3').val() === $('#card5').val() && $('#card3').val() === $('#card7').val()) {
//                if($('#card3').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card4').val() === $('#card5').val() && $('#card4').val() === $('#card6').val()) {
//                if($('#card4').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            } else if($('#card7').val() === $('#card8').val() && $('#card7').val() === $('#card9').val()) {
//                if($('#card7').val() == computer) {
//                    alert('Haha! I am triumphent once again!');
//    //                playerTurn = false;
//                    computerTurn = false;
//                };
//                playerTurn = false;
//            };




            /////////////////////////////////////
            //  BELOW THE PLAYER TRUE FUNCTION
            ////////////////////////////////////


//
//            if($('#card1').val() === $('#card2').val() && $('#card1').val() === $('#card3').val()){
//                if($('#card1').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card1').val() === $('#card5').val() && $('#card1').val() === $('#card9').val()) {
//                if($('#card1').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card1').val() === $('#card4').val() && $('#card1').val() === $('#card7').val()) {
//                if($('#card1').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card2').val() === $('#card5').val() && $('#card2').val() === $('#card8').val()) {
//                if($('#card2').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card3').val() === $('#card6').val() && $('#card3').val() === $('#card9').val()){
//                if($('#card3').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card3').val() === $('#card5').val() && $('#card3').val() === $('#card7').val()) {
//                if($('#card3').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card4').val() === $('#card5').val() && $('#card4').val() === $('#card6').val()) {
//                if($('#card4').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            } else if($('#card7').val() === $('#card8').val() && $('#card7').val() === $('#card9').val()) {
//                if($('#card7').val() == player) {
//                    alert('Congratulations player! You have won!');
//                    playerTurn = false;
//                    computerTurn = false;
//                };
//            };



            ////////////////////////////////////


    // ===========================================
    //        NOT WORKING PROPERLY
    // ===========================================
    //
    //                while(computerTurn == true) {
    //            setTimeout(function() {
    //                alert('computers turn');
    //                setTimeout(function() {
    //
    //
    //                    if(usedSquares.length >= 9) {
    //                        alert('game over!');
    //                        $('.cards').prop('disabled', true);
    //                        break;
    //                    } else {
    //                        randomNum = Math.floor(Math.random() * allCards.length);
    //                        computerChoice = allCards[randomNum];
    //                        idOf = '#' + computerChoice;
    //                        if(usedSquares.includes(idOf)) {
    //                            //DO NOTHING BUT CONTINUE THE LOOP FOR THE COMPUTER TO CHOOSE A SQUARE
    //                            continue;
    //                        } else {
    //                            $(idOf).val(computer).css('background', ' green');
    //                            usedSquares.push(computerChoice);
    //                            allCards.splice(randomNum,1);
    //                            computerTurn = false;
    //                            playerTurn = true;
    //                            break;
    //                        };
    //                    };
    //
    //                }, 1000);
    //            },400);
    //        };
    //
    //=========================================================
    //  ABOVE NOT WORKING, BELOW HALFWAY WORKS
    //=========================================================





