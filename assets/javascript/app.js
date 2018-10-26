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

function startScreen(){
    $('.startScreen').show();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').hide();
}

function questionScreen(){
    $('.startScreen').hide();
    $('.questionScreen').show();
    $('.answerScreen').hide();
    $('.statScreen').hide();
}

function answerScreen(){
    $('.startScreen').hide();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').show();
}

function statScreen(){
    $('.startScreen').hide();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').show();
    $('#correctAnswers').html("Correct Answers: "+rights);
    $('#incorrectAnswers').html("Incorrect Answers: "+wrongs);
}

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

// begin the game on the startScreen
startScreen();

// switch to the question screen and ask a question when startButton is clicked 
$('#startButton').on('click', function(){
    questionScreen();
    askQuestion(questionNumber);
});

// check answer and ask next question until the end of the question bank
$('.answer').on('click', function(){
    console.log("question number: "+questionNumber);
    console.log("trivia.length is: "+trivia.length);
    console.log("you clicked answer: "+event.target.id);
    checkAnswer(questionNumber);
    if (++questionNumber<trivia.length){
        askQuestion(questionNumber);
    }else{
        gameState="done";
        statScreen();
    }
});

$('#startOverButton').on('click', function(){
    questionNumber=0;
    rights=0;
    wrongs=0;
    questionScreen();
});





