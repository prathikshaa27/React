import React from 'react'

class WebComponent extends HTMLElement{
    connectedCallback(){
        const date = new Date()
        this.textContent= date.toLocaleDateString;

    }
}
customElements.define('current-date',WebComponent);
