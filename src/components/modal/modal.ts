import { totalPricePot } from "../../state/state";
import { renderStartButton } from "../buttons/continuebutton";
import "./_modal.scss";

export const createLeaveWithMoney = () => {
  const priceDivDelete = document.querySelector(".price-div") as HTMLDivElement;
  const start = document.querySelector("#start") as HTMLDivElement;
  const choice = document.querySelector("#choice") as HTMLDivElement;
  const question = document.createElement("div") as HTMLDivElement;
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const heading = document.createElement("h1");
  heading.classList.add("main-title");
  heading.innerHTML = "Are you sure you want to leave?";
  const p = document.createElement("p");
  p.classList.add("description-text");
  p.innerHTML = `Leaving now secures your winnings, but continuing could bring you even greater rewards—or risks. Will you play it safe or take the chance? The choice is yours! You would get a grand total of ${totalPricePot.totalPrice}`;
  const removeModal = document.createElement("button");
  removeModal.classList.add("continuebutton");
  removeModal.innerHTML = "Continue Playing";
  removeModal.addEventListener("click", () => {
    modal.remove();
  });
  const startButton = renderStartButton(
    choice,
    question,
    start,
    priceDivDelete
  );
  modal.append(heading, p, removeModal, startButton);

  choice.appendChild(modal);
  return modal;
};
