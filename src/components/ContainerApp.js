import './Gihub'
class ContainerApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`

        :host[dark]{
     
                --background-color: #0ff;
            
        }
       
        .container{
            background: var(--background-color);
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
 <div class='container' dark>
     <div class='renderContainer'>
            <github-user></github-user>
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('container-app', ContainerApp);