
var colors = ["red", "blue", "green", "yellow"];
var gamepattern = [];
var userpattern = [];
var randColor;
var level = 0;
var started = false;

$(document).on("keydown", function() {
    if(!started){
        $('#level-title').text("Level " + level);
        nextSeq();
        started = true;
    }
});

function nextSeq(){
    userpattern = []
    level++; 

    $('#level-title').text("Level " + level);
    var num = Math.floor(Math.random() * 4);
    randColor = colors[num];
    gamepattern.push(randColor);

    $("#" + randColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randColor);
}

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userpattern.push(userChosenColor);

    playSound(userChosenColor);
    animatep(userChosenColor);

    checkAnswer(userpattern.length - 1);
});

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatep(currColor){
    $("#" + currColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currLevel){
    if(userpattern[currLevel] === gamepattern[currLevel]){
        if(userpattern.length === gamepattern.length){
            setTimeout(function(){
                nextSeq();
                }, 1000);
            }
    } else{  
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
            }, 200);
       
        startOver();
    }
}

function startOver(){
    level = 0;
    gamepattern = [];
    started = false;
}