let questionNumber = 0;

// flexRadioDefault1.checked

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
                </div>
            
            `
    }
}