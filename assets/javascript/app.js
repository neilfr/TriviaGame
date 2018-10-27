
var rights=0;
var wrongs=0;
var unanswered=0;
var questionNumber=0;
var timer=5;
var intervalId;
var timerOn=false;

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

function setTimer(){
    intervalId=setInterval(answerCountdown,1000);
    timer=5;
    timerOn=true;
}

function answerCountdown(){
    timer--;
    $('#answerTimer').html("Time left: "+timer);
    if(timer===0){
        stopTimer();
    }
}

function stopTimer(){
    clearInterval(intervalId);
    timerOn=false;
}

function nextQuestion(){
    if (++questionNumber<trivia.length){  // we are not at the end of the question bank
        questionScreen(questionNumber);
    }else{ //we are at the end of the question bank
        statScreen();
    }
}

// setup the start screen
function startScreen(){
    $('.startScreen').show();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').hide();
}

// setup the question screen
function questionScreen(number){
    $('#correctAnswer').html(""); //make sure old posted answers are cleared
    $('.startScreen').hide();
    $('.questionScreen').show();
    $('.answerScreen').hide();
    $('.statScreen').hide();
    askQuestion(number);
}

// setup the answer screen
function answerScreen(){
    $('.startScreen').hide();
    $('.questionScreen').hide();
    $('.answerScreen').show();
    $('.statScreen').hide();
    setTimer();
    setTimeout(nextQuestion,timer*1000);

}

// setup the end of game statistics screen
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

// check if the answer is right or wrong, setup to display the appropriate response and increment the appropriate counter
function checkAnswer(number){
    if(event.target.id===trivia[number].answer){
        rights++;
        $('#answerStatus').html("You are correct!");
    }else{
        wrongs++;
        $('#answerStatus').html("Unfortunately, you are incorrect...");
        switch (trivia[number].answer){
            case 'A':
                $('#correctAnswer').html("The correct answer is..."+trivia[number].optionA);
                break;
            case 'B':
                $('#correctAnswer').html("The correct answer is..."+trivia[number].optionB);
                break;
            case 'C':
                $('#correctAnswer').html("The correct answer is..."+trivia[number].optionC);
            break;
            case 'D':
                $('#correctAnswer').html("The correct answer is..."+trivia[number].optionD);
            break;
            default:
                console.log("something went wrong");
        }
    }
}

// begin the game on the startScreen
startScreen();

// switch to the question screen and ask a question when startButton is clicked 
$('#startButton').on('click', function(){
    questionScreen(questionNumber);
});

// check the if the selected answer is correct, display the answer, then go to the next question or the end of the game
$('.answer').on('click', function(){
    checkAnswer(questionNumber);
    answerScreen();
});

// start the game over again - reset counters and go to the questionScreen
$('#startOverButton').on('click', function(){
    rights=0;
    wrongs=0;
    unanswered=0;
    questionNumber=0;
    questionScreen(questionNumber);
});





