const question = document.querySelector('.question');
const nextBtn = document.querySelector('.next-btn');

let score = 0;
let questionQuery = 0;

const quizz = [
    {
        question: 'if I were YOU and YOU were me, would I be ME or would YOU be ME?',
        options: [
            {option: 'wtf?', isCorrect: true},
            {option: 'I would be me, but also you.', isCorrect: false},
            {option: 'I... y-yes.', isCorrect: false},
            {option: 'thirteen', isCorrect: false}
        ]
    },
    {
        question: 'What is the sum of 3 + 4 * 2 / 1?', 
        options: [
            {option: '18', isCorrect: false},
            {option: '11', isCorrect: true},
            {option: '14', isCorrect: false},
            {option: '7', isCorrect: false}
        ]
    },
    {
        question: 'What is the color of SUN?', 
        options: [
            {option: 'red', isCorrect: false},
            {option: 'orange', isCorrect: false},
            {option: 'reddish orange', isCorrect: false},
            {option: 'yellow', isCorrect: true}
        ]
    },
    {
        question: 'Considering that the sky is blue and the earth is a square, what is my name?', 
        options: [
            {option: 'Juliana', isCorrect: false},
            {option: 'Shrek', isCorrect: false},
            {option: 'Oliver', isCorrect: false},
            {option: '>> GABRIEL JODAS <<', isCorrect: true}
        ]
    }
]

const answerSection = document.querySelector('.answer-section');
let backgroundDOM = false;
function setAnswers() {
    question.textContent = quizz[questionQuery].question;
    
    quizz[questionQuery].options.map(option => {
        const ahref = document.createElement('a');
        ahref.innerHTML = option.option;

        answerSection.appendChild(ahref);

        ahref.addEventListener('click', () => {
            if(backgroundDOM === false){
                checkAnswer(option)
                backgroundDOM = true;
            }
        })
    }) 
}
setAnswers();

const sectionColor = document.querySelector('.quizz-app');
function checkAnswer(answer){
    const a = document.querySelectorAll('a');
    if(answer.isCorrect === true){
        score++;

        a.forEach(event => event.style.border = '2px solid #f2f2f2')
        sectionColor.style.backgroundImage = 'none';
        sectionColor.style.backgroundColor = '#007A04';
        sectionColor.style.color = '#F2F2F2';
    } else {
        a.forEach(event => event.style.border = '2px solid #f2f2f2')
        sectionColor.style.backgroundImage = 'none';
        sectionColor.style.backgroundColor = '#C70502';
        sectionColor.style.color = '#F2F2F2';
    }

}

function setNextQuestion () {
    const a = document.querySelectorAll('a');
    if(questionQuery < quizz.length - 1){
        questionQuery++;
        
        a.forEach(event => answerSection.removeChild(event))
        
        backgroundDOM = false;
        sectionColor.style.color = '#0D0D0D'
        sectionColor.style.backgroundImage = 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)';
        a.forEach(event => event.style.border = 'border: 2px solid #0D0D0D');
        setAnswers();
    }
    else {
        a.forEach(event => answerSection.removeChild(event))

        document.querySelector('.start-btn').style.display = 'block';
        sectionColor.style.backgroundImage = 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)';
        sectionColor.style.color = '#0D0D0D'
        nextBtn.style.display = 'none';
        question.style.display = 'none';
        
        const playerScore = document.createElement('h2');
        playerScore.textContent = `You got ${score} out of ${quizz.length}`;
        answerSection.appendChild(playerScore);
    }
}
nextBtn.addEventListener('click', () => setNextQuestion());

document.querySelector('.start-btn').addEventListener('click', () => {
    window.location.reload();
});