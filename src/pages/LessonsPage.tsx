import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useContent } from "@/data/content";
import { getProgress, completeLesson } from "@/lib/progress";
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Search, Shield, Sword, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export default function LessonsPage() {
  const { t } = useTranslation();
  const trackConfig = {
    common: { label: t("tracks.common"), icon: Shield, color: "bg-primary/10 text-primary" },
    offensive: { label: t("tracks.offensive"), icon: Sword, color: "bg-cyber-amber/10 text-cyber-amber" },
    defensive: { label: t("tracks.defensive"), icon: ShieldCheck, color: "bg-cyber-cyan/10 text-cyber-cyan" },
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const { modules } = useContent();
  const trackFilter = searchParams.get("track") as "common" | "offensive" | "defensive" | null;
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [progress, setProgress] = useState(getProgress());

  const filtered = modules
    .filter((m) => !trackFilter || m.track === trackFilter)
    .filter((m) =>
      !search || m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.lessons.some((l) => l.title.toLowerCase().includes(search.toLowerCase()))
    );

  const handleCompleteLesson = (moduleId: string, lessonIdx: number) => {
    const updated = completeLesson(moduleId, lessonIdx);
    setProgress(updated);
  };

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">{t("lessons.title")}</h1>
        <p className="text-muted-foreground text-sm">{t("lessons.subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("lessons.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={!trackFilter ? "default" : "outline"}
            size="sm"
            onClick={() => setSearchParams({})}
          >
            {t("lessons.all")}
          </Button>
          {(Object.keys(trackConfig) as Array<keyof typeof trackConfig>).map((t) => (
            <Button
              key={t}
              variant={trackFilter === t ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchParams({ track: t })}
            >
              {trackConfig[t].label}
            </Button>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-3">
        {filtered.map((mod) => {
          const isExpanded = expandedModule === mod.id;
          const mp = progress.modules[mod.id];
          const tc = trackConfig[mod.track];

          return (
            <div key={mod.id} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-secondary/30 transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
                <span className="text-xs font-mono text-muted-foreground w-6">
                  {String(mod.number).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">{mod.description}</p>
                </div>
                <Badge variant="outline" className={`text-xs shrink-0 ${tc.color}`}>
                  {tc.label}
                </Badge>
                {mp && mp.lessonsCompleted > 0 && (
                  <span className="text-xs font-mono text-primary shrink-0">
                    {mp.lessonsCompleted}/{mp.totalLessons}
                  </span>
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-border p-4 space-y-3">
                  {mod.lessons.map((lesson, idx) => {
                    const lessonKey = `${mod.id}-${idx}`;
                    const isLessonExpanded = expandedLesson === lessonKey;
                    const isCompleted = mp ? idx < mp.lessonsCompleted : false;

                    return (
                      <div key={idx} className="border border-border/50 rounded-md overflow-hidden">
                        <button
                          onClick={() => setExpandedLesson(isLessonExpanded ? null : lessonKey)}
                          className="w-full flex items-center gap-3 p-3 text-left hover:bg-secondary/20 transition-colors"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
                          )}
                          <span className="text-sm flex-1">{lesson.title}</span>
                          {isLessonExpanded ? (
                            <ChevronDown className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-3 w-3 text-muted-foreground" />
                          )}
                        </button>
                        {isLessonExpanded && (
                          <div className="border-t border-border/50 p-4 space-y-4">
                            <div className="prose prose-sm prose-invert max-w-none">
                              {lesson.content.split("\n\n").map((para, pi) => (
                                <p key={pi} className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                  {para.startsWith("```") ? (
                                    <code className="block bg-background p-3 rounded text-xs font-mono text-primary overflow-x-auto">
                                      {para.replace(/```\w*\n?/g, "").trim()}
                                    </code>
                                  ) : (
                                    para.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                                      part.startsWith("**") && part.endsWith("**") ? (
                                        <strong key={j} className="text-foreground">
                                          {part.slice(2, -2)}
                                        </strong>
                                      ) : part.includes("`") ? (
                                        <span key={j}>
                                          {part.split(/(`[^`]+`)/g).map((seg, k) =>
                                            seg.startsWith("`") && seg.endsWith("`") ? (
                                              <code key={k} className="bg-secondary px-1 py-0.5 rounded text-xs font-mono text-primary">
                                                {seg.slice(1, -1)}
                                              </code>
                                            ) : (
                                              seg
                                            )
                                          )}
                                        </span>
                                      ) : (
                                        part
                                      )
                                    )
                                  )}
                                </p>
                              ))}
                            </div>
                            {!isCompleted && (
                              <Button
                                size="sm"
                                onClick={() => handleCompleteLesson(mod.id, idx)}
                                className="font-mono"
                              >
                                {t("lessons.markComplete")}
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Lab */}
                  <div className="mt-4 p-4 rounded-md border border-primary/20 bg-primary/5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                        🧪 {mod.labTitle}
                      </h4>
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/labs/${mod.id}`}>
                          {t("lessons.openLab")}
                        </Link>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{mod.labDescription}</p>
                    <Badge variant="outline" className="text-xs">{t("lessons.lab")}</Badge>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
