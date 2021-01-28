Micro Frontends with Custom Element
===================================
This is an example of an application build on micro frontend.

One micro frontend is written in plain javascript [blue.js](./blue.js) and an angular
application [angular-custom-elements](./angular-custom-elements).

Build
-----
Build the angular component as usual (see [README](./angular-custom-elements/README.md)).

Run
---
Use some simple server (e.g [serve](https://github.com/vercel/serve)) and open
[index.html](./index.html).

Design
------

### General

The design is inspired
by [Micro Frontends extending the microservice idea to frontend development](https://micro-frontends.org/)
and
[micro-frontends](https://github.com/neuland/micro-frontends)

Communication between the components is based
on [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

### Javascript comoponent

Just basic custom elements component implemented using
[window.customElements.define](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
.

### Angular component

The angular component is built as a custom component according to
[angular guide](https://angular.io/guide/elements) and
[How to create Angular 6 Custom Elements and Web Components](https://medium.com/@patrick1729/how-to-create-angular-6-custom-elements-web-components-c88814dc6e0a)
. 
