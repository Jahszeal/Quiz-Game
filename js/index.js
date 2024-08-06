const questions = [
    {
        question: "What is the full meaning of HTML?",
        answers:[
            {text: "Hyper Text Markup Language", correct: true},
            {text: "High Test Makeup Language", correct: false},
            {text: "Hyperlinks and Text Makeup Language", correct: false},
            {text: "Home Tool Markup Language", correct: false},


        ]

    },
    {
        question: "Who is making the Web standards?",
        answers:[
            {text: "Mozilla", correct: false},
            {text: "Google", correct: false},
            {text: "The World Wide Web Consortium", correct: true},
            {text: "Link tag", correct: false},
        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading?",
        answers:[
            {text: "&lt; heading &gt;", correct: false},
            {text: "&lt; head &gt;", correct: false},
            {text: "&lt; h5 &gt;", correct: false},
            {text: "&lt; h1 &gt;", correct: true},
        ]
    
    },
    {
        question: "Which of these is the correct HTML element to define important text?",
        answers:[
            {text: "&lt; i &gt;", correct: false},
            {text: "&lt; em &gt;", correct: false},
            {text: "&lt; important &gt;", correct: true},
            {text: "&lt; strong &gt;", correct: false},
        ]
    },
    {
        question: "What is the full meaning of CSS?",
        answers:[
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cascade Style Script", correct: false},
            {text: "Curriculum Script Sheet", correct: false},
            {text: "Charismatic Suitable Style", correct: false},
        ]
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers:[
            {text: "in the &lt; body &gt; section", correct: false},
            {text: "in the &lt; title &gt; section", correct: false},
            {text: "in the &lt; head &gt; section", correct: true},
            {text: "end of the document", correct: false},
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers:[
            {text: "background-color", correct: true},
            {text: "background", correct: false},
            {text: "font-color", correct: false},
            {text: "color", correct: false},
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers:[
            {text: "&lt; scripting &gt;", correct: false},
            {text: "&lt; script &gt;", correct: true},
            {text: "&lt; javascript &gt;", correct: false},
            {text: "&lt; js &gt;", correct: false},
        ]
    },
    {
        question: "Choose the correct HTML element to define emphasized text?",
        answers:[
            {text: "&lt; em &gt;", correct: true},
            {text: "&lt; italics &gt;", correct: false},
            {text: "&lt; strong &gt;", correct: false},
            {text: "&lt; bold &gt;", correct: false},
        ]
    },
    {
        question: "What is the correct order of HTML elements inside the <body> element?",
        answers:[
            {text: "&lt; header &gt;, &lt; nav &gt;, &lt; main &gt;, &lt; section &gt;, &lt; article &gt;", correct: true},
            {text: "&lt; article &gt;, &lt; main &gt;, &lt; section &gt;, &lt; nav &gt;, &lt; header &gt;", correct: false},
            {text: "&lt; section &gt;, &lt; header &gt;, &lt; footer &gt;, &lt; section &gt;, &lt; article &gt;", correct: false},
            {text: "&lt; footer &gt;, &lt; nav &gt;, &lt; main &gt;, &lt; header &gt;, &lt; section &gt;", correct: false},

        ]

    },
    {
        question: "Which property is used to change the font of an element?",
        answers:[
            {text: "font-weight", correct: false},
            {text: "font-size", correct: false},
            {text: "font style", correct: false},
            {text: "font-family", correct: true},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =   0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach (answer => {
        const button = document .createElement ("button")
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);  
    }); 
}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); 
}
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add ("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElement.innerHTML = `Congratulations You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

})


startQuiz();