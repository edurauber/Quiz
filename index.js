const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            radioInputs.forEach(otherinput => {
                if (otherinput !== input) {
                    otherinput.checked = false;
                }
            });
        });
    });


const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const finishText = document.querySelector(".finish span");
const content = document.querySelector(".content");
const finishContent = document.querySelector(".finish");
const restartButton = document.querySelector(".finish button");
const questionIndex = document.querySelector(".question-index")

import questions from "./questions.js";

let savedAnswers = [{}];
let currentIndex = 0;

function loadQuestion() {
    questionIndex.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.text}
        </button>
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion())
    });
}

function nextQuestion(ev) {
    if (ev.target.getAttribute("data-correct") === "true") {
        // lógica para salvar a resposta
    }
    currentIndex++;
    if (currentIndex < questions.length + 1) {

        loadQuestion();
    } else {
        finish();
    };
    };


function finish() {
    finishText.innerHTML = "Obrigado por participar!";
    content.style.display = "none";
    finishContent.style.display = "flex";
};   

restartButton.onclick = () => {
    content.style.display = "flex";
    finishContent.style.display = "none";

    currentIndex = 0;
    loadQuestion();
}

loadQuestion();
