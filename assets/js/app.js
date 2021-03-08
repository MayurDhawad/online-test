

const questionNumber = document.querySelector('.question-number');
const questionText = document.querySelector('.question-text');
const optionContainer1 = document.querySelector('.opt1');
const optionContainer2 = document.querySelector('.opt2');
const optionContainer3 = document.querySelector('.opt3');
const optionContainer4 = document.querySelector('.opt4');
const answersIndicatoresContainer = document.querySelector('.answers-indicators')
const homeBox = document.querySelector('.home-box')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box')
const option1 =document.querySelector('#option1')
const option2 =document.querySelector('#option2')
const option3 =document.querySelector('#option3')
const option4 =document.querySelector('#option4')

let questionCounter = 0;
let currentQuestions;
let availableQuestions = [];
let availableOptions =[];
let correctAnswer = 0;
let attempt = 0;


//push the question in the availabel array
function setAvailableQuestion (){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
    
}

// set the question in the array
function getNewQuestion(){
    //Set question number
    questionNumber.innerHTML = "Question " + ( questionCounter + 1) + " of " + quiz.length;
    //Set question text and get New question
   
    const newQuestion = quiz[questionCounter];
    currentQuestions = newQuestion;
    questionText.innerHTML = currentQuestions.q
    optionContainer1.innerHTML = currentQuestions.options[0]
    optionContainer2.innerHTML = currentQuestions.options[1]
    optionContainer3.innerHTML = currentQuestions.options[2]
    optionContainer4.innerHTML = currentQuestions.options[3]
    console.log(currentQuestions)

    
    questionCounter++;
}

function getOptions(){

}

function submit(){
    if(questionCounter === quiz.length){
        console.log("quiz Over")
        quizOver();
    }else{
        getNewQuestion();
    }
}

function quizOver(){
    quizBox.classList.add('hide')
    resultBox.classList.remove('hide')
    quizResult();
};

function quizResult(){
    resultBox.querySelector('.total-question').innerHTML = quiz.length;
    resultBox.querySelector('.total-attempt').innerHTML = attempt;
    resultBox.querySelector('.total-correct').innerHTML = correctAnswer
    resultBox.querySelector('.total-wrong').innerHTML = attempt - correctAnswer;
    const percentage = (correctAnswer / quiz.length)*100;
    resultBox.querySelector('.percentage').innerHTML = percentage.toFixed() + '%';
    resultBox.querySelector('.total-score').innerHTML = correctAnswer + " / " + quiz.length
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempt = 0
}

function tryAgainQuiz(){
    resultBox.classList.add('hide')
    quizBox.classList.remove('hide')
    resetQuiz();
    startQuiz();
}

function goToHome(){
    resultBox.classList.add('hide')
    homeBox.classList.remove('hide')
    resetQuiz();
}

function startQuiz(){ 
    homeBox.classList.add('hide')
    quizBox.classList.remove('hide')

    setAvailableQuestion();
    getNewQuestion();
    getOptions();

}

window.onload = function(){
    homeBox.querySelector('.total-question').innerHTML = quiz.length;
}