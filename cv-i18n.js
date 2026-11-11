/* Lightweight PT/EN CV translations. Single source HTML, same embedded photo and print layout. */
'use strict';
const cvEnglish = {
  "← Voltar ao portefólio": "← Back to portfolio",
  "Imprimir / Guardar como PDF ↓": "Print / Save as PDF ↓",
  "Mestrando em Engenharia Informática": "MSc Student in Computer Engineering",
  "Desenvolvimento de Software · Cloud · Cibersegurança": "Software Development · Cloud · Cybersecurity",
  "Penafiel, Porto, Portugal": "Penafiel, Porto, Portugal",
  "Perfil profissional": "Professional profile",
  "Mestrando em Engenharia Informática e licenciado em Segurança Informática em Redes de Computadores, com experiência de estágio em infraestrutura cloud, desenvolvimento web e bases de dados. Trabalho prático com OVHcloud, OpenStack Client, Terraform, APIs REST e SQL, complementado por projetos próprios de aplicações web. Interesse em oportunidades júnior de software, cloud e cibersegurança.": "MSc student in Computer Engineering with a BSc in Computer Network Security and internship experience in cloud infrastructure, web development and databases. Hands-on work with OVHcloud, OpenStack Client, Terraform, REST APIs and SQL, complemented by independently developed web applications. Interested in junior opportunities in software development, cloud and cybersecurity.",
  "Experiência técnica": "Technical experience",
  "Estagiário — Cloud e Segurança": "Cloud & Security Intern",
  "Visionware · remoto · mar–mai 2025": "Visionware · Remote · Mar–May 2025",
  "Exploração da OVHcloud Public Cloud, com máquinas virtuais, redes, endereçamento IP e gestão de acessos.": "Explored OVHcloud Public Cloud, including virtual machines, networks, IP addressing and access management.",
  "Criação e validação de instâncias Ubuntu com OpenStack Client, SSH e regras de firewall.": "Created and validated Ubuntu instances using OpenStack Client, SSH and firewall rules.",
  "Desenvolvimento e documentação de uma abordagem de Infrastructure as Code com Terraform.": "Developed and documented an Infrastructure as Code approach using Terraform.",
  "Estagiário — Desenvolvimento Web": "Web Development Intern",
  "Virtualp · Penafiel · out 2020–mai 2021": "Virtualp · Penafiel · Oct 2020–May 2021",
  "Desenvolvimento web com HTML, CSS, JavaScript e PHP e criação/documentação de APIs REST com Swagger.": "Worked on web development using HTML, CSS, JavaScript and PHP, and on REST API development and documentation with Swagger.",
  "Estagiário — Bases de Dados": "Database Intern",
  "Virtualp · Penafiel · out 2019–jun 2020": "Virtualp · Penafiel · Oct 2019–Jun 2020",
  "Consultas SQL, tabelas, procedimentos armazenados, funções, integração de sistemas e relatórios.": "SQL queries, tables, stored procedures, functions, systems integration and reporting.",
  "Prática e desenvolvimento independente": "Independent development",
  "Desenvolvimento de aplicações e websites responsivos, com implementação de interfaces, funcionalidades web e integração de dados.": "Developing responsive applications and websites, implementing interfaces, web features and data integrations.",
  "Trabalho técnico e código disponível em": "Technical work and code available on",
  "Formação": "Education",
  "Mestrado em Engenharia Informática": "MSc in Computer Engineering",
  "ESTG · Politécnico do Porto · em curso": "ESTG · Polytechnic Institute of Porto · In progress",
  "Licenciatura em Segurança Informática em Redes de Computadores": "BSc in Computer Network Security",
  "ESTG · Politécnico do Porto · concluída em 2026": "ESTG · Polytechnic Institute of Porto · Completed in 2026",
  "Gestão e Programação de Sistemas de Informação": "Information Systems Management and Programming",
  "Escola Secundária de Penafiel · 2018–2021": "Penafiel Secondary School · 2018–2021",
  "Competências": "Skills",
  "Programação e web": "Programming & web",
  "Bases de dados": "Databases",
  "Cloud e sistemas": "Cloud & systems",
  "OVHcloud · OpenStack · Terraform · Linux (Ubuntu) · SSH · Redes · Firewalls": "OVHcloud · OpenStack · Terraform · Linux (Ubuntu) · SSH · Networking · Firewalls",
  "Ferramentas": "Tools",
  "Idiomas": "Languages",
  "Português · Nativo": "Portuguese · Native",
  "Inglês · B2 compreensão, B1 oral e A2 escrita": "English · B2 comprehension, B1 speaking, A2 writing",
  "Currículo profissional de Bruno Pinto · Dados atualizados em 2026 ·": "Bruno Pinto’s professional résumé · Information updated in 2026 ·"
};
const originalNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let item;
while ((item = walker.nextNode())) {
  const original = item.nodeValue;
  if (original && Object.prototype.hasOwnProperty.call(cvEnglish, original.trim())) {
    originalNodes.push({ node: item, original, key: original.trim() });
  }
}
const langButton = document.getElementById('cv-lang-toggle');
const backLink = document.getElementById('cv-back');
const cvDescription = document.querySelector('meta[name="description"]');
const cvPhoto = document.querySelector('.cv-photo');
const supported = new Set(['pt', 'en']);
const params = new URLSearchParams(window.location.search);
let activeLanguage = params.get('lang');
if (!supported.has(activeLanguage)) {
  try { activeLanguage = localStorage.getItem('bp-lang'); } catch (_) { /* storage disabled */ }
}
if (!supported.has(activeLanguage)) activeLanguage = 'pt';

function applyCvLanguage(lang) {
  activeLanguage = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-PT';
  document.title = lang === 'en' ? 'Résumé | Bruno Pinto' : 'Currículo | Bruno Pinto';
  if (cvDescription) {
    cvDescription.content = lang === 'en'
      ? 'Bruno Pinto’s résumé — Computer Engineering, Software Development, Cloud and Cybersecurity.'
      : 'Currículo profissional de Bruno Pinto — Engenharia Informática, Cloud, Segurança e Desenvolvimento Web.';
  }
  for (const {node, original, key} of originalNodes) {
    const translated = lang === 'en' ? cvEnglish[key] : key;
    node.nodeValue = original.replace(key, translated);
  }
  if (cvPhoto) cvPhoto.alt = lang === 'en' ? 'Portrait of Bruno Pinto' : 'Fotografia de Bruno Pinto, de frente';
  if (langButton) {
    langButton.textContent = lang === 'en' ? 'PT' : 'EN';
    langButton.setAttribute('aria-label', lang === 'en' ? 'Mudar currículo para português' : 'Switch résumé to English');
    langButton.setAttribute('title', lang === 'en' ? 'Mudar para português' : 'Switch to English');
  }
  if (backLink) backLink.href = './index.html?lang=' + lang;
  try { localStorage.setItem('bp-lang', lang); } catch (_) { /* storage disabled */ }
  if (window.history && window.history.replaceState) {
    const next = new URL(window.location.href);
    next.searchParams.set('lang', lang);
    window.history.replaceState(null, '', next.pathname + next.search + next.hash);
  }
}
langButton?.addEventListener('click', () => applyCvLanguage(activeLanguage === 'en' ? 'pt' : 'en'));
applyCvLanguage(activeLanguage);
