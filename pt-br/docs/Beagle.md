# Beagle

* [C4Model](#C4Model)
  * [C1 -  Context](#C1----Context)
  * [C2 - Container](#C2---Container)
  * [C3 -  Component](#C3----Component)
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

[C4Model](#Beagle)

**Nível 1: Diagrama de contexto do sistema**

Esse nível mostra de forma macro a aplicação, os atores, seus papéis e também como eles interagem entre si. O principal objetivo aqui é representar o produto em sua forma mais abstrata.

***Contexto Beagle***

O Beagle é um framework open source que ajuda desenvolvedores a implementar aplicações Server-Driven de uma maneira cross-platform:

* Desenvolvedores podem facilmente criar e prototipar telas frontend usando a biblioteca Beagle Backend e seus utilitários para layout (posicionamento e aparência) e comportamento (ações).
* Uma vez criadas, essas telas podem ser enviadas para aplicações frontend mobile ou web, elas usam a biblioteca do Beagle Frontend para renderizar os layouts.

![diagram](c1.svg)

## C2 - Container

`\C2 - Container`

[C4Model](#Beagle)

**Nível 2: Diagrama de containers do sistema**

Nesse nível mostramos de maneira mais detalhada o sistema descrevendo os seus containers (Não confundir com o Docker) e como eles se comunicam/interagem. Nesse nível é dado ênfase na arquitetura e tecnologias utilizadas. A ideia é mostrar como o sistema é de forma macro. Um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.


***Containers Beagle***

No segundo nível de detalhamento temos os **containers** de `backend` e `frontend`:

* O Beagle Frontend é instalado em aplicações Web e Mobile, que renderizam nativamente as telas recebidas do beagle backend.
* O Beagle Backend é configurado no backend de uma aplicação para facilitar a criação de componentes server driven.



![diagram](c2.svg)

## C3 -  Component

`\C3 -  Component`

[C4Model](#Beagle)

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O MeuProjeto hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model.

- In Progress...

## Beagle Web

`\C3 -  Component\Beagle Web`

[C4Model](#Beagle)

In progress...

![diagram](c3.svg)