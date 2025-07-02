const questions = [
  {
    question: "Who won the 2011 Cricket World Cup?",
    options: ["India", "Australia", "Sri Lanka", "England"],
    answer: "India"
  },
  {
    question: "Who holds the record for most international centuries?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Where is the ICC headquarters located?",
    options: ["India", "UAE", "England", "Australia"],
    answer: "UAE"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who is known as the 'Hitman' in Indian cricket?",
    options: ["KL Rahul", "MS Dhoni", "Virat Kohli", "Rohit Sharma"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which country won the first T20 World Cup?",
    options: ["India", "Pakistan", "West Indies", "Australia"],
    answer: "India"
  },
  {
    question: "Which cricket stadium is the largest in the world?",
    options: ["MCG", "Lords", "Narendra Modi Stadium", "Eden Gardens"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "Who is called the 'Captain Cool'?",
    options: ["Virat Kohli", "MS Dhoni", "Steve Smith", "Kane Williamson"],
    answer: "MS Dhoni"
  },
  {
    question: "Which Indian cricketer is famous for helicopter shot?",
    options: ["Raina", "Dhoni", "Jadeja", "Sehwag"],
    answer: "Dhoni"
  },
  {
    question: "Which team won the 2019 Cricket World Cup?",
    options: ["New Zealand", "England", "India", "Australia"],
    answer: "England"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.querySelectorAll('#options button').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  document.getElementById('score').textContent = score;
}
