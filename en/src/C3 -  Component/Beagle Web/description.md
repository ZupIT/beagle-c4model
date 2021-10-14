The Beagle Web is split in two main parts, the frontend library and the core:

* The frontend library is responsible for creating the bridge between each framework using the Beagle and the core.
* Each framework (Angular, React, Flutter) contains its own definitions for the default components and a helper that connects with the Core to present the screens natively.
* The Beagle Web Core starts its process through the Beagle Service component. It contains, process and organiza everything that is default to the library like components and services.
* The component that manages the screens is the Beagle View. It starts the services for navigations and rendering these which uses all the available helpers to treat and parse each screen to be presented