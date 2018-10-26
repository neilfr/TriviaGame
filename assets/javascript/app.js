var rights=0;
var wrongs=0;
var unanswered=0;
var gameState = "start";
var questionNumber=0;

// load question bank
var trivia =[
    {
        question:"how old am I?",
        optionA:"25",
        optionB:"45",
        optionC:"51",
        optionD:"75",
        answer:"A",
    },{
        question:"how old are you?",
        optionA:"25",
        optionB:"45",
        optionC:"51",
        optionD:"75",
        answer:"B",
    },{
        question:"how old is Joe?",
        optionA:"25",
        optionB:"45",
        optionC:"51",
        optionD:"75",
        answer:"C",
    }
];

// display (ask) a trivia question
function askQuestion(number){
    $('#question').html(trivia[number].question);
    $('#A').html(trivia[number].optionA);
    $('#B').html(trivia[number].optionB);
    $('#C').html(trivia[number].optionC);
    $('#D').html(trivia[number].optionD);
}

// checks if answer is right or wrong and increments appropriate counter
function checkAnswer(number){
    if(event.target.id===trivia[number].answer){
        rights++;
        console.log("you were right: "+rights);
    }else{
        wrongs++;
        console.log("you were wrong: "+wrongs);
    }
}

// start game when start button pressed
$('#startButton').on('click', function(){
    console.log("make me invisible");
    $('#startButton').hide();
    gameState = "questions";
    questionLoop();
});

// proceed to the next question
function questionLoop(){
    
    askQuestion(questionNumber);
    $('.answer').on('click', function(){
        console.log("question number: "+questionNumber);
        console.log("you clicked answer:");
        console.log(event.target.id);
        checkAnswer(questionNumber);
        questionNumber++;
    });
}


