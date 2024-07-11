
var num1,num2;
function randomNoGen(){
    num1 = Math.floor(Math.random()*10)%6 + 1;
    num2 = Math.floor(Math.random()*10)%6 + 1;
    console.log(num1,num2);

    var msg1 = 'dice' + num1 + '.png';
    var msg2 = 'dice' + num2 + '.png';
    document.getElementsByClassName("img1")[0].src = './images/' + msg1;
    document.getElementsByClassName("img2")[0].src = './images/' + msg2;
    
    if(num1 > num2){
        document.getElementById('res').textContent = "Player1 Win. | Click 'Roll' To roll again. ";
    } else if(num1 === num2){
        document.getElementById('res').textContent = "Draw. | Click 'Roll' To roll again. ";
    } else {
        document.getElementById('res').textContent = "Player2 Win. | Click 'Roll' To roll again. ";
    }

}

randomNoGen()
