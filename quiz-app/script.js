const qustionDataBase = [
  {
    question: "How did you study when you were in high school?",
    option1: " I preferred to review class notes and textbooks on my own.",
    option2: "I often participated in study groups to discuss and share ideas.",
    option3: "I used a combination of individual study and collaborative learning.",
    option4: " I relied on visual aids like flashcards and diagrams to enhance my understanding",
    ans: "answer3",
  },
  {
    question: "Do you prefer to study with someone or alone? ",
    option1: "I enjoy studying alone for focused concentration.",
    option2: "I find studying with a partner or group beneficial for discussion.",
    option3: "I balance both solo and group study sessions based on the subject.",
    option4: " I prefer collaborative learning for most of my study sessions.",
    ans: "answer1",
  },
  {
    question: "Do you like to study in a quiet place or do you prefer to have music or TV in the background? ",
    option1: "I need complete silence to concentrate, so I prefer a quiet environment.",
    option2: "Soft background music helps me stay focused while studying.",
    option3: "I like a moderately quiet environment but can tolerate some background noise.",
    option4: "I often have music or TV on for background noise while studying.",
    ans: "answer4",
  },
  {
    question: "Describe how you would normally prepare for a test? ",
    option1: " I follow a strict schedule, reviewing notes and textbooks systematically.",
    option2: "I discuss key concepts with classmates to reinforce my understanding.",
    option3: " I create visual aids such as mind maps or charts for better retention.",
    option4: "I simulate test conditions by taking practice exams to assess my knowledge.",
    ans: "answer2",
  },
  // {
  //   question: "What is git?",
  //   option1: "version control system",
  //   option2: "A ugly thing",
  //   option3: "Distributed version control system",
  //   option4: "A useful stuff",
  //   ans: "answer3",
  // },
  // {
  //   question: "Which is correct?",
  //   option1: "<html><body>...</body></html>",
  //   option2: "<body><html>...</html></body>",
  //   option3: "<script><head>...</head></script>",
  //   option4: "All are correct.",
  //   ans: "answer1",
  // },
  // {
  //   question: "Which is unchangeable",
  //   option1: "var x = 10;",
  //   option2: "let x = 10;",
  //   option3: "const x = 10;",
  //   option4: "All are unchangeable.",
  //   ans: "answer3",
  // },
  // {
  //   question: "How many kinds of loops are here in js?",
  //   option1: "2",
  //   option2: "6",
  //   option3: "1",
  //   option4: "5",
  //   ans: "answer4",
  // },
  // {
  //   question: "What does an array called in js?",
  //   option1: "Array",
  //   option2: "Object",
  //   option3: "String",
  //   option4: "Boolean",
  //   ans: "answer2",
  // },
  // {
  //   question: "Which is the best js Library?",
  //   option1: "ReactJs",
  //   option2: "JQuery",
  //   option3: "Angular",
  //   option4: "Vue",
  //   ans: "answer1",
  // },
];

// getting referrence
const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");

// This function is rendering all the texts

let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();

// this function is for answer checking

const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};


submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      
      <button class='btn' onclick='location.reload()'>Next Test</button>
      <button class='btn' onclick='location.reload()'>Attempt Again</button>
      `;
  }
});
