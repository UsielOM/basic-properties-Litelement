import { LitElement, html } from 'lit-element';

export class NameTag extends LitElement {


    static get properties() {
        return {
            name: {},
        };
    }


    render() {
        return html `Hellow I´m ${this.name}`;
    }
}
customElements.define('name-tag', NameTag);
const tag = document.createElement('name-tag');
tag.name = 'dynamically created';
document.body.appendChild(tag);