import { Link } from "react-router-dom";
import { Shield, ChevronRight, Terminal, Sword, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  const tracks = [
    {
      icon: Shield,
      title: t("tracks.common"),
      modules: t("home.modules.common"),
      desc: t("home.descriptions.common"),
      color: "text-primary",
    },
    {
      icon: Sword,
      title: t("tracks.offensiveFull"),
      modules: t("home.modules.offensive"),
      desc: t("home.descriptions.offensive"),
      color: "text-cyber-amber",
    },
    {
      icon: ShieldCheck,
      title: t("tracks.defensiveFull"),
      modules: t("home.modules.defensive"),
      desc: t("home.descriptions.defensive"),
      color: "text-cyber-cyan",
    },
  ];
  return (
    <div className="p-6 md:p-10 space-y-12 max-w-5xl mx-auto">
      {/* Hero */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono">
          <Zap className="h-3 w-3" />
          {t("home.badge")}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-primary glow-text-green">Cyber</span>Academy
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {t("home.subtitle")}
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="font-mono">
            <Link to="/lessons">
              {t("home.ctaStart")} <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-mono">
            <Link to="/dashboard">{t("home.ctaProgress")}</Link>
          </Button>
        </div>
      </section>

      {/* Learning Path */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center">{t("home.learningPath")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className="rounded-lg border border-border bg-card p-6 space-y-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md bg-secondary ${track.color}`}>
                  <track.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{track.modules}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{track.desc}</p>
              {i < 2 && (
                <div className="flex justify-center">
                  <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Terminal, label: t("home.features.terminal.label"), desc: t("home.features.terminal.desc") },
          { icon: Shield, label: t("home.features.modules.label"), desc: t("home.features.modules.desc") },
          { icon: Sword, label: t("home.features.labs.label"), desc: t("home.features.labs.desc") },
          { icon: Zap, label: t("home.features.progress.label"), desc: t("home.features.progress.desc") },
        ].map((f) => (
          <div key={f.label} className="rounded-lg border border-border bg-card/50 p-4 space-y-2">
            <f.icon className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-sm">{f.label}</h4>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
