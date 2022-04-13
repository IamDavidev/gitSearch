import theme from '../assets/theme.svg'
import './Gihub'
class ContainerApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        .container{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }   
        .btnTheme{
            background:transparent;
            border:none;
            font-size:1.5rem;
        }
        .btnTheme > img{
            width:1.5rem;
        }
    `;
    }

    connectedCallback() {
        this.render();
        this.changeTheme()
    }
    changeTheme() {
        const $btn = this.shadowRoot.querySelector('.btnTheme')
        $btn.addEventListener('click', () => {
            const $container = this.shadowRoot.querySelector('github-user')
            $container.classList.toggle('OnDark')
        })
    }


    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ContainerApp.styles}</style>
        <div class='container'>
            <github-user class="OnDark _">
                <span class="btnTheme">
                    <img src="${theme}" alt="">
                </span>
            </github-user>
        </div>
    `;
    }
}
customElements.define('container-app', ContainerApp);