import "./_question.scss";

export const renderQuestionPage = () => {
  const choice = document.querySelector("#choice") as HTMLDivElement;

  choice.remove();

  const heading = document.createElement("h1") as HTMLHeadingElement;
  const question = document.createElement("div") as HTMLDivElement;

  heading.classList.add("main-title");
  heading.innerHTML = "Question"; //change to api question

  question.id = "question";
  question.classList.add("question");

  //temporary

  //need connection to api to call for each answer create a button.

  const helplineButton = document.createElement("button");
  const helplineButton2 = document.createElement("button");
  const helplineButton3 = document.createElement("button");
  const helplineButton4 = document.createElement("button");
  helplineButton.classList.add("helpline");
  helplineButton2.classList.add("helpline");
  helplineButton3.classList.add("helpline");
  helplineButton4.classList.add("helpline");

  helplineButton.textContent = "IMG";
  helplineButton2.textContent = "IMG";
  helplineButton3.textContent = "IMG";
  helplineButton4.textContent = "IMG";

  const answerButton = document.createElement("button");
  const answerButton2 = document.createElement("button");
  const answerButton3 = document.createElement("button");
  const answerButton4 = document.createElement("button");
  answerButton.classList.add("answerbutton");
  answerButton2.classList.add("answerbutton");
  answerButton3.classList.add("answerbutton");
  answerButton4.classList.add("answerbutton");

  answerButton.textContent = "Answer 1";
  answerButton2.textContent = "Answer 2";
  answerButton3.textContent = "Answer 3";
  answerButton4.textContent = "Answer 4";
  //foreach incorrect answer and correct answer create a button, later
  const helplineDiv = document.createElement("div");
  helplineDiv.classList.add("helpline-div");
  helplineDiv.append(
    helplineButton,
    helplineButton2,
    helplineButton3,
    helplineButton4
  );
  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer-div");
  answerDiv.append(answerButton, answerButton2, answerButton3, answerButton4);
  question.append(heading, helplineDiv, answerDiv);
  //create 4 helpline buttons in helplinebutton.ts
  //create 4 answer button in answerbutton.ts
  document.body.appendChild(question);
};
