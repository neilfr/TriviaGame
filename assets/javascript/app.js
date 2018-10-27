
var rights=0;
var wrongs=0;
var unanswered=0;
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

// setup the start screen
function startScreen(){
    $('.startScreen').show();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').hide();
}

// setup the question screen
function questionScreen(number){
    $('#correctAnswer').html("");
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

function helloWorld(){
    $('h1').html("hello world");
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
                console.log("i got in!");
                $('#correctAnswer').html("The correct answer is..."+trivia[number].optionA);
                break;
            case 'B':
                console.log("got here too");
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
    answerScreen();
    if (++questionNumber<trivia.length){
        setTimeout(function(){questionScreen(questionNumber)},5000);
    }else{
        setTimeout(statScreen,5000);
    }
}

// begin the game on the startScreen
startScreen();

// switch to the question screen and ask a question when startButton is clicked 
$('#startButton').on('click', function(){
    questionScreen(questionNumber);
});

// check the if the selected answer is correct and then ask the next question... until the end of the question bank
$('.answer').on('click', function(){
    checkAnswer(questionNumber);
});

// start the game over again by going to the questionScreen
$('#startOverButton').on('click', function(){
    rights=0;
    wrongs=0;
    unanswered=0;
    questionNumber=0;
    questionScreen(questionNumber);
});





