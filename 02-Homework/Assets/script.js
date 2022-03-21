//Headings
var body = document.body;
var h1Heading = document.createElement("h1");
var h2Openning = document.createElement("h2");
var startBtn = document.createElement("button");
var questionDiv = document.createElement("div");

// List of Questions for Q1
var listEl = document.createElement("ol");
var a1 = document.createElement("li");
var a2 = document.createElement("li");
var a3 = document.createElement("li");
var a4 = document.createElement("li");
var a1Btn = document.createElement("button");
var a2Btn = document.createElement("button");
var a3Btn = document.createElement("button");
var a4Btn = document.createElement("button");
//////////////////////////////////////////////////
// List of Questions for Q2
var b1 = document.createElement("li");
var b2 = document.createElement("li");
var b3 = document.createElement("li");
var b4 = document.createElement("li");
var b1Btn = document.createElement("button");
var b2Btn = document.createElement("button");
var b3Btn = document.createElement("button");
var b4Btn = document.createElement("button");
// ///////////////////////////////////////////////
// // List of Questions for Q3
// var listEl = document.createElement("ol");
// var c1 = document.createElement("li");
// var c2 = document.createElement("li");
// var c3 = document.createElement("li");
// var c4 = document.createElement("li");
// var c1Btn = document.createElement("button");
// var c2Btn = document.createElement("button");
// var c3Btn = document.createElement("button");
// var c4Btn = document.createElement("button");
// ///////////////////////////////////////////////////////

//Timeer
var timeer = document.createElement("h4");

function Quiz() {
  h1Heading.textContent = "Coding Quiz Challenge";
  h2Openning.textContent =
    "Try to Answer the follwoing code-related question within the time limit. Keep in mide thath incorrect answers will penlaize your score-timer by 10- seconds";

  startBtn.textContent = "Start Quiz";

  body.appendChild(h1Heading);
  body.appendChild(h2Openning);
  body.appendChild(startBtn);

  startBtn.addEventListener("click", Q1);

  //style
  h1Heading.setAttribute(
    "style",
    "font-weight: bold; padding: 70px 0;text-align: center;"
  );
  h2Openning.setAttribute("style", "font-weight: bold; text-align: center;");
  startBtn.setAttribute("style", "text-align:center;");
}

function Q1() {
  h1Heading.textContent = " ";
  h2Openning.textContent = " ";

  listEl.textContent =
    " String values must be enclosed within _____ when being assigned to varibles";

  a1Btn.textContent = "commas";
  a2Btn.textContent = "curly brackets";
  a3Btn.textContent = "quotes";
  a4Btn.textContent = "normal brackets";

  a1.appendChild(a1Btn);
  a2.appendChild(a2Btn);
  a3.appendChild(a3Btn);
  a4.appendChild(a4Btn);
  listEl.appendChild(a1);
  listEl.appendChild(a2);
  listEl.appendChild(a3);
  listEl.appendChild(a4);

  questionDiv.appendChild(listEl);
  body.append(questionDiv);

  //logics
  a1Btn.addEventListener("click", function () {
    if (true) {
      Q2();
    } else {
      console.log("error");
    }
  });

  function Q2() {}
}

Quiz();

// Question 3

//Timer

//Enter Score

//High Score

//Clear Scores
