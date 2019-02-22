"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const some_thing_1 = require("./some-thing");
const lit_element_1 = require("lit-element");
console.log(some_thing_1.SomeThing);
class MyElement extends lit_element_1.LitElement {
}
customElements.define('my-element', MyElement);
//# sourceMappingURL=index.js.map