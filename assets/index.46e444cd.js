import{a as $}from"./vendor.9cc08bd5.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};U();var L="/assets/github.e89b5769.svg",N="/assets/neonHub.81bac599.png",j="/assets/github1.bf64e00a.png",E="/assets/location.6df08e0f.svg",M="/assets/blog.b3fc5f5a.svg",S="/assets/twitter.03d275e9.svg",k="/assets/company.6bd18cc2.svg";const H=[L,N,j];class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
  
    `}async getInformationUSerGithub(r){if(!!r)try{return await $.get(`https://api.github.com/users/${r}`).then(s=>s.data).then(s=>{const{login:e,name:t,created_at:o,bio:d,public_repos:u,followers:h,following:m,location:p,blog:f,twitter_username:g,company:b,html_url:_}=s,y=d||"No  hay description disponible",v=new Date(o).toLocaleDateString("es-ES"),w=g||"No hay twitter",x=Math.floor(Math.random()*3);return{login:e,name:t,joined:v,repos:u,followers:h,following:m,location:p,blog:f,twitter:w,company:b,description:y,num:x,profileUrl:_}})}catch{this.errUser()}}errUser(r){return this.renderNouser()}connectedCallback(){this.usergithub=this.getAttribute("user"),this.getInformationUSerGithub(this.usergithub).then(r=>{if(this.user=r,r===void 0||!r)return this.renderNouser();this.render()})}renderNouser(){this.shadowRoot.innerHTML=`
    <no-user user="${this.usergithub}"></no-user>
    `}render(){this.shadowRoot.innerHTML=`
        <style>${i.styles}</style>
 <div class='container'>
     <div class='render'>
        <header class="user">
            <img src="${H[this.user.num]}"" alt="usergit" class="user__img" lazy="loaded" />
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
            <p class="footer__location"> <img src="${E}" alt="location"  /> ${this.user.location}</p>
            <p class="footer__blog"><img src="${M}" alt="blog "/> ${this.user.blog} </p>
            <p class="footer__twitter"> <img src="${S}" alt="twitter"/>${this.user.twitter}</p>
            <p class="footer__company"><img src="${k}">${this.user.company}</p>
        </footer>
     </div>
     
</div>
    `}}customElements.define("card-user",i);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.user=this.getAttribute("user")||"No User",this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${a.styles}</style>
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
    `}}customElements.define("no-user",a);var T="/assets/search.96979a52.svg";class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.getDom()}getDom(){const r=this.shadowRoot.querySelector(".git"),n=this.shadowRoot.querySelector("#carduser");!r||(n.innerHTML='<card-user user="octocat"></card-user>',r.addEventListener("submit",s=>{s.preventDefault();const e=s.target.search.value;if(!e)return this.noUser();n.innerHTML=`<card-user user='${e}'></card-user>`}))}noUser(){const r=this.shadowRoot.querySelector("#carduser");r.innerHTML="<no-user></no-user>"}render(){this.shadowRoot.innerHTML=`
        <style>${c.styles}</style>
 <div class='container'>
     <div class='render'>
     <div class="cardGithub">
        <header class="header">
              <section class="header__info">
                  <h3 class="header__info--title">
                  DavGit
                </h3>

               </section>
               <section class="search">
                  <form  id="searchgit" class="header__search git">
                      <img src="${T}" alt="git"  class="header__search--image"/>
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
    `}}customElements.define("github-user",c);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
       
        .container{
            box-sizing:border-box;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }


    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
        <style>${l.styles}</style>
 <div class='container'>
     <div class='renderContainer'>
            <github-user></github-user>
     </div>
        <slot></slot>
</div>
    `}}customElements.define("container-app",l);
