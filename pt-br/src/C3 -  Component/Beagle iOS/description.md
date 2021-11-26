O Beagle iOS é uma biblioteca que tem como finalidade integrar o sistema Beagle em um projeto existente de aplicativo nativo dos sistemas Apple iOS.

As peças-chave para entendimento da arquitetura e sua aplicação são os componentes abaixo:

* **Beagle Config:** classe de instância única que armazena todas as configurações, customizações e implementações do Beagle (propriedade `Dependencies`). Sua inicialização é essencial para o funcionamento do projeto e ocorre no `AppDelegate` do aplicativo hospedeiro.

* **Beagle View Controller e Beagle View:** são as "portas de entrada" para as telas server-driven do Beagle. O **Beagle View Controller** pode ser adicionado na pilha de navegação diretamente a partir da classe `AppDelegate` e age como uma tela independente. Já **Beagle View** é uma UIView do UIKit, que possibilita adicionar uma tela Beagle como subview de uma tela existente, sendo assim, torna-se dependente de um view controller ou UIView previamente definidos. O conteúdo de um **Beagle View Controller** é uma composição de **Server-Driven Components** traduzidos para UIKit.

* **Server-Driven Component:** representação de qualquer elemento de interface do Beagle. Ele pode representar tanto elementos visuais como botões, textos e listas quanto ações de navegação, comportamentos de clique e operações.

* **Network Client:** por padrão, o Beagle iOS não provê uma estratégia para realização de requisições remotas, dando a liberdade aos desenvolvedores implementarem a abordagem mais compatível com o contexto do projeto, como: direcionamento de entpoints, regras de segurança e tratamento de erros. O **Network Client** fica responsável por se comunicar com os recursos implementados no **Beagle Backend**.

* **Recursos de apoio:** o Beagle iOS provê certo nível de customização de alguns componentes de projeto. Ao observar o diagrama abaixo, é possível notar alguns componentes com a descrição "abstrato | opcional". Tais componentes são meios de propagar eventos para ferramentas de analytics contratadas ou regras customizadas de armazenamento local das telas.