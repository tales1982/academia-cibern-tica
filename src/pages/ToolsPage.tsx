import { useState } from "react";
import { cyberTools } from "@/data/tools";
import { Search, ChevronDown, ChevronRight, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = cyberTools.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(filtered.map((t) => t.category))];

  return (
    <div className="p-6 md:p-10 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Biblioteca de Ferramentas</h1>
        <p className="text-muted-foreground text-sm">
          Referência completa das principais ferramentas de cibersegurança
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar ferramentas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-card"
        />
      </div>

      {categories.map((cat) => (
        <div key={cat} className="space-y-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {cat}
          </h2>
          {filtered
            .filter((t) => t.category === cat)
            .map((tool) => {
              const isExpanded = expanded === tool.name;
              return (
                <div key={tool.name} className="rounded-lg border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setExpanded(isExpanded ? null : tool.name)}
                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-secondary/30 transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                    <Terminal className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-mono font-semibold text-sm flex-1">{tool.name}</span>
                    <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border p-4 space-y-4">
                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          O que faz
                        </h4>
                        <p className="text-sm text-foreground/80">{tool.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Quando usar
                        </h4>
                        <p className="text-sm text-foreground/80">{tool.usage}</p>
                      </div>

                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Comandos
                        </h4>
                        <div className="bg-background rounded-md p-3 space-y-1 overflow-x-auto">
                          {tool.commands.map((cmd, i) => (
                            <div key={i} className="font-mono text-xs text-primary whitespace-pre">
                              {cmd}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Cenário Prático
                        </h4>
                        <p className="text-sm text-foreground/80 italic">{tool.scenario}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
