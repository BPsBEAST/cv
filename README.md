# Bruno Pinto — Website Profissional & Currículo

Website pessoal e portefólio de **Bruno Pinto**, desenvolvido para apresentar o meu perfil profissional, as minhas competências e os serviços web que posso realizar.

Este projeto foi pensado para **dois públicos diferentes**:

1. **Empresas e recrutadores** — conhecer a minha formação, experiência técnica, competências e percurso, e consultar o currículo.
2. **Potenciais clientes** — perceber como posso ajudar a criar uma presença digital profissional e entrar em contacto para conversar sobre um website ou uma solução à medida.

A abordagem é intencionalmente simples: **uma identidade visual coerente, informação credível, navegação rápida e formas diretas de contacto**. Em vez de destacar projetos específicos no website, apresento as áreas em que trabalho e disponibilizo o acesso geral ao meu GitHub.

**Repositório:** [github.com/BPsBEAST/cv](https://github.com/BPsBEAST/cv)

---

## Conteúdos

- [Estrutura do website](#estrutura-do-website)
- [Funcionalidades e experiência de utilização](#funcionalidades-e-experiência-de-utilização)
- [Currículo online e PDF](#currículo-online-e-pdf)
- [Tecnologias e arquitetura](#tecnologias-e-arquitetura)
- [Organização dos ficheiros](#organização-dos-ficheiros)
- [Como executar localmente](#como-executar-localmente)
- [Como personalizar e atualizar](#como-personalizar-e-atualizar)
- [Publicação com GitHub Pages](#publicação-com-github-pages)
- [Contactos e links](#contactos-e-links)
- [Manutenção e considerações](#manutenção-e-considerações)

## Estrutura do website

O website principal é uma página única (`index.html`) organizada em secções navegáveis através do menu superior e de âncoras.

### 1. Início — apresentação e escolha do objetivo

A primeira secção apresenta o meu nome, o foco em desenvolvimento de software, cloud e web, e uma fotografia.

Inclui um seletor com dois modos:

| Modo | Destinatários | O que muda |
| --- | --- | --- |
| **Quero contratar talento** | Recrutadores e empresas de tecnologia | Título, apresentação e botões com foco nas competências e na experiência técnica |
| **Preciso de um website** | Empresas, profissionais independentes e potenciais clientes | Título, apresentação e botões com foco em serviços web e contacto |

A mudança acontece na própria página, sem recarregar. **Não cria dois websites diferentes**: adapta a mensagem inicial ao objetivo da visita, mantendo o restante conteúdo disponível a todos.

### 2. Apresentação

Um breve enquadramento sobre as duas formas de colaboração: integrar uma equipa técnica ou desenvolver uma solução digital para um negócio.

### 3. O que faço — `#projetos`

Apresentação das áreas de trabalho, **sem nomes ou descrições de projetos específicos**:

- **Websites e interfaces:** design responsivo, usabilidade, organização de conteúdos e experiência de utilização.
- **Aplicações e software:** funcionalidades, aplicações web e integração de dados.
- **Cloud e segurança:** infraestrutura, sistemas, redes, automatização e práticas de segurança.

Os cartões apresentam descrições e tecnologias associadas. Existe também um botão para consultar o [GitHub](https://github.com/BPsBEAST), onde o trabalho técnico pode ser explorado diretamente.

> Nota: o identificador HTML desta secção continua a ser `projetos` para manter os links internos existentes. O conteúdo apresentado ao visitante é **«O que faço»**.

### 4. Sobre — `#sobre`

Inclui uma apresentação pessoal mais detalhada, uma segunda fotografia e um resumo da formação e das tecnologias com que trabalho.

A informação técnica está agrupada em programação e web, dados e ferramentas, e cloud e sistemas.

### 5. Experiência — `#experiencia`

Apresenta o percurso académico e as experiências de estágio, com referência à **Visionware** e à **Virtualp**, bem como à formação no **Politécnico do Porto**.

Esta secção tem um atalho para a versão completa e imprimível do currículo.

### 6. Serviços — `#servicos`

Secção direcionada a quem procura serviços digitais:

- Websites profissionais;
- Landing pages;
- Soluções web à medida.

Inclui ainda uma proposta de processo de colaboração: **conversar, definir o objetivo, desenvolver e rever/entregar**. O conteúdo descreve os tipos de trabalho apresentados no site, não constitui uma proposta comercial com preço ou prazo fechado.

### 7. Contactos — `#contacto`

Secção final com chamadas à ação para **enviar email** e **abrir o WhatsApp**, além de cartões individuais para:

- LinkedIn;
- Instagram;
- GitHub.

Cada cartão social tem uma área de clique própria, um ícone e uma ligação externa. Os links externos abrem numa nova janela/separador.

O contacto por email utiliza uma ligação `mailto:` e o WhatsApp utiliza `wa.me`. **Não existe formulário nem armazenamento de mensagens no website.**

## Funcionalidades e experiência de utilização

### Design responsivo

A página adapta-se a ecrãs grandes e pequenos, incluindo computadores, tablets e telemóveis. O CSS usa grelhas, flexbox e media queries para reorganizar o conteúdo.

### Navegação

- Menu superior com atalhos para as principais secções;
- Menu compacto para dispositivos móveis;
- Links internos que deslocam a página até à secção selecionada;
- Ligações para currículo e contactos;
- Link para saltar diretamente para o conteúdo principal.

### Idiomas — português e inglês

A página principal suporta **PT e EN**.

A tradução dos textos e dos botões é feita em `app.js`. A preferência de idioma é guardada no `localStorage` do navegador, quando disponível.

O seletor de público também altera as mensagens da secção inicial em cada idioma. **O currículo `cv.html` está atualmente apenas em português.**

### Movimento e animação

O website utiliza transições e animações de entrada à medida que os elementos aparecem no ecrã, através de `IntersectionObserver`.

Quando o utilizador ativa a preferência de acessibilidade **reduzir movimento**, as animações são desativadas.

### Identidade visual

- Tipografia **DM Sans** e **Space Grotesk**, carregada a partir do Google Fonts;
- Paleta com azul-escuro, fundo claro e detalhes em verde-lima;
- Fotografias pessoais e ilustrações de interfaces construídas em HTML/CSS/SVG;
- Logótipo **`bp.`** no favicon do browser.

### Metadados e partilha

O documento principal inclui título, descrição, metadados Open Graph/Twitter e dados estruturados de pessoa (`schema.org`).

Estes elementos ajudam a identificar a página e a fornecer informação a motores de pesquisa e plataformas, mas **não garantem posicionamento ou pré-visualizações específicas**.

## Currículo online e PDF

O ficheiro [`cv.html`](./cv.html) apresenta o currículo num formato separado, adequado a leitura e impressão.

O currículo inclui:

- Nome, apresentação profissional e **fotografia frontal**;
- Contactos, LinkedIn e GitHub;
- Perfil profissional;
- Experiência técnica;
- Prática e desenvolvimento independente;
- Formação académica;
- Competências e idiomas.

### Como guardar o currículo em PDF

1. Abrir `cv.html` no website;
2. Clicar em **«Imprimir / Guardar como PDF»**;
3. Na janela de impressão do navegador, selecionar **Guardar como PDF**;
4. Guardar o ficheiro.

Os estilos `@media print` reorganizam o cabeçalho, os espaçamentos e as colunas para impressão A4. A **fotografia frontal está incorporada no próprio HTML como JPEG em base64**, evitando depender de um ficheiro externo quando o currículo é impresso ou convertido em PDF.

> Este botão utiliza a funcionalidade de impressão do navegador (`window.print()`). Não gera nem guarda automaticamente um PDF no servidor. A paginação final pode variar entre navegadores e definições de impressão.

## Tecnologias e arquitetura

| Tecnologia | Utilização |
| --- | --- |
| **HTML5** | Estrutura semântica da página e do currículo |
| **CSS3** | Layout, cores, responsividade, efeitos e impressão |
| **JavaScript (vanilla)** | Idiomas, seletor de público, menu móvel e animações |
| **SVG** | Ícones e elementos gráficos |
| **Google Fonts** | Fontes DM Sans e Space Grotesk |
| **Git e GitHub** | Versionamento do código e disponibilização do repositório |

É um **website estático**. Não necessita de Node.js, React, npm, base de dados ou API para executar as funcionalidades atualmente implementadas.

A preferência de idioma é o único estado persistente no navegador identificado no código da página principal. Não existe área de login, painel administrativo, sistema de pagamentos ou API própria.

## Organização dos ficheiros

```text
cv/
├── index.html       # Página principal e respetivas secções
├── styles.css       # Estilos, responsividade e componentes visuais
├── app.js           # Traduções, seletor de público e interatividade
├── cv.html          # Currículo em formato de impressão/PDF
├── photo-front.svg  # Foto frontal usada no website
├── photo-side.svg   # Foto lateral usada na secção Sobre
├── bp-favicon.png   # Favicon bp. escolhido para o separador
├── favicon.svg      # Recurso SVG anterior, conservado no repositório
└── README.md        # Documentação do projeto
```

**Sobre as imagens:** os ficheiros `photo-front.svg` e `photo-side.svg` são SVGs que incluem as fotografias JPEG originais codificadas internamente; não são desenhos vetoriais das fotografias. O favicon usado pelo `index.html` e pelo `cv.html` é `bp-favicon.png`, não `favicon.svg`.

## Como executar localmente

A opção mais simples é:

1. Clonar ou descarregar o repositório;
2. Abrir `index.html` num navegador;
3. Abrir `cv.html` para consultar o currículo imprimível.

Para clonar com Git:

```bash
git clone https://github.com/BPsBEAST/cv.git
cd cv
```

Para executar através de um servidor local (útil para testar o comportamento como num website):

```bash
python -m http.server 8000
```

Depois abrir:

- Página principal: `http://localhost:8000/`
- Currículo: `http://localhost:8000/cv.html`

O comando anterior exige Python instalado. Em alternativa, pode ser utilizada uma extensão de servidor local no editor de código.

## Como personalizar e atualizar

### Alterar os textos da página principal

Os conteúdos iniciais das secções encontram-se em `index.html`. As versões traduzidas são definidas no objeto `translations` em `app.js`.

Ao alterar uma mensagem com o atributo `data-i18n`, é importante atualizar **ambos os idiomas** no objeto de traduções. Caso contrário, o JavaScript poderá substituir o texto editado por uma versão desatualizada.

### Alterar os dois modos do início

No ficheiro `app.js`, procurar o objeto `variantCopy`. Nele estão definidos, para cada idioma e público, o título, a descrição, os textos dos botões e os respetivos destinos.

Os modos atuais são `career` e `business`.

### Atualizar competências, experiência ou serviços

Editar as secções correspondentes de `index.html` e, quando existem textos traduzidos, atualizar também `app.js`.

Para atualizar o currículo, editar **`cv.html` separadamente**. O currículo não é gerado automaticamente a partir do texto da página principal.

### Alterar contactos e redes sociais

Pesquisar pelos endereços existentes em `index.html`, `cv.html` e, quando necessário, nos metadados da página.

Os links atualmente utilizados são:

| Canal | Ligação |
| --- | --- |
| Email | [brunofranciscospinto@gmail.com](mailto:brunofranciscospinto@gmail.com) |
| WhatsApp | [Abrir conversa](https://wa.me/351910546358) |
| LinkedIn | [linkedin.com/in/pintobrunoit](https://www.linkedin.com/in/pintobrunoit/) |
| Instagram | [instagram.com/buedaedgy](https://www.instagram.com/buedaedgy/) |
| GitHub | [github.com/BPsBEAST](https://github.com/BPsBEAST) |

### Alterar fotografias

A fotografia de frente é utilizada na secção principal e está também **incorporada diretamente em `cv.html`**. Por isso, substituir apenas `photo-front.svg` **não atualiza automaticamente a imagem do currículo**.

Se a fotografia frontal mudar:

1. Atualizar `photo-front.svg` ou adaptar a referência em `index.html`;
2. Substituir também a imagem incorporada no atributo `src` da classe `cv-photo` em `cv.html`;
3. Testar a versão de impressão.

A imagem lateral encontra-se em `photo-side.svg`.

### Alterar favicon

Substituir o recurso `bp-favicon.png` e manter ou atualizar as referências a esse ficheiro no `<head>` de `index.html` e `cv.html`.

Os navegadores guardam favicons em cache; depois de uma mudança, poderá ser necessário atualizar a página ou modificar o parâmetro de versão (`?v=...`) usado no endereço do ícone.

### Alterar o aspeto visual

O ficheiro `styles.css` contém as regras de estilo da página principal. As cores de base e a tipografia estão definidas em `:root`.

O currículo tem estilos próprios dentro de `cv.html`, incluindo as regras de impressão.

## Publicação com GitHub Pages

O projeto foi estruturado para poder ser alojado como website estático, por exemplo através do **GitHub Pages**.

Para configurar a publicação, caso ainda não esteja ativa:

1. Abrir o [repositório](https://github.com/BPsBEAST/cv);
2. Ir a **Settings → Pages**;
3. Em **Build and deployment**, selecionar **Deploy from a branch**;
4. Escolher a branch **`main`** e a pasta **`/(root)`**;
5. Guardar e consultar o endereço apresentado pelo GitHub.

Num GitHub Pages de projeto, o endereço costuma seguir o formato `https://<utilizador>.github.io/<repositorio>/`; o endereço exato e a existência de uma publicação ativa devem ser confirmados em **Settings → Pages**.

Como os recursos internos utilizam caminhos relativos, o site foi preparado para funcionar numa subpasta como `/cv/`.

Para publicar alterações futuras, guardar as modificações na branch configurada para o GitHub Pages. A atualização pública depende da conclusão do processo de publicação.

## Contactos e links

Este website pretende facilitar conversas sobre **oportunidades profissionais, colaborações e desenvolvimento de websites**.

- **Email:** [brunofranciscospinto@gmail.com](mailto:brunofranciscospinto@gmail.com)
- **LinkedIn:** [Bruno Pinto](https://www.linkedin.com/in/pintobrunoit/)
- **Instagram:** [@buedaedgy](https://www.instagram.com/buedaedgy/)
- **GitHub:** [@BPsBEAST](https://github.com/BPsBEAST)

## Manutenção e considerações

Ao atualizar o projeto, recomenda-se confirmar:

- Funcionamento da navegação e do menu em computador e telemóvel;
- Conteúdos em **português e inglês**, incluindo os dois modos da página inicial;
- Links de email, WhatsApp e redes sociais;
- Qualidade e enquadramento das duas fotografias;
- Apresentação de `cv.html` e exportação para PDF;
- Legibilidade, contraste e navegação por teclado;
- Correção dos dados académicos, experiências e contactos;
- Ausência de informações de projetos específicos na apresentação pública, caso essa decisão editorial se mantenha.

**Privacidade e dependências:** o site não implementa uma base de dados, formulário de contacto ou recolha própria de mensagens. Contudo, utiliza fontes externas do Google Fonts e contém links para plataformas terceiras, que têm as suas próprias políticas de privacidade.

**Direitos de utilização:** o código e as fotografias estão neste repositório para apresentar o trabalho e o perfil de Bruno Pinto. Este repositório **não contém atualmente um ficheiro de licença explícito**; não assumir autorização para reutilizar as fotografias, a identidade visual ou os conteúdos.

---

Desenvolvido para apresentar, de forma clara e profissional, o percurso, as competências e os serviços web de **Bruno Pinto**.

© 2026 Bruno Pinto.
