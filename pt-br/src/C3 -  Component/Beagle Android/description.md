O Beagle Android estabelece a relação entre o Framework Beagle e aplicativos Android. 
É ele quem orquestra a criação de views no ambiente Android a partir dos componentes enviados do Backend.
Nele estarão contidos:
* Componentes default e customizados (botões, textos, campos de textos, etc)
* Ações default e customizadas (Navegação, Alerta, SendRequest, etc)
* Operações default e customizadas (Operadores aritiméticos, Operadores lógicos, etc)

O Diagrama abaixo mostra o "caminho" de um componente dentro de uma aplicação Android que utiliza o Beagle.

O Beagle possuiu um mecanismo de processamento de anotações, que cria um Beagle Setup, onde são registrados todos os componentes, ações, operações, camada de rede, ou seja, todos os recursos que o Beagle utiliza do Android. Todos esses possuem anotações do tipo ´@RegisterAction´  