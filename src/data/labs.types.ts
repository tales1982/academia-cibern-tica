export type LabOption = {
  id: "a" | "b" | "c" | "d";
  label: string;
};

export type LabQuestion = {
  id: string;
  prompt: string;
  options: LabOption[];
  correct: LabOption["id"];
  explanation: string;
};

export type LabScenario = {
  title: string;
  intro: string;
  questions: LabQuestion[];
};

export type LabsByModule = Record<string, LabScenario>;
