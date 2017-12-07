$(document).ready(function () {


    $('#offRules').click(function () {
        $('#rules').css('display', 'none');
        $('#playerInterface').css({
            'display': 'flex',
            'flex-direction': 'column',
            'margin-left': '20%',
            'margin-right': '20%',
        });
        $('#formPlayerName').css({ 'display': 'flex' });
        $('#reset').css({ 'display': 'block' });

        $('#pcScore').css({
            'position': 'absolute',
            'display': 'flex',
            'flex-direction': 'row-reverse',
            'top': '45%',
            'right': '80%',
            'width': '20%',
            'background-color': 'rgba(255, 255,255, 0.7)',
            'border-radius': '10px',
        });
        $('#playerScore').css({
            'position': 'absolute',
            'display': 'flex',
            'top': '45%',
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
        var win = 0;
        var loose = 0;
        var eq = 0;
        
        $('#dispPlayerScore').html(scorePlayer);
        $('#dispPcScore').html(scorePc);

        $('#play').click(function () {

            var playerName = $('formPlayerName').val()

            $('#formPlayerName').css({ 'display': 'none' });
            $('#dispPlayerScore').html(scorePlayer);
            $('#dispPcScore').html(scorePc);

            if (setTurn % 2 !== 0) {

                $('.box').click(function () {
                    var randPc = Math.floor(Math.random() * 5);
                    var turnPc = boardPcChoices[randPc];
                    var turnPlayer = $(this).attr('id');

                    $('#dispPlayerScore').html(scorePlayer);
                    $('#dispPcScore').html(scorePc);


                    function dispPopUp() {
                        $("#popupdisp").css({ 'display': "block" });
                        $('#dispPlayerScore').html(scorePlayer);
                        $('#dispPcScore').html(scorePc);
                        setTimeout(function () { $("#popupdisp").css({ 'display': "none" }); }, 2000);
                        setTimeout(function () { $('#eq').remove(); }, 2000);
                        setTimeout(function () { $('#loose').remove(); }, 2000);
                        setTimeout(function () { $('#win').remove(); }, 2000);
                    }

                    function checkWin() {

                        if (loose == 1) {
                            $('.whatHappen').html('You Loose !');
                            $('.whatHappen').after("<img id = 'loose' src ='asset/loose.gif'>");
                        }
                        else if (win == 1) {
                            $('.whatHappen').html('You bite my little shinny metal ass !');
                            $('.whatHappen').after("<img id = 'win' src ='asset/win.gif'>");
                        }
                        else if (eq == 1) {
                            $('.whatHappen').html('Equality');
                            $('.whatHappen').after("<img id = 'eq' src ='asset/eq.gif'>");
                        }
                        win = 0;
                        loose = 0;
                        eq = 0;
                    }


                    function displayPcChoice() {
                        if (turnPc == "Stone") {
                            $('#Stone').addClass(turnPc + "1");
                            setTimeout(function () { $('#Stone').removeClass(turnPc + "1"); }, 2000);
                        }
                        else if (turnPc == "Cisor") {
                            $('#Cisor').addClass(turnPc + "1");
                            setTimeout(function () { $('#Cisor').removeClass(turnPc + "1"); }, 2000);
                        }
                        else if (turnPc == "Sheet") {
                            $('#Sheet').addClass(turnPc + "1");
                            setTimeout(function () { $('#Sheet').removeClass(turnPc + "1"); }, 2000);
                        }
                        else if (turnPc == "Lezard") {
                            $('#Lezard').addClass(turnPc + "1");
                            setTimeout(function () { $('#Lezard').removeClass(turnPc + "1"); }, 2000);
                        }
                        else {
                            $('#Spock').addClass(turnPc + "1");
                            setTimeout(function () { $('#Spock').removeClass(turnPc + "1"); }, 2000);
                        }
                    }

                    function checkStone() {
                        if (turnPc == 'Spock' || turnPc == 'Sheet') {
                            scorePc += 1;
                            console.log(scorePc);
                            console.log(turnPc);
                            turn += 1;
                            loose = 1;
                        }
                        else if (turnPc == 'Lezard' || turnPc == 'Cisor') {
                            scorePlayer += 1;
                            console.log(scorePc);
                            turn += 1;
                            win = 1;
                        }
                        else {
                            turn += 1;
                            eq = 1;
                        }
                        checkWin();

                    }

                    function checkSheet() {
                        if (turnPc == 'Stone' || turnPc == 'Spock') {
                            scorePlayer += 1;
                            turn += 1;
                            win = 1;
                        }
                        else if (turnPc == 'Cisor' || turnPc == 'Lezard') {
                            scorePc += 1;
                            turn += 1;
                            loose = 1;
                        }
                        else {
                            turn += 1;
                            eq = 0;
                        }
                        checkWin();
                    }

                    function checkCisor() {
                        if (turnPc == 'Stone' || turnPc == 'Spock') {
                            scorePc += 1;
                            turn += 1;
                            loose = 1;
                        }
                        else if (turnPc == 'Sheet' || turnPlayer == 'Lezard') {
                            scorePlayer += 1;
                            turn += 1;
                            win = 1;
                        }
                        else {
                            turn += 1;
                            eq = 1;
                        }
                        checkWin();
                    }

                    function checkLezard() {
                        if (turnPc == 'Stone' || turnPc == 'Cisor') {
                            scorePc += 1;
                            turn += 1;
                            loose = 1;
                        }
                        else if (turnPc == 'Sheet' || turnPc == 'Spock') {
                            scorePlayer += 1;
                            turn += 1;
                            win = 1;
                        }
                        else {
                            turn += 1;
                            eq = 1;
                        }
                        checkWin();
                    }

                    function checkSpock() {
                        if (turnPc == 'Stone' || turnPc == 'Cisor') {
                            scorePlayer += 1;
                            turn += 1;
                            win = 1;
                        }
                        else if (turnPc == 'Sheet' || turnPc == 'Lezard') {
                            scorePc += 1;
                            turn += 1;
                            loose = 1;
                        }
                        else {
                            console.log('Equality');
                            turn += 1;
                            eq = 1;
                        }
                        checkWin();
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
                        dispPopUp();
                        console.log(scorePc, scorePlayer);
                        console.log(turnPc)
                    }

                });

            }
            else { alert('YO !'); };
        });
    });

});