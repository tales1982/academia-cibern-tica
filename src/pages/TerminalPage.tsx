import { useState, useRef, useEffect } from "react";
import { completeCommand, getProgress } from "@/lib/progress";

interface CommandResult {
  command: string;
  output: string;
}

const commandResponses: Record<string, string> = {
  help: `Comandos disponíveis:
  ls        - Listar arquivos e diretórios
  cd        - Mudar diretório
  pwd       - Mostrar diretório atual
  cat       - Exibir conteúdo de arquivo
  chmod     - Alterar permissões
  chown     - Alterar proprietário
  ps        - Listar processos
  netstat   - Conexões de rede
  grep      - Buscar padrões
  find      - Buscar arquivos
  whoami    - Usuário atual
  id        - Informações do usuário
  uname     - Informações do sistema
  ifconfig  - Configuração de rede
  nmap      - Scanner de portas (simulado)
  clear     - Limpar terminal`,
  ls: `drwxr-xr-x  2 root root 4096 Mar 15 10:30 .ssh/
-rw-r--r--  1 root root  220 Mar 15 10:30 .bash_profile
-rw-------  1 root root 1024 Mar 15 10:30 .bash_history
drwxr-xr-x  3 root root 4096 Mar 15 10:30 Documents/
drwxr-xr-x  2 root root 4096 Mar 15 10:30 scripts/
-rwxr-xr-x  1 root root  512 Mar 15 10:30 recon.sh
-rw-r--r--  1 root root  256 Mar 15 10:30 targets.txt`,
  pwd: "/home/hacker",
  whoami: "hacker",
  id: "uid=1000(hacker) gid=1000(hacker) groups=1000(hacker),27(sudo)",
  "uname -a": "Linux cyberacademy 5.15.0-kali1 #1 SMP x86_64 GNU/Linux",
  uname: "Linux",
  ifconfig: `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.105  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe8e:1234  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:8e:12:34  txqueuelen 1000  (Ethernet)
        RX packets 12453  bytes 8234521 (7.8 MiB)
        TX packets 8921  bytes 1234567 (1.1 MiB)`,
  ps: `  PID TTY          TIME CMD
 1234 pts/0    00:00:01 bash
 2345 pts/0    00:00:00 python3
 3456 pts/1    00:00:02 nmap
 4567 pts/0    00:00:00 ps`,
  "ps aux": `USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1  16844  3456 ?        Ss   10:30   0:01 /sbin/init
root       234  0.0  0.2  45678  8912 ?        Ss   10:30   0:00 /usr/sbin/sshd
hacker    1234  0.0  0.1  23456  5678 pts/0    Ss   10:31   0:01 bash
hacker    2345  0.1  0.3  34567  12345 pts/0   S+   10:32   0:00 python3 scan.py
root      3456  0.5  0.4  56789  23456 pts/1   S+   10:33   0:02 nmap -sV target`,
  netstat: `Active Internet connections
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN
tcp        0      0 192.168.1.105:4444      0.0.0.0:*               LISTEN
tcp        0      0 192.168.1.105:52341     93.184.216.34:443       ESTABLISHED
udp        0      0 0.0.0.0:53              0.0.0.0:*`,
  "cat /etc/passwd": `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
hacker:x:1000:1000:Hacker,,,:/home/hacker:/bin/bash
mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false`,
  "cat targets.txt": `# Alvos de reconhecimento (autorizado)
192.168.1.0/24
target.lab.local
10.10.10.1
webapp.test.local`,
  "cat recon.sh": `#!/bin/bash
# Script de reconhecimento automatizado
echo "[*] Iniciando reconhecimento..."
echo "[*] Alvo: $1"
subfinder -d $1 -silent | tee subs.txt
cat subs.txt | httpx -silent | tee alive.txt
nmap -iL alive.txt -sV -oN scan_results.txt
echo "[+] Reconhecimento concluído!"`,
  "chmod 755 recon.sh": "Permissões alteradas: -rwxr-xr-x recon.sh",
  "chmod 644 targets.txt": "Permissões alteradas: -rw-r--r-- targets.txt",
  grep: "Uso: grep [padrão] [arquivo]",
  "grep root /etc/passwd": "root:x:0:0:root:/root:/bin/bash",
  find: "Uso: find [diretório] [opções]",
  "find / -perm -4000": `/usr/bin/sudo
/usr/bin/passwd
/usr/bin/chsh
/usr/bin/gpasswd
/usr/bin/newgrp
/usr/bin/pkexec`,
  "nmap 192.168.1.1": `Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1
Host is up (0.0023s latency).
Not shown: 997 closed ports
PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 8.9
80/tcp  open  http     Apache httpd 2.4.54
443/tcp open  https    Apache httpd 2.4.54
3306/tcp open mysql    MySQL 8.0.31

Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds`,
  "nmap -sV target.lab.local": `Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for target.lab.local (10.10.10.5)
Host is up (0.001s latency).
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 3.0.3
22/tcp   open  ssh         OpenSSH 7.6
80/tcp   open  http        nginx 1.18.0
445/tcp  open  smb         Samba 4.7.6
8080/tcp open  http-proxy  Squid 4.10

Service detection performed. Nmap done in 5.67 seconds`,
  "sudo -l": `User hacker may run the following commands on cyberacademy:
    (ALL) NOPASSWD: /usr/bin/vim
    (ALL) NOPASSWD: /usr/bin/find`,
  cd: "hacker@cyberacademy:~$",
  "cd /": "hacker@cyberacademy:/$",
  chown: "Uso: chown [proprietário:grupo] [arquivo]",
};

export default function TerminalPage() {
  const [history, setHistory] = useState<CommandResult[]>([
    { command: "", output: "CyberAcademy Terminal Trainer v1.0\nDigite 'help' para ver os comandos disponíveis.\n" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

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
      `bash: ${baseCmd}: comando não encontrado. Digite 'help' para ajuda.`;

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
        <h1 className="text-2xl font-bold">Terminal Trainer</h1>
        <p className="text-muted-foreground text-sm">
          Pratique comandos Linux em um terminal simulado — {getProgress().completedCommands.length} comandos praticados
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
        Dica: Use ↑↓ para navegar no histórico de comandos. Experimente: ls, cat targets.txt, nmap 192.168.1.1, find / -perm -4000
      </p>
    </div>
  );
}
