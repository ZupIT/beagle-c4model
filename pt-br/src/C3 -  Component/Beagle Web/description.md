O Beagle Web é separado em duas partes principais:

1. A biblioteca frontend 
2. A biblioteca web core (Beagle Web Core)

* A **biblioteca frontend** é responsável por criar a ponte entre cada framework que usa o Beagle e o Core. Cada framework (Angular, React, Flutter) contém os componentes padrões de interface do Beagle além de um utilitário que faz a ligação com o Core e apresenta as telas nativamente.

* O **Beagle Web Core** inicia seu processo através do componente Beagle Service, em que ele contém, processa e organiza tudo que é padrão da biblioteca como componentes, serviços. O componente que orquestra as telas é o Beagle View. Ele inicia serviços de navegação, renderização e estes, por sua vez, usam todos os utilitários disponíveis para tratar e traduzir cada tela que será apresentada.