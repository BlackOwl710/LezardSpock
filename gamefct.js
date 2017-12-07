function dispPopUp() {
    $("#popupdisp").css({ 'display': "block" });
    $('#dispPlayerScore').html(scorePlayer);
    $('#dispPcScore').html(scorePc);
    setTimeout(function () { $("#popupdisp").css({ 'display': "none" }); }, 2000);
    setTimeout(function (){$('#eq').remove();}, 2000);
    setTimeout(function (){$('#loose').remove();}, 2000);
    setTimeout(function (){$('#win').remove();}, 2000);
}

function checkWin(){

    if(loose == 1){
        $('.whatHappen').html('You Loose !');
        $('.whatHappen').after("<img id = 'loose' src ='asset/loose.gif'>");
    }
    else if(win == 1){
        $('.whatHappen').html('You bite my little shinny metal ass !');
        $('.whatHappen').after("<img id = 'win' src ='asset/win.gif'>");
    }
    else if (eq == 1){
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