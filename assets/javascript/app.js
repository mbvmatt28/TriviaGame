//Create a Start button to iniate game

//Once button is pressed the first question appears along with a 30 second timer



function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer) {
    this.questionIndex++;

    if(this.getQuestionIndex() .correctAnswer(answer)) {
        this.score++;
    }
}
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

    }
}

function Question(text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=amswer;
}
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}
//Questions
var questions = [
    new Question("Who was the MVP of Super Bowl 32?", ["Peyton Manning", "John Elway", "Rod Smith", "Terrell Davis"], "Terrell Davis"),
    new Question("Who is the Broncos all time leading receiver?", ["Ed McCaffrey", "Demarious Thomas", "Rod Smith", "Shannon Sharpe"], "Rod Smith"),
    new Question("Who was the MVP of Super Bowl 50?", ["Von Miller", "Peyton Manning", "Emmanuel Sanders", "Demarious Thomas"], "Von Miller"),
    new Question("Who is the Broncos most prolific Tight End ?", ["Shannon Sharpe", "Tony Scheffler", "Julius Thomas", "Riley Odoms"], "Shannon Sharpe"),
    new Question("Who was the MVP of Super Bowl 33?", ["Shannon Sharpe", "John Elway", "Rod Smith", "Terrell Davis"], "John Elway"),
];

var quiz = new Quiz(questions);

populate();
//If user guesses correctly then CORRECT pops up along with a gif for 3 seconds

//If user guesses incorrectly then WRONG pops up along with a gif for 3 seconds

//Next question appears

//After all questions are done then a results page appears with a Try Again Button
