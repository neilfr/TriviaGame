var rights=0;
var wrongs=0;
var unanswered=0;
var gameState = "start";
var questionCounter=0;

// load question bank
var trivia =[
    {
        question:"how old am I?",
        optionA:"25",
        optionB:"45",
        optionC:"51",
        optionD:"75",
        answer:"C",
    },{
        question:"how old are you?",
        optionA:"25",
        optionB:"45",
        optionC:"51",
        optionD:"75",
        answer:"A",
    }];

// display (ask) a trivia question
function askQuestion(triviaQuestion){
    $('#question').html(triviaQuestion.question);
    $('#A').html(triviaQuestion.optionA);
    $('#B').html(triviaQuestion.optionB);
    $('#C').html(triviaQuestion.optionC);
    $('#D').html(triviaQuestion.optionD);
}


// start game when start button pressed
$('#startButton').on('click', function(){
    console.log("make me invisible");
    $('#startButton').hide();
    gameState = "questions";
    questionLoop();
});

function questionLoop(){
    // ask a question
    askQuestion(trivia[questionCounter]);

    $('.answer').on('click', function(){
        console.log("you clicked answer:");
        console.log(event.target.id);
        if(event.target.id===trivia[questionCounter].answer){
            rights++;
            console.log("you were right: "+rights);
        }else{
            wrongs++;
            console.log("you were wrong: "+wrongs);
        }
    });
}


