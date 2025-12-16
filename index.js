/* empty css                      */import{S as y,A as F}from"./assets/vendor-BcYzBEYI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,a=0;const o=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},n=()=>window.scrollTo(t,a);function i(){t=e.scrollLeft,a=e.scrollTop,window.addEventListener("scroll",n,{passive:!1}),window.addEventListener("wheel",o,{passive:!1}),document.addEventListener("wheel",o,{passive:!1,capture:!0}),window.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchmove",o,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function H(){window.removeEventListener("scroll",n),window.removeEventListener("wheel",o),document.removeEventListener("wheel",o,{capture:!0}),window.removeEventListener("touchmove",o),document.removeEventListener("touchmove",o,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=H})();const w=document.querySelector('[data-id="header__container"]');window.addEventListener("scroll",()=>{window.scrollY>10?w.classList.add("header__scrolled"):w.classList.remove("header__scrolled")});const x=document.querySelector('[data-id="mobile-menu"]'),j=document.querySelector('[data-id="mobile-btn"]'),L=document.querySelector('[data-id="nav-icon"]'),N=document.querySelectorAll('[data-id="nav__item-link"]'),O=document.querySelector('[data-id="header__logo"]');let m=!1;j.addEventListener("click",()=>{L.classList.toggle("open"),x.classList.toggle("open"),m?(unlockScroll(),m=!1):(lockScroll(),m=!0)});N.forEach(e=>e.addEventListener("click",S));O.addEventListener("click",S);function S(){L.classList.remove("open"),x.classList.remove("open"),unlockScroll(),m=!1}const R=document.querySelectorAll('[data-id="title-frame-path"]'),E=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),E.unobserve(t.target))})},{threshold:.5});R.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,E.observe(e)});const l=1200;let g=window.innerWidth<l;const D=[];function V(){const e=window.innerWidth<l;e!==g&&(g=e,D.forEach(t=>t()))}window.addEventListener("resize",V);function Z(e){D.push(e)}function $(){return g}function u(e,t,a){const{mobile1x:o,mobile2x:s,desktop1x:n,desktop2x:i}=e;return`
        <picture class="${a}__card-picture">
        <source
          media="(min-width: ${l}px)"
          srcset="
            ${n}    1x,
            ${i}    2x
          "
        />
        <source
          media="(max-width: ${l-.02}px)"
          srcset="
            ${o}    1x,
            ${s}    2x
          "
        />
        <img
          class="${a}__card-img"
          src="${o}"
          alt="${t}"
          loading="lazy"
          onload="this.dataset.loaded='true'"
        />
      </picture>
        `}const b="features",r=document.querySelector('[data-id="features__cards-deck"]'),A=document.querySelector('[data-id="features__open-cards"]');function z(e){return e.map(({images:t,alt:a})=>`
        <li class="features__deck-item">
            ${u(t,a,b)}
        </li>`).join("")}const G=`<svg
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
</svg>`;function J({mobile1x:e,mobile2x:t,desktop1x:a,desktop2x:o}){const s=window.devicePixelRatio||1;return $()?s>1?t:e:s>1?o:a}function M(e){return e.map(({title:t,images:a,id:o,description:s})=>`<div class="features__card">

        ${G.replaceAll("${cardSrc}",J(a)).replaceAll("${id}",o)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const K="/assets/strategic-combat-mobile-BTZzRrZB.webp",Y="/assets/strategic-combat-mobile@2x-DS9SiDBQ.webp",Q="/assets/strategic-combat-desktop-mRfM3R0Y.webp",X="/assets/strategic-combat-desktop@2x-D5SUhHB2.webp",U="/assets/campaign-map-mobile-DPFsKY-4.webp",W="/assets/campaign-map-mobile@2x-u5VDX5aM.webp",ee="/assets/campaign-map-desktop-Cy-rLMZY.webp",te="/assets/campaign-map-desktop@2x-BuK7k1wr.webp",se="/assets/hero-system-mobile-B89HGxP2.webp",oe="/assets/hero-system-mobile@2x-DgPVQBr-.webp",ae="/assets/hero-system-desktop-DZVPXgd4.webp",ne="/assets/hero-system-desktop@2x-BR3OoXaM.webp",ie="/assets/interactive-storytelling-mobile-CH0eSE72.webp",re="/assets/interactive-storytelling-mobile@2x-DcNqEmw2.webp",le="/assets/interactive-storytelling-desktop-DvJyfyMK.webp",ce="/assets/interactive-storytelling-desktop@2x-CJSprJ33.webp",de="/assets/dynasty-management-mobile-mFW1Bq0Z.webp",me="/assets/dynasty-management-mobile@2x-DS5Qswgy.webp",pe="/assets/dynasty-management-desktop-DrLoWrmv.webp",ue="/assets/dynasty-management-desktop@2x-DksHcomD.webp",_e="/assets/stunning-visuals-mobile-Cu6hTBlE.webp",ge="/assets/stunning-visuals-mobile@2x-xmGTcX_3.webp",be="/assets/stunning-visuals-desktop-Di2_fIt6.webp",fe="/assets/stunning-visuals-desktop@2x-B3ZZXvet.webp",we="/assets/pvp-and-pve-mobile-BjQhEDxB.webp",ve="/assets/pvp-and-pve-mobile@2x-DScJs20Z.webp",ke="/assets/pvp-and-pve-desktop-Br0Plml2.webp",he="/assets/pvp-and-pve-desktop@2x-CfRsF2eL.webp",v=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:we,mobile2x:ve,desktop1x:ke,desktop2x:he},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:_e,mobile2x:ge,desktop1x:be,desktop2x:fe},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:de,mobile2x:me,desktop1x:pe,desktop2x:ue},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:se,mobile2x:oe,desktop1x:ae,desktop2x:ne},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:ie,mobile2x:re,desktop1x:le,desktop2x:ce},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:U,mobile2x:W,desktop1x:ee,desktop2x:te},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:K,mobile2x:Y,desktop1x:Q,desktop2x:X},alt:"angry fighters"}];function ye(e){return e.map(({images:t,alt:a,title:o,description:s})=>`<li class="features__deck-item framed">
        ${u(t,a,b)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${o}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}let p=!1;function xe(){if(p)return;p=!0,r.style.cursor="default";const e=r.lastElementChild;return e.classList.add("transition-anim"),e}function Le(e){e.style.right="-603px"}function Se(e,t,a){e.push(t[t.length-1]),t.pop(),t.unshift(e[0]),e.shift(),A.innerHTML=`${M([e[0]])}`;const o=document.querySelector('[data-id="features__open-card-image"]'),s=document.querySelector('[data-id="features__card-title"]'),n=document.querySelector('[data-id="features__card-text"]');Ee(s,n),s.textContent=e[0].title,n.textContent=e[0].description,o.onload=i,o.complete&&i();function i(){a.remove(),$e(t[0]),requestAnimationFrame(()=>{q(),De(s,n),r.style.cursor="pointer"}),p=!1}}function Ee(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function De(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function $e({images:e,alt:t}){r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${u(e,t,b)}
    </li>`)}function q(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}let c=null;B();Z(()=>B());function B(){if(c&&(r.removeEventListener("click",c),c=null),$())r.style.cursor="default",r.innerHTML=ye(v);else{r.style.cursor="pointer";let e=[...v];const t=[];t.push(e[e.length-1]),e.pop(),A.innerHTML=`${M(t)}`,q(),r.innerHTML=z(e),c=function(){if(p)return;const o=xe();setTimeout(()=>{Le(o)},1e3),setTimeout(()=>{Se(t,e,o)},2e3)},r.addEventListener("click",c)}}function Ae(e){return e.map(({title:t,description:a,images:o,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${a}</p>
      ${u(o,s,Xe)}
    </li>
    `).join("")}const Me="/assets/general-kairos-mobile-DJ922N2P.webp",qe="/assets/general-kairos-mobile@2x-qirc_chg.webp",Be="/assets/general-kairos-desktop-B8SupH0m.webp",Ce="/assets/general-kairos-desktop@2x-OHczgy2Y.webp",Pe="/assets/lady-an-may-mobile-BqIbQIkN.webp",Te="/assets/lady-an-may-mobile@2x-B4tekgVH.webp",Ie="/assets/lady-an-may-desktop-DsRoqo3L.webp",He="/assets/lady-an-may-desktop@2x-DKMaG2mC.webp",Fe="/assets/master-shen-mobile-DDNazGbx.webp",je="/assets/master-shen-mobile@2x-DxFt6xQU.webp",Ne="/assets/master-shen-desktop-PcCHPPVr.webp",Oe="/assets/master-shen-desktop@2x-Cl1VmYdN.webp",Re="/assets/prince-riku-mobile-CPYgmzLF.webp",Ve="/assets/prince-riku-mobile@2x-im0_sHJd.webp",Ze="/assets/prince-riku-desktop-BQQ9ST0t.webp",ze="/assets/prince-riku-desktop@2x-Cng5y_gA.webp",Ge="/assets/the-empress-mobile-ZgIcHBeY.webp",Je="/assets/the-empress-mobile@2x-DesvX9Eg.webp",Ke="/assets/the-empress-desktop-BzFKCk5Z.webp",Ye="/assets/the-empress-desktop@2x-D2MlDnoE.webp",Qe=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:Me,mobile2x:qe,desktop1x:Be,desktop2x:Ce},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Pe,mobile2x:Te,desktop1x:Ie,desktop2x:He},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Fe,mobile2x:je,desktop1x:Ne,desktop2x:Oe},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Re,mobile2x:Ve,desktop1x:Ze,desktop2x:ze},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ge,mobile2x:Je,desktop1x:Ke,desktop2x:Ye},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Xe="heroes",Ue=document.querySelector('[data-id="heroes__cards-list"]'),We=document.querySelector('[data-id="heroes__prev-btn"]'),et=document.querySelector('[data-id="heroes__next-btn"]'),tt=document.querySelector('[data-id="heroes__swiper"]'),st=document.querySelector('[data-id="heroes__sw-pagin-container"]');Ue.insertAdjacentHTML("beforeend",Ae(Qe));ot();function ot(){new y(tt,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:We,nextEl:et},pagination:{el:st},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const k="/assets/sprite-BFvqvIOA.svg";function C(e){return e.map(({name:t,comments:a,grade:o})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${k}#name-frame" xlink:href="${k}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${a}</p>
            </div>
          </div>
          <div class="reviews__rating">${at(Number(o))}</div>
        </li>
      `).join("")}function at(e){if(e<1||e>5)return;let t="";for(let a=e;a>0;a-=1)t+=`<svg
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
            </svg>`;for(let a=5-e;a>0;a-=1)t+=`<svg
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
            </svg>`;return t}const h=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function P(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(h)),h)}const T=document.querySelector('[data-id="reviews__cards-list"]'),nt=document.querySelector('[data-id="reviews__prev-btn"]'),it=document.querySelector('[data-id="reviews__next-btn"]'),rt=document.querySelector('[data-id="reviews__swiper"]');T.insertAdjacentHTML("beforeend",C(P()));lt();function lt(){new y(rt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:nt,nextEl:it},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const ct=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const f=document.querySelector('[data-id="review-form"]'),dt=document.querySelector('[data-id="review-form__close-btn"]'),I=document.querySelector('[data-id="review-form__form"]'),mt=document.querySelector('[data-id="review-form__textarea-comm"]');ct.addEventListener("click",pt);dt.addEventListener("click",_);I.addEventListener("submit",ut);document.addEventListener("keydown",e=>{e.key==="Escape"&&_()});f.addEventListener("click",e=>{e.target===e.currentTarget&&_()});mt.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function pt(){f.classList.add("is-open"),lockScroll()}function _(){f.classList.remove("is-open"),unlockScroll()}function ut(e){e.preventDefault();const t=_t();gt(t),_()}function _t(){const e=new FormData(I);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function gt(e){const t=P();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),T.insertAdjacentHTML("afterbegin",C([e]))}new F('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
