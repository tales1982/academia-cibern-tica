import { useTranslation } from "react-i18next";

const LANGS = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || "pt").split("-")[0];

  return (
    <label className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="hidden sm:inline">{t("language.label")}</span>
      <select
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent border border-border rounded px-2 py-1 text-xs text-foreground"
        aria-label={t("language.label")}
      >
        {LANGS.map((l) => (
          <option key={l.value} value={l.value} className="bg-background text-foreground">
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
