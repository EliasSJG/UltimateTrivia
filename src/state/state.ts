export const categoryCorrection: { [key: string]: string } = {
  "Society & Culture": "society_and_culture",
  "Arts & Literature": "arts_and_literature",
  "Film & TV": "film_and_tv",
  "Food & Drink": "food_and_drink",
  "Sport & Leisure": "sport_and_leisure",
  "General Knowledge": "general_knowledge",
  Geography: "geography",
  History: "history",
  Music: "music",
  Science: "science",
};
export const totalPricePot: { totalPrice: number } = {
  totalPrice: 0,
};

export const pricePotAmounts = {
  easy: 1000,
  medium: 5000,
  hard: 10000,
};

export const increaseMoney = (difficulty: "easy" | "medium" | "hard") => {
  totalPricePot.totalPrice += pricePotAmounts[difficulty];
};
