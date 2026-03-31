export type TerminalResponses = Record<string, string>;

const commonResponses: TerminalResponses = {
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
  "find / -perm -4000": `/usr/bin/sudo
/usr/bin/passwd
/usr/bin/chsh
/usr/bin/gpasswd
/usr/bin/newgrp
/usr/bin/pkexec`,
  cd: "hacker@cyberacademy:~$",
  "cd /": "hacker@cyberacademy:/$",
};

export const terminalResponsesByLang: Record<string, TerminalResponses> = {
  pt: {
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
    "sudo -l": `Usuário hacker pode executar os seguintes comandos no cyberacademy:
    (ALL) NOPASSWD: /usr/bin/vim
    (ALL) NOPASSWD: /usr/bin/find`,
    chown: "Uso: chown [proprietário:grupo] [arquivo]",
    ...commonResponses,
  },
  en: {
    help: `Available commands:
  ls        - List files and directories
  cd        - Change directory
  pwd       - Show current directory
  cat       - Display file content
  chmod     - Change permissions
  chown     - Change owner
  ps        - List processes
  netstat   - Network connections
  grep      - Search patterns
  find      - Find files
  whoami    - Current user
  id        - User info
  uname     - System info
  ifconfig  - Network configuration
  nmap      - Port scanner (simulated)
  clear     - Clear terminal`,
    "cat targets.txt": `# Recon targets (authorized)
192.168.1.0/24
target.lab.local
10.10.10.1
webapp.test.local`,
    "cat recon.sh": `#!/bin/bash
# Automated recon script
echo "[*] Starting reconnaissance..."
echo "[*] Target: $1"
subfinder -d $1 -silent | tee subs.txt
cat subs.txt | httpx -silent | tee alive.txt
nmap -iL alive.txt -sV -oN scan_results.txt
echo "[+] Recon complete!"`,
    "chmod 755 recon.sh": "Permissions changed: -rwxr-xr-x recon.sh",
    "chmod 644 targets.txt": "Permissions changed: -rw-r--r-- targets.txt",
    grep: "Usage: grep [pattern] [file]",
    "grep root /etc/passwd": "root:x:0:0:root:/root:/bin/bash",
    find: "Usage: find [directory] [options]",
    "sudo -l": `User hacker may run the following commands on cyberacademy:
    (ALL) NOPASSWD: /usr/bin/vim
    (ALL) NOPASSWD: /usr/bin/find`,
    chown: "Usage: chown [owner:group] [file]",
    ...commonResponses,
  },
  fr: {
    help: `Commandes disponibles :
  ls        - Lister fichiers et répertoires
  cd        - Changer de répertoire
  pwd       - Afficher le répertoire courant
  cat       - Afficher le contenu d'un fichier
  chmod     - Modifier les permissions
  chown     - Modifier le propriétaire
  ps        - Lister les processus
  netstat   - Connexions réseau
  grep      - Rechercher des motifs
  find      - Rechercher des fichiers
  whoami    - Utilisateur actuel
  id        - Informations utilisateur
  uname     - Informations système
  ifconfig  - Configuration réseau
  nmap      - Scanner de ports (simulé)
  clear     - Nettoyer le terminal`,
    "cat targets.txt": `# Cibles de reconnaissance (autorisées)
192.168.1.0/24
target.lab.local
10.10.10.1
webapp.test.local`,
    "cat recon.sh": `#!/bin/bash
# Script de reconnaissance automatisé
echo "[*] Démarrage de la reconnaissance..."
echo "[*] Cible : $1"
subfinder -d $1 -silent | tee subs.txt
cat subs.txt | httpx -silent | tee alive.txt
nmap -iL alive.txt -sV -oN scan_results.txt
echo "[+] Reconnaissance terminée !"`,
    "chmod 755 recon.sh": "Permissions modifiées : -rwxr-xr-x recon.sh",
    "chmod 644 targets.txt": "Permissions modifiées : -rw-r--r-- targets.txt",
    grep: "Utilisation : grep [motif] [fichier]",
    "grep root /etc/passwd": "root:x:0:0:root:/root:/bin/bash",
    find: "Utilisation : find [répertoire] [options]",
    "sudo -l": `L'utilisateur hacker peut exécuter les commandes suivantes sur cyberacademy :
    (ALL) NOPASSWD: /usr/bin/vim
    (ALL) NOPASSWD: /usr/bin/find`,
    chown: "Utilisation : chown [propriétaire:groupe] [fichier]",
    ...commonResponses,
  },
};
