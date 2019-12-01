// global variables
var start = document.getElementById('start-btn'),
    startContainer = document.getElementById('start-container');
    quiz = document.getElementById('quiz-container'),
    question = document.getElementById('question'),
    qImg = document.getElementById('quiz-img'),
    choiceA = document.getElementById('choice-a'),
    choiceB = document.getElementById('choice-b'),
    choiceC = document.getElementById('choice-c'),
    counter = document.getElementById('counter'),
    timeGauge = document.getElementById('timeGauge'),
    progress = document.getElementById('progress'),
    scoreDiv = document.getElementById('score-container')
    // lastQuestion = questions.length - 1;
    runningQuestion = 0,
    count = 0,
    questionTime = 10, // 10s
    gaugeWidth = 150, // 150px
    gaugeUnit = gaugeWidth / questionTime,
    score = 0;
let TIMER;

    // create our questions
var questions = [
  {
    question : 'Who is this former Jedi Grand Master',
    imgSrc : 'assets/images/yoda.jpg',
    choiceA : 'Yoda',
    choiceB : 'Mace Windu',
    choiceC : 'Yattle',
    correct : 'A'
  },{
    question : "Who was Darth Sidious' master?",
    imgSrc : 'assets/images/darth-plagueis.jpg',
    choiceA : 'Darth Revan',
    choiceB : 'Darth Plagueis the Wise',
    choiceC : 'Darth Bane',
    correct : 'B'
  },{
    question : 'All clone troopers were clones of who?',
    imgSrc : 'assets/images/jango-fett.jpg',
    choiceA : 'Boba Fett',
    choiceB : 'The Mandalorian',
    choiceC : 'Jango Fett',
    correct : 'C'
  },{
    question : 'Darth Maul is from which planet',
    imgSrc : 'assets/images/darth-maul.jpg',
    choiceA : 'Mandalore',
    choiceB : 'Dathomir',
    choiceC : 'Kashyyk',
    correct : 'B'
  },{
    question : 'Jedi use these force-sensitive crystals in their lightsablers',
    imgSrc : 'assets/images/rey-kylo-ren-battle.jpg',
    choiceA : 'Beskar',
    choiceB : 'Durasteel',
    choiceC : 'Kyber',
    correct : 'C'
  }
];

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    startContainer.classList.add('d-none');
    quiz.classList.remove('d-none');
    renderQuestion();
    // renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render a question
function renderQuestion(){
    var q = questions[runningQuestion];

    question.innerHTML = q.question;
    qImg.src = q.imgSrc;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
}
