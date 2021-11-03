Beagle iOS is a library created to integrate Beagle's system into an existing native Apple iOS systems application.

The key part to understanding the architecture and its application are the components below: 

* **Beagle Config:** Single instance class that stores Beagle's configuration, customizations, and implementations (`Dependencies` property). Its initialization is essential to make the project work and it happens on the `AppDelegate` of the host application.
* **Beagle View Controller and Beagle View:** These are the gateways to Beagle's server-driven screens. **Beagle View Controller** can be directly added to the navigation stack from the `AppDelegate` class and acts as a standalone screen. 
**Beagle View** is an UIView from UIKit. It is possible to add a Beagle screen as a subview of an existing screen, therefore, it becomes dependent on a previously defined view controller or UIView. 
The content of a **Beagle View Controller** is a composition of **Server Driven Components** translated to UIKit.

* **Server Driven Component:** Representation of any Beagle interface element. It can represent both visual elements such as buttons, text, and lists as well as navigation actions, click behaviors, and operations.

* **Network Client:** By default, Beagle iOS provides a strategy to perform remote requests. It gives developers the freedom to implement the most compatible approach to the context of the project, for example, endpoint routing, security rules, and error handling. **Network Client** is responsible for communicating with the implemented resources in the **Beagle Backend**.

* **Support resources:** Beagle iOS provides a customization level of some components. Check out the diagram below, you can notice some components with the "abstract | optional" description, they are able to propagate events to contracted analytics tools or custom screen local storage rules.