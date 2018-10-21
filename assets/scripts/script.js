console.log('connected!!');

$(document).ready(function () {

var counterStart = 11;
var timeLeft;

var currentQuestionNumber = 0;
var maxQuestions = 5;

var wrongAnswer = 0;
var correctAnswer = 0;
var missedAnswers = 0;

var intervalID;

var data = [
    {
        question: "Who created JavaScript?",
        answer: "Netscape",
        choices: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
        facts: "While Oracle holds the trademark, JavaScript was originally created by Netscape Navigator as an alternative to Java in 1995",
    },
    {
        question: "How long did Brendan Eich take to write the JavaScript programming language?",
        answer: "10 Days",
        choices: ["10 Days", "20 Days", "30 Days", "60 Days"],
        facts: "Brendan Eich created the first version in ten days in order to accommodate the Navigator 2.0 Beta release schedule. And now it’s one of the most popular scripting languages in the world. Talk about grace under pressure!",
    },
    {
        question: "JavaScript wasn’t always called that. What other names has it been released under?",
        answer: "Mocha",
        choices: ["Latte", "Code Script", "Mocha", "Net Language"],
        facts: " The first version was originally released as Mocha. It was renamed LiveScript in September 1995 before finally arriving on JavaScript in the same month, possibly as a marketing ploy to grab some of Java’s fame",
    },
    {
        question: " JavaScript and Java are basically the same ",
        answer: "No",
        choices: ["Yes", "No"],
        facts: "Despite the name, Java and JavaScript have way more differences than similarities. Java has static typing, while JavaScript’s typing is dynamic. Java’s objects are class-based, while JavaScript’s are prototype-based. Finally, Java did not support functional programming until Java 8, while JavaScript has done so from the beginning, being influenced by Scheme.",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answer: "undefined",
        choices: ["default", "finally", "throw", "undefined"],
        facts: " Weirdly enough, undefined isn’t defined in JavaScript. Which leads to fun.",
    },
    {
        question: "Is JavaScript dynamically typed or statically typed?",
        answer: "Dynamic",
        choices: ["Dynamic", "Static"],
        facts: "As with most scripting languages, JavaScript is dynamically typed; a type is associated with each value, rather than just with each expression. In fact, JavaScript supports various ways to test the type of an object, including duck typing.",
    },
]

    $("#begin").on("click", function () {
        $('#begin').css("visibility","hidden");
        startGame();
    });


    $(document).on("click", "li", function () {
        if ($(this).html() === data[currentQuestionNumber].answer) {
            showAnswer();
            correctAnswer++;
        } else {
            showWrongAnswer();
            wrongAnswer++;
        }

        if(currentQuestionNumber === maxQuestions) {
            clearInterval(intervalId);
            setTimeout(results, 5000);
        } else {
            currentQuestionNumber++;
            clearInterval(intervalId);
            setTimeout(startGame, 5000);
        }
    });

var startGame = function () {
    timeLeft = counterStart;
    createQuestions();
    createAnswers();
    intervalId = setInterval(startCounter, 1000);
}

var createQuestions = function(){
    $('#question').empty();
    $('#question').text(data[currentQuestionNumber].question);
}

var showWrongAnswer = function(){
    $("#answers").empty();
    createQuestions();
    $('#correct-answer').text("Sorry, Wrong Answer. Correct Answer is");
    $("#correct-answer").append("<p>" + data[currentQuestionNumber].answer + "</p>");
    //$("#correct-answer-ul").append("<li class='list-group-item'>" + data[currentQuestionNumber].answer + "</li>");

}

var createAnswers = function(){
    $('#count-down-timer').empty();
    $('#correct-answer').empty();
    $("#answers").append("<ul id='answer-ul' class='list-group'></ul>");
    for (var i = 0; i < data[currentQuestionNumber].choices.length; i++) {
        console.log(data[currentQuestionNumber].choices[i]);
        var liId = "answer-li-" + i;
        $("#answer-ul").append("<li id=" + liId + " class='list-group-item'>" + data[currentQuestionNumber].choices[i] + "</li>");
    }
}

var showAnswer = function(){
    $("#answers").empty();
    createQuestions();
    $('#correct-answer').text(" Correct Answer ");
    $("#correct-answer").append("<p>" + data[currentQuestionNumber].answer + "</p>");
    // $("#correct-answer").append("<ul id='correct-answer-ul' class='list-group'></ul>");
    // $("#correct-answer-ul").append("<li class='list-group-item'>" + data[currentQuestionNumber].answer + "</li>");

}

function startCounter() {
    timeLeft--;
    if (timeLeft < counterStart && timeLeft !== -1) {
        $('#count-down-timer').text(timeLeft);
    }else {
        timerDone();
    }
}

function timerDone() {
    clear();
    missedAnswers++;

    if(currentQuestionNumber === maxQuestions){
        console.log('Maxed Out Questions');
        clearInterval(intervalId);
        showAnswer();
        setTimeout(results, 5000);
    } else {
        $('#count-down-timer').empty();
        $('#count-down-timer').text("Times Up");
        console.log('insdie else');
        clearInterval(intervalId);
        showAnswer();
        currentQuestionNumber++;
        setTimeout(startGame, 5000);
    }
}

var results = function(){
    clear();
    console.log(wrongAnswer);
    console.log(correctAnswer);
    console.log(missedAnswers);
    $('#correct-answer').empty();
    $('#correct-answer').append("<p>Total Correct Answers :" + correctAnswer + "</p>");
    $('#correct-answer').append("<p>Total Wrong Answers :" + wrongAnswer + "</p>");
    $('#correct-answer').append("<p>Total Missed Answers :"+  missedAnswers + "</p>");

    currentQuestionNumber = 0;
    wrongAnswer = 0;
    missedAnswers = 0;
    correctAnswer = 0;

    $('#begin').text('Start Again');
    $('#begin').css("visibility","visible");

}

var clear = function(){
    $('#question').empty();
    $("#answers").empty();
    $('#count-down-timer').empty();
}

});
