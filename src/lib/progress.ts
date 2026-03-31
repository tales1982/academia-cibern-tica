// LocalStorage-based progress store for the cybersecurity academy

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  lessonsCompleted: number;
  totalLessons: number;
  labsCompleted: number;
  totalLabs: number;
  unlockedAt?: string;
  completedAt?: string;
}

export interface StudentProgress {
  name: string;
  modules: Record<string, ModuleProgress>;
  streak: number;
  lastActive: string;
  totalXP: number;
  badges: string[];
  completedCommands: string[];
}

const STORAGE_KEY = "cyberacademy_progress";

const defaultProgress: StudentProgress = {
  name: "Estudante",
  modules: {},
  streak: 0,
  lastActive: new Date().toISOString(),
  totalXP: 0,
  badges: [],
  completedCommands: [],
};

export function getProgress(): StudentProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { ...defaultProgress };
}

export function saveProgress(progress: StudentProgress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function completeLesson(moduleId: string, lessonIndex: number): StudentProgress {
  const progress = getProgress();
  if (!progress.modules[moduleId]) {
    progress.modules[moduleId] = {
      moduleId,
      completed: false,
      lessonsCompleted: 0,
      totalLessons: 5,
      labsCompleted: 0,
      totalLabs: 1,
      unlockedAt: new Date().toISOString(),
    };
  }
  const mod = progress.modules[moduleId];
  mod.lessonsCompleted = Math.max(mod.lessonsCompleted, lessonIndex + 1);
  if (mod.lessonsCompleted >= mod.totalLessons && mod.labsCompleted >= mod.totalLabs) {
    mod.completed = true;
    mod.completedAt = new Date().toISOString();
  }
  progress.totalXP += 25;
  progress.lastActive = new Date().toISOString();
  saveProgress(progress);
  return progress;
}

export function completeLab(moduleId: string): StudentProgress {
  const progress = getProgress();
  if (!progress.modules[moduleId]) {
    progress.modules[moduleId] = {
      moduleId,
      completed: false,
      lessonsCompleted: 0,
      totalLessons: 5,
      labsCompleted: 0,
      totalLabs: 1,
      unlockedAt: new Date().toISOString(),
    };
  }
  progress.modules[moduleId].labsCompleted = 1;
  progress.totalXP += 100;
  progress.lastActive = new Date().toISOString();
  saveProgress(progress);
  return progress;
}

export function completeCommand(cmd: string): StudentProgress {
  const progress = getProgress();
  if (!progress.completedCommands.includes(cmd)) {
    progress.completedCommands.push(cmd);
    progress.totalXP += 10;
  }
  saveProgress(progress);
  return progress;
}

export function getOverallProgress(): { completed: number; total: number; percentage: number } {
  const progress = getProgress();
  const total = 14;
  const completed = Object.values(progress.modules).filter((m) => m.completed).length;
  return { completed, total, percentage: Math.round((completed / total) * 100) };
}
