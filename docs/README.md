# C4Model

* [**C4Model**](/docs/README.md)
  * [C1 -  Context](/docs/C1%20-%20%20Context/README.md)
  * [C2 - Container](/docs/C2%20-%20Container/README.md)
  * [C3 -  Component](/docs/C3%20-%20%20Component/README.md)
    * [Beagle Android](/docs/C3%20-%20%20Component/Beagle%20Android/README.md)
    * [Beagle Backend](/docs/C3%20-%20%20Component/Beagle%20Backend/README.md)
    * [Beagle Web](/docs/C3%20-%20%20Component/Beagle%20Web/README.md)
    * [Beagle iOS](/docs/C3%20-%20%20Component/Beagle%20iOS/README.md)

---

- [C1 -  Context](/docs/C1%20-%20%20Context/README.md)

- [C2 - Container](/docs/C2%20-%20Container/README.md)

- [C3 -  Component](/docs/C3%20-%20%20Component/README.md)

---



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