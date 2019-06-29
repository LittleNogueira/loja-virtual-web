# LojaVirtual Cliente

## Sobre o projeto

A Loja Virtual é um projeto (Single Page Application) que utiliza Angular e Bootstrap 4, que consome a API Rest <a href="https://github.com/LittleNogueira/loja-virtual-core" target="_blank" >Loja Virtual API Rest</a>, que foi desenvolvida em Spring Boot 2 usando Maven.

## Intruções para configuração

Necessário ter a API iniciada. -> Siga as intruções para instalar e inicar a <a href="https://github.com/LittleNogueira/loja-virtual-core" target="_blank" >Loja Virtual API Rest</a>


Requisitos

- <a href="https://nodejs.org/en/" target="_blank" >Node<a/>
- <a href="https://www.npmjs.com/get-npm" target="_blank" >NPM</a>
- <a href="https://docs.docker.com/docker-for-windows/install/" target="_blank" >Docker</a>
- <a href="https://docs.docker.com/compose/install/" target="_blank" >Docker compose</a>
  
Para subir todo o sistema usando o docker basta seguir os passos abaixo, ao executar o comando o docker-compose ira subir o nosso front-end, baseado em uma imagem node. 

```
 cd /caminho/do/projeto/loja-virtual-web/
 docker-compose up -d
```
E acesse a url http://localhost:4200 e o aplicativo estara pronto pra uso.

Caso voce queira subir o sistema da maneira tradicional basta seguir o tutorial abaixo

Instale 

```
$ npm install -g @angular/cli
$ cd /camimho/do/projeto/loja-virtual-web
$ npm install
$ ng serve
```

E acesse a url <a href="http://localhost:4200" target="_blank">http://localhost:4200</a> e o aplicativo estara pronto pra uso.

### Sobre as tecnologias

#### Angular

Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.

#### NPM

NPM é o gerenciador de pacotes para Node.js . Foi criado em 2009 como um projeto de código aberto para ajudar os desenvolvedores de JavaScript a compartilhar facilmente módulos de código compactados.

#### Bootstrap

Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.

#### Docker

O docker é uma alternativa de virtualização em que o kernel da máquina hospedeira é compartilhado com a máquina virtualizada ou o software em operação, portanto um desenvolvedor pode agregar a seu software a possibilidade de levar as bibliotecas e outras dependências do seu programa junto ao software com menos perda de desempenho do que a virtualização do hardware de um servidor completo.

#### Docker compose

È uma ferramenta para definir e executar aplicativos Docker com vários contêineres. Ele usa arquivos YAML para configurar os serviços do aplicativo e executa o processo de criação e inicialização de todos os contêineres com um único comando. O utilitário CLI do docker-compose permite que os usuários executem comandos em vários contêineres ao mesmo tempo, por exemplo, criando imagens, dimensionando contêineres, executando contêineres que foram interrompidos e muito mais.

#### Sass

Sass é uma linguagem de script que é interpretada ou compilada em Cascading Style Sheets (CSS). SassScript é a linguagem em si. Sass consiste em duas sintaxes. A sintaxe original, chamada de "sintaxe indentada", usa uma sintaxe semelhante a Haml.
