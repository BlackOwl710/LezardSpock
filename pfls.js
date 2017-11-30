$(document).ready(function () {

    $('#offRules').click( function(){
        $('#rules').css('display' , 'none');
        $('#playerInterface').css({
            'display' : 'flex',
            'flex-direction' : 'column',
        });
    });
    // Jeux \\

    var boardPcChoices = ["Stone", "Sheet", "Cisor", "Lezard", "Spock"];
    
    $('.box').click(function () {
        var randPc = Math.floor(Math.random() * 5);
        var turnPc = boardPcChoices[randPc];
        var turnPlayer = $(this).attr('id');

        function displayPcChoice(){
            if (turnPc == "Stone"){
                $('#Stone').addClass(turnPc+"1");
            }
            else if (turnPc == "Cisor"){
                $('#Cisor').addClass(turnPc+"1");
            }
            else if (turnPc == "Sheet"){
                $('#Sheet').addClass(turnPc+"1");
            }
            else if (turnPc == "Lezard"){
                $('#Lezard').addClass(turnPc+"1");
            }
            else {
                $('#Spock').addClass(turnPc+"1");
            }
        }

        function checkStone() {
            if (turnPc == 'Spock' || turnPc == 'Sheet') {
                console.log('You Loose');
            }
            else if (turnPc == 'Lezard' || turnPc == 'Cisor') {
                console.log('You Win !');
            }
            else {
                console.log('Equality');
            }
        }

        function checkSheet() {
            if (turnPc == 'Stone' || turnPc == 'Spock') {
                console.log('You win !');
            }
            else if (turnPc == 'Cisor' || turnPc == 'Lezard') {
                console.log('You Loose !');
            }
            else {
                console.log('Equality');
            }
        }
    
        function checkCisor() {
            if (turnPc == 'Stone' || turnPc == 'Spock') {
                console.log('You Loose !');
            }
            else if (turnPc == 'Sheet' || turnPlayer == 'Lezard') {
                console.log('You Win !');
            }
            else {
                console.log('Equality');
            }
        }
    
        function checkLezard() {
            if (turnPc == 'Stone' || turnPc == 'Cisor') {
                console.log('You Loose');
            }
            else if (turnPc == 'Sheet' || turnPc == 'Spock') {
                console.log('You Win !');
            }
            else {
                console.log('Equality');
            }
        }
    
        function checkSpock() {
            if (turnPc == 'Stone' || turnPc == 'Cisor') {
                console.log('You win !');
            }
            else if (turnPc == 'Sheet' || turnPc == 'Lezard') {
                console.log('You Loose');
            }
            else {
                console.log('Equality');
            }
        }
        

        if(turnPlayer == 'stone'){
            checkStone();
        }
        else if(turnPlayer == 'sheet'){
            checkSheet();
        }
        else if(turnPlayer == 'cisor'){
            checkCisor();
        }
        else if(turnPlayer == 'lezard'){
            checkLezard();
        }
        else if(turnPlayer == 'spoke'){
            checkSpoke();
        }
        displayPcChoice();
    });
});