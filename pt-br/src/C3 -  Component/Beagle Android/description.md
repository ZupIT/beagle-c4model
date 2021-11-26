O Beagle Android estabelece a relação entre o Framework Beagle e aplicativos Android.

É ele quem orquestra a criação de views no ambiente Android a partir dos componentes recebidos do Backend.

Os componentes do Beagle são:

* Componentes visuais default e customizados (botões, textos, campos de textos, etc)
* Ações default e customizadas (Navegação, Alerta, SendRequest, etc)
* Operações default e customizadas (Operadores aritiméticos, Operadores lógicos, etc)

O diagrama abaixo mostra o "caminho" que um componente "percorre" dentro de um aplicativo Android que utiliza o Beagle.

O Beagle possuiu um mecanismo de **processamento de anotações** que cria, inicialmente, o arquivo de configuração do framework chamado BeagleSetup.

Este arquivo é gerado automaticamente quando o projeto é montado (build) pela primeira vez e, nele, são registrados os componentes criados no Android, como ações, operações, componentes visuais (botões, textos, etc), camada de rede, dentre outros.

Todos esses componentes são anotados para que o processador possa mapeá-los como, por exemplo:

* O `@RegisterAction`, utilizado para registrar ações.
* O `@RegisterOperation`, usado para registrar operações.
* O `@RegisterWidget` para registro de componentes visuais.
