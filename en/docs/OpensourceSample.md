# OpensourceSample

* [C4Model](#C4Model)
  * [C1 -  Context](#C1----Context)
  * [C2 - Container](#C2---Container)
  * [C3 -  Component](#C3----Component)
    * [Module 1](#Module-1)

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



**O que é o Meu Projeto?**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus sagittis placerat. Donec venenatis consequat metus ut volutpat. Aliquam gravida, metus accumsan congue finibus, augue tortor porta dui, vitae placerat massa ligula quis sem. Aenean aliquam malesuada tortor sit amet ultricies. Praesent varius euismod condimentum. Etiam sit amet quam interdum, porttitor purus fermentum, tempus lorem. In fringilla tellus nec enim mollis, vitae ullamcorper nulla tincidunt.

## C1 -  Context

`/C1 -  Context`

[C4Model](#OpensourceSample)

É o primeiro nível do nosso desenho. A ideia é mostrar as interações de forma macro, sem muitos detalhes, dando enfoque às comunicações e dependências entre sistemas e usuários que compõem e interagem com o software.



![diagram](c1.svg)

## C2 - Container

`/C2 - Container`

[C4Model](#OpensourceSample)

Nesse nível mostramos de maneira mais detalhada o sistema descrevendo os seus containers (Não confundir com o Docker) e como eles se comunicam/interagem. Nesse nível é dado ênfase na arquitetura e tecnologias utilizadas. A ideia é mostrar como o sistema é de forma macro. Um container pode ser uma aplicação web, um database, um sistema de arquivos, etc.


![diagram](c2.svg)

## C3 -  Component

`/C3 -  Component`

[C4Model](#OpensourceSample)

Nesse nível damos mais um passo nos detalhes em comparação ao Container; descrevendo as partes que compõem os compõe. Nesse nível damos enfase nas interações, responsabilidades e tecnologias utilizadas de maneira mais detalhada que nos níveis anteriores. 

O MeuProjeto hoje é dividido em módulos, sendo cada um deles um container dentro do C4Model.

- Module 1

## Module 1

`/C3 -  Component/Module 1`

[C4Model](#OpensourceSample)

Controla as permissões dos usuários em relação aos recursos existentes nas APIs do Charles.

![diagram](c3.svg)