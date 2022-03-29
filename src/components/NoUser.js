class NoUser extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
          .containerNouser{
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:1rem;
          margin:1rem 3rem;
        }
        .textNoUser{
          text-align:center;
          padding:1rem;
          background: var(--color--card);
          font-size:1.2rem;
          font-weight:700;
          color:var(--color--effect);
          border-radius:1rem;
        }
    `;
    }

    connectedCallback() {
        this.user = this.getAttribute('user') || 'No User';
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${NoUser.styles}</style>
    <div class='containerNouser'>
    <div class='textNoUser'>
        <p> 
           NO HAY UN USUARIO ASI
        </p>
        <p>
           - INTENTA DE NUEVO
        </p>
        <p>
          USER:  ${this.user}
        </p>
     </div>
    </div>
    `;
    }
}
customElements.define('no-user', NoUser);