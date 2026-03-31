import { useState } from "react";
import { useContent } from "@/data/content";
import { Search, BookA } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export default function GlossaryPage() {
  const { t } = useTranslation();
  const { glossary } = useContent();
  const [search, setSearch] = useState("");
  const filtered = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.definition.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [...new Set(filtered.map((g) => g.term[0].toUpperCase()))].sort();

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookA className="h-6 w-6 text-primary" /> {t("glossary.title")}
        </h1>
        <p className="text-muted-foreground text-sm">{t("glossary.subtitle")}</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("glossary.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-card"
        />
      </div>

      {letters.map((letter) => (
        <div key={letter}>
          <h2 className="text-lg font-bold text-primary font-mono mb-2">{letter}</h2>
          <div className="space-y-2">
            {filtered
              .filter((g) => g.term[0].toUpperCase() === letter)
              .map((g) => (
                <div key={g.term} className="rounded-md border border-border bg-card p-4">
                  <h3 className="font-semibold text-sm mb-1">{g.term}</h3>
                  <p className="text-sm text-muted-foreground">{g.definition}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
