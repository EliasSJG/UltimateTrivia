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
  regions: any[];
  isNiche: boolean;
};
