import { LabsByModule } from "./labs.types";

export const labs: LabsByModule = {
  "mod-1": {
    title: "Simulador de Divulgação Responsável",
    intro: "Responda às questões sobre princípios, ética e divulgação responsável.",
    questions: [
      {
        id: "q1",
        prompt: "Qual elemento faz parte da tríade CIA?",
        options: [
          { id: "a", label: "Autenticação" },
          { id: "b", label: "Confidencialidade" },
          { id: "c", label: "Não-repúdio" },
          { id: "d", label: "Auditoria" }
        ],
        correct: "b",
        explanation: "CIA = Confidencialidade, Integridade e Disponibilidade."
      },
      {
        id: "q2",
        prompt: "A integridade garante que:",
        options: [
          { id: "a", label: "Os dados não sejam alterados indevidamente" },
          { id: "b", label: "O serviço esteja sempre online" },
          { id: "c", label: "Somente admins acessem o sistema" },
          { id: "d", label: "Os logs sejam apagados periodicamente" }
        ],
        correct: "a",
        explanation: "Integridade protege contra alterações não autorizadas."
      },
      {
        id: "q3",
        prompt: "Qual é a primeira regra do hacking ético?",
        options: [
          { id: "a", label: "Publicar PoC rapidamente" },
          { id: "b", label: "Obter autorização explícita" },
          { id: "c", label: "Usar proxies anônimos" },
          { id: "d", label: "Explorar para medir impacto real" }
        ],
        correct: "b",
        explanation: "Sem autorização, o teste é ilegal e antiético."
      },
      {
        id: "q4",
        prompt: "Na divulgação responsável, o contato inicial deve ser:",
        options: [
          { id: "a", label: "Público e imediato" },
          { id: "b", label: "Privado, com detalhes suficientes" },
          { id: "c", label: "Apenas um tweet vago" },
          { id: "d", label: "Somente após vender o exploit" }
        ],
        correct: "b",
        explanation: "O relatório deve ser privado e técnico o suficiente."
      },
      {
        id: "q5",
        prompt: "Qual prática é ética ao encontrar dados sensíveis?",
        options: [
          { id: "a", label: "Copiar e armazenar localmente" },
          { id: "b", label: "Divulgar para provar impacto" },
          { id: "c", label: "Minimizar acesso e proteger evidências" },
          { id: "d", label: "Compartilhar com amigos" }
        ],
        correct: "c",
        explanation: "Minimizar exposição e proteger dados é essencial."
      },
      {
        id: "q6",
        prompt: "Qual componente NÃO é uma carreira comum em cibersegurança?",
        options: [
          { id: "a", label: "Blue Team" },
          { id: "b", label: "Red Team" },
          { id: "c", label: "Purple Team" },
          { id: "d", label: "Data Entry" }
        ],
        correct: "d",
        explanation: "Data Entry não é uma função típica de cibersegurança."
      },
      {
        id: "q7",
        prompt: "O não-repúdio significa:",
        options: [
          { id: "a", label: "Acesso sem senha" },
          { id: "b", label: "Impossibilidade de negar ações realizadas" },
          { id: "c", label: "Disponibilidade 24/7" },
          { id: "d", label: "Anonimato do usuário" }
        ],
        correct: "b",
        explanation: "Não-repúdio prova autoria de ações."
      },
      {
        id: "q8",
        prompt: "O que é um trade-off clássico em segurança?",
        options: [
          { id: "a", label: "Mais confidencialidade pode reduzir disponibilidade" },
          { id: "b", label: "Mais logs sempre reduzem segurança" },
          { id: "c", label: "Mais backups aumentam risco" },
          { id: "d", label: "Mais MFA reduz integridade" }
        ],
        correct: "a",
        explanation: "Segurança envolve equilíbrio entre pilares."
      },
      {
        id: "q9",
        prompt: "Em um relatório responsável, o que NÃO pode faltar?",
        options: [
          { id: "a", label: "PoC e impacto" },
          { id: "b", label: "Evidências" },
          { id: "c", label: "Recomendação de correção" },
          { id: "d", label: "Exposição pública imediata" }
        ],
        correct: "d",
        explanation: "Divulgação pública imediata não é prática responsável."
      },
      {
        id: "q10",
        prompt: "Qual é o objetivo principal da divulgação responsável?",
        options: [
          { id: "a", label: "Gerar publicidade" },
          { id: "b", label: "Permitir correção antes da divulgação" },
          { id: "c", label: "Maximizar impacto financeiro" },
          { id: "d", label: "Vender a falha" }
        ],
        correct: "b",
        explanation: "O foco é reduzir risco permitindo a correção."
      }
    ]
  },
  "mod-2": {
    title: "Terminal Trainer Interativo",
    intro: "Valide conhecimentos de Linux, Windows e comandos essenciais.",
    questions: [
      {
        id: "q1",
        prompt: "Qual diretório contém arquivos de configuração no Linux?",
        options: [
          { id: "a", label: "/home" },
          { id: "b", label: "/etc" },
          { id: "c", label: "/tmp" },
          { id: "d", label: "/var" }
        ],
        correct: "b",
        explanation: "/etc guarda configurações do sistema."
      },
      {
        id: "q2",
        prompt: "O comando que mostra o diretório atual é:",
        options: [
          { id: "a", label: "ls" },
          { id: "b", label: "pwd" },
          { id: "c", label: "cd" },
          { id: "d", label: "cat" }
        ],
        correct: "b",
        explanation: "pwd imprime o caminho do diretório atual."
      },
      {
        id: "q3",
        prompt: "Em permissões Linux, 755 significa:",
        options: [
          { id: "a", label: "rw-r--r--" },
          { id: "b", label: "rwxr-xr-x" },
          { id: "c", label: "rwx------" },
          { id: "d", label: "r--r--r--" }
        ],
        correct: "b",
        explanation: "755 = rwx para dono, r-x para grupo e outros."
      },
      {
        id: "q4",
        prompt: "Qual comando lista permissões e owners de arquivos?",
        options: [
          { id: "a", label: "ls -l" },
          { id: "b", label: "whoami" },
          { id: "c", label: "touch" },
          { id: "d", label: "grep" }
        ],
        correct: "a",
        explanation: "ls -l mostra permissões, dono e grupo."
      },
      {
        id: "q5",
        prompt: "SUID é perigoso porque:",
        options: [
          { id: "a", label: "Apaga logs automaticamente" },
          { id: "b", label: "Executa com privilégios do dono" },
          { id: "c", label: "Criptografa arquivos" },
          { id: "d", label: "Desabilita firewall" }
        ],
        correct: "b",
        explanation: "SUID permite execução com privilégios elevados."
      },
      {
        id: "q6",
        prompt: "No Windows, o Registry é:",
        options: [
          { id: "a", label: "Um serviço de email" },
          { id: "b", label: "Um banco de configurações do sistema" },
          { id: "c", label: "Um antivírus" },
          { id: "d", label: "Um shell" }
        ],
        correct: "b",
        explanation: "Registry armazena configurações do Windows."
      },
      {
        id: "q7",
        prompt: "Qual comando exibe processos no Linux?",
        options: [
          { id: "a", label: "ps aux" },
          { id: "b", label: "chmod" },
          { id: "c", label: "mount" },
          { id: "d", label: "tail" }
        ],
        correct: "a",
        explanation: "ps aux lista processos."
      },
      {
        id: "q8",
        prompt: "Qual arquivo costuma registrar autenticação no Linux?",
        options: [
          { id: "a", label: "/var/log/auth.log" },
          { id: "b", label: "/etc/passwd" },
          { id: "c", label: "/home/user" },
          { id: "d", label: "/bin/bash" }
        ],
        correct: "a",
        explanation: "auth.log contém eventos de autenticação."
      },
      {
        id: "q9",
        prompt: "PowerShell é usado principalmente para:",
        options: [
          { id: "a", label: "Gerenciar sistemas Windows" },
          { id: "b", label: "Editar imagens" },
          { id: "c", label: "Navegar em sites" },
          { id: "d", label: "Compilar kernels" }
        ],
        correct: "a",
        explanation: "PowerShell é a shell/automação do Windows."
      },
      {
        id: "q10",
        prompt: "Qual comando mostra arquivos ocultos?",
        options: [
          { id: "a", label: "ls -a" },
          { id: "b", label: "ls -h" },
          { id: "c", label: "ls -t" },
          { id: "d", label: "ls -S" }
        ],
        correct: "a",
        explanation: "-a inclui arquivos ocultos."
      }
    ]
  },
  "mod-3": {
    title: "Scanner de Rede Simulado",
    intro: "Questões sobre TCP/IP, DNS, portas e firewalls.",
    questions: [
      {
        id: "q1",
        prompt: "Qual protocolo é orientado à conexão?",
        options: [
          { id: "a", label: "UDP" },
          { id: "b", label: "TCP" },
          { id: "c", label: "ICMP" },
          { id: "d", label: "ARP" }
        ],
        correct: "b",
        explanation: "TCP usa handshake e garante entrega."
      },
      {
        id: "q2",
        prompt: "DNS serve para:",
        options: [
          { id: "a", label: "Criptografar tráfego" },
          { id: "b", label: "Traduzir nomes em IPs" },
          { id: "c", label: "Bloquear portas" },
          { id: "d", label: "Gerenciar usuários" }
        ],
        correct: "b",
        explanation: "DNS resolve nomes para endereços IP."
      },
      {
        id: "q3",
        prompt: "Porta 443 é usada normalmente para:",
        options: [
          { id: "a", label: "HTTP" },
          { id: "b", label: "HTTPS" },
          { id: "c", label: "SSH" },
          { id: "d", label: "SMTP" }
        ],
        correct: "b",
        explanation: "443 é o padrão do HTTPS."
      },
      {
        id: "q4",
        prompt: "Firewall stateful faz o quê?",
        options: [
          { id: "a", label: "Inspeciona estado da conexão" },
          { id: "b", label: "Só lê cabeçalhos HTTP" },
          { id: "c", label: "Criptografa pacotes" },
          { id: "d", label: "Desativa logs" }
        ],
        correct: "a",
        explanation: "Stateful rastreia o estado das conexões."
      },
      {
        id: "q5",
        prompt: "A superfície de ataque inclui:",
        options: [
          { id: "a", label: "Apenas portas abertas" },
          { id: "b", label: "Serviços, APIs e interfaces expostas" },
          { id: "c", label: "Somente o firewall" },
          { id: "d", label: "Somente usuários internos" }
        ],
        correct: "b",
        explanation: "É todo ponto de exposição ao atacante."
      },
      {
        id: "q6",
        prompt: "Qual registro DNS aponta para um servidor de email?",
        options: [
          { id: "a", label: "A" },
          { id: "b", label: "MX" },
          { id: "c", label: "TXT" },
          { id: "d", label: "CNAME" }
        ],
        correct: "b",
        explanation: "MX define o servidor de email."
      },
      {
        id: "q7",
        prompt: "O handshake TCP padrão tem:",
        options: [
          { id: "a", label: "2 vias" },
          { id: "b", label: "3 vias" },
          { id: "c", label: "4 vias" },
          { id: "d", label: "5 vias" }
        ],
        correct: "b",
        explanation: "SYN, SYN-ACK, ACK."
      },
      {
        id: "q8",
        prompt: "WAF atua na camada:",
        options: [
          { id: "a", label: "Física" },
          { id: "b", label: "Aplicação" },
          { id: "c", label: "Enlace" },
          { id: "d", label: "Transporte" }
        ],
        correct: "b",
        explanation: "WAF inspeciona tráfego HTTP/HTTPS."
      },
      {
        id: "q9",
        prompt: "ICMP é comumente usado para:",
        options: [
          { id: "a", label: "DNS" },
          { id: "b", label: "Ping e diagnóstico" },
          { id: "c", label: "SMTP" },
          { id: "d", label: "TLS" }
        ],
        correct: "b",
        explanation: "ICMP suporta mensagens de controle e ping."
      },
      {
        id: "q10",
        prompt: "Qual prática reduz a superfície de ataque?",
        options: [
          { id: "a", label: "Expor painéis de staging" },
          { id: "b", label: "Desabilitar serviços não usados" },
          { id: "c", label: "Abrir todas as portas" },
          { id: "d", label: "Remover logs" }
        ],
        correct: "b",
        explanation: "Menos serviços expostos = menos risco."
      }
    ]
  },
  "mod-4": {
    title: "Pipeline de Reconhecimento Automatizado",
    intro: "Automação, scripts e pipelines de segurança.",
    questions: [
      {
        id: "q1",
        prompt: "O shebang típico de um script Bash é:",
        options: [
          { id: "a", label: "#!/bin/bash" },
          { id: "b", label: "#!/bin/python" },
          { id: "c", label: "#!/bin/node" },
          { id: "d", label: "#!/usr/bin/sql" }
        ],
        correct: "a",
        explanation: "Shebang indica o interpretador do script."
      },
      {
        id: "q2",
        prompt: "Por que usar set -euo pipefail?",
        options: [
          { id: "a", label: "Para ocultar erros" },
          { id: "b", label: "Para tornar scripts mais previsíveis" },
          { id: "c", label: "Para acelerar downloads" },
          { id: "d", label: "Para ignorar variáveis" }
        ],
        correct: "b",
        explanation: "Essa configuração evita falhas silenciosas."
      },
      {
        id: "q3",
        prompt: "Em Python, requests é usado para:",
        options: [
          { id: "a", label: "Manipular imagens" },
          { id: "b", label: "Fazer requisições HTTP" },
          { id: "c", label: "Gerenciar processos" },
          { id: "d", label: "Criptografar disco" }
        ],
        correct: "b",
        explanation: "requests facilita chamadas HTTP."
      },
      {
        id: "q4",
        prompt: "PowerShell é útil porque:",
        options: [
          { id: "a", label: "Não tem logs" },
          { id: "b", label: "Integra com administração Windows" },
          { id: "c", label: "É exclusivo de Linux" },
          { id: "d", label: "Não suporta scripts" }
        ],
        correct: "b",
        explanation: "PowerShell é nativo e poderoso no Windows."
      },
      {
        id: "q5",
        prompt: "Em um pipeline subfinder → httpx → nmap, o httpx faz:",
        options: [
          { id: "a", label: "Enumera subdomínios" },
          { id: "b", label: "Valida hosts HTTP ativos" },
          { id: "c", label: "Explora vulnerabilidades" },
          { id: "d", label: "Cria relatórios" }
        ],
        correct: "b",
        explanation: "httpx filtra apenas hosts que respondem HTTP."
      },
      {
        id: "q6",
        prompt: "Qual prática melhora reprodutibilidade?",
        options: [
          { id: "a", label: "Não salvar saídas" },
          { id: "b", label: "Salvar outputs intermediários" },
          { id: "c", label: "Executar sem logs" },
          { id: "d", label: "Usar versões aleatórias" }
        ],
        correct: "b",
        explanation: "Salvar outputs ajuda a reproduzir análises."
      },
      {
        id: "q7",
        prompt: "Qual ferramenta é usada para scanner de vulnerabilidades baseado em templates?",
        options: [
          { id: "a", label: "nuclei" },
          { id: "b", label: "top" },
          { id: "c", label: "mkdir" },
          { id: "d", label: "nano" }
        ],
        correct: "a",
        explanation: "nuclei usa templates para detecção."
      },
      {
        id: "q8",
        prompt: "O comando curl é útil para:",
        options: [
          { id: "a", label: "Fazer requisições a endpoints" },
          { id: "b", label: "Criar usuários" },
          { id: "c", label: "Criptografar arquivos" },
          { id: "d", label: "Formatar disco" }
        ],
        correct: "a",
        explanation: "curl testa e consome APIs/URLs."
      },
      {
        id: "q9",
        prompt: "O que significa \"least privilege\" em scripts?",
        options: [
          { id: "a", label: "Executar sempre como root" },
          { id: "b", label: "Usar permissões mínimas necessárias" },
          { id: "c", label: "Executar sem logs" },
          { id: "d", label: "Ignorar validação" }
        ],
        correct: "b",
        explanation: "Menor privilégio reduz impacto de falhas."
      },
      {
        id: "q10",
        prompt: "Qual é uma boa prática em automação?",
        options: [
          { id: "a", label: "Sem tratamento de erros" },
          { id: "b", label: "Validação de parâmetros" },
          { id: "c", label: "Credenciais hardcoded" },
          { id: "d", label: "Logs desabilitados" }
        ],
        correct: "b",
        explanation: "Validar entradas evita falhas e riscos."
      }
    ]
  },
  "mod-5": {
    title: "Cenário de Reconhecimento de Alvo",
    intro: "OSINT, recon passivo/ativo e subdomínios.",
    questions: [
      {
        id: "q1",
        prompt: "Reconhecimento passivo significa:",
        options: [
          { id: "a", label: "Interagir diretamente com o alvo" },
          { id: "b", label: "Usar apenas fontes públicas" },
          { id: "c", label: "Explorar vulnerabilidades" },
          { id: "d", label: "Fazer DoS" }
        ],
        correct: "b",
        explanation: "Recon passivo usa dados públicos."
      },
      {
        id: "q2",
        prompt: "Qual é um exemplo de OSINT?",
        options: [
          { id: "a", label: "Explorar SQLi" },
          { id: "b", label: "Buscar informações no LinkedIn" },
          { id: "c", label: "Rodar exploit" },
          { id: "d", label: "Escalar privilégios" }
        ],
        correct: "b",
        explanation: "Redes sociais são fontes OSINT."
      },
      {
        id: "q3",
        prompt: "Google dork serve para:",
        options: [
          { id: "a", label: "Filtrar resultados avançados" },
          { id: "b", label: "Criptografar tráfego" },
          { id: "c", label: "Escanear portas" },
          { id: "d", label: "Criar malware" }
        ],
        correct: "a",
        explanation: "Dorks são buscas avançadas."
      },
      {
        id: "q4",
        prompt: "Subdomain takeover ocorre quando:",
        options: [
          { id: "a", label: "DNS aponta para serviço abandonado" },
          { id: "b", label: "SSL está vencido" },
          { id: "c", label: "Firewall bloqueia" },
          { id: "d", label: "O domínio expira" }
        ],
        correct: "a",
        explanation: "Serviço removido pode permitir takeover."
      },
      {
        id: "q5",
        prompt: "CT logs ajudam a:",
        options: [
          { id: "a", label: "Descobrir subdomínios" },
          { id: "b", label: "Desativar TLS" },
          { id: "c", label: "Criar certificados falsos" },
          { id: "d", label: "Apagar evidências" }
        ],
        correct: "a",
        explanation: "Logs de certificados revelam subdomínios."
      },
      {
        id: "q6",
        prompt: "Reconhecimento ativo requer:",
        options: [
          { id: "a", label: "Autorização explícita" },
          { id: "b", label: "Apenas navegador" },
          { id: "c", label: "Nenhuma regra" },
          { id: "d", label: "VPN obrigatória" }
        ],
        correct: "a",
        explanation: "Ativo gera tráfego e precisa autorização."
      },
      {
        id: "q7",
        prompt: "Metadados em documentos podem revelar:",
        options: [
          { id: "a", label: "Nada relevante" },
          { id: "b", label: "Usuários e softwares" },
          { id: "c", label: "Senhas criptografadas" },
          { id: "d", label: "Chaves privadas sempre" }
        ],
        correct: "b",
        explanation: "Metadados podem expor usuários e versões."
      },
      {
        id: "q8",
        prompt: "Qual ferramenta é usada para extrair metadados?",
        options: [
          { id: "a", label: "ExifTool" },
          { id: "b", label: "whoami" },
          { id: "c", label: "iptables" },
          { id: "d", label: "ssh" }
        ],
        correct: "a",
        explanation: "ExifTool é clássico para metadados."
      },
      {
        id: "q9",
        prompt: "Em recon, por que validar resultados?",
        options: [
          { id: "a", label: "Para evitar falsos positivos" },
          { id: "b", label: "Para gerar mais ruído" },
          { id: "c", label: "Para ocultar evidências" },
          { id: "d", label: "Para desativar logs" }
        ],
        correct: "a",
        explanation: "Validação reduz ruído e erros."
      },
      {
        id: "q10",
        prompt: "Qual é uma boa prática em OSINT?",
        options: [
          { id: "a", label: "Divulgar dados sensíveis" },
          { id: "b", label: "Respeitar leis e privacidade" },
          { id: "c", label: "Ignorar escopo" },
          { id: "d", label: "Usar só dados vazados" }
        ],
        correct: "b",
        explanation: "OSINT deve seguir lei e ética."
      }
    ]
  },
  "mod-6": {
    title: "Laboratório de Vulnerabilidades Web",
    intro: "XSS, SQLi, CSRF, SSRF e controle de acesso.",
    questions: [
      {
        id: "q1",
        prompt: "XSS refletido acontece quando:",
        options: [
          { id: "a", label: "Payload é armazenado no servidor" },
          { id: "b", label: "Payload volta na resposta imediatamente" },
          { id: "c", label: "Não há payload" },
          { id: "d", label: "Apenas em imagens" }
        ],
        correct: "b",
        explanation: "Reflected XSS é refletido na resposta."
      },
      {
        id: "q2",
        prompt: "Principal prevenção de SQLi:",
        options: [
          { id: "a", label: "Concatenar strings" },
          { id: "b", label: "Prepared statements" },
          { id: "c", label: "Desabilitar logs" },
          { id: "d", label: "Usar GET" }
        ],
        correct: "b",
        explanation: "Prepared statements evitam injeção."
      },
      {
        id: "q3",
        prompt: "CSRF é mitigado principalmente com:",
        options: [
          { id: "a", label: "Tokens anti-CSRF" },
          { id: "b", label: "CORS aberto" },
          { id: "c", label: "HTTP sem cookies" },
          { id: "d", label: "Sem autenticação" }
        ],
        correct: "a",
        explanation: "Tokens previnem requisições forjadas."
      },
      {
        id: "q4",
        prompt: "SSRF é perigoso porque pode:",
        options: [
          { id: "a", label: "Acessar recursos internos" },
          { id: "b", label: "Atualizar o browser" },
          { id: "c", label: "Trocar DNS" },
          { id: "d", label: "Desligar o servidor" }
        ],
        correct: "a",
        explanation: "SSRF pode acessar metadados e serviços internos."
      },
      {
        id: "q5",
        prompt: "IDOR ocorre quando:",
        options: [
          { id: "a", label: "Apenas admins podem logar" },
          { id: "b", label: "IDs são trocados sem validação" },
          { id: "c", label: "Há rate limiting" },
          { id: "d", label: "Existe CAPTCHA" }
        ],
        correct: "b",
        explanation: "Sem autorização, IDs expõem dados."
      },
      {
        id: "q6",
        prompt: "Qual cabeçalho ajuda contra XSS?",
        options: [
          { id: "a", label: "Content-Security-Policy" },
          { id: "b", label: "ETag" },
          { id: "c", label: "Accept" },
          { id: "d", label: "Server" }
        ],
        correct: "a",
        explanation: "CSP reduz execução de scripts não confiáveis."
      },
      {
        id: "q7",
        prompt: "Broken Access Control é:",
        options: [
          { id: "a", label: "Erro de criptografia" },
          { id: "b", label: "Falha em autorização" },
          { id: "c", label: "Falha de backup" },
          { id: "d", label: "Falha de DNS" }
        ],
        correct: "b",
        explanation: "É falta de controle de acesso adequado."
      },
      {
        id: "q8",
        prompt: "SQLi pode resultar em:",
        options: [
          { id: "a", label: "Exfiltração de dados" },
          { id: "b", label: "Apenas logs maiores" },
          { id: "c", label: "Mais performance" },
          { id: "d", label: "Correção automática" }
        ],
        correct: "a",
        explanation: "SQLi pode expor e modificar dados."
      },
      {
        id: "q9",
        prompt: "Rate limiting ajuda a mitigar:",
        options: [
          { id: "a", label: "Brute force" },
          { id: "b", label: "XSS armazenado" },
          { id: "c", label: "IDOR" },
          { id: "d", label: "CSP" }
        ],
        correct: "a",
        explanation: "Limitar taxa reduz brute force."
      },
      {
        id: "q10",
        prompt: "Validação de input deve ocorrer:",
        options: [
          { id: "a", label: "Apenas no frontend" },
          { id: "b", label: "No backend, sempre" },
          { id: "c", label: "Somente em logs" },
          { id: "d", label: "Nunca" }
        ],
        correct: "b",
        explanation: "O backend deve validar entradas."
      }
    ]
  },
  "mod-7": {
    title: "Desafio de Escalação de Privilégios",
    intro: "Reverse shells, priv esc e fundamentos de exploração.",
    questions: [
      {
        id: "q1",
        prompt: "Reverse shell significa que:",
        options: [
          { id: "a", label: "O atacante conecta no alvo" },
          { id: "b", label: "O alvo conecta no atacante" },
          { id: "c", label: "Não há conexão" },
          { id: "d", label: "Só funciona em Windows" }
        ],
        correct: "b",
        explanation: "No reverse shell, o alvo inicia a conexão."
      },
      {
        id: "q2",
        prompt: "Qual prática é recomendada em testes?",
        options: [
          { id: "a", label: "Usar ambientes autorizados" },
          { id: "b", label: "Testar em produção sem aviso" },
          { id: "c", label: "Evitar documentação" },
          { id: "d", label: "Esconder evidências" }
        ],
        correct: "a",
        explanation: "Testes devem ser autorizados e documentados."
      },
      {
        id: "q3",
        prompt: "SUID vulnerável pode levar a:",
        options: [
          { id: "a", label: "Escalação de privilégios" },
          { id: "b", label: "Criptografia automática" },
          { id: "c", label: "Bloqueio do sistema" },
          { id: "d", label: "Nenhum risco" }
        ],
        correct: "a",
        explanation: "SUID mal configurado permite elevar privilégios."
      },
      {
        id: "q4",
        prompt: "Buffer overflow ocorre quando:",
        options: [
          { id: "a", label: "Há pouco espaço em disco" },
          { id: "b", label: "Dados excedem o buffer" },
          { id: "c", label: "A RAM está vazia" },
          { id: "d", label: "Não há conexão" }
        ],
        correct: "b",
        explanation: "Overflow sobrescreve memória adjacente."
      },
      {
        id: "q5",
        prompt: "ASLR e DEP são:",
        options: [
          { id: "a", label: "Proteções de memória" },
          { id: "b", label: "Ferramentas de scanning" },
          { id: "c", label: "Tipos de firewall" },
          { id: "d", label: "Tipos de malware" }
        ],
        correct: "a",
        explanation: "ASLR/DEP dificultam exploração clássica."
      },
      {
        id: "q6",
        prompt: "NOP sled serve para:",
        options: [
          { id: "a", label: "Aumentar chance de atingir shellcode" },
          { id: "b", label: "Desligar proteções" },
          { id: "c", label: "Criptografar tráfego" },
          { id: "d", label: "Apagar logs" }
        ],
        correct: "a",
        explanation: "Sequência NOP facilita atingir o shellcode."
      },
      {
        id: "q7",
        prompt: "Escalação no Windows pode ocorrer via:",
        options: [
          { id: "a", label: "Unquoted service paths" },
          { id: "b", label: "DNSSEC" },
          { id: "c", label: "HTTPS" },
          { id: "d", label: "CSP" }
        ],
        correct: "a",
        explanation: "Caminhos sem aspas são vetor comum."
      },
      {
        id: "q8",
        prompt: "Frameworks C2 devem ser usados:",
        options: [
          { id: "a", label: "Sem autorização" },
          { id: "b", label: "Apenas em ambientes autorizados" },
          { id: "c", label: "Para qualquer rede" },
          { id: "d", label: "Sem documentação" }
        ],
        correct: "b",
        explanation: "Uso exige autorização e controle."
      },
      {
        id: "q9",
        prompt: "Enumeração é importante porque:",
        options: [
          { id: "a", label: "Evita backups" },
          { id: "b", label: "Revela vetores de privilégio" },
          { id: "c", label: "Remove logs" },
          { id: "d", label: "Desativa firewall" }
        ],
        correct: "b",
        explanation: "Enumeração descobre configurações frágeis."
      },
      {
        id: "q10",
        prompt: "Em testes controlados, o objetivo principal é:",
        options: [
          { id: "a", label: "Impactar o ambiente" },
          { id: "b", label: "Validar riscos e recomendar correções" },
          { id: "c", label: "Ocultar evidências" },
          { id: "d", label: "Evitar relatórios" }
        ],
        correct: "b",
        explanation: "Testes servem para medir risco e corrigir."
      }
    ]
  },
  "mod-8": {
    title: "Analisador de Misconfigurações Cloud",
    intro: "Mobile, cloud, API e containers.",
    questions: [
      {
        id: "q1",
        prompt: "Uma falha comum em apps mobile é:",
        options: [
          { id: "a", label: "Credenciais em texto claro" },
          { id: "b", label: "CSP" },
          { id: "c", label: "MFA forte" },
          { id: "d", label: "TLS correto" }
        ],
        correct: "a",
        explanation: "Credenciais hardcoded são risco frequente."
      },
      {
        id: "q2",
        prompt: "S3 bucket público é exemplo de:",
        options: [
          { id: "a", label: "Configuração segura" },
          { id: "b", label: "Misconfiguração cloud" },
          { id: "c", label: "Criptografia forte" },
          { id: "d", label: "Zero Trust" }
        ],
        correct: "b",
        explanation: "Buckets públicos expõem dados."
      },
      {
        id: "q3",
        prompt: "API sem rate limiting pode permitir:",
        options: [
          { id: "a", label: "Brute force e abuso" },
          { id: "b", label: "Menos logs" },
          { id: "c", label: "Mais integridade" },
          { id: "d", label: "Zero Trust" }
        ],
        correct: "a",
        explanation: "Rate limiting evita abuso."
      },
      {
        id: "q4",
        prompt: "Menor privilégio em IAM significa:",
        options: [
          { id: "a", label: "Permissões mínimas necessárias" },
          { id: "b", label: "Acesso total" },
          { id: "c", label: "Sem MFA" },
          { id: "d", label: "Sem auditoria" }
        ],
        correct: "a",
        explanation: "Menor privilégio reduz o impacto de abuso."
      },
      {
        id: "q5",
        prompt: "Container privilegiado é arriscado porque:",
        options: [
          { id: "a", label: "Tem acesso elevado ao host" },
          { id: "b", label: "Não tem rede" },
          { id: "c", label: "Bloqueia logs" },
          { id: "d", label: "Criptografa disco" }
        ],
        correct: "a",
        explanation: "Privileged pode escapar para o host."
      },
      {
        id: "q6",
        prompt: "RBAC mal configurado no Kubernetes pode:",
        options: [
          { id: "a", label: "Conceder acesso excessivo" },
          { id: "b", label: "Melhorar segurança" },
          { id: "c", label: "Desligar pods" },
          { id: "d", label: "Atualizar imagens" }
        ],
        correct: "a",
        explanation: "RBAC permissivo aumenta risco."
      },
      {
        id: "q7",
        prompt: "Segurança de API exige:",
        options: [
          { id: "a", label: "Autenticação e autorização" },
          { id: "b", label: "Apenas CORS aberto" },
          { id: "c", label: "Sem logs" },
          { id: "d", label: "Sem validação" }
        ],
        correct: "a",
        explanation: "Sem auth e autorização, a API fica exposta."
      },
      {
        id: "q8",
        prompt: "Uma boa prática em cloud é:",
        options: [
          { id: "a", label: "Infra como código + revisão" },
          { id: "b", label: "Permissões *" },
          { id: "c", label: "Logs desativados" },
          { id: "d", label: "Segredos em variáveis abertas" }
        ],
        correct: "a",
        explanation: "IaC reduz erros e permite revisão."
      },
      {
        id: "q9",
        prompt: "SSL pinning protege contra:",
        options: [
          { id: "a", label: "Interceptação MITM" },
          { id: "b", label: "SQLi" },
          { id: "c", label: "XSS" },
          { id: "d", label: "CSRF" }
        ],
        correct: "a",
        explanation: "Pinning reduz interceptação de TLS."
      },
      {
        id: "q10",
        prompt: "Exposição de dashboard Kubernetes é:",
        options: [
          { id: "a", label: "Baixo risco" },
          { id: "b", label: "Alto risco se sem autenticação" },
          { id: "c", label: "Irrelevante" },
          { id: "d", label: "Sempre seguro" }
        ],
        correct: "b",
        explanation: "Dashboard exposto sem auth é crítico."
      }
    ]
  },
  "mod-9": {
    title: "Gerador de Relatório Pentest",
    intro: "Relatórios, CVSS e ética profissional.",
    questions: [
      {
        id: "q1",
        prompt: "Qual seção é voltada a gestores não técnicos?",
        options: [
          { id: "a", label: "Sumário executivo" },
          { id: "b", label: "Payloads" },
          { id: "c", label: "Logs brutos" },
          { id: "d", label: "Código fonte" }
        ],
        correct: "a",
        explanation: "Sumário executivo é para decisores."
      },
      {
        id: "q2",
        prompt: "CVSS mede:",
        options: [
          { id: "a", label: "Severidade técnica" },
          { id: "b", label: "Custo financeiro" },
          { id: "c", label: "Tempo de deploy" },
          { id: "d", label: "Tempo de férias" }
        ],
        correct: "a",
        explanation: "CVSS classifica severidade de vulnerabilidades."
      },
      {
        id: "q3",
        prompt: "Risco é definido como:",
        options: [
          { id: "a", label: "Probabilidade × Impacto" },
          { id: "b", label: "Impacto ÷ Tempo" },
          { id: "c", label: "Custo × Velocidade" },
          { id: "d", label: "Exposição + Logs" }
        ],
        correct: "a",
        explanation: "Risco combina probabilidade e impacto."
      },
      {
        id: "q4",
        prompt: "Uma boa evidência em relatório é:",
        options: [
          { id: "a", label: "Screenshot e passos reprodutíveis" },
          { id: "b", label: "Opinião sem prova" },
          { id: "c", label: "Somente alerta verbal" },
          { id: "d", label: "Rumores" }
        ],
        correct: "a",
        explanation: "Evidência precisa ser verificável."
      },
      {
        id: "q5",
        prompt: "Divulgação responsável recomenda:",
        options: [
          { id: "a", label: "Divulgar antes do patch" },
          { id: "b", label: "Dar prazo para correção" },
          { id: "c", label: "Vender a falha" },
          { id: "d", label: "Ignorar o fornecedor" }
        ],
        correct: "b",
        explanation: "O prazo ajuda a mitigar risco antes de divulgar."
      },
      {
        id: "q6",
        prompt: "Qual prática é antiética?",
        options: [
          { id: "a", label: "Exceder escopo sem autorização" },
          { id: "b", label: "Documentar ações" },
          { id: "c", label: "Minimizar impacto" },
          { id: "d", label: "Proteger dados" }
        ],
        correct: "a",
        explanation: "Ultrapassar escopo viola ética e contrato."
      },
      {
        id: "q7",
        prompt: "O objetivo de recomendações é:",
        options: [
          { id: "a", label: "Explicar como corrigir" },
          { id: "b", label: "Expor o cliente" },
          { id: "c", label: "Aumentar impacto" },
          { id: "d", label: "Evitar correções" }
        ],
        correct: "a",
        explanation: "Recomendações orientam a mitigação."
      },
      {
        id: "q8",
        prompt: "Classificação de risco deve considerar:",
        options: [
          { id: "a", label: "Contexto do negócio" },
          { id: "b", label: "Apenas CVSS" },
          { id: "c", label: "Somente opinião" },
          { id: "d", label: "Número de páginas" }
        ],
        correct: "a",
        explanation: "Contexto define prioridade real."
      },
      {
        id: "q9",
        prompt: "Um relatório bem feito deve ser:",
        options: [
          { id: "a", label: "Claro e acionável" },
          { id: "b", label: "Confuso e técnico demais" },
          { id: "c", label: "Sem metodologia" },
          { id: "d", label: "Sem conclusões" }
        ],
        correct: "a",
        explanation: "Clareza e ação são essenciais."
      },
      {
        id: "q10",
        prompt: "Qual seção descreve o que foi testado?",
        options: [
          { id: "a", label: "Escopo e metodologia" },
          { id: "b", label: "Glossário" },
          { id: "c", label: "Banner" },
          { id: "d", label: "Apêndice aleatório" }
        ],
        correct: "a",
        explanation: "Escopo explica limites e abordagem."
      }
    ]
  },
  "mod-10": {
    title: "Investigação de Alerta SIEM",
    intro: "SOC, SIEM e triagem de alertas.",
    questions: [
      {
        id: "q1",
        prompt: "Tier 1 no SOC é responsável por:",
        options: [
          { id: "a", label: "Triage inicial" },
          { id: "b", label: "Threat hunting" },
          { id: "c", label: "Desenvolver exploits" },
          { id: "d", label: "Auditoria financeira" }
        ],
        correct: "a",
        explanation: "Tier 1 faz triagem e análise inicial."
      },
      {
        id: "q2",
        prompt: "SIEM serve para:",
        options: [
          { id: "a", label: "Centralizar e correlacionar logs" },
          { id: "b", label: "Compilar kernels" },
          { id: "c", label: "Editar imagens" },
          { id: "d", label: "Backup de arquivos" }
        ],
        correct: "a",
        explanation: "SIEM coleta, normaliza e correlaciona eventos."
      },
      {
        id: "q3",
        prompt: "MTTD mede:",
        options: [
          { id: "a", label: "Tempo para detectar" },
          { id: "b", label: "Tempo para treinar" },
          { id: "c", label: "Tempo de deploy" },
          { id: "d", label: "Tempo de backup" }
        ],
        correct: "a",
        explanation: "MTTD = Mean Time to Detect."
      },
      {
        id: "q4",
        prompt: "IOC significa:",
        options: [
          { id: "a", label: "Indicator of Compromise" },
          { id: "b", label: "Index of Config" },
          { id: "c", label: "Input of Code" },
          { id: "d", label: "Output of Cache" }
        ],
        correct: "a",
        explanation: "IOC indica compromisso."
      },
      {
        id: "q5",
        prompt: "Baseline é útil porque:",
        options: [
          { id: "a", label: "Define comportamento normal" },
          { id: "b", label: "Desativa alertas" },
          { id: "c", label: "Remove logs" },
          { id: "d", label: "Ignora anomalias" }
        ],
        correct: "a",
        explanation: "Baselines ajudam a detectar anomalias."
      },
      {
        id: "q6",
        prompt: "SOAR ajuda a:",
        options: [
          { id: "a", label: "Automatizar respostas" },
          { id: "b", label: "Apagar evidências" },
          { id: "c", label: "Desligar SIEM" },
          { id: "d", label: "Criar malware" }
        ],
        correct: "a",
        explanation: "SOAR automatiza triagem e respostas."
      },
      {
        id: "q7",
        prompt: "Threat Intelligence é útil para:",
        options: [
          { id: "a", label: "Contextualizar alertas" },
          { id: "b", label: "Evitar logs" },
          { id: "c", label: "Ignorar TTPs" },
          { id: "d", label: "Desativar EDR" }
        ],
        correct: "a",
        explanation: "Inteligência ajuda a priorizar e contextualizar."
      },
      {
        id: "q8",
        prompt: "MITRE ATT&CK é:",
        options: [
          { id: "a", label: "Base de táticas e técnicas" },
          { id: "b", label: "Um antivírus" },
          { id: "c", label: "Um firewall" },
          { id: "d", label: "Um SIEM" }
        ],
        correct: "a",
        explanation: "ATT&CK cataloga táticas e técnicas adversárias."
      },
      {
        id: "q9",
        prompt: "Triage eficaz deve:",
        options: [
          { id: "a", label: "Coletar contexto e evidências" },
          { id: "b", label: "Fechar alertas sem análise" },
          { id: "c", label: "Ignorar logs" },
          { id: "d", label: "Evitar documentação" }
        ],
        correct: "a",
        explanation: "Contexto e evidência são essenciais."
      },
      {
        id: "q10",
        prompt: "Qual é um resultado de boa correlação?",
        options: [
          { id: "a", label: "Menos falsos positivos" },
          { id: "b", label: "Mais ruído" },
          { id: "c", label: "Sem alertas" },
          { id: "d", label: "Sem logs" }
        ],
        correct: "a",
        explanation: "Boa correlação reduz ruído e aumenta precisão."
      }
    ]
  },
  "mod-11": {
    title: "Laboratório de Resposta a Incidentes",
    intro: "Ciclo de vida, contenção e recuperação.",
    questions: [
      {
        id: "q1",
        prompt: "A primeira fase do ciclo de IR segundo NIST é:",
        options: [
          { id: "a", label: "Preparação" },
          { id: "b", label: "Recuperação" },
          { id: "c", label: "Erradicação" },
          { id: "d", label: "Pós-incidente" }
        ],
        correct: "a",
        explanation: "Preparação vem antes de detecção."
      },
      {
        id: "q2",
        prompt: "Contenção de curto prazo visa:",
        options: [
          { id: "a", label: "Isolar rapidamente o impacto" },
          { id: "b", label: "Reformular toda a rede" },
          { id: "c", label: "Atualizar políticas anuais" },
          { id: "d", label: "Desligar todos os logs" }
        ],
        correct: "a",
        explanation: "Contenção imediata limita danos."
      },
      {
        id: "q3",
        prompt: "Preservar evidências significa:",
        options: [
          { id: "a", label: "Alterar dados para testes" },
          { id: "b", label: "Manter integridade e cadeia de custódia" },
          { id: "c", label: "Reiniciar máquinas" },
          { id: "d", label: "Excluir logs" }
        ],
        correct: "b",
        explanation: "Integridade e cadeia de custódia são cruciais."
      },
      {
        id: "q4",
        prompt: "Erradicação é:",
        options: [
          { id: "a", label: "Remover a causa raiz" },
          { id: "b", label: "Apenas documentar" },
          { id: "c", label: "Isolar rede" },
          { id: "d", label: "Negociar com atacante" }
        ],
        correct: "a",
        explanation: "Erradicação elimina o vetor e persistência."
      },
      {
        id: "q5",
        prompt: "Recuperação envolve:",
        options: [
          { id: "a", label: "Restaurar serviços de forma segura" },
          { id: "b", label: "Ignorar backups" },
          { id: "c", label: "Desligar monitoramento" },
          { id: "d", label: "Apagar evidências" }
        ],
        correct: "a",
        explanation: "Recuperar serviços com validação e monitoramento."
      },
      {
        id: "q6",
        prompt: "Pós-incidente serve para:",
        options: [
          { id: "a", label: "Melhorar processos e controles" },
          { id: "b", label: "Encerrar o assunto" },
          { id: "c", label: "Ocultar falhas" },
          { id: "d", label: "Cortar logs" }
        ],
        correct: "a",
        explanation: "Lições aprendidas fortalecem a postura."
      },
      {
        id: "q7",
        prompt: "Tabletop exercise é:",
        options: [
          { id: "a", label: "Simulação de incidente" },
          { id: "b", label: "Teste de hardware" },
          { id: "c", label: "Atualização de SO" },
          { id: "d", label: "Criação de malware" }
        ],
        correct: "a",
        explanation: "Tabletop simula resposta em ambiente controlado."
      },
      {
        id: "q8",
        prompt: "Cadeia de custódia registra:",
        options: [
          { id: "a", label: "Quem teve posse da evidência" },
          { id: "b", label: "Somente logs do SIEM" },
          { id: "c", label: "Senha do admin" },
          { id: "d", label: "Roteiro de treino" }
        ],
        correct: "a",
        explanation: "Registra posse e integridade da evidência."
      },
      {
        id: "q9",
        prompt: "Qual ação é inadequada em incidente ativo?",
        options: [
          { id: "a", label: "Desligar máquina sem preservar evidências" },
          { id: "b", label: "Isolar o host" },
          { id: "c", label: "Registrar ações" },
          { id: "d", label: "Comunicar equipe" }
        ],
        correct: "a",
        explanation: "Desligar pode destruir evidências."
      },
      {
        id: "q10",
        prompt: "Qual é um objetivo de contenção longa?",
        options: [
          { id: "a", label: "Aplicar patches e reforçar controles" },
          { id: "b", label: "Desativar monitoramento" },
          { id: "c", label: "Ignorar causa raiz" },
          { id: "d", label: "Expor indicadores" }
        ],
        correct: "a",
        explanation: "Contenção longa corrige e fortalece."
      }
    ]
  },
  "mod-12": {
    title: "Detecção de Ameaças em Endpoints",
    intro: "EDR, telemetria e detecção comportamental.",
    questions: [
      {
        id: "q1",
        prompt: "EDR se diferencia do antivírus porque:",
        options: [
          { id: "a", label: "Monitora comportamento continuamente" },
          { id: "b", label: "Não gera alertas" },
          { id: "c", label: "Só usa assinatura" },
          { id: "d", label: "Não tem resposta" }
        ],
        correct: "a",
        explanation: "EDR fornece telemetria e resposta."
      },
      {
        id: "q2",
        prompt: "Evento típico de telemetria é:",
        options: [
          { id: "a", label: "Criação de processo" },
          { id: "b", label: "Mudança de cor do desktop" },
          { id: "c", label: "Atualização de ícones" },
          { id: "d", label: "Download de wallpapers" }
        ],
        correct: "a",
        explanation: "Processos são eventos básicos de telemetria."
      },
      {
        id: "q3",
        prompt: "Comportamento suspeito clássico:",
        options: [
          { id: "a", label: "Word.exe iniciando PowerShell" },
          { id: "b", label: "Chrome abrindo PDFs" },
          { id: "c", label: "Explorer abrindo pastas" },
          { id: "d", label: "Notepad abrindo textos" }
        ],
        correct: "a",
        explanation: "Encadeamento incomum pode indicar abuso."
      },
      {
        id: "q4",
        prompt: "MITRE ATT&CK ajuda a:",
        options: [
          { id: "a", label: "Mapear técnicas adversárias" },
          { id: "b", label: "Criar backups" },
          { id: "c", label: "Desligar EDR" },
          { id: "d", label: "Bloquear internet" }
        ],
        correct: "a",
        explanation: "ATT&CK organiza táticas e técnicas."
      },
      {
        id: "q5",
        prompt: "Hardening no Windows inclui:",
        options: [
          { id: "a", label: "Desabilitar macros" },
          { id: "b", label: "Desligar firewall" },
          { id: "c", label: "Permitir tudo" },
          { id: "d", label: "Remover MFA" }
        ],
        correct: "a",
        explanation: "Macros são vetores comuns."
      },
      {
        id: "q6",
        prompt: "Um exemplo de LOLBin é:",
        options: [
          { id: "a", label: "rundll32" },
          { id: "b", label: "paint.exe" },
          { id: "c", label: "notepad" },
          { id: "d", label: "calc" }
        ],
        correct: "a",
        explanation: "rundll32 é frequentemente abusado."
      },
      {
        id: "q7",
        prompt: "Threat hunting é:",
        options: [
          { id: "a", label: "Busca proativa por ameaças" },
          { id: "b", label: "Reação a alertas" },
          { id: "c", label: "Backup automático" },
          { id: "d", label: "Atualização de drivers" }
        ],
        correct: "a",
        explanation: "Hunting busca ameaças que passaram despercebidas."
      },
      {
        id: "q8",
        prompt: "Telemetria em excesso pode causar:",
        options: [
          { id: "a", label: "Custo e ruído" },
          { id: "b", label: "Mais sigilo" },
          { id: "c", label: "Menos alertas" },
          { id: "d", label: "Zero logs" }
        ],
        correct: "a",
        explanation: "Coleta excessiva aumenta custo e ruído."
      },
      {
        id: "q9",
        prompt: "Uma regra boa combina:",
        options: [
          { id: "a", label: "Processo + rede + usuário" },
          { id: "b", label: "Somente nome do arquivo" },
          { id: "c", label: "Apenas horário" },
          { id: "d", label: "Apenas IP" }
        ],
        correct: "a",
        explanation: "Sinais múltiplos reduzem falsos positivos."
      },
      {
        id: "q10",
        prompt: "Objetivo do EDR é:",
        options: [
          { id: "a", label: "Detectar e responder a ameaças" },
          { id: "b", label: "Substituir backups" },
          { id: "c", label: "Remover SIEM" },
          { id: "d", label: "Bloquear a internet" }
        ],
        correct: "a",
        explanation: "EDR foca em detecção e resposta."
      }
    ]
  },
  "mod-13": {
    title: "Detecção de Escalação de Privilégios",
    intro: "IAM, MFA e Zero Trust.",
    questions: [
      {
        id: "q1",
        prompt: "IAM envolve:",
        options: [
          { id: "a", label: "Identificação, autenticação e autorização" },
          { id: "b", label: "Apenas criptografia" },
          { id: "c", label: "Apenas firewall" },
          { id: "d", label: "Apenas backup" }
        ],
        correct: "a",
        explanation: "IAM controla quem é, como prova e o que pode."
      },
      {
        id: "q2",
        prompt: "RBAC significa:",
        options: [
          { id: "a", label: "Acesso baseado em função" },
          { id: "b", label: "Acesso baseado em endereço IP" },
          { id: "c", label: "Acesso sem regra" },
          { id: "d", label: "Acesso aleatório" }
        ],
        correct: "a",
        explanation: "RBAC usa cargos/funções."
      },
      {
        id: "q3",
        prompt: "Fator \"algo que tem\" em MFA é:",
        options: [
          { id: "a", label: "Token ou smartphone" },
          { id: "b", label: "Senha" },
          { id: "c", label: "Biometria" },
          { id: "d", label: "Nome" }
        ],
        correct: "a",
        explanation: "Algo que tem = token/dispositivo."
      },
      {
        id: "q4",
        prompt: "Método mais resistente a phishing:",
        options: [
          { id: "a", label: "FIDO2/WebAuthn" },
          { id: "b", label: "SMS" },
          { id: "c", label: "Senha simples" },
          { id: "d", label: "PIN repetido" }
        ],
        correct: "a",
        explanation: "FIDO2 é resistente a phishing."
      },
      {
        id: "q5",
        prompt: "Zero Trust significa:",
        options: [
          { id: "a", label: "Nunca confie, sempre verifique" },
          { id: "b", label: "Confiar na rede interna" },
          { id: "c", label: "Sem MFA" },
          { id: "d", label: "Sem logs" }
        ],
        correct: "a",
        explanation: "Zero Trust valida cada acesso."
      },
      {
        id: "q6",
        prompt: "Policy mínima em cloud pode ser gerada a partir de:",
        options: [
          { id: "a", label: "Logs de uso (CloudTrail)" },
          { id: "b", label: "Palpite" },
          { id: "c", label: "Permissão *" },
          { id: "d", label: "Sem revisão" }
        ],
        correct: "a",
        explanation: "Logs ajudam a definir ações realmente usadas."
      },
      {
        id: "q7",
        prompt: "Indicador de abuso de identidade:",
        options: [
          { id: "a", label: "Login de local impossível" },
          { id: "b", label: "Login em horário normal" },
          { id: "c", label: "Uso de MFA" },
          { id: "d", label: "Acesso rotineiro" }
        ],
        correct: "a",
        explanation: "Local impossível indica possível comprometimento."
      },
      {
        id: "q8",
        prompt: "ABAC usa:",
        options: [
          { id: "a", label: "Atributos contextuais" },
          { id: "b", label: "Somente senha" },
          { id: "c", label: "Apenas cargo" },
          { id: "d", label: "Sem contexto" }
        ],
        correct: "a",
        explanation: "ABAC considera atributos e contexto."
      },
      {
        id: "q9",
        prompt: "Menor privilégio reduz:",
        options: [
          { id: "a", label: "Impacto de comprometimento" },
          { id: "b", label: "Visibilidade" },
          { id: "c", label: "MFA" },
          { id: "d", label: "Logs" }
        ],
        correct: "a",
        explanation: "Menos acesso = menos dano potencial."
      },
      {
        id: "q10",
        prompt: "Mudanças de política devem ter:",
        options: [
          { id: "a", label: "Revisão e auditoria" },
          { id: "b", label: "Sem registro" },
          { id: "c", label: "Permissão total" },
          { id: "d", label: "Sem aprovação" }
        ],
        correct: "a",
        explanation: "Mudanças críticas precisam revisão."
      }
    ]
  },
  "mod-14": {
    title: "Simulador de Matriz de Risco",
    intro: "Governança, ISO, NIST e continuidade.",
    questions: [
      {
        id: "q1",
        prompt: "ISO 27001 é:",
        options: [
          { id: "a", label: "Padrão de gestão de segurança" },
          { id: "b", label: "Antivírus" },
          { id: "c", label: "Firewall" },
          { id: "d", label: "Linguagem" }
        ],
        correct: "a",
        explanation: "ISO 27001 define ISMS."
      },
      {
        id: "q2",
        prompt: "O Anexo A da ISO 27001 contém:",
        options: [
          { id: "a", label: "Controles de segurança" },
          { id: "b", label: "Logs de sistema" },
          { id: "c", label: "Código fonte" },
          { id: "d", label: "Dados pessoais" }
        ],
        correct: "a",
        explanation: "Anexo A lista controles."
      },
      {
        id: "q3",
        prompt: "NIST CSF possui funções como:",
        options: [
          { id: "a", label: "Identify, Protect, Detect, Respond, Recover" },
          { id: "b", label: "Compile, Test, Deploy" },
          { id: "c", label: "Fetch, Merge, Push" },
          { id: "d", label: "Load, Save, Exit" }
        ],
        correct: "a",
        explanation: "Essas são as funções centrais do CSF."
      },
      {
        id: "q4",
        prompt: "RTO é:",
        options: [
          { id: "a", label: "Tempo máximo para recuperar" },
          { id: "b", label: "Tempo para atualizar" },
          { id: "c", label: "Tempo para treinar" },
          { id: "d", label: "Tempo de login" }
        ],
        correct: "a",
        explanation: "RTO define tempo de recuperação aceitável."
      },
      {
        id: "q5",
        prompt: "RPO é:",
        options: [
          { id: "a", label: "Perda de dados aceitável" },
          { id: "b", label: "Tempo de patch" },
          { id: "c", label: "Tempo de resposta" },
          { id: "d", label: "Tempo de auditoria" }
        ],
        correct: "a",
        explanation: "RPO define quanto dado pode ser perdido."
      },
      {
        id: "q6",
        prompt: "BIA serve para:",
        options: [
          { id: "a", label: "Analisar impacto no negócio" },
          { id: "b", label: "Criar exploits" },
          { id: "c", label: "Desligar backups" },
          { id: "d", label: "Apagar logs" }
        ],
        correct: "a",
        explanation: "BIA mede impacto de interrupções."
      },
      {
        id: "q7",
        prompt: "Hot site é:",
        options: [
          { id: "a", label: "Ambiente pronto para uso imediato" },
          { id: "b", label: "Apenas sala vazia" },
          { id: "c", label: "Ambiente sem rede" },
          { id: "d", label: "Backups offline" }
        ],
        correct: "a",
        explanation: "Hot site tem infraestrutura pronta."
      },
      {
        id: "q8",
        prompt: "Regra 3-2-1 de backup é:",
        options: [
          { id: "a", label: "3 cópias, 2 mídias, 1 offsite" },
          { id: "b", label: "3 usuários, 2 senhas, 1 login" },
          { id: "c", label: "3 firewalls, 2 antivírus, 1 proxy" },
          { id: "d", label: "3 dias, 2 semanas, 1 mês" }
        ],
        correct: "a",
        explanation: "3-2-1 reduz risco de perda total."
      },
      {
        id: "q9",
        prompt: "Tratamento de risco pode ser:",
        options: [
          { id: "a", label: "Mitigar, transferir, aceitar ou evitar" },
          { id: "b", label: "Ignorar sempre" },
          { id: "c", label: "Publicar" },
          { id: "d", label: "Ocultar" }
        ],
        correct: "a",
        explanation: "São as quatro estratégias comuns."
      },
      {
        id: "q10",
        prompt: "Testes de continuidade devem ser:",
        options: [
          { id: "a", label: "Regulares e documentados" },
          { id: "b", label: "Evitar para reduzir custo" },
          { id: "c", label: "Apenas uma vez" },
          { id: "d", label: "Sem métricas" }
        ],
        correct: "a",
        explanation: "Testes garantem efetividade do plano."
      }
    ]
  }
};
