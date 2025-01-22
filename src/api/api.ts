import { Questions, Question } from "../typings/typings";

//the diffrent api endpoints

//Category
//https://the-trivia-api.com/api/categories

//Difficulty
//https://the-trivia-api.com/api/questions?difficulty=easy
//https://the-trivia-api.com/api/questions?difficulty=medium
//https://the-trivia-api.com/api/questions?difficulty=hard

//Questions
//https://the-trivia-api.com/api/questions

//When a user selects a category, its gonna show all the the questions in that category
//when a user selects a difficulty, its gonna show all that difficulty questions in that category
//Then the user selecs the question with that difficulty and category.

//All Combined
//https://the-trivia-api.com/api/questions?difficulty=easy&categories=general&limit=1

//START HERE

//TYPA UPP
export const getCategory = async () => {
  const response = await fetch("https://the-trivia-api.com/api/categories");
  const data = await response.json();

  return data;
};

export const getQuestion = async (
  difficulty: string,
  category: string
): Promise<Question> => {
  const response = await fetch(
    `https://the-trivia-api.com/api/questions?difficulty=${difficulty}&categories=${category}&limit=10`
  );
  const data = await response.json();
  return data;
};

//Behöver en extra endpoint, antigen ta difficulty till dropdown eller hitta en annan endpoint som finns
