function render(){
    document.getElementById('questionImg').src = questions[questionNumber]['question_img'];
    document.getElementById('questionCategory').innerHTML = questions[questionNumber]['category'];
    document.getElementById('question').innerHTML = questions[questionNumber]['question'];
    document.getElementById('answersArea').innerHTML = '';
    
    for (let number = 0; number < questions[questionNumber]['answers'].length; number++) {
        let answer = questions[questionNumber]['answers'][number];
        document.getElementById('answersArea').innerHTML += 
            /*html*/`
                <div class="form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault${number}">
                        <label class="form-check-label" for="flexRadioDefault${number}">
                            ${answer}
                        </label>
                </div>`
    }
    document.getElementById('currentQuestion').innerHTML = questionNumber +1;
    document.getElementById('numberOfQuestions').innerHTML = questions.length;
}


function showScoreHTML() {
    document.getElementById('questionImg').src = "img/win.jpg";
    document.getElementById('questionCategory').innerHTML = "Ergebniss";
    document.getElementById('question').innerHTML = "";
    document.getElementById('answersArea').innerHTML = 
        /*html*/`
        Glückwunsch du hast ${rightAnswerNumber} von ${questions.length} Fragen erfolgreich gelöst.
        `;
}