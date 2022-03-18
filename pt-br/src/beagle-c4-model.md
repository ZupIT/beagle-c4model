
# **Overview**

Por definição, arquitetura de software é a estratégia tecnológica de um produto e/ou serviço, definindo as partes que compõem um sistema. E, como toda estratégia, é fundamental que ela esteja em constante atualização, afinal um planejamento sem visualização tenderá a ser falho.

<b><i>
  Esse modelo referencia a versão 2.0 do Beagle<br>
  Para verificar o modelo da versão anterior, acesse nosso repositório no [GitHub](https://github.com/ZupIT/beagle-c4model)
</i></b>

## Documentação da arquitetura

Documentar a arquitetura de um projeto é um processo que exige tempo, conhecimento de ferramentas e técnicas para a diagramação. O maior desafio é evitar dois cenários:

* **Cenário 1:** Documentações complexas que ficam confusas, obsoletas, e que acabam perdendo o seu propósito, ou seja, isso é gastar tempo para algo que não será utilizado.

* **Cenário 2:** Documentações com falhas e pouca informação.

Em ambos os casos, o resultado final pode gerar confusão para o usuário.

A visualização da arquitetura é crucial em diversos aspectos e responde várias perguntas, por exemplo:

* Como o meu sistema integra entre eles mesmo e outros sistemas?
* Como consigo escalar a minha aplicação?
* Como garantir a segurança entre as minhas aplicações?

Pensando nisso, o time do Beagle criou uma visualização da nossa arquitetura bastante simples, o C4 Model.

## **O que é o C4 Model?**

 O C4 Model foi criado por Simon Brown e é baseado no 4+1 e UML. O modelo ajuda a resolver problemas da documentação de arquitetura, é dividido em quatro tipos de diagramas, onde cada um possui um nível diferente de detalhes e público alvo. A ideia é trazer mais clareza para o projeto e a cada nível você encontra mais detalhes e informações do que o nível anterior.

## **O que é o Beagle?**

Beagle é uma ferramenta open source que ajuda os desenvolvedores a implementar Server-Driven UI que funcione em múltiplas plataformas.

Ao utilizar o Beagle, desenvolvedores podem:

-Rapidamente alterar o layout, dados, fluxo de navegação, ou até mesmo lógica, apenas alterando código no backend.

-Ser mais independentes das lojas mobile, como App Store e Play Store, porque a maioria das mudanças não precisarão de uma atualização no aplicativo.

-Ter mais confiança de que aplicações se comportarão de forma semelhante em plataformas diferentes, pois o código será compartilhado e padronizado entre backend e frontend.

-Testar facilmente novas hipóteses de negócio ou fazer correções em tempo real nas aplicações para melhorar a experiência dos usuários e receber feedback.
