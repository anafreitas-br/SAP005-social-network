# Projeto Rede Social 

## Eco Green

- [1. Produto](#1-produto)
- [2. Personas](#2-personas)
- [3. Histórias de usuários](#3-histórias-de-usuários)
- [4. Interface](#4-Interface)
- [5. Desenho da Interface de Usuário (protótipo de baixa fidelidade) e fluxograma](#5-desenho-da-interface-de-Usuário-protótipo-de-baixa-fidelidade-e-fluxograma))

---

## 1. Produto

<img src="./src/images/imagelogo.jpg"/> 

 Considerando o assunto que sempre estará em pauta, meio Ambiente, natureza, sociedade, efeitos do ser humano na natureza. Pensamos na necessidade de nossos usuários de trocar informações, apoiar projetos, se engajar mais na questões ambientais e sociais e desenvolvemos uma Rede Social, que possibilita que pessoas de todas as partes do mundo possam fazer essas trocas entre si. A Eco Green é uma rede social voltada exclusivamente para as temáticas socioambientais, seus usuários podem ser tanto pessoas físicas, quanto empresas, que estão engajados nas questão ambientais, ou que gostariam de se envolver e conhecer um pouco mais desse Universo. 

## 2. Personas

<img src="./src/images/Joao-Silva.png"/>
<img src="./src/images/Maria.png"/>

## 2. Histórias de usuários

  Necessidades atendidas

Tendo como referência as necessidades das personas "João" e "Maria" elaboramos as seguintes funcionalidades para nossas 4 sprints de desenvolvimento:

   Os usuários devem interagir entre si por meio de postagens, curtindo as postagens uns dos outros. Pessoas físicas e também empresas podem participar contanto que respeitem o tema da rede. Ter uma aba dentro do site contendo as principais e mais atuais informações sobre a temática. Os usuários devem poder criar, editar e deletar suas postagens. O usuário possa criar um novo cadastro ou se logar por meio de uma conta google. 

## 4. Interface

Atende a diferentes formatos de dispositivos e se trata de uma SPA (Single Page Application), para melhor experiência do usuário e menor tempo de espera para carregamento do conteúdo da página. É possível **ler, escrever, editar e excluir dados.**

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

<img src="">


### HTML e CSS

- [ ] [HTML
      semântico](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica)
- [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] Construir sua aplicação respeitando o protótipo.

### DOM e Web APIs

- [ ] [Manipulação do
      DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
- [ ] [History
      API](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)

### Javascript

- [ ] [Uso de
      callbacks](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
- [ ] [Consumo de
      Promises](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [ ] Uso de ES modules
      ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      |
      [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))

### Firebase

- [ ] [Firestore](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules](https://firebase.google.com/docs/rules)

### Testing

- [ ] [Teste unitários](https://jestjs.io/docs/pt-BR/getting-started)
- [ ] [Testes assíncronos](https://jestjs.io/docs/pt-BR/asynchronous)
- [ ] [Mocking](https://jestjs.io/docs/pt-BR/manual-mocks)

### Git e Github

- [ ] [Colaboração pelo Github](https://docs.github.com/pt/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)
- [ ] Organização pelo [Github Projects](https://docs.github.com/pt/free-pro-team@latest/github/managing-your-work-on-github/about-project-boards)

### Boas práticas de programação

- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

---



## 5. Critérios de aceitação mínimos do projeto

### 
### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
_`mobile first`_ (mais detalhes sobre essa técnica ao final).

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

#### Criação e login de conta de usuário

- _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar
    [Firebase Authentication](https://firebase.google.com/docs/auth) e [Cloud Firestore](https://firebase.google.com/docs/firestore)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
- Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - A conta do usuário deve ser um email válido.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
- Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

- Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
- Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

- Separar a manipulação do DOM da lógica (separação de responsabilidades).
- Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
- Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

#### Testes unitários

- Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

- Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

- Faça pelo menos 2 entrevistas com os usuários.
- Faça um protótipo de baixa fidelidade.
- Verifique se a implementação do código segue as diretrizes do protótipo.
- Faça sessões de teste de usabilidade com o produto em HTML.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

- Criar posts com imagens.
- Procurar usuários, adicionar e excluir "amigos".
- Definir a privacidade de _posts_ (público ou apenas para amigos).
- Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
- Permitir comentar ou responder a uma postagem.
- Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será hospedada usando o [Firebase Hosting](https://firebase.google.com/docs/hosting).

---

## 8. Guias, dicas e leituras complementares

### Primeiros passos

Para começar, você precisará criar um _fork_ e _clone_ deste repositório.

### Instalação de Firebase

Este projeto está configurado para rodar por meio do servidor do Firebase. Para isso, será necessário possuir o [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) instalado globalmente em sua máquina. Utilize o comando `npm install -g firebase-tools`

Inicie um novo projeto web no [console do Firebase](https://console.firebase.google.com/) (pode desabilitar o analytics).

Caso apareça a opção de habilitar o Hosting na tela seguinte, selecionar.

Clique no menu lateral `Cloud Firestore` para criar uma nova database como `production mode` e escolher a região `us-east1`.

**IMPORTANTE** rodar todos os comandos do Firebase no terminal a partir da pasta raiz do projeto.

Executar o comando `firebase login` e realizar o [login](https://firebase.google.com/docs/cli#sign-in-test-cli) por meio de uma conta Google - deve abrir uma janela automaticamente, se não abrir pode clicar no link que vai aparecer no console.

Executar o comando `firebase init` para iniciar o setup do projeto.

Selecionar Hosting (aperte espaço para selecionar essa opção e depois enter).

Selecionar `Use an existing project` (o terminal vai mostrar o nome do projeto que você acabou de criar no site do Firebase).

Escrever `src` para definir como `public directory` (o padrão vai estar como `public`).

Escrever `y` para selecionar como SPA.

Escrever `N` para não fazer builds e deploys automáticos com GitHub.

O Firebase vai dizer que `src/index.html` já existe e pergunta se quer sobrescrever. Nesse momento não tem problema fazer isso, ele vai sobrescrever o que veio no boilerplate da Lab com uma página padrão do Firebase. Sugerimos dar `N`, para não sobrescrever o `index.html`.

Se der tudo certo, o Firebase vai criar o arquivo `.firebaserc` de configuração na pasta do projeto e estamos prontas pra continuar.

Instale as dependências do projeto rodando o comando `npm install`.

Para iniciar sua aplicação web, use o comando `npm start` que usamos nos projetos anteriores. Com esse comando, você deve ver em `http://localhost:5000` uma página padrão do Firebase, que está sendo renderizada de `src/index.html`.

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API#Navegando_atrav%C3%A9s_do_hist%C3%B3rico)
com
[`window.history`](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

### Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).
