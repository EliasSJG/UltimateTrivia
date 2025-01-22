import "./_continuebutton.scss";

export const nextPageChoice = document.querySelector(
  "#next-page-choice"
) as HTMLButtonElement;

export const renderChoicePage = () => {
  const choice = document.querySelector("#choice") as HTMLDivElement;
  const start = document.querySelector("#start") as HTMLDivElement;
  choice.style.display = "block";
  start.style.display = "none";
};
