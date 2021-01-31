import { Foo } from './foo/foo';
import { LitElement, html } from 'lit-element';

const myTest = new Foo();
myTest.greeting('bar');

class HelloWorld extends LitElement {
  render() {
    return html`
      <div>
        <h2>This custom tag is rendered with LitElement!</h2>
      </div>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
