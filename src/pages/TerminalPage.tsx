import { useState, useRef, useEffect, useMemo } from "react";
import { completeCommand, getProgress } from "@/lib/progress";
import { useTranslation } from "react-i18next";
import { terminalResponsesByLang } from "@/data/terminal";

interface CommandResult {
  command: string;
  output: string;
}

export default function TerminalPage() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || "pt").split("-")[0];
  const commandResponses = useMemo(
    () => terminalResponsesByLang[lang] ?? terminalResponsesByLang.pt,
    [lang],
  );
  const [history, setHistory] = useState<CommandResult[]>([
    { command: "", output: t("terminal.welcome") },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    setHistory((prev) =>
      prev.length === 1 && prev[0].command === ""
        ? [{ command: "", output: t("terminal.welcome") }]
        : prev
    );
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const baseCmd = cmd.split(" ")[0];
    const output = commandResponses[cmd] || commandResponses[baseCmd] ||
      t("terminal.commandNotFound", { cmd: baseCmd });

    completeCommand(baseCmd);
    setHistory((prev) => [...prev, { command: cmd, output }]);
    setCmdHistory((prev) => [cmd, ...prev]);
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(newIdx);
      if (cmdHistory[newIdx]) setInput(cmdHistory[newIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx >= 0 ? cmdHistory[newIdx] : "");
    }
  };

  return (
    <div className="p-6 md:p-10 space-y-4 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">{t("terminal.title")}</h1>
        <p className="text-muted-foreground text-sm">
          {t("terminal.subtitle", { count: getProgress().completedCommands.length })}
        </p>
      </div>

      <div
        className="rounded-lg border border-border bg-background terminal-bg scan-line p-4 min-h-[500px] max-h-[600px] overflow-y-auto font-mono text-sm cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            {entry.command && (
              <div className="flex items-center gap-1">
                <span className="text-primary">hacker@cyberacademy</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-cyber-cyan">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">{entry.command}</span>
              </div>
            )}
            <pre className="text-muted-foreground whitespace-pre-wrap text-xs leading-relaxed">
              {entry.output}
            </pre>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-1">
          <span className="text-primary">hacker@cyberacademy</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-cyber-cyan">~</span>
          <span className="text-muted-foreground">$ </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground caret-primary"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
        <div ref={bottomRef} />
      </div>

      <p className="text-xs text-muted-foreground">
        {t("terminal.tip")}
      </p>
    </div>
  );
}
