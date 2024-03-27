const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é a cor do céu em um dia ensolarado?",
        options: ["Vermelho", "Verde", "Azul", "Amarelo"],
        answer: "Azul"
    },
    {
        question: "Quanto é 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestion = 0;
const quiz = document.getElementById('quiz');
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionDiv.textContent = questionData.question;

    optionsDiv.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const questionData = questions[currentQuestion];
    if (selectedAnswer === questionData.answer) {
        feedbackDiv.textContent = "Resposta correta!";
    } else {
        feedbackDiv.textContent = "Resposta incorreta!";
    }
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        feedbackDiv.textContent = '';
        nextBtn.style.display = 'none';
    } else {
        quiz.innerHTML = '<h2>Parabéns, você completou o quiz!</h2>';
    }
}

nextBtn.addEventListener('click', nextQuestion);

loadQuestion();
