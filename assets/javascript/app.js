//Create a Start button to iniate game

//Once button is pressed the first question appears along with a 30 second timer
//Questions
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
    

    if(this.getQuestionIndex() .correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id= 'score'> Correct Answers: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Who was the MVP of Super Bowl 32?", ["Peyton Manning", "John Elway", "Rod Smith", "Terrell Davis"], "Terrell Davis"),
    new Question("Who is the Broncos all time leading receiver?", ["Ed McCaffrey", "Demarious Thomas", "Rod Smith", "Shannon Sharpe"], "Rod Smith"),
    new Question("Who was the MVP of Super Bowl 50?", ["Von Miller", "Peyton Manning", "Emmanuel Sanders", "Demarious Thomas"], "Von Miller"),
    new Question("Who is the Broncos most prolific Tight End ?", ["Shannon Sharpe", "Tony Scheffler", "Julius Thomas", "Riley Odoms"], "Shannon Sharpe"),
    new Question("Who was the MVP of Super Bowl 33?", ["Shannon Sharpe", "John Elway", "Rod Smith", "Terrell Davis"], "John Elway"),
];

var quiz = new Quiz(questions);

populate();
console.log(populate)



function Question(text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//If user guesses correctly then CORRECT pops up along with a gif for 3 seconds

//If user guesses incorrectly then WRONG pops up along with a gif for 3 seconds

//Next question appears

//After all questions are done then a results page appears with a Try Again Button
