/* empty css                      */import{S as C,A as F}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},a=()=>window.scrollTo(t,o);function i(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",a,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function h(){window.removeEventListener("scroll",a),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=h})();const p=document.querySelector('[data-id="mobile-menu"]'),H=document.querySelector('[data-id="mobile-btn"]'),q=document.querySelector('[data-id="nav-icon"]'),O=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const A=document.querySelector('[data-id="mobile-menu__background"]'),R=document.querySelector('[data-id="header__logo"]');let y,g=!1;H.addEventListener("click",()=>{p.style.backgroundPosition="center top",q.classList.toggle("open"),p.classList.toggle("open"),A.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),y=document.documentElement.scrollTop,K(Number(y))});O.forEach(e=>e.addEventListener("click",B));R.addEventListener("click",B);function B(){q.classList.remove("open"),p.classList.remove("open"),A.classList.remove("open"),unlockScroll()}function K(e){p.style.backgroundPosition=`center -${e}px`}const V=document.querySelectorAll('[data-id="title-frame-path"]'),M=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),M.unobserve(t.target))})},{threshold:.5});V.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,M.observe(e)});const c=1200;let v=window.innerWidth<c;const f=[];function W(){const e=window.innerWidth<c;e!==v&&(v=e,f.forEach(t=>t()),console.log(f))}window.addEventListener("resize",W);function G(e){f.push(e)}function T(){return v}const Y=`<svg
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

  <!-- ИЗОБРАЖЕНИЕ -->
  <image
    class="features__open-card-image"
    data-id="features__open-card-image"
    href="\${cardSrc}"
    width="554"
    height="866"
    clip-path="url(#clip-\${id})"
  />

  <!-- РАМКА (без clip-path), с собственным id -->
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
</svg>`;function m(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:a,desktop2x:i}=e;return`
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
        `}function z(e){return e.map(({images:t,alt:o})=>`
        <li class="features__deck-item">
            ${m(t,o,k)}
        </li>`).join("")}function J({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return T()?s>1?t:e:s>1?n:o}function x(e){return e.map(({title:t,images:o,id:n,description:s})=>`<div class="features__card">

        ${Y.replaceAll("${cardSrc}",J(o)).replaceAll("${id}",n)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const U="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",Z="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",Q="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",X="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",ee="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",te="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",se="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",ne="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",oe="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",ae="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",ie="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",re="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",ce="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",le="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",de="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",pe="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",me="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",ue="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",ge="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",_e="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ve="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",fe="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",ke="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",be="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",he="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ye="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",xe="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",we="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",w=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:he,mobile2x:ye,desktop1x:xe,desktop2x:we},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:ve,mobile2x:fe,desktop1x:ke,desktop2x:be},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:me,mobile2x:ue,desktop1x:ge,desktop2x:_e},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:oe,mobile2x:ae,desktop1x:ie,desktop2x:re},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:ce,mobile2x:le,desktop1x:de,desktop2x:pe},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ee,mobile2x:te,desktop1x:se,desktop2x:ne},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:U,mobile2x:Z,desktop1x:Q,desktop2x:X},alt:"angry fighters"}];function Le(e){return e.map(({images:t,alt:o,title:n,description:s})=>`<li class="features__deck-item framed">
        ${m(t,o,k)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${n}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}const k="features",r=document.querySelector('[data-id="features__cards-deck"]'),L=document.querySelector('[data-id="features__open-cards"]');let _=!1,l=null;D();G(()=>D());function D(){if(l&&(r.removeEventListener("click",l),l=null),T())r.style.cursor="default",r.innerHTML=Le(w);else{let e=[...w];const t=[];t.push(e[e.length-1]),e.pop(),L.innerHTML=`${x(t)}`,S(),r.innerHTML=z(e),l=function(){if(_)return;_=!0,r.style.cursor="default";const n=r.lastElementChild;n.classList.add("transition-anim"),setTimeout(()=>{n.style.right="-603px"},1e3),setTimeout(()=>{t.push(e[e.length-1]),e.pop(),e.unshift(t[0]),t.shift(),L.innerHTML=`${x([t[0]])}`;let s=document.querySelector('[data-id="features__open-card-image"]');const a=document.querySelector('[data-id="features__card-title"]'),i=document.querySelector('[data-id="features__card-text"]');Ee(a,i),a.textContent=t[0].title,i.textContent=t[0].description,s.onload=function(){n.remove(),$e(e[0]),S(),Se(a,i),r.style.cursor="pointer",_=!1}},2e3)},r.addEventListener("click",l)}}function S(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function Se(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Ee(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function $e({images:e,alt:t}){r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${m(e,t,k)}
    </li>`)}function Ce(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${m(n,s,Ue)}
    </li>
    `).join("")}const qe="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Ae="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Be="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Me="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Te="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",De="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",Pe="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Ie="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",je="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Ne="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Fe="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",He="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Oe="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Re="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Ke="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Ve="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",We="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Ge="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Ye="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",ze="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Je=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:qe,mobile2x:Ae,desktop1x:Be,desktop2x:Me},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Te,mobile2x:De,desktop1x:Pe,desktop2x:Ie},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:je,mobile2x:Ne,desktop1x:Fe,desktop2x:He},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Oe,mobile2x:Re,desktop1x:Ke,desktop2x:Ve},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:We,mobile2x:Ge,desktop1x:Ye,desktop2x:ze},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ue="heroes",Ze=document.querySelector('[data-id="heroes__cards-list"]'),Qe=document.querySelector('[data-id="heroes__prev-btn"]'),Xe=document.querySelector('[data-id="heroes__next-btn"]'),et=document.querySelector('[data-id="heroes__swiper"]'),tt=document.querySelector('[data-id="heroes__sw-pagin-container"]');Ze.insertAdjacentHTML("beforeend",Ce(Je));st();function st(){new C(et,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Qe,nextEl:Xe},pagination:{el:tt},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const E="/stp-9255/assets/sprite-BFvqvIOA.svg";function P(e){return e.map(({name:t,comments:o,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${E}#name-frame" xlink:href="${E}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${o}</p>
            </div>
          </div>
          <div class="reviews__rating">${nt(Number(n))}</div>
        </li>
      `).join("")}function nt(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const $=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function I(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify($)),$)}const j=document.querySelector('[data-id="reviews__cards-list"]'),ot=document.querySelector('[data-id="reviews__prev-btn"]'),at=document.querySelector('[data-id="reviews__next-btn"]'),it=document.querySelector('[data-id="reviews__swiper"]');j.insertAdjacentHTML("beforeend",P(I()));rt();function rt(){new C(it,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:ot,nextEl:at},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const ct=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const b=document.querySelector('[data-id="review-form"]'),lt=document.querySelector('[data-id="review-form__close-btn"]'),N=document.querySelector('[data-id="review-form__form"]'),dt=document.querySelector('[data-id="review-form__textarea-comm"]');ct.addEventListener("click",pt);lt.addEventListener("click",u);N.addEventListener("submit",mt);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});b.addEventListener("click",e=>{e.target===e.currentTarget&&u()});dt.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function pt(){b.classList.add("is-open"),lockScroll()}function u(){b.classList.remove("is-open"),unlockScroll()}function mt(e){e.preventDefault();const t=ut();gt(t),u()}function ut(){const e=new FormData(N);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function gt(e){const t=I();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),j.insertAdjacentHTML("afterbegin",P([e]))}new F('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
