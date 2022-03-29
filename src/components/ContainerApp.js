import './Gihub'
class ContainerApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
       
        .container{
            box-sizing:border-box;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }


    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ContainerApp.styles}</style>
 <div class='container'>
     <div class='renderContainer'>
            <github-user></github-user>
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('container-app', ContainerApp);