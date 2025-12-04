/* empty css                      */import{S,a as H,A as O}from"./assets/vendor-D22bJHWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},a=()=>window.scrollTo(t,o);function i(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",a,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function N(){window.removeEventListener("scroll",a),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=N})();const b=document.querySelector('[data-id="header__container"]');window.addEventListener("scroll",()=>{window.scrollY>10?b.classList.add("header__scrolled"):b.classList.remove("header__scrolled")});const m=document.querySelector('[data-id="mobile-menu"]'),R=document.querySelector('[data-id="mobile-btn"]'),E=document.querySelector('[data-id="nav-icon"]'),G=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const A=document.querySelector('[data-id="mobile-menu__background"]'),K=document.querySelector('[data-id="header__logo"]');let y,p=!1;R.addEventListener("click",()=>{m.style.backgroundPosition="center top",E.classList.toggle("open"),m.classList.toggle("open"),A.classList.toggle("open"),p?(unlockScroll(),p=!1):(lockScroll(),p=!0),y=document.documentElement.scrollTop,V(Number(y))});G.forEach(e=>e.addEventListener("click",$));K.addEventListener("click",$);function $(){E.classList.remove("open"),m.classList.remove("open"),A.classList.remove("open"),unlockScroll(),p=!1}function V(e){m.style.backgroundPosition=`center -${e}px`}const W=document.querySelectorAll('[data-id="title-frame-path"]'),q=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),q.unobserve(t.target))})},{threshold:.5});W.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,q.observe(e)});const c=1200;let f=window.innerWidth<c;const v=[];function Y(){const e=window.innerWidth<c;e!==f&&(f=e,v.forEach(t=>t()),console.log(v))}window.addEventListener("resize",Y);function z(e){v.push(e)}function M(){return f}function g(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:a,desktop2x:i}=e;return`
        <picture class="${o}__card-picture">
        <source
          media="(min-width: ${c}px)"
          srcset="
            ${a}    1x,
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
          class="${o}__card-img"
          src="${n}"
          alt="${t}"
          loading="lazy"
          onload="this.dataset.loaded='true'"
        />
      </picture>
        `}const k="features",r=document.querySelector('[data-id="features__cards-deck"]'),C=document.querySelector('[data-id="features__open-cards"]');function J(e){return e.map(({images:t,alt:o})=>`
        <li class="features__deck-item">
            ${g(t,o,k)}
        </li>`).join("")}const U=`<svg
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
</svg>`;function Z({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return M()?s>1?t:e:s>1?n:o}function B(e){return e.map(({title:t,images:o,id:n,description:s})=>`<div class="features__card">

        ${U.replaceAll("${cardSrc}",Z(o)).replaceAll("${id}",n)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const Q="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",X="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",ee="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",te="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",se="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",ne="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",oe="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",ae="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",ie="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",re="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",ce="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",le="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",de="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",pe="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",me="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",ue="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",ge="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",_e="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",fe="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",ve="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ke="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",he="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",be="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",ye="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",xe="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",we="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",Le="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",Se="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",x=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:xe,mobile2x:we,desktop1x:Le,desktop2x:Se},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:ke,mobile2x:he,desktop1x:be,desktop2x:ye},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:ge,mobile2x:_e,desktop1x:fe,desktop2x:ve},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ie,mobile2x:re,desktop1x:ce,desktop2x:le},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:de,mobile2x:pe,desktop1x:me,desktop2x:ue},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:se,mobile2x:ne,desktop1x:oe,desktop2x:ae},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:Q,mobile2x:X,desktop1x:ee,desktop2x:te},alt:"angry fighters"}];function Ee(e){return e.map(({images:t,alt:o,title:n,description:s})=>`<li class="features__deck-item framed">
        ${g(t,o,k)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${n}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}let u=!1;function Ae(){if(u)return;u=!0,r.style.cursor="default";const e=r.lastElementChild;return e.classList.add("transition-anim"),e}function $e(e){e.style.right="-603px"}function qe(e,t,o){e.push(t[t.length-1]),t.pop(),t.unshift(e[0]),e.shift(),C.innerHTML=`${B([e[0]])}`;const n=document.querySelector('[data-id="features__open-card-image"]'),s=document.querySelector('[data-id="features__card-title"]'),a=document.querySelector('[data-id="features__card-text"]');Me(s,a),s.textContent=e[0].title,a.textContent=e[0].description,n.onload=i,n.complete&&i();function i(){o.remove(),Be(t[0]),requestAnimationFrame(()=>{T(),Ce(s,a),r.style.cursor="pointer"}),u=!1}}function Me(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function Ce(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Be({images:e,alt:t}){r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${g(e,t,k)}
    </li>`)}function T(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}let l=null;D();z(()=>D());function D(){if(l&&(r.removeEventListener("click",l),l=null),M())r.style.cursor="default",r.innerHTML=Ee(x);else{r.style.cursor="pointer";let e=[...x];const t=[];t.push(e[e.length-1]),e.pop(),C.innerHTML=`${B(t)}`,T(),r.innerHTML=J(e),l=function(){if(u)return;const n=Ae();setTimeout(()=>{$e(n)},1e3),setTimeout(()=>{qe(t,e,n)},2e3)},r.addEventListener("click",l)}}function Te(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${g(n,s,tt)}
    </li>
    `).join("")}const De="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Ie="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Pe="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",je="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Fe="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Ne="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",He="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Oe="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Re="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Ge="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Ke="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Ve="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",We="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Ye="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",ze="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Je="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Ue="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Ze="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Qe="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Xe="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",et=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:De,mobile2x:Ie,desktop1x:Pe,desktop2x:je},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Fe,mobile2x:Ne,desktop1x:He,desktop2x:Oe},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Re,mobile2x:Ge,desktop1x:Ke,desktop2x:Ve},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:We,mobile2x:Ye,desktop1x:ze,desktop2x:Je},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ue,mobile2x:Ze,desktop1x:Qe,desktop2x:Xe},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],tt="heroes",st=document.querySelector('[data-id="heroes__cards-list"]'),nt=document.querySelector('[data-id="heroes__prev-btn"]'),ot=document.querySelector('[data-id="heroes__next-btn"]'),at=document.querySelector('[data-id="heroes__swiper"]'),it=document.querySelector('[data-id="heroes__sw-pagin-container"]');st.insertAdjacentHTML("beforeend",Te(et));rt();function rt(){new S(at,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:nt,nextEl:ot},pagination:{el:it},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const w="/stp-9255/assets/sprite-BFvqvIOA.svg";function I(e){return e.map(({name:t,comments:o,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${w}#name-frame" xlink:href="${w}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${o}</p>
            </div>
          </div>
          <div class="reviews__rating">${ct(Number(n))}</div>
        </li>
      `).join("")}function ct(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const L=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function P(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(L)),L)}const j=document.querySelector('[data-id="reviews__cards-list"]'),lt=document.querySelector('[data-id="reviews__prev-btn"]'),dt=document.querySelector('[data-id="reviews__next-btn"]'),pt=document.querySelector('[data-id="reviews__swiper"]');j.insertAdjacentHTML("beforeend",I(P()));mt();function mt(){new S(pt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:lt,nextEl:dt},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}async function ut(){const{data:e}=await H.get("https://stp-9255-backend.onrender.com/reviews");return e.data}ut();const gt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const h=document.querySelector('[data-id="review-form"]'),_t=document.querySelector('[data-id="review-form__close-btn"]'),F=document.querySelector('[data-id="review-form__form"]'),ft=document.querySelector('[data-id="review-form__textarea-comm"]');gt.addEventListener("click",vt);_t.addEventListener("click",_);F.addEventListener("submit",kt);document.addEventListener("keydown",e=>{e.key==="Escape"&&_()});h.addEventListener("click",e=>{e.target===e.currentTarget&&_()});ft.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function vt(){h.classList.add("is-open"),lockScroll()}function _(){h.classList.remove("is-open"),unlockScroll()}function kt(e){e.preventDefault();const t=ht();bt(t),_()}function ht(){const e=new FormData(F);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function bt(e){const t=P();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),j.insertAdjacentHTML("afterbegin",I([e]))}new O('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
