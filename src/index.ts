import {SomeThing} from './some-thing';

import {LitElement} from 'lit-element';

console.log(SomeThing);

class MyElement extends LitElement {

}

customElements.define('my-element', MyElement);