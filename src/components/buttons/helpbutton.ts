import "./_helpbutton.scss";
import askAudience from "../../assets/AskTheAudienceHelpline.svg";
import callFriend from "../../assets/CallAFriendHelpline.svg";
import fiftyFifty from "../../assets/FiftyFiftyHelpline.svg";
import switchQuestion from "../../assets/SwitchQuestionHelpline.svg";
export const askAudienceHelpline = () => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");

  const icon = document.createElement("img");
  icon.src = askAudience;
  icon.alt = "Ask The Audience Helpline";
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);
  return helplineButton;
};
export const askFriendHelpline = () => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");
  const icon = document.createElement("img");
  icon.src = callFriend;
  icon.alt = "Call A Friend Helpline";
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);

  return helplineButton;
};
export const fiftyFiftyHelpline = () => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");
  const icon = document.createElement("img");
  icon.src = fiftyFifty;
  icon.alt = "Fifty Fifty Helpline";
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);

  return helplineButton;
};
export const switchQuestionHelpline = () => {
  const helplineButton = document.createElement("button");
  helplineButton.classList.add("helpline");
  const icon = document.createElement("img");
  icon.src = switchQuestion;
  icon.alt = "Switch Question Helpline";
  icon.classList.add("helpline-img");
  helplineButton.appendChild(icon);
  return helplineButton;
};
