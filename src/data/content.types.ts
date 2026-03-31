export interface CyberLesson {
  title: string;
  content: string;
}

export interface CyberModule {
  id: string;
  number: number;
  title: string;
  description: string;
  track: "common" | "offensive" | "defensive";
  lessons: CyberLesson[];
  labTitle: string;
  labDescription: string;
}

export interface CyberTool {
  name: string;
  category: string;
  description: string;
  usage: string;
  commands: string[];
  scenario: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}
