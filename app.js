'use strict';
const translations={
pt:{
skip:"Saltar para o conteúdo",navProjects:"O que faço",navAbout:"Sobre",navExperience:"Experiência",navServices:"Serviços",navContact:"Vamos falar",
heroAvailability:"Aberto a oportunidades e novos projetos",modeCareer:"Quero contratar talento",modeBusiness:"Preciso de um website",
heroKicker:"OLÁ, SOU O BRUNO PINTO · PORTO, PORTUGAL",
heroTitle:"Software, cloud e <em>ideias</em> que ganham forma.",
heroDescription:"Mestrando em Engenharia Informática, com experiência prática em desenvolvimento web, infraestrutura cloud e segurança. Gosto de transformar desafios em soluções digitais claras e funcionais.",
heroPrimary:"Explorar competências",heroSecondary:"Ver experiência",heroNote:"Do código à experiência de quem utiliza.",visualNote:"Curiosidade técnica. Atenção ao detalhe.",heroTagsIntro:"ÁREAS DE INTERESSE",
introLabel:"DUAS FORMAS DE TRABALHARMOS JUNTOS",introTitle:"Tecnologia útil. Experiências memoráveis.",introBody:"Se procuras alguém para integrar uma equipa técnica, ou precisas de uma presença digital mais forte para o teu negócio, encontras aqui o meu percurso, os projetos que construo e uma forma direta de falar comigo.",introLink:"Conta-me o teu desafio",
projectsLabel:"O QUE FAÇO",projectsTitle:"Áreas onde transformo ideias em soluções.",projectsIntro:"Combino desenvolvimento, pensamento técnico e atenção à experiência de utilização — do primeiro conceito à implementação.",
cap1Title:"Websites & interfaces",cap1Body:"Experiências digitais responsivas, com foco em clareza, usabilidade e uma apresentação profissional em qualquer dispositivo.",
cap2Title:"Aplicações & software",cap2Body:"Desenvolvimento de funcionalidades, integração de dados e construção de aplicações orientadas a necessidades reais.",
cap3Title:"Cloud & segurança",cap3Body:"Exploração, configuração e automatização de infraestrutura, com atenção às redes, aos acessos e às boas práticas de segurança.",
githubHeading:"Queres explorar o lado técnico?",githubBody:"Podes conhecer o código e o meu trabalho independente diretamente no GitHub.",githubAction:"Abrir o meu GitHub",photoCaption:"PESSOAS, IDEIAS E TECNOLOGIA.",
aboutLabel:"QUEM SOU",aboutTitle:"Por detrás do código.",aboutStatement:"Acredito em tecnologia que resolve problemas — e em experiências digitais que são tão boas de usar como de construir.",
aboutSignature:"ENGENHARIA INFORMÁTICA · PORTUGAL",aboutP1:"Sou licenciado em Segurança Informática em Redes de Computadores e frequento o Mestrado em Engenharia Informática na ESTG do Politécnico do Porto.",
aboutP2:"Durante os estágios na Visionware e na Virtualp, trabalhei com cloud, desenvolvimento web, APIs REST e bases de dados. Continuo a consolidar essa base através de projetos próprios.",
skillsTitle:"Tecnologias com que trabalho",skillProgramming:"Programação & web",skillData:"Dados & ferramentas",skillCloud:"Cloud & sistemas",
experienceLabel:"PERCURSO",experienceTitle:"Experiência que constrói bases.",cvLink:"Ver CV completo / imprimir",
expWork:"Experiência técnica",expVisionTitle:"Estágio · Cloud e Segurança",expVisionBody:"OVHcloud Public Cloud, instâncias Ubuntu e OpenStack Client, SSH, redes e regras de firewall. Exploração de Infrastructure as Code com Terraform.",
expWebTitle:"Estágio · Desenvolvimento Web",expWebBody:"Desenvolvimento web com HTML, CSS, JavaScript e PHP; APIs REST e documentação com Swagger.",
expDataTitle:"Estágio · Bases de Dados",expDataBody:"Consultas SQL, tabelas, procedimentos armazenados, funções, integração de sistemas e relatórios.",
educationTitle:"Formação",educationOngoing:"EM CURSO",educationMasters:"Mestrado em Engenharia Informática",educationSchool:"ESTG · POLITÉCNICO DO PORTO",educationDegree:"Licenciatura em Segurança Informática em Redes de Computadores",educationSchoolCourse:"Gestão e Programação de Sistemas de Informação",educationHighSchool:"ESCOLA SECUNDÁRIA DE PENAFIEL",
languagesLabel:"IDIOMAS",languagesContent:"Português nativo · Inglês: compreensão B2, comunicação oral B1",
servicesLabel:"PARA NEGÓCIOS",servicesTitle:"A tua próxima boa primeira impressão começa online.",servicesIntro:"Um website deve comunicar confiança, explicar o que fazes e facilitar o próximo passo do cliente. É essa a abordagem que levo para cada projeto web.",
service1Title:"Websites profissionais",service1Body:"Sites para apresentar empresas, profissionais e serviços de forma clara, credível e adaptada a todos os ecrãs.",service2Title:"Landing pages",service2Body:"Páginas focadas numa proposta de valor, com mensagens diretas e chamadas à ação pensadas para gerar contactos.",service3Title:"Soluções web à medida",service3Body:"Interfaces e funcionalidades personalizadas, avaliadas de acordo com as necessidades, objetivos e âmbito do projeto.",
processLabel:"COMO TRABALHAMOS",processTitle:"Simples, claro e em conjunto.",process1:"Conversamos",process2:"Definimos o objetivo",process3:"Desenvolvo",process4:"Revemos e entregamos",
contactKicker:"VAMOS COMEÇAR UMA CONVERSA",contactTitle:"Uma boa ideia começa com um <em>olá.</em>",contactBody:"Para uma oportunidade profissional, uma colaboração ou um website para o teu negócio — conta-me o que tens em mente.",emailAction:"Enviar email",footerText:"Bruno Pinto · Engenharia Informática, software e web. Construído com atenção ao detalhe.",footerRights:"TODOS OS DIREITOS RESERVADOS"
},
en:{
skip:"Skip to content",navProjects:"Expertise",navAbout:"About",navExperience:"Experience",navServices:"Services",navContact:"Let's talk",
heroAvailability:"Open to opportunities and new projects",modeCareer:"I'm hiring",modeBusiness:"I need a website",
heroKicker:"HI, I'M BRUNO PINTO · PORTO, PORTUGAL",
heroTitle:"Software, cloud & <em>ideas</em> brought to life.",
heroDescription:"Computer Engineering master's student with hands-on experience in web development, cloud infrastructure and security. I enjoy turning complex challenges into clear, practical digital solutions.",
heroPrimary:"Explore expertise",heroSecondary:"View experience",heroNote:"From code to user experience.",visualNote:"Technical curiosity. Attention to detail.",heroTagsIntro:"AREAS OF INTEREST",
introLabel:"TWO WAYS TO WORK TOGETHER",introTitle:"Useful technology. Memorable experiences.",introBody:"Whether you're looking for a new team member or a stronger digital presence for your business, this is where you can explore my background, see my projects and get in touch.",introLink:"Tell me about your challenge",
projectsLabel:"WHAT I DO",projectsTitle:"Turning ideas into practical solutions.",projectsIntro:"I combine software development, technical thinking and attention to user experience — from the initial concept to implementation.",
cap1Title:"Websites & interfaces",cap1Body:"Responsive digital experiences with a focus on clarity, usability and professional presentation across devices.",
cap2Title:"Applications & software",cap2Body:"Feature development, data integration and practical applications built around real-world needs.",
cap3Title:"Cloud & security",cap3Body:"Exploring, configuring and automating infrastructure with attention to networks, access controls and security best practices.",
githubHeading:"Want to explore the technical side?",githubBody:"You can explore my code and independent work directly on GitHub.",githubAction:"Visit my GitHub",photoCaption:"PEOPLE, IDEAS & TECHNOLOGY.",
aboutLabel:"ABOUT ME",aboutTitle:"Beyond the code.",aboutStatement:"I believe in technology that solves real problems — and digital experiences that are just as enjoyable to use as they are to create.",
aboutSignature:"COMPUTER ENGINEERING · PORTUGAL",aboutP1:"I hold a bachelor's degree in Computer Network Security and am pursuing a master's degree in Computer Engineering at ESTG, Polytechnic Institute of Porto.",
aboutP2:"During internships at Visionware and Virtualp, I worked with cloud infrastructure, web development, REST APIs and databases. I continue building on these foundations through independent projects.",
skillsTitle:"Technologies I work with",skillProgramming:"Programming & web",skillData:"Data & tools",skillCloud:"Cloud & systems",
experienceLabel:"BACKGROUND",experienceTitle:"Experience that builds foundations.",cvLink:"View full CV / print",
expWork:"Technical experience",expVisionTitle:"Intern · Cloud & Security",expVisionBody:"OVHcloud Public Cloud, Ubuntu instances with OpenStack Client, SSH, networking and firewall rules. Exploring Infrastructure as Code with Terraform.",
expWebTitle:"Intern · Web Development",expWebBody:"Web development with HTML, CSS, JavaScript and PHP; REST API development and Swagger documentation.",
expDataTitle:"Intern · Databases",expDataBody:"SQL queries, tables, stored procedures, functions, systems integration and reporting.",
educationTitle:"Education",educationOngoing:"IN PROGRESS",educationMasters:"MSc in Computer Engineering",educationSchool:"ESTG · POLYTECHNIC INSTITUTE OF PORTO",educationDegree:"BSc in Computer Network Security",educationSchoolCourse:"Information Systems Management and Programming",educationHighSchool:"PENAFIEL SECONDARY SCHOOL",
languagesLabel:"LANGUAGES",languagesContent:"Portuguese native · English: B2 reading/listening, B1 speaking",
servicesLabel:"FOR BUSINESSES",servicesTitle:"Your next great first impression starts online.",servicesIntro:"A website should build trust, explain what you do and make the next step easy for your customer. That's the approach I bring to web projects.",
service1Title:"Professional websites",service1Body:"Responsive websites that showcase businesses, independent professionals and services with clarity and credibility.",service2Title:"Landing pages",service2Body:"Focused pages with clear messaging and calls to action, designed to generate meaningful enquiries.",service3Title:"Custom web solutions",service3Body:"Tailored interfaces and functionality, scoped to your business needs, goals and project requirements.",
processLabel:"HOW WE WORK",processTitle:"Simple, clear and collaborative.",process1:"Let's talk",process2:"Define goals",process3:"Build",process4:"Review & deliver",
contactKicker:"LET'S START A CONVERSATION",contactTitle:"Every good idea starts with <em>hello.</em>",contactBody:"Whether it's a job opportunity, a collaboration or a website for your business — I'd love to hear about it.",emailAction:"Send an email",footerText:"Bruno Pinto · Computer Engineering, software and web. Built with attention to detail.",footerRights:"ALL RIGHTS RESERVED"
}
};
const variantCopy={
pt:{career:{primary:"Explorar competências",secondary:"Ver experiência",title:"Software, cloud e <em>ideias</em> que ganham forma.",desc:"Mestrando em Engenharia Informática, com experiência prática em desenvolvimento web, infraestrutura cloud e segurança. Gosto de transformar desafios em soluções digitais claras e funcionais.",primaryHref:"#projetos",secondaryHref:"#experiencia"},business:{primary:"Falar sobre o teu site",secondary:"Explorar competências",title:"Sites que inspiram <em>confiança</em> e geram oportunidades.",desc:"Desenvolvo experiências web responsivas e claras para ajudar empresas e profissionais a apresentarem melhor o seu trabalho e a facilitarem o contacto com novos clientes.",primaryHref:"#contacto",secondaryHref:"#projetos"}},
en:{career:{primary:"Explore expertise",secondary:"View experience",title:"Software, cloud & <em>ideas</em> brought to life.",desc:"Computer Engineering master's student with hands-on experience in web development, cloud infrastructure and security. I enjoy turning complex challenges into clear, practical digital solutions.",primaryHref:"#projetos",secondaryHref:"#experiencia"},business:{primary:"Let's discuss your site",secondary:"Explore expertise",title:"Websites that build <em>trust</em> and opportunities.",desc:"I create responsive, clear web experiences that help companies and professionals showcase their work and make it easy for customers to reach them.",primaryHref:"#contacto",secondaryHref:"#projetos"}}
};
let language='pt';let mode='career';try{if(localStorage.getItem('bp-lang')==='en')language='en'}catch(e){}
// URL language takes precedence when returning from the CV or following a direct language link.
const urlLanguage=new URLSearchParams(window.location.search).get('lang');
if(urlLanguage==='pt'||urlLanguage==='en'){
 language=urlLanguage;
 try{localStorage.setItem('bp-lang',language)}catch(e){}
}
const translatable=[...document.querySelectorAll('[data-i18n]')];
const withMarkup=new Set(['heroTitle','contactTitle']);
function translate(){
 document.documentElement.lang=language==='pt'?'pt-PT':'en';document.title=language==='pt'?'Bruno Pinto — Software, Cloud & Web':'Bruno Pinto — Software, Cloud & Web Portfolio';
 for(const node of translatable){const key=node.dataset.i18n;const value=translations[language][key];if(value===undefined)continue;if(withMarkup.has(key))node.innerHTML=value;else node.textContent=value}
 const toggle=document.querySelector('#lang-toggle');if(toggle){toggle.textContent=language==='pt'?'EN':'PT';toggle.setAttribute('aria-label',language==='pt'?'Switch language to English':'Mudar idioma para português')}
 applyMode();
 // Keep the CV URL in sync with the selected language, even if storage is blocked.
 document.querySelectorAll('a[href^="./cv.html"]').forEach(link=>link.setAttribute('href','./cv.html?lang='+language));
 document.querySelector('#year').textContent=String(new Date().getFullYear())
}
function applyMode(){
 const copy=variantCopy[language][mode];document.querySelector('#hero-title').innerHTML=copy.title;document.querySelector('.hero-description').textContent=copy.desc;
 const p=document.querySelector('#hero-primary'),s=document.querySelector('#hero-secondary');p.href=copy.primaryHref;s.href=copy.secondaryHref;
 p.querySelector('span').textContent=copy.primary;s.querySelector('span').textContent=copy.secondary;
 for(const el of document.querySelectorAll('.audience-option')){const active=el.dataset.mode===mode;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active))}
}
document.querySelector('#lang-toggle')?.addEventListener('click',()=>{language=language==='pt'?'en':'pt';try{localStorage.setItem('bp-lang',language)}catch(e){}translate()});
document.querySelectorAll('.audience-option').forEach(el=>el.addEventListener('click',()=>{mode=el.dataset.mode;applyMode()}));
const menu=document.querySelector('#mobile-nav'),menuBtn=document.querySelector('#menu-button');function closeMenu(){if(!menu||!menuBtn)return;menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label',language==='pt'?'Abrir menu':'Open menu')}
menuBtn?.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?(language==='pt'?'Fechar menu':'Close menu'):(language==='pt'?'Abrir menu':'Open menu'))});menu?.querySelectorAll('a').forEach(el=>el.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(items=>{for(const item of items){if(item.isIntersecting){item.target.classList.add('is-visible');io.unobserve(item.target)}}},{threshold:.08,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}
translate();
