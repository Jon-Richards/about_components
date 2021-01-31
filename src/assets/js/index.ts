import { Foo } from './foo/foo';
import { LitElement, html } from 'lit-element';

const myTest = new Foo();
myTest.greeting('bar');

class HelloWorld extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="/assets/css/normalize.css" />
      <style>
        :host {
          display: inline-block;
          padding: 1.5rem 2rem;
          background-color: #000;
        }
        h2 {
          font-weight: 100;
          border: thin dashed #fff;
          padding: 1rem;
        }
      </style>
      <div>
        <h2>This custom tag is rendered with LitElement!</h2>
      </div>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
