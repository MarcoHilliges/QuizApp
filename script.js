let questionNumber = 0;
let rightAnswerNumber = 0;


function saveResult(){
    var radios = document.getElementsByName('flexRadioDefault');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            questions[questionNumber]['player_answer'] = i;
            questionNumber = questionNumber + 1;
            if (questionNumber == questions.length-1) {lastQuestion();}
            if (questionNumber == questions.length) {questionScore();}
            else{nextQuestion();}
        }
    }
}


function nextQuestion(){
    render();
}


function lastQuestion() {
    render();
    document.getElementById('buttonNextQuestion').classList.add('d-none');
    document.getElementById('buttonQuestionScore').classList.remove('d-none');
}


function questionScore(){
    for (let number = 0; number < questions.length; number++) {
        let question = questions[number];
        if (question['player_answer']==question['right_answer']) {
            rightAnswerNumber = rightAnswerNumber + 1;
        }
    }
    showScore();
}


function showScore(){
    showScoreHTML();
   
    document.getElementById('buttonQuestionScore').classList.add('d-none');
    document.getElementById('questionNumberArea').classList.add('d-none');
}

function restart(){
    questionNumber = 0;
    render();
    document.getElementById('buttonNextQuestion').classList.remove('d-none');
    document.getElementById('buttonQuestionScore').classList.add('d-none');
    document.getElementById('questionNumberArea').classList.remove('d-none');
}