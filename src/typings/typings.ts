//All combined typing
export type Questions = Question[];

export type Question = {
  forEach(arg0: (question: any) => void): unknown;
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
};

export type Category = {
  "Arts & Literature": string[];
  "Film & TV": string[];
  "Food & Drink": string[];
  "General Knowledge": string[];
  Geography: string[];
  History: string[];
  Music: string[];
  Science: string[];
  "Society & Culture": string[];
  "Sport & Leisure": string[];
};
