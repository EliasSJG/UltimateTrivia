import "./_progressbar.scss";
import { totalPricePot } from "../../state/state";
export const pricePot = () => {
  const priceDiv = document.createElement("div") as HTMLDivElement;
  priceDiv.classList.add("price-div");

  const priceAmountText = document.createElement("h3");
  priceAmountText.textContent = `Total Prize: ${totalPricePot.totalPrice}`;
  priceAmountText.id = "price-text";

  priceDiv.appendChild(priceAmountText);
  document.body.appendChild(priceDiv);
};

export const updatePriceDisplay = () => {
  const priceAmountText = document.querySelector(
    "#price-text"
  ) as HTMLHeadingElement;
  if (priceAmountText) {
    priceAmountText.textContent = `Total Price: ${totalPricePot.totalPrice}`;
  }
};
