O Beagle Android estabelece a relação entre o Framework Beagle e aplicativos Android. 
É ele quem orquestra a criação de views no ambiente Android a partir dos componentes enviados do Backend.
Nele estarão contidos:
* Componentes default e customizados (botões, textos, campos de textos, etc)
* Ações default e customizadas (Navegação, Alerta, SendRequest, etc)
* Operações default e customizadas (Operadores aritiméticos, Operadores lógicos, etc)

O Diagrama abaixo mostra o "caminho" de um componente dentro de um aplicativo Android que utiliza o Beagle.

O Beagle possuiu um mecanismo de processamento de anotações, que cria o Beagle Setup, onde são registrados os componentes que o Beagle cria no Android, como ações, operações, componentes visuais (como botões, textos), camada de rede, etc. Todos esses são anotados para que o processador possa mapear esses recursos, como por exemplo, o ´@RegisterAction´ é utilizado para registrar ações, ´@RegisterOperation´ para operações e o ´@RegisterWidget´ para componentes.

