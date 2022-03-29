import axios from 'axios';

import './CardUser';

import search from '../assets/search.svg';
import theme from '../assets/theme.svg'

class Github extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }

  static get styles() {
    return /*css*/ `
        :host{

    }
    .header{
      padding:1rem;
    }
    .header__info{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .header__infor--title{
        font-size:1.5rem;
    }

    .header__info--btncolor{
        background:transparent;
        border:none;
        color:var(--text--color);
        text-transform:uppercase;
    }

    .header__info--btncolor > span{
        margin-right:.5rem;
    }

    .header__search{
        background:var(--color--card);
        padding:.5rem;
        border-radius:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:.2rem
    }
    .header__search--image{
        width:3rem;
    }
    .header__search--input{
        width:100%;
        background:transparent;
        border:none;
    }
    .header__search--input:focus{
        outline:none
    }
    .header__search--input::placeholder{
        color:rgb(255 255 255 / .7);

    }
    .header__search--btn{
        background:var(--color--btn);
        border:none;
        color:var(--text--color);
        padding:1rem 1rem;
        border-radius:1rem;
        font-weight:bold;
    }

    #carduser{
      min-height:300px;
    }

    `;
  }

  initSearch() {
    const $cardUser = this.shadowRoot.querySelector('#carduser')

  }

  connectedCallback() {
    this.render();
    this.handleSearch();
    // this.getInformationUSerGithub('octocat')
  }

  handleSearch() {
    const $searchUser = this.shadowRoot.querySelector('.git');
    const $cardUser = this.shadowRoot.querySelector('#carduser')
    if (!$searchUser) return;
    $cardUser.innerHTML = `<card-user user="octocat"></card-user>`;

    $searchUser.addEventListener('submit', (evt) => {

      evt.preventDefault();
      const valueInput = evt.target.search.value;
      $cardUser.innerHTML = `<card-user user='${valueInput}'></card-user>`;
    });

  }


  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${Github.styles}</style>
 <div class='container'>
     <div class='render'>
        <header class="header">
            <section class="header__info">
                <h3 class="header__info--title">
                DavGit
                </h3>
                <button class="header__info--btncolor">
                    <span>
                        light
                    </span>    
                     <img src="${theme}" alt="theme" />
                </button>
             </section>
             <section class="search">
                <form  id="searchgit" class="header__search git">
                    <img src="${search}" alt="git"  class="header__search--image"/>
                    <input 
                    type="" 
                    id="searchGit" 
                    name="search" 
                    class="header__search--input"
                    placeholder="Busca usurios . . . " 
                    />
                    <button class="header__search--btn">
                    Buscar
                 </button>
             </form>
             </section>
        </header>
        <footer id="carduser">
        </footer>
     </div>
        <slot></slot>
</div>
    `;
  }
}
customElements.define('github-user', Github);
