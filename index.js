/* empty css                      */import{S as L,a as R,A as K}from"./assets/vendor-D22bJHWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=p=>p.preventDefault(),s=p=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(p.key)&&p.preventDefault()},a=()=>window.scrollTo(t,o);function r(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",a,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function O(){window.removeEventListener("scroll",a),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=r,window.unlockScroll=O})();const y=document.querySelector('[data-id="header__container"]');window.addEventListener("scroll",()=>{window.scrollY>10?y.classList.add("header__scrolled"):y.classList.remove("header__scrolled")});const l=1200;let f=window.innerWidth<l;const q=[];function V(){const e=window.innerWidth<l;e!==f&&(f=e,q.forEach(t=>t()))}window.addEventListener("resize",V);function E(e){q.push(e)}function A(){return f}const W=document.querySelector('[data-id="hero"]'),Y=document.querySelector('[data-id="about"]'),J=document.querySelector('[data-id="how-to-play"]'),z=document.querySelector('[data-id="features"]'),U=document.querySelector('[data-id="heroes"]'),Z=document.querySelector('[data-id="atmosphere"]'),Q=document.querySelector('[data-id="reviews"]'),X=document.querySelector('[data-id="faq"]'),ee=document.querySelector('[data-id="join"]'),te=document.querySelector('[data-id="footer"]');document.querySelector('[data-id="false-bg"]');const se=document.querySelector('[data-id="false-bg__hero"]'),oe=document.querySelector('[data-id="false-bg__about"]'),ne=document.querySelector('[data-id="false-bg__how-to-play"]'),ae=document.querySelector('[data-id="false-bg__features"]'),re=document.querySelector('[data-id="false-bg__heroes"]'),ie=document.querySelector('[data-id="false-bg__atmosphere"]'),ce=document.querySelector('[data-id="false-bg__reviews"]'),le=document.querySelector('[data-id="false-bg__faq"]'),de=document.querySelector('[data-id="false-bg__join"]'),pe=document.querySelector('[data-id="false-bg__footer"]');function i(e,t){if(!e||!t)return;const o=getComputedStyle(e);return console.log(`${o}: `,o.height),t.style.height=o.height}function B(){i(W,se),i(Y,oe),i(J,ne),i(z,ae),i(U,re),i(Z,ie),i(Q,ce),i(X,le),i(ee,de),i(te,pe)}E(B);const v=document.querySelector('[data-id="mobile-menu"]'),me=document.querySelector('[data-id="mobile-btn"]'),$=document.querySelector('[data-id="nav-icon"]'),ue=document.querySelectorAll('[data-id="nav__item-link"]'),M=document.querySelector('[data-id="mobile-menu__background"]'),ge=document.querySelector('[data-id="header__logo"]');let k,m=!1;me.addEventListener("click",()=>{m=!m,v.style.backgroundPosition="center top",$.classList.toggle("open"),v.classList.toggle("open"),M.classList.toggle("open"),k=document.documentElement.scrollTop,console.log(k),console.log(m),m&&B()});ue.forEach(e=>e.addEventListener("click",C));ge.addEventListener("click",C);function C(){$.classList.remove("open"),v.classList.remove("open"),M.classList.remove("open"),unlockScroll()}const _e=document.querySelectorAll('[data-id="title-frame-path"]'),T=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),T.unobserve(t.target))})},{threshold:.5});_e.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,T.observe(e)});function g(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:a,desktop2x:r}=e;return`
        <picture class="${o}__card-picture">
        <source
          media="(min-width: ${l}px)"
          srcset="
            ${a}    1x,
            ${r}    2x
          "
        />
        <source
          media="(max-width: ${l-.02}px)"
          srcset="
            ${n}    1x,
            ${s}    2x
          "
        />
        <img
          class="${o}__card-img"
          src="${n}"
          alt="${t}"
          loading="lazy"
          onload="this.dataset.loaded='true'"
        />
      </picture>
        `}const h="features",c=document.querySelector('[data-id="features__cards-deck"]'),D=document.querySelector('[data-id="features__open-cards"]');function fe(e){return e.map(({images:t,alt:o})=>`
        <li class="features__deck-item">
            ${g(t,o,h)}
        </li>`).join("")}const ve=`<svg
  class="card-frame-animation"
  data-id="card-frame-animation"
  width="554"
  height="866"
  viewBox="0 0 554 866"
>
  <defs>
    <clipPath id="clip-\${id}">
      <polygon
        id="clip-poly-\${id}"
        data-id="clip-poly"
        points="0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122"
      >
        <animate
          data-anim="clip"
          id="clip-anim-\${id}"
          attributeName="points"
          dur="2s"
          repeatCount="1"
          fill="freeze"
          begin="indefinite"
          values="
            0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
            0,0 66.48,0 83.1,25.98 83.1,25.98 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 543.92,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
            0,0 66.48,0 83.1,25.98 210.52,25.98 226.14,0 537.38,0 554,0 554,28.578 554,381.04 543.92,398.36 543.92,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
            0,0 66.48,0 83.1,25.98 210.52,25.98 226.14,0 537.38,0 554,28.578 554,28.578 554,381.04 543.92,398.36 543.92,582.318 554,599.638 554,866 27.7,866 27.7,866 0,837.122 0,837.122
          "
        />
      </polygon>
    </clipPath>
  </defs>

  <!-- IMAGE -->
  <image
    class="features__open-card-image"
    data-id="features__open-card-image"
    href="\${cardSrc}"
    width="554"
    height="866"
    clip-path="url(#clip-\${id})"
  />

  <!-- FRAME (without clip-path), with own id -->
  <polygon
    id="border-\${id}"
    data-id="border-poly"
    fill="none"
    stroke="var(--main-color)"
    stroke-width="4"
    vector-effect="non-scaling-stroke"
    stroke-linejoin="round"
    stroke-linecap="round"
    clip-path="url(#clip-\${id})"
    points="0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122"
  >
    <animate
      data-anim="border"
      id="border-anim-\${id}"
      attributeName="points"
      dur="2s"
      repeatCount="1"
      fill="freeze"
      begin="indefinite"
      values="
        0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
        0,0 66.48,0 83.1,25.98 83.1,25.98 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 543.92,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
        0,0 66.48,0 83.1,25.98 210.52,25.98 226.14,0 537.38,0 554,0 554,28.578 554,381.04 543.92,398.36 543.92,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122;
        0,0 66.48,0 83.1,25.98 210.52,25.98 226.14,0 537.38,0 554,28.578 554,28.578 554,381.04 543.92,398.36 543.92,582.318 554,599.638 554,866 27.7,866 27.7,866 0,837.122 0,837.122;
      "
    />
  </polygon>
</svg>`;function he({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return A()?s>1?t:e:s>1?n:o}function P(e){return e.map(({title:t,images:o,id:n,description:s})=>`<div class="features__card">

        ${ve.replaceAll("${cardSrc}",he(o)).replaceAll("${id}",n)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const be="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",ye="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",ke="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",we="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",xe="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",Se="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",Le="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",qe="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",Ee="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",Ae="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",Be="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",$e="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",Me="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",Ce="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",Te="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",De="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",Pe="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",je="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",Ie="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",Fe="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",He="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",Ge="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",Ne="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",Oe="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",Re="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",Ke="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",Ve="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",We="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",w=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:Re,mobile2x:Ke,desktop1x:Ve,desktop2x:We},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:He,mobile2x:Ge,desktop1x:Ne,desktop2x:Oe},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:Pe,mobile2x:je,desktop1x:Ie,desktop2x:Fe},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:Ee,mobile2x:Ae,desktop1x:Be,desktop2x:$e},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:Me,mobile2x:Ce,desktop1x:Te,desktop2x:De},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:xe,mobile2x:Se,desktop1x:Le,desktop2x:qe},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:be,mobile2x:ye,desktop1x:ke,desktop2x:we},alt:"angry fighters"}];function Ye(e){return e.map(({images:t,alt:o,title:n,description:s})=>`<li class="features__deck-item framed">
        ${g(t,o,h)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${n}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}let u=!1;function Je(){if(u)return;u=!0,c.style.cursor="default";const e=c.lastElementChild;return e.classList.add("transition-anim"),e}function ze(e){e.style.right="-603px"}function Ue(e,t,o){e.push(t[t.length-1]),t.pop(),t.unshift(e[0]),e.shift(),D.innerHTML=`${P([e[0]])}`;const n=document.querySelector('[data-id="features__open-card-image"]'),s=document.querySelector('[data-id="features__card-title"]'),a=document.querySelector('[data-id="features__card-text"]');Ze(s,a),s.textContent=e[0].title,a.textContent=e[0].description,n.onload=r,n.complete&&r();function r(){o.remove(),Xe(t[0]),requestAnimationFrame(()=>{j(),Qe(s,a),c.style.cursor="pointer"}),u=!1}}function Ze(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function Qe(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Xe({images:e,alt:t}){c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${g(e,t,h)}
    </li>`)}function j(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}let d=null;I();E(()=>I());function I(){if(d&&(c.removeEventListener("click",d),d=null),A())c.style.cursor="default",c.innerHTML=Ye(w);else{c.style.cursor="pointer";let e=[...w];const t=[];t.push(e[e.length-1]),e.pop(),D.innerHTML=`${P(t)}`,j(),c.innerHTML=fe(e),d=function(){if(u)return;const n=Je();setTimeout(()=>{ze(n)},1e3),setTimeout(()=>{Ue(t,e,n)},2e3)},c.addEventListener("click",d)}}function et(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${g(n,s,wt)}
    </li>
    `).join("")}const tt="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",st="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",ot="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",nt="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",at="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",rt="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",it="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",ct="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",lt="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",dt="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",pt="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",mt="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",ut="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",gt="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",_t="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",ft="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",vt="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",ht="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",bt="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",yt="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",kt=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:tt,mobile2x:st,desktop1x:ot,desktop2x:nt},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:at,mobile2x:rt,desktop1x:it,desktop2x:ct},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:lt,mobile2x:dt,desktop1x:pt,desktop2x:mt},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:ut,mobile2x:gt,desktop1x:_t,desktop2x:ft},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:vt,mobile2x:ht,desktop1x:bt,desktop2x:yt},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],wt="heroes",xt=document.querySelector('[data-id="heroes__cards-list"]'),St=document.querySelector('[data-id="heroes__prev-btn"]'),Lt=document.querySelector('[data-id="heroes__next-btn"]'),qt=document.querySelector('[data-id="heroes__swiper"]'),Et=document.querySelector('[data-id="heroes__sw-pagin-container"]');xt.insertAdjacentHTML("beforeend",et(kt));At();function At(){new L(qt,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:St,nextEl:Lt},pagination:{el:Et},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const x="/stp-9255/assets/sprite-BFvqvIOA.svg";function F(e){return e.map(({name:t,comments:o,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${x}#name-frame" xlink:href="${x}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${o}</p>
            </div>
          </div>
          <div class="reviews__rating">${Bt(Number(n))}</div>
        </li>
      `).join("")}function Bt(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                href="#rating__star-icon"
                fill="gold"
                stroke-linejoin="round"
                stroke-linecap="round"
                mask="url(#rating__star-icon-mask)"
              />
            </svg>`;for(let o=5-e;o>0;o-=1)t+=`<svg
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                href="#rating__star-icon"
                fill="none"
                stroke="gold"
                stroke-width="4"
                stroke-linejoin="round"
                stroke-linecap="round"
                mask="url(#rating__star-icon-mask)"
              />
            </svg>`;return t}const S=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function H(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(S)),S)}const G=document.querySelector('[data-id="reviews__cards-list"]'),$t=document.querySelector('[data-id="reviews__prev-btn"]'),Mt=document.querySelector('[data-id="reviews__next-btn"]'),Ct=document.querySelector('[data-id="reviews__swiper"]');G.insertAdjacentHTML("beforeend",F(H()));Tt();function Tt(){new L(Ct,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:$t,nextEl:Mt},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}async function Dt(){const{data:e}=await R.get("https://stp-9255-backend.onrender.com/reviews");return e.data}Dt();const Pt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const b=document.querySelector('[data-id="review-form"]'),jt=document.querySelector('[data-id="review-form__close-btn"]'),N=document.querySelector('[data-id="review-form__form"]'),It=document.querySelector('[data-id="review-form__textarea-comm"]');Pt.addEventListener("click",Ft);jt.addEventListener("click",_);N.addEventListener("submit",Ht);document.addEventListener("keydown",e=>{e.key==="Escape"&&_()});b.addEventListener("click",e=>{e.target===e.currentTarget&&_()});It.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function Ft(){b.classList.add("is-open"),lockScroll()}function _(){b.classList.remove("is-open"),unlockScroll()}function Ht(e){e.preventDefault();const t=Gt();Nt(t),_()}function Gt(){const e=new FormData(N);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function Nt(e){const t=H();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),G.insertAdjacentHTML("afterbegin",F([e]))}new K('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
