import { useTranslation } from "react-i18next";
import { modules as modulesPt } from "./modules.pt";
import { modules as modulesEn } from "./modules.en";
import { modules as modulesFr } from "./modules.fr";
import { cyberTools as toolsPt, glossary as glossaryPt } from "./tools.pt";
import { cyberTools as toolsEn, glossary as glossaryEn } from "./tools.en";
import { cyberTools as toolsFr, glossary as glossaryFr } from "./tools.fr";
import { CyberModule, CyberTool, GlossaryTerm } from "./content.types";

const moduleByLang: Record<string, CyberModule[]> = {
  pt: modulesPt,
  en: modulesEn,
  fr: modulesFr,
};

const toolsByLang: Record<string, CyberTool[]> = {
  pt: toolsPt,
  en: toolsEn,
  fr: toolsFr,
};

const glossaryByLang: Record<string, GlossaryTerm[]> = {
  pt: glossaryPt,
  en: glossaryEn,
  fr: glossaryFr,
};

export function useContent() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "pt").split("-")[0];
  return {
    modules: moduleByLang[lang] ?? modulesPt,
    tools: toolsByLang[lang] ?? toolsPt,
    glossary: glossaryByLang[lang] ?? glossaryPt,
  };
}
