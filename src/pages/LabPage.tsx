import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContent } from "@/data/content";
import { labsByLang } from "@/data/labs";
import { LabScenario } from "@/data/labs.types";
import { completeLab, getProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LabPage() {
  const { t, i18n } = useTranslation();
  const { moduleId } = useParams();
  const { modules } = useContent();
  const module = modules.find((m) => m.id === moduleId);
  const [progress, setProgress] = useState(getProgress());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const lang = (i18n.resolvedLanguage || "pt").split("-")[0];
  const labs = useMemo(() => labsByLang[lang] ?? labsByLang.pt, [lang]);

  const scenario: LabScenario | null = moduleId ? labs[moduleId] ?? null : null;

  if (!module) {
    return (
      <div className="p-6 md:p-10 space-y-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{t("labs.notFound")}</h1>
        <Button asChild>
          <Link to="/lessons">{t("labs.backToModules")}</Link>
        </Button>
      </div>
    );
  }

  const labCompleted = !!progress.modules[module.id]?.labsCompleted;
  const allCorrect = scenario
    ? scenario.questions.every((q) => answers[q.id] === q.correct)
    : false;

  const handleComplete = () => {
    const updated = completeLab(module.id);
    setProgress(updated);
  };

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-3xl mx-auto">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">{module.labTitle}</h1>
          <p className="text-muted-foreground text-sm">{module.labDescription}</p>
        </div>
        <Badge variant={labCompleted ? "default" : "outline"} className="text-xs">
          {labCompleted ? t("labs.statusCompleted") : t("labs.statusPending")}
        </Badge>
      </div>

      <div className="rounded-lg border border-border bg-card p-5 space-y-4">
        <div>
          <h2 className="font-semibold">{t("labs.moduleLabel", { number: module.number, title: module.title })}</h2>
          <p className="text-xs text-muted-foreground">{t("labs.explanation")}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/lessons">{t("labs.backToModules")}</Link>
          </Button>
        </div>
      </div>

      {scenario ? (
        <div className="rounded-lg border border-border bg-card p-5 space-y-6">
          <div>
            <h3 className="font-semibold">{scenario.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{scenario.intro}</p>
          </div>

          {scenario.questions.map((q, idx) => {
            const selected = answers[q.id];
            const isCorrect = selected && selected === q.correct;
            const showFeedback = !!selected;
            return (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-medium">
                  {idx + 1}. {q.prompt}
                </p>
                <div className="grid gap-2">
                  {q.options.map((opt) => {
                    const isSelected = selected === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                        className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                          isSelected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:bg-secondary/40"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                {showFeedback && (
                  <p className={`text-xs ${isCorrect ? "text-primary" : "text-destructive"}`}>
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={handleComplete} disabled={!allCorrect || labCompleted}>
              {labCompleted ? t("labs.completed") : t("labs.complete")}
            </Button>
            {!labCompleted && (
              <p className="text-xs text-muted-foreground">
                {allCorrect ? t("labs.ready") : t("labs.completeHint")}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card p-5 space-y-2">
          <h3 className="font-semibold">{t("labs.comingSoonTitle")}</h3>
          <p className="text-sm text-muted-foreground">{t("labs.comingSoonDesc")}</p>
        </div>
      )}
    </div>
  );
}
