import { getProgress, getOverallProgress } from "@/lib/progress";
import { useContent } from "@/data/content";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Zap, BookOpen, FlaskConical, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();
  const { modules } = useContent();
  const progress = getProgress();
  const overall = getOverallProgress();

  const stats = [
    { icon: BookOpen, label: t("dashboard.stats.modulesCompleted"), value: `${overall.completed}/${overall.total}`, color: "text-primary" },
    { icon: Zap, label: t("dashboard.stats.xpTotal"), value: progress.totalXP.toString(), color: "text-cyber-amber" },
    { icon: FlaskConical, label: t("dashboard.stats.labsCompleted"), value: Object.values(progress.modules).filter(m => m.labsCompleted > 0).length.toString(), color: "text-cyber-cyan" },
    { icon: Terminal, label: t("dashboard.stats.commandsPracticed"), value: progress.completedCommands.length.toString(), color: "text-cyber-purple" },
  ];

  const skillAreas = [
    { name: t("tracks.common"), value: calcTrackProgress("common", progress) },
    { name: t("tracks.offensive"), value: calcTrackProgress("offensive", progress) },
    { name: t("tracks.defensive"), value: calcTrackProgress("defensive", progress) },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">{t("dashboard.title")}</h1>
        <p className="text-muted-foreground text-sm">{t("dashboard.subtitle")}</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-4 space-y-2">
            <div className="flex items-center gap-2">
              <s.icon className={`h-4 w-4 ${s.color}`} />
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <p className="text-2xl font-bold font-mono">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Overall Progress */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Trophy className="h-4 w-4 text-cyber-amber" /> {t("dashboard.overall.title")}
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("dashboard.overall.courseCompletion")}</span>
            <span className="font-mono text-primary">{overall.percentage}%</span>
          </div>
          <Progress value={overall.percentage} className="h-2" />
        </div>
      </div>

      {/* Track Progress */}
      <div className="grid md:grid-cols-3 gap-4">
        {skillAreas.map((area) => (
          <div key={area.name} className="rounded-lg border border-border bg-card p-4 space-y-3">
            <h3 className="font-semibold text-sm">{area.name}</h3>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{t("dashboard.track.progress")}</span>
                <span className="font-mono">{area.value}%</span>
              </div>
              <Progress value={area.value} className="h-1.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Module List */}
      <div className="rounded-lg border border-border bg-card p-6 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Flame className="h-4 w-4 text-destructive" /> {t("dashboard.modules.title")}
        </h2>
        <div className="space-y-2">
          {modules.map((mod) => {
            const mp = progress.modules[mod.id];
            const pct = mp ? Math.round(((mp.lessonsCompleted + mp.labsCompleted) / (mp.totalLessons + mp.totalLabs)) * 100) : 0;
            return (
              <div key={mod.id} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                <span className="text-xs font-mono text-muted-foreground w-8">#{mod.number}</span>
                <span className="flex-1 text-sm">{mod.title}</span>
                <span className="text-xs font-mono text-primary">{pct}%</span>
                <div className="w-20">
                  <Progress value={pct} className="h-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function calcTrackProgress(track: string, progress: ReturnType<typeof getProgress>): number {
  const trackModules = modules.filter((m) => m.track === track);
  if (trackModules.length === 0) return 0;
  let total = 0;
  let done = 0;
  trackModules.forEach((m) => {
    total += m.lessons.length + 1;
    const mp = progress.modules[m.id];
    if (mp) {
      done += mp.lessonsCompleted + mp.labsCompleted;
    }
  });
  return total > 0 ? Math.round((done / total) * 100) : 0;
}
