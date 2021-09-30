# Beagle Web

`\C3 -  Component\Beagle Web`

* [C4Model](/docs/README.md)
  * [C1 -  Context](/docs/C1%20-%20%20Context/README.md)
  * [C2 - Container](/docs/C2%20-%20Container/README.md)
  * [C3 -  Component](/docs/C3%20-%20%20Component/README.md)
    * [Beagle Android](/docs/C3%20-%20%20Component/Beagle%20Android/README.md)
    * [Beagle Backend](/docs/C3%20-%20%20Component/Beagle%20Backend/README.md)
    * [**Beagle Web**](/docs/C3%20-%20%20Component/Beagle%20Web/README.md)

---

[C3 -  Component (up)](/docs/C3%20-%20%20Component/README.md)

---

O Beagle Web é separado em duas partes principais a biblioteca frontend e o core :

* A biblioteca frontend é responsável por criar a ponte entre cada framework que usa o Beagle e o Core
* Cada framework (Angular, React, Flutter) contém os componentes padrões de interface do Beagle além de um utilitário que faz a ligação com o Core e apresenta as telas nativamente.
* O Beagle Web Core inicia seu processo através do componente Beagle Service, ele contém, processa e organiza tudo que é padrão da biblioteca como componentes, serviços.
* O componente que orquestra as telas é o Beagle View. Ele inicia serviços de navegação, renderização e estes por sua vez usam todos os utilitários disponíveis para tratar e traduzir cada tela que será apresentada.

![diagram](c3.svg)