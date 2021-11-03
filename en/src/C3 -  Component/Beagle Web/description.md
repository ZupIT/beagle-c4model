Beagle Web is divided into two main parts: fronted and core libraries:

* The frontend library is responsible for creating the bridge between each framework that uses Beagle and Core.
* Every framework (Angular, React, Flutter) contains the default Beagle interface components. They also have a utility that makes a connection with Core and displays screens natively. 
* Beagle Web Core starts its process through a Beagle Service component. It processes and organizes every library default, such as components and services. 
* Beagle View orchestrates screens. It starts the navigation services, rendering, and uses every available utility to handle and translate each screen.
