import { Category, Question } from "../typings/typings";
//Category endpoint
export const getCategory = async (): Promise<Category> => {
  const response = await fetch("https://the-trivia-api.com/api/categories");
  const data: Category = await response.json();

  return data;
};

//Difficulty endpoint
export const getDifficulty = async () => {
  const response = await fetch("https://the-trivia-api.com/api/questions");

  const data: Question[] = await response.json();
  const difficulties = Array.from(
    new Set(data.map((question) => question.difficulty))
  );
  return difficulties;
};

//Specific question endpoint
export const getQuestion = async (
  difficulty: string,
  category: string
): Promise<Question[]> => {
  const response = await fetch(
    `https://the-trivia-api.com/api/questions?difficulty=${difficulty}&categories=${category}&limit=3`
  );
  const data: Question[] = await response.json();

  return data;
};
