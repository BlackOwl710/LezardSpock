$(document).ready(function () {


    $('#offRules').click(function () {
        $('#rules').css('display', 'none');
        $('#playerInterface').css({
            'display': 'flex',
            'flex-direction': 'column',
            'margin-left': '20%',
            'margin-right': '20%',
        });

        alert(setTurnp);

        $('#pcScore').css({
            'position': 'absolute',
            'display': 'flex',
            'flex-direction': 'row-reverse',
            'top': '55%',
            'right': '80%',
            'width': '20%',
            'background-color': 'rgba(255, 255,255, 0.7)',
            'border-radius': '10px',
        });
        $('#playerScore').css({
            'position': 'absolute',
            'display': 'flex',
            'top': '55%',
            'left': '80%',
            'width': '20%',
            'background-color': 'rgba(255, 255,255, 0.7)',
            'border-radius': '10px',
        });


        var boardPcChoices = ["Stone", "Sheet", "Cisor", "Lezard", "Spock"];
        var scorePlayer = 0;
        var scorePc = 0;
        var turn = 0;
        var setTurnp = $('#setTurn').val();
        var setTurn = parseInt(setTurnp);
        var halfSetTurn = setTurn / 2;



        if (setTurn % 2 !== 0) {

            $('.box').click(function () {
                var randPc = Math.floor(Math.random() * 5);
                var turnPc = boardPcChoices[randPc];
                var turnPlayer = $(this).attr('id');

                $('#dispPlayerScore').html(scorePlayer);
                $('#dispPcScore').html(scorePc);


                function displayPcChoice() {
                    if (turnPc == "Stone") {
                        $('#Stone').addClass(turnPc + "1");
                    }
                    else if (turnPc == "Cisor") {
                        $('#Cisor').addClass(turnPc + "1");
                    }
                    else if (turnPc == "Sheet") {
                        $('#Sheet').addClass(turnPc + "1");
                    }
                    else if (turnPc == "Lezard") {
                        $('#Lezard').addClass(turnPc + "1");
                    }
                    else {
                        $('#Spock').addClass(turnPc + "1");
                    }
                }

                function checkStone() {
                    if (turnPc == 'Spock' || turnPc == 'Sheet') {
                        console.log('You Loose');
                        scorePc += 1;
                        console.log(scorePc);
                        console.log(turnPc);
                        turn += 1;
                    }
                    else if (turnPc == 'Lezard' || turnPc == 'Cisor') {
                        console.log('You Win !');
                        scorePlayer += 1;
                        console.log(scorePc);
                        turn += 1;
                    }
                    else {
                        console.log('Equality');
                        turn += 1;
                    }
                }

                function checkSheet() {
                    if (turnPc == 'Stone' || turnPc == 'Spock') {
                        console.log('You win !');
                        scorePlayer += 1;
                        turn += 1;
                    }
                    else if (turnPc == 'Cisor' || turnPc == 'Lezard') {
                        console.log('You Loose !');
                        scorePc += 1;
                        turn += 1;
                    }
                    else {
                        console.log('Equality');
                        turn += 1;
                    }
                }

                function checkCisor() {
                    if (turnPc == 'Stone' || turnPc == 'Spock') {
                        console.log('You Loose !');
                        scorePc += 1;
                        turn += 1;
                    }
                    else if (turnPc == 'Sheet' || turnPlayer == 'Lezard') {
                        console.log('You Win !');
                        scorePlayer += 1;
                        turn += 1;
                    }
                    else {
                        console.log('Equality');
                        turn += 1;
                    }
                }

                function checkLezard() {
                    if (turnPc == 'Stone' || turnPc == 'Cisor') {
                        console.log('You Loose');
                        scorePc += 1;
                        turn += 1;
                    }
                    else if (turnPc == 'Sheet' || turnPc == 'Spock') {
                        console.log('You Win !');
                        scorePlayer += 1;
                        turn += 1;
                    }
                    else {
                        console.log('Equality');
                        turn += 1;
                    }
                }

                function checkSpock() {
                    if (turnPc == 'Stone' || turnPc == 'Cisor') {
                        console.log('You win !');
                        scorePlayer += 1;
                        turn += 1;
                    }
                    else if (turnPc == 'Sheet' || turnPc == 'Lezard') {
                        console.log('You Loose');
                        scorePc += 1;
                        turn += 1;
                    }
                    else {
                        console.log('Equality');
                        turn += 1;
                    }
                }

                if (scorePlayer < halfSetTurn && scorePc < halfSetTurn && turn !== setTurn) {
                    if (turnPlayer == 'stone') {
                        checkStone();
                    }
                    else if (turnPlayer == 'sheet') {
                        checkSheet();
                    }
                    else if (turnPlayer == 'cisor') {
                        checkCisor();
                    }
                    else if (turnPlayer == 'lezard') {
                        checkLezard();
                    }
                    else if (turnPlayer == 'spoke') {
                        checkSpoke();
                    }
                    displayPcChoice();
                }

            });

        }
        else { alert('YO !'); };
    });

});