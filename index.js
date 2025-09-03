/* empty css                      */import{S,A as N}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,n=0;const o=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},a=()=>window.scrollTo(t,n);function i(){t=e.scrollLeft,n=e.scrollTop,window.addEventListener("scroll",a,{passive:!1}),window.addEventListener("wheel",o,{passive:!1}),document.addEventListener("wheel",o,{passive:!1,capture:!0}),window.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchmove",o,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function j(){window.removeEventListener("scroll",a),window.removeEventListener("wheel",o),document.removeEventListener("wheel",o,{capture:!0}),window.removeEventListener("touchmove",o),document.removeEventListener("touchmove",o,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=j})();const p=document.querySelector('[data-id="mobile-menu"]'),F=document.querySelector('[data-id="mobile-btn"]'),E=document.querySelector('[data-id="nav-icon"]'),O=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const C=document.querySelector('[data-id="mobile-menu__background"]'),H=document.querySelector('[data-id="header__logo"]');let h,g=!1;F.addEventListener("click",()=>{p.style.backgroundPosition="center top",E.classList.toggle("open"),p.classList.toggle("open"),C.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),h=document.documentElement.scrollTop,R(Number(h))});O.forEach(e=>e.addEventListener("click",$));H.addEventListener("click",$);function $(){E.classList.remove("open"),p.classList.remove("open"),C.classList.remove("open"),unlockScroll()}function R(e){p.style.backgroundPosition=`center -${e}px`}const K=document.querySelectorAll('[data-id="title-frame-path"]'),A=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),A.unobserve(t.target))})},{threshold:.5});K.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,A.observe(e)});const c=1200;let v=window.innerWidth<c;const f=[];function V(){const e=window.innerWidth<c;e!==v&&(v=e,f.forEach(t=>t()),console.log(f))}window.addEventListener("resize",V);function W(e){f.push(e)}function q(){return v}const G=`<svg
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
</svg>`;function m(e,t,n){const{mobile1x:o,mobile2x:s,desktop1x:a,desktop2x:i}=e;return`
        <picture class="${n}__card-picture">
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
            ${o}    1x,
            ${s}    2x
          "
        />
        <img
          class="${n}__card-img"
          src="${o}"
          alt="${t}"
          loading="lazy"
          onload="this.dataset.loaded='true'"
        />
      </picture>
        `}function Y(e){return e.map(({images:t,alt:n})=>`
        <li class="features__deck-item">
            ${m(t,n,k)}
        </li>`).join("")}function B({mobile1x:e,mobile2x:t,desktop1x:n,desktop2x:o}){const s=window.devicePixelRatio||1;return q()?s>1?t:e:s>1?o:n}function z(e){return e.map(({title:t,images:n,id:o,description:s})=>`<div class="features__card">

        ${G.replaceAll("${cardSrc}",B(n)).replaceAll("${id}",o)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const J="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",U="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",Z="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",Q="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",X="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",ee="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",te="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",se="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",ne="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",oe="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",ae="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",ie="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",re="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",ce="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",le="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",de="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",pe="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",me="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",ue="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",ge="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",_e="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",ve="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",fe="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",ke="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",be="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",he="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ye="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",xe="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",y=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:be,mobile2x:he,desktop1x:ye,desktop2x:xe},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:_e,mobile2x:ve,desktop1x:fe,desktop2x:ke},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:pe,mobile2x:me,desktop1x:ue,desktop2x:ge},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ne,mobile2x:oe,desktop1x:ae,desktop2x:ie},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:re,mobile2x:ce,desktop1x:le,desktop2x:de},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:X,mobile2x:ee,desktop1x:te,desktop2x:se},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:J,mobile2x:U,desktop1x:Z,desktop2x:Q},alt:"angry fighters"}];function we(e){return e.map(({images:t,alt:n,title:o,description:s})=>`<li class="features__deck-item framed">
        ${m(t,n,k)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${o}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}const k="features",r=document.querySelector('[data-id="features__cards-deck"]'),Le=document.querySelector('[data-id="features__open-cards"]');let _=!1,l=null;M();W(()=>M());function M(){if(l&&(r.removeEventListener("click",l),l=null),q())r.style.cursor="default",r.innerHTML=we(y);else{let n=function(o){t.push(e[e.length-1]),e.pop(),e.unshift(t[0]),t.shift();const s=document.querySelector('[data-id="features__card-title"]'),a=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__open-card-image"]');Ce(s,a),Se(t[0],s,a,i),$e(e[0],o),x(),setTimeout(()=>{Ee(s,a)},100),r.style.cursor="pointer",_=!1},e=[...y];const t=[];t.push(e[e.length-1]),e.pop(),Le.innerHTML=`${z(t)}`,x(),r.innerHTML=Y(e),l=function(){if(_)return;_=!0,r.style.cursor="default";const s=r.lastElementChild;s.classList.add("transition-anim"),setTimeout(()=>{s.style.right="-603px"},1e3),s.addEventListener("transitionend",a);function a(i){i.propertyName==="width"&&(n(s),s.removeEventListener("transitionend",a))}},r.addEventListener("click",l),r.style.cursor="pointer"}}function x(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}async function Se({title:e,description:t,images:n},o,s,a){o.textContent=e,s.textContent=t,a.setAttribute("href",B(n)),await(i=>a.addEventListener("load",i,{once:!0}))}function Ee(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Ce(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function $e({images:e,alt:t},n){setTimeout(()=>{n.remove()},50),r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${m(e,t,k)}
    </li>`)}function Ae(e){return e.map(({title:t,description:n,images:o,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${n}</p>
      ${m(o,s,Ze)}
    </li>
    `).join("")}const qe="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Be="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Me="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Te="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",De="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Pe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",Ie="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",je="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Ne="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Fe="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Oe="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",He="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Re="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Ke="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Ve="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",We="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Ge="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Ye="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",ze="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Je="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ue=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:qe,mobile2x:Be,desktop1x:Me,desktop2x:Te},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:De,mobile2x:Pe,desktop1x:Ie,desktop2x:je},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Ne,mobile2x:Fe,desktop1x:Oe,desktop2x:He},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Re,mobile2x:Ke,desktop1x:Ve,desktop2x:We},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ge,mobile2x:Ye,desktop1x:ze,desktop2x:Je},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ze="heroes",Qe=document.querySelector('[data-id="heroes__cards-list"]'),Xe=document.querySelector('[data-id="heroes__prev-btn"]'),et=document.querySelector('[data-id="heroes__next-btn"]'),tt=document.querySelector('[data-id="heroes__swiper"]'),st=document.querySelector('[data-id="heroes__sw-pagin-container"]');Qe.insertAdjacentHTML("beforeend",Ae(Ue));nt();function nt(){new S(tt,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Xe,nextEl:et},pagination:{el:st},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const w="/stp-9255/assets/sprite-BFvqvIOA.svg";function T(e){return e.map(({name:t,comments:n,grade:o})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${w}#name-frame" xlink:href="${w}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${n}</p>
            </div>
          </div>
          <div class="reviews__rating">${ot(Number(o))}</div>
        </li>
      `).join("")}function ot(e){if(e<1||e>5)return;let t="";for(let n=e;n>0;n-=1)t+=`<svg
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
            </svg>`;for(let n=5-e;n>0;n-=1)t+=`<svg
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
            </svg>`;return t}const L=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function D(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(L)),L)}const P=document.querySelector('[data-id="reviews__cards-list"]'),at=document.querySelector('[data-id="reviews__prev-btn"]'),it=document.querySelector('[data-id="reviews__next-btn"]'),rt=document.querySelector('[data-id="reviews__swiper"]');P.insertAdjacentHTML("beforeend",T(D()));ct();function ct(){new S(rt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:at,nextEl:it},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const lt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const b=document.querySelector('[data-id="review-form"]'),dt=document.querySelector('[data-id="review-form__close-btn"]'),I=document.querySelector('[data-id="review-form__form"]'),pt=document.querySelector('[data-id="review-form__textarea-comm"]');lt.addEventListener("click",mt);dt.addEventListener("click",u);I.addEventListener("submit",ut);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});b.addEventListener("click",e=>{e.target===e.currentTarget&&u()});pt.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function mt(){b.classList.add("is-open"),lockScroll()}function u(){b.classList.remove("is-open"),unlockScroll()}function ut(e){e.preventDefault();const t=gt();_t(t),u()}function gt(){const e=new FormData(I);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function _t(e){const t=D();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),P.insertAdjacentHTML("afterbegin",T([e]))}new N('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
