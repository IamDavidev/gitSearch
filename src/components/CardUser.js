import axios from 'axios';

import git from '../assets/github.svg';
import git2 from '../assets/neonHub.png'
import git3 from '../assets/github1.png'

import location from '../assets/location.svg'
import blog from '../assets/blog.svg'
import twitter from '../assets/twitter.svg'
import company from '../assets/company.svg'


const gitUsers = [
  git,
  git2,
  git3,
]

class CardUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{

        }
        p{
          margin:0;
          padding:0;
        }
        .container{
            background-color:var(--color--card);
            margin:.5rem 1rem;
            padding:1rem;
            border-radius:1rem;
        }   
        .user{
            display:flex;
            align-items:center;
            margin-bottom:1rem;
        }
         .user__img{
           width:60px;
           margin: .5rem 1rem;
           border-radius:1rem;
         }
         .user__info{
           display:flex;
           flex-direction:column;
           align-items:flex-start;
          justify-content:center;
            gap:.2rem;
         }
         .user__info--name{
            font-size:1.2rem;
            margin:0;
         }
         .user__info--login{
           font-weight:700;
           color:var(--color--effect);
           text-decoration:none;
           cursor:pointer;
         }
         .joinedDate{
           font-weight:400;
           font-size:.8rem
         }

         .main{
           display:flex;
           flex-direction:column;
           gap:1rem;
           margin: 1.5rem 0 
         }

         .main__description{
           min-height:3rem
         }

        .main__info{
          background: var(--background--color);
          display:flex;
          alignItems: center;
          justify-content:space-evenly;
          border-radius:1rem;
          padding:1rem;
        }

        .main__info > p {
          font-size:.8rem;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:.5rem;
        }

        .main__info > p > .spanInfo{
          font-size:1rem;
          font-weight:bold;
        }

        .footer{
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          justify-content:center;
          gap:.5rem;
        }

        .footer > P{
          display:flex;
          align-items:flex-start;
          justify-content:center;
          gap:1rem;
        }
  
    `;
  }

  static get stylesNoUser() {
    return /*css*/ `
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

  async getInformationUSerGithub(user) {
    if (!user) {
      return;
    }

    try {
      const res = await axios
        .get(`https://api.github.com/users/${user}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data)
          const {
            login,
            name,
            created_at,
            bio,
            public_repos,
            followers,
            following,
            location,
            blog,
            twitter_username,
            company,
            html_url,
          } = data;

          const description = bio || 'No  hay description disponible';
          const joined = new Date(created_at).toLocaleDateString('es-ES');
          const twitter = twitter_username || 'No hay twitter';
          const numRandom = Math.floor(Math.random() * 3)

          return {
            login,
            name,
            joined,
            repos: public_repos,
            followers,
            following,
            location,
            blog,
            twitter,
            company,
            description,
            num: numRandom,
            profileUrl: html_url,
          };

        });
      return res;

    } catch (error) {
      this.errUser(error);
    }
  }

  errUser(err) {
    console.error(err);
  }

  connectedCallback() {
    this.usergithub = this.getAttribute('user');
    this.getInformationUSerGithub(this.usergithub).then((data) => {
      this.user = data;
      if (data === undefined || !data) return this.renderNouser();
      this.render();
    });
  }
  renderNouser() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>${CardUser.stylesNoUser}</style>
    <div class="containerNouser">
      <p class="textNoUser">No hay informacion disponible</p>
    </div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${CardUser.styles}</style>
 <div class='container'>
     <div class='render'>
        <header class="user">
            <img src="${gitUsers[this.user.num]}"" alt="usergit" class="user__img" lazy="loaded" />
            <section class="user__info">
                <h2 class="user__info--name">${this.user.name}</h2>
                <a class="user__info--login" href="${this.user.profileUrl}" target="_blank">@${this.user.login}</a>
                <p class="user__info--joined"><span class="joinedDate">${this.user.joined}</span></p>
            </section>
        </header>
        <section class="main">
            <p class="main__description ">
            ${this.user.description}
            </p>
            <div class="main__info">
                <p class="main__info--repos">
                    <span>Repos</span>
                    <span class="spanInfo">${this.user.repos}</span>
                </p>
                <p class="main__info--followers">
                    <span>Followers</span>
                    <span class="spanInfo">${this.user.followers}</span>
                </p>
                <p class="main__info--following">
                    <span>Following</span>
                    <span class="spanInfo">${this.user.following}</span>
                </p>
            </div>
        </section >
        <footer class="footer">
            <p class="footer__location"> <img src="${location}" alt="location"  /> ${this.user.location}</p>
            <p class="footer__blog"><img src="${blog}" alt="blog "/> ${this.user.blog} </p>
            <p class="footer__twitter"> <img src="${twitter}" alt="twitter"/>${this.user.twitter}</p>
            <p class="footer__company"><img src="${company}">${this.user.company}</p>
        </footer>
     </div>
        <slot></slot>
</div>
    `;
  }
}
customElements.define('card-user', CardUser);
