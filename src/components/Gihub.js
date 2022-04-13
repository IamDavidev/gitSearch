import './CardUser';
import './NoUser'

import search from '../assets/search.svg';

class Github extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

  }

  static get styles() {
    return /*css*/ `
        :host(.OnDark){
          --background--color: #141c2f;
        --text--color: #fff;
       --color--card: #1f2a48;
       --container--card: #141c2f;1a;
        }
        :host{
          --background--color: #aee9c6;
          --text--color: #000;
          --color--card: #fafafa;
          --container--card: #aee9c6;
        }
        .container{
          background: var(--background--color);
          width:100%;
          min-height:100vh;
          display: flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          margin:0;
          padding:0;

        }

    .header{
      background: var(--background--dark);
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
        padding:.5rem;
        border-radius:1rem;
        color:var(--text--color);
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
      min-height:400px;
    }

    .noUser{
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:2rem;
      border-radius:1rem;
      padding:1rem;
      margin:1rem;

    }
    .noUser > span{
      color:var(--color--btn);
      background: var(--color--card);
      padding:1rem;
      border-radius:1rem;
      text-align:center;
    }
    @media (min-width:768px){
      .cardGithub{
        width:500px
      }
    }
    `;
  }


  connectedCallback() {
    this.render();
    this.getDom();
  }

  getDom() {
    const $searchUser = this.shadowRoot.querySelector('.git');
    const $cardUser = this.shadowRoot.querySelector('#carduser')
    if (!$searchUser) return;

    $cardUser.innerHTML = `<card-user user="itsdavidev"></card-user>`;

    $searchUser.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const valueInput = evt.target.search.value;
      if (!valueInput) return this.noUser();
      $cardUser.innerHTML = `<card-user user='${valueInput}'></card-user>`;
    });

  }

  noUser() {
    const $cardUser = this.shadowRoot.querySelector('#carduser')
    $cardUser.innerHTML = `<no-user></no-user>`;
    return;
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${Github.styles}</style>
 <div class='container'>
     <div class='render'>
     <div class="cardGithub">
        <header class="header">
              <section class="header__info">
                  <h3 class="header__info--title">
                  DavGit
                </h3>
                <slot></slot>
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
     </div>
</div>
    `;
  }
}
customElements.define('github-user', Github);
