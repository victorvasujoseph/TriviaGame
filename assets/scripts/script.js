console.log('connected!!');

var maxtimer = 25;
var currentQuestionNumber = 0;
var maxQuestions = 5;
var wrongAnswer = 0;
var correctAnswer = 0;
var missedAnswers = 0;
var setIntervalID;

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
    constructQuestionAnswer();
});

var constructQuestionAnswer = function () {
    if (currentQuestionNumber === maxQuestions) {
        console.log('Logic to show result page');
    } else {
        //construct questions
        $('#question').empty();
        $('#question').text(data[currentQuestionNumber].question);
        $('#btn-start').remove();
        //construct answer
        $("#answers").append("<ul id='answer-ul' class='list-group'></ul>");
        for (var i = 0; i < data[currentQuestionNumber].choices.length; i++) {
            console.log(data[currentQuestionNumber].choices[i]);
            $("#answer-ul").append("<li class='list-group-item'>" + data[currentQuestionNumber].choices[i] + "</li>");
        }
        
        startTimer();
    }
}

var startTimer = function(){
    var timer = maxtimer;
    setIntervalID = setInterval(function(){
        if(timer === 0){
            console.log("Time Done");
            clearInterval(setIntervalID);
            clear();
            currentQuestionNumber++;
            constructQuestionAnswer();
        }
        $("#count-down-timer").text(timer);
        timer--;
    }, 1000);
}

var clear = function(){
    $('#question').empty();
    $("#answers").empty();
}
