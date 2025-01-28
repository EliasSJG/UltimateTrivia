import "./_continuebutton.scss";

export const renderQuestionButton = () => {
  const continueToQuestionButton = document.createElement("button");
  continueToQuestionButton.classList.add("continuebutton");
  continueToQuestionButton.innerHTML = "Continue";
  continueToQuestionButton.id = "next-page-question";
  return continueToQuestionButton;
};

export const renderChoiceButton = () => {
  const continueToChoiceButton = document.createElement("button");
  continueToChoiceButton.classList.add("continuebutton");
  continueToChoiceButton.innerHTML = "Continue";
  continueToChoiceButton.id = "next-page-choice";

  return continueToChoiceButton;
};
