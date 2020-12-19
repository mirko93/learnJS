const quizData = [
    {
        question: 'How old is Flor?',
        a: '10',
        b: '20',
        c: '30',
        d: '40',
        correct: 'c'
    },
    {
        question: 'How old is Mir?',
        a: '50',
        b: '60',
        c: '70',
        d: '80',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('questions')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected()
{
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // show results
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`;
        }
    }
})