/* empty css                      */import{S as w,a as F,A as N}from"./assets/vendor-D22bJHWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,a=0;const n=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},o=()=>window.scrollTo(t,a);function i(){t=e.scrollLeft,a=e.scrollTop,window.addEventListener("scroll",o,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function j(){window.removeEventListener("scroll",o),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=j})();const h=document.querySelector('[data-id="header__container"]');window.addEventListener("scroll",()=>{window.scrollY>10?h.classList.add("header__scrolled"):h.classList.remove("header__scrolled")});const x=document.querySelector('[data-id="mobile-menu"]'),H=document.querySelector('[data-id="mobile-btn"]'),L=document.querySelector('[data-id="nav-icon"]'),O=document.querySelectorAll('[data-id="nav__item-link"]'),R=document.querySelector('[data-id="header__logo"]');let p=!1;H.addEventListener("click",()=>{L.classList.toggle("open"),x.classList.toggle("open"),p?(unlockScroll(),p=!1):(lockScroll(),p=!0)});O.forEach(e=>e.addEventListener("click",S));R.addEventListener("click",S);function S(){L.classList.remove("open"),x.classList.remove("open"),unlockScroll(),p=!1}const K=document.querySelectorAll('[data-id="title-frame-path"]'),E=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),E.unobserve(t.target))})},{threshold:.5});K.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,E.observe(e)});const c=1200;let _=window.innerWidth<c;const A=[];function V(){const e=window.innerWidth<c;e!==_&&(_=e,A.forEach(t=>t()))}window.addEventListener("resize",V);function W(e){A.push(e)}function $(){return _}function u(e,t,a){const{mobile1x:n,mobile2x:s,desktop1x:o,desktop2x:i}=e;return`
        <picture class="${a}__card-picture">
        <source
          media="(min-width: ${c}px)"
          srcset="
            ${o}    1x,
            ${i}    2x
          "
        />
        <source
          media="(max-width: ${c-.02}px)"
          srcset="
            ${n}    1x,
            ${s}    2x
          "
        />
        <img
          class="${a}__card-img"
          src="${n}"
          alt="${t}"
          loading="lazy"
          onload="this.dataset.loaded='true'"
        />
      </picture>
        `}const f="features",r=document.querySelector('[data-id="features__cards-deck"]'),q=document.querySelector('[data-id="features__open-cards"]');function G(e){return e.map(({images:t,alt:a})=>`
        <li class="features__deck-item">
            ${u(t,a,f)}
        </li>`).join("")}const Y=`<svg
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
</svg>`;function z({mobile1x:e,mobile2x:t,desktop1x:a,desktop2x:n}){const s=window.devicePixelRatio||1;return $()?s>1?t:e:s>1?n:a}function M(e){return e.map(({title:t,images:a,id:n,description:s})=>`<div class="features__card">

        ${Y.replaceAll("${cardSrc}",z(a)).replaceAll("${id}",n)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const J="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",U="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",Z="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",Q="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",X="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",ee="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",te="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",se="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",ne="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",ae="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",oe="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",ie="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",re="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",ce="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",le="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",de="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",pe="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",me="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",ue="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",ge="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",_e="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",fe="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",ve="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",he="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",ke="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",be="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ye="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",we="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",k=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:ke,mobile2x:be,desktop1x:ye,desktop2x:we},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:_e,mobile2x:fe,desktop1x:ve,desktop2x:he},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:pe,mobile2x:me,desktop1x:ue,desktop2x:ge},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ne,mobile2x:ae,desktop1x:oe,desktop2x:ie},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:re,mobile2x:ce,desktop1x:le,desktop2x:de},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:X,mobile2x:ee,desktop1x:te,desktop2x:se},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:J,mobile2x:U,desktop1x:Z,desktop2x:Q},alt:"angry fighters"}];function xe(e){return e.map(({images:t,alt:a,title:n,description:s})=>`<li class="features__deck-item framed">
        ${u(t,a,f)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${n}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}let m=!1;function Le(){if(m)return;m=!0,r.style.cursor="default";const e=r.lastElementChild;return e.classList.add("transition-anim"),e}function Se(e){e.style.right="-603px"}function Ee(e,t,a){e.push(t[t.length-1]),t.pop(),t.unshift(e[0]),e.shift(),q.innerHTML=`${M([e[0]])}`;const n=document.querySelector('[data-id="features__open-card-image"]'),s=document.querySelector('[data-id="features__card-title"]'),o=document.querySelector('[data-id="features__card-text"]');Ae(s,o),s.textContent=e[0].title,o.textContent=e[0].description,n.onload=i,n.complete&&i();function i(){a.remove(),qe(t[0]),requestAnimationFrame(()=>{C(),$e(s,o),r.style.cursor="pointer"}),m=!1}}function Ae(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function $e(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function qe({images:e,alt:t}){r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${u(e,t,f)}
    </li>`)}function C(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}let l=null;B();W(()=>B());function B(){if(l&&(r.removeEventListener("click",l),l=null),$())r.style.cursor="default",r.innerHTML=xe(k);else{r.style.cursor="pointer";let e=[...k];const t=[];t.push(e[e.length-1]),e.pop(),q.innerHTML=`${M(t)}`,C(),r.innerHTML=G(e),l=function(){if(m)return;const n=Le();setTimeout(()=>{Se(n)},1e3),setTimeout(()=>{Ee(t,e,n)},2e3)},r.addEventListener("click",l)}}function Me(e){return e.map(({title:t,description:a,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${a}</p>
      ${u(n,s,Qe)}
    </li>
    `).join("")}const Ce="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Be="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Te="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",De="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Ie="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Pe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",je="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Fe="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Ne="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",He="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Oe="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Re="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Ke="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Ve="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",We="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Ge="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Ye="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",ze="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Je="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Ue="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ze=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:Ce,mobile2x:Be,desktop1x:Te,desktop2x:De},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Ie,mobile2x:Pe,desktop1x:je,desktop2x:Fe},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Ne,mobile2x:He,desktop1x:Oe,desktop2x:Re},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ke,mobile2x:Ve,desktop1x:We,desktop2x:Ge},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ye,mobile2x:ze,desktop1x:Je,desktop2x:Ue},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Qe="heroes",Xe=document.querySelector('[data-id="heroes__cards-list"]'),et=document.querySelector('[data-id="heroes__prev-btn"]'),tt=document.querySelector('[data-id="heroes__next-btn"]'),st=document.querySelector('[data-id="heroes__swiper"]'),nt=document.querySelector('[data-id="heroes__sw-pagin-container"]');Xe.insertAdjacentHTML("beforeend",Me(Ze));at();function at(){new w(st,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:et,nextEl:tt},pagination:{el:nt},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const b="/stp-9255/assets/sprite-BFvqvIOA.svg";function T(e){return e.map(({name:t,comments:a,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${b}#name-frame" xlink:href="${b}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${a}</p>
            </div>
          </div>
          <div class="reviews__rating">${ot(Number(n))}</div>
        </li>
      `).join("")}function ot(e){if(e<1||e>5)return;let t="";for(let a=e;a>0;a-=1)t+=`<svg
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
            </svg>`;return t}const y=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function D(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(y)),y)}const I=document.querySelector('[data-id="reviews__cards-list"]'),it=document.querySelector('[data-id="reviews__prev-btn"]'),rt=document.querySelector('[data-id="reviews__next-btn"]'),ct=document.querySelector('[data-id="reviews__swiper"]');I.insertAdjacentHTML("beforeend",T(D()));lt();function lt(){new w(ct,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:it,nextEl:rt},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}async function dt(){const{data:e}=await F.get("https://stp-9255-backend.onrender.com/reviews");return e.data}dt();const pt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const v=document.querySelector('[data-id="review-form"]'),mt=document.querySelector('[data-id="review-form__close-btn"]'),P=document.querySelector('[data-id="review-form__form"]'),ut=document.querySelector('[data-id="review-form__textarea-comm"]');pt.addEventListener("click",gt);mt.addEventListener("click",g);P.addEventListener("submit",_t);document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});v.addEventListener("click",e=>{e.target===e.currentTarget&&g()});ut.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function gt(){v.classList.add("is-open"),lockScroll()}function g(){v.classList.remove("is-open"),unlockScroll()}function _t(e){e.preventDefault();const t=ft();vt(t),g()}function ft(){const e=new FormData(P);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function vt(e){const t=D();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),I.insertAdjacentHTML("afterbegin",T([e]))}new N('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
