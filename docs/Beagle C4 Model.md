# Beagle C4 Model

* [C4Model](#C4Model)
  * [C1 -  Context](#C1----Context)
  * [C2 - Container](#C2---Container)
  * [C3 -  Component](#C3----Component)
    * [Beagle Android](#Beagle-Android)
    * [Beagle Backend](#Beagle-Backend)
    * [Beagle iOS](#Beagle-iOS)
    * [Beagle Web](#Beagle-Web)

---

## C4Model



**Overview**

Uma das definições usadas de arquitetura de software é que ela define as partes de um software e é a estratégia tecnológica de um produto/projeto. E como toda estratégia, é muito importante que ela seja vista e frequentemente visitada e atualizada. Afinal, um planejamento sem visualização tenderá a ser falho. 

Documentar a arquitetura de um projeto muitas vezes é um processo maçante, que exige tempo, conhecimento de ferramentas e técnicas para diagramação e documentação. O maior desafio dentro de uma documentação de arquitetura é evitar dois cenários.

- Documentações de arquitetura muito complexas e por consequência elas tendem a ficarem confusas e obsoletas, assim, se perde o seu propósito. Ou seja, se gasta bastante tempo para uma documentação que tende a ser inutilizada eventualmente.

- Documentações pobres com pouca informação ou informações falhas. 

Em ambos os casos o resultado final é que elas acabam atrapalhando mais do que ajudando.


A visualização da arquitetura é crucial em diversos aspectos e responde várias perguntas, por exemplo, como o meu sistema integra entre eles mesmo e outros sistemas? Como consigo escalar a minha aplicação? Como garantir a segurança entre as minhas aplicações, dentre outros pontos.


Pensando nisso, nos motivamos para criar uma visualização da nossa arquitetura de um modo bastante simples com o C4 Model.



**O que é o C4Model?**

 O C4 Model é baseado no 4+1 e UML e foi criado por Simon Brown entre 2006 e 2011. O modelo surgiu com o intuito de ajudar a resolver o problema de documentação de arquiteturas falhas, difíceis de entender e manter, trazendo uma visão mais clara da arquitetura documentada abrangendo vários níveis e que seja relevante para as várias “personas” envolvidas. Ele é dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. A ideia é que cada nível se aprofunde mais nos detalhes e informações do nível anterior. 



**O que é o Beagle?**

Beagle é uma ferramenta de código aberto que ajuda os desenvolvedores a implementar Server-Driven UI que funcione em múltiplas plataformas.

Ao utilizar o Beagle, desenvolvedores podem:

 - Rapidamente alterar o layout, dados, fluxo de navegação, ou até mesmo lógica, apenas alterando código no backend.
 - Ser mais independentes das lojas mobile, como App Store e Play Store, porque a maioria das mudanças não precisarão de uma atualização no aplicativo.
 - Ter mais confiança de que aplicações se comportarão de forma semelhante em plataformas diferentes, pois o código será compartilhado e padronizado entre backend e frontend.
 - Testar facilmente novas hipóteses de negócio ou fazer correções em tempo real nas aplicações para melhorar a experiência dos usuários e receber feedback.

## C1 -  Context

`\C1 -  Context`

[C4Model](#Beagle-C4-Model)

**Nível 1: Diagrama de contexto do sistema**

Esse nível mostra de forma macro a aplicação, os atores, seus papéis e também como eles interagem entre si. O principal objetivo aqui é representar o produto em sua forma mais abstrata.

***Contexto Beagle***

O Beagle é um framework open source que ajuda desenvolvedores a implementar aplicações Server-Driven de uma maneira cross-platform:

* Desenvolvedores podem facilmente criar e prototipar telas frontend usando a biblioteca Beagle Backend e seus utilitários para layout (posicionamento e aparência) e comportamento (ações).
* Uma vez criadas, essas telas podem ser enviadas para aplicações frontend mobile ou web, elas usam a biblioteca do Beagle Frontend para renderizar os layouts.

![diagram](c1.svg)

## C2 - Container

`\C2 - Container`

[C4Model](#Beagle-C4-Model)

**Nível 2: Diagrama de containers do sistema**

Nesse nível mostramos de maneira mais detalhada o sistema descrevendo os seus containers (Não confundir com o Docker) e como eles se comunicam/interagem. Nesse nível é dado ênfase na arquitetura e tecnologias utilizadas. A ideia é mostrar como o sistema é de forma macro. Um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.


***Containers Beagle***

No segundo nível de detalhamento temos os **containers** de `backend` e `frontend`:

* O Beagle Frontend é instalado em aplicações Web e Mobile, que renderizam nativamente as telas recebidas do beagle backend.
* O Beagle Backend é configurado no backend de uma aplicação para facilitar a criação de componentes server driven.



![diagram](c2.svg)

## C3 -  Component

`\C3 -  Component`

[C4Model](#Beagle-C4-Model)

**Nível 3: Diagrama de componentes do sistema**

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O Beagle hoje é dividido em plataformas, sendo cada uma delas um container dentro do C4Model.

 - Beagle Web
 - Beagle Android
 - Beagle iOS
 - Beagle Backend


## Beagle Android

`\C3 -  Component\Beagle Android`

[C4Model](#Beagle-C4-Model)

O Beagle Android estabelece a relação entre o Framework Beagle e aplicativos Android. 
É ele quem orquestra a criação de views no ambiente Android a partir dos componentes recebidos do Backend.
Os componentes do Beagle são:
* Componentes visuais default e customizados (botões, textos, campos de textos, etc)
* Ações default e customizadas (Navegação, Alerta, SendRequest, etc)
* Operações default e customizadas (Operadores aritiméticos, Operadores lógicos, etc)

O Diagrama abaixo mostra o "caminho" que um componente "percorre" dentro de um aplicativo Android que utiliza o Beagle.

O Beagle possuiu um mecanismo de **processamento de anotações** que cria inicialmente o arquivo de configuração do framework chamado BeagleSetup. Esse arquivo é gerado automaticamente quando o projeto é montado (build) pela primeira vez e nele são registrados os componentes criados no Android, como ações, operações, componentes visuais (botões, textos, etc), camada de rede, dentre outros. Todos esses componentes são anotados para que o processador possa mapea-los, como por exemplo, o `@RegisterAction` é utilizado para registrar ações, `@RegisterOperation` para operações e o `@RegisterWidget` para componentes visuais.


![diagram](c3.svg)

## Beagle Backend

`\C3 -  Component\Beagle Backend`

[C4Model](#Beagle-C4-Model)

O Beagle Backend é uma biblioteca de suporte que ajuda na criação de telas Beagle a partir de um servidor.
- O Backend Starter configura automaticamente a biblioteca em aplicações usando Spring ou Micronaut. 
- O Framework fornece todos os contratos que serão usados na criação dos componentes.
- O Framework também possui um utilitário de serialização que transforma toda tela criada no JSON que será enviado para um frontend.

![diagram](c3.svg)

## Beagle iOS

`\C3 -  Component\Beagle iOS`

[C4Model](#Beagle-C4-Model)

O Beagle iOS é uma biblioteca que tem como finalidade integrar o sistema Beagle em um projeto existente de aplicativo nativo dos sistemas Apple iOS.

As peças chave para entendimento da arquitetura e sua aplicação são os componentes abaixo:

* **Beagle Config:** Classe de instância única que armazena todas as configurações, customizações e implementações do Beagle (propriedade `Dependencies`). Sua inicialização é essencial para o funcionamento do projeto e ocorre no `AppDelegate` do aplicativo hospedeiro.
* **Beagle View Controller e Beagle View:** São as portas de entrada para as telas server-driven do Beagle. O **Beagle View Controller** pode ser adicionado na pilha de navegação diretamente a partir da classe `AppDelegate` e age como uma tela independente. Já **Beagle View** é uma UIView do UIKit, ela possibilita adicionar uma tela Beagle como subview de uma tela existente, sendo assim, torna-se dependente de um view controller ou UIView previamente definidos. O conteúdo de um **Beagle View Controller** é uma composição de **Server Driven Components** traduzidos para UIKit.
* **Server Driven Component:** Representação de qualquer elemento de interface do Beagle. Ele pode representar tanto elementos visuais como botões, textos e listas quanto ações de navegação, comportamentos de clique e operações.
* **Network Client:** Por padrão o Beagle iOS não provê uma estratégia padrão para realização de requisições remotas, dando a liberdade aos desenvolvedores implementarem a abordagem mais compatível com o contexto do projeto, como: direcionamento de entpoints, regras de segurança e tratamento de erros. **Network Client** fica responsável por comunicar-se com os recursos implementados no **Beagle Backend**.
* **Recursos de apoio:** O Beagle iOS provê certo nível de customização de alguns componentes de projeto. Ao observar o diagrama abaixo, é possível notar alguns componentes com a descrição "abstrato | opcional", tais componentes são meios de propagar eventos para ferramentas de analytics contratadas ou regras customizadas de armazenamento local das telas.

![diagram](c3.svg)

## Beagle Web

`\C3 -  Component\Beagle Web`

[C4Model](#Beagle-C4-Model)

O Beagle Web é separado em duas partes principais a biblioteca frontend e o core :

* A biblioteca frontend é responsável por criar a ponte entre cada framework que usa o Beagle e o Core
* Cada framework (Angular, React, Flutter) contém os componentes padrões de interface do Beagle além de um utilitário que faz a ligação com o Core e apresenta as telas nativamente.
* O Beagle Web Core inicia seu processo através do componente Beagle Service, ele contém, processa e organiza tudo que é padrão da biblioteca como componentes, serviços.
* O componente que orquestra as telas é o Beagle View. Ele inicia serviços de navegação, renderização e estes por sua vez usam todos os utilitários disponíveis para tratar e traduzir cada tela que será apresentada.

![diagram](c3.svg)