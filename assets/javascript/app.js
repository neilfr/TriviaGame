
var rights;
var wrongs;
var unanswered;
var questionNumber;
var myInterval;



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


// show the start screen
function showStartScreen(){
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').hide();
    $('.startScreen').show();
}

// show the question screen
function showQuestionScreen(){
    $('#correctAnswer').html(""); //make sure old posted answers are cleared
    $('.startScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').hide();
    $('.questionScreen').show();
}

// show the answer screen
function showAnswerScreen(){
    $('.startScreen').hide();
    $('.questionScreen').hide();
    $('.statScreen').hide();
    $('.answerScreen').show();
}

// setup the end of game statistics screen
function showStatScreen(){
    $('.startScreen').hide();
    $('.questionScreen').hide();
    $('.answerScreen').hide();
    $('.statScreen').show();
    $('#correctAnswers').html("Correct Answers: "+rights);
    $('#incorrectAnswers').html("Incorrect Answers: "+wrongs);
    var unanswered = trivia.length-(rights+wrongs);
    $('#unanswered').html("Unanswered: "+unanswered);
}

// display (ask) a trivia question
function askQuestion(number){
    $('#question').html(trivia[number].question);
    $('#A').html(trivia[number].optionA);
    $('#B').html(trivia[number].optionB);
    $('#C').html(trivia[number].optionC);
    $('#D').html(trivia[number].optionD);
}


function nextQuestion(){
    questionNumber++;
    console.log("question number is: "+questionNumber);
    var temp=trivia.length-1;
    console.log("trivia.length -1 is: "+temp);
    if (questionNumber<(trivia.length)){  // we are not at the end of the question bank
        askQuestion(questionNumber);
        showQuestionScreen();
        questionCountdown(); // new
    }else{ //we are at the end of the question bank
        console.log("we should be showing the stat screen");
        showStatScreen();
    }
}



function showCorrectAnswer(){

    switch (trivia[questionNumber].answer){
        case 'A':
            $('#correctAnswer').html("The correct answer is..."+trivia[questionNumber].optionA);
            break;
        case 'B':
            $('#correctAnswer').html("The correct answer is..."+trivia[questionNumber].optionB);
            break;
        case 'C':
            $('#correctAnswer').html("The correct answer is..."+trivia[questionNumber].optionC);
        break;
        case 'D':
            $('#correctAnswer').html("The correct answer is..."+trivia[questionNumber].optionD);
        break;
        default:
            console.log("something went wrong");
    }
}

// check if the answer is right or wrong, setup to display the appropriate response and increment the appropriate counter
function checkAnswer(number){
    if(event.target.id===trivia[number].answer){
        rights++;
        $('#answerStatus').html("You are correct!");
    }else{
        wrongs++;
        $('#answerStatus').html("Unfortunately, you are incorrect...");
        showCorrectAnswer();
    }
}

// begin the game on the startScreen
showStartScreen();

// reset counters, setup the question, show the screen and start the countdown
$('#startButton').on('click', function(){
    rights=0;
    wrongs=0;
    unanswered=0;
    questionNumber=0;
    askQuestion(questionNumber);
    showQuestionScreen();
    questionCountdown();
});

// check if the selected answer is correct, display the answer, then go to the next question or the end of the game
$('.answer').on('click', function(){
    clearCountdown();
    checkAnswer(questionNumber);
    showAnswerScreen();
    answerCountdown();
});

function answerCountdown(){
    let timer=5;
    myInterval = setInterval(function(){
        $('#countdown').html("Countdown is at:"+timer);
        if(timer===0){
            clearCountdown();
            nextQuestion();
        }else{
            timer--;
        }
    },1000)
}

function clearCountdown(){
    clearInterval(myInterval);
    $('#countdown').html("Countdown is at: cleared");
}



function questionCountdown(){
    let timer=5;
    
    myInterval = setInterval(function(){
        $('#countdown').html("Countdown is at:"+timer);
        if(timer===0){
            clearCountdown();
            showCorrectAnswer();
            showAnswerScreen();
            answerCountdown();
        }else{
            timer--;
        }
    },1000)
}







