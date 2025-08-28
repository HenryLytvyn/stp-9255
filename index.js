/* empty css                      */import{S as L,A as M}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=p=>p.preventDefault(),s=p=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(p.key)&&p.preventDefault()},i=()=>window.scrollTo(t,o);function a(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",i,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function T(){window.removeEventListener("scroll",i),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=a,window.unlockScroll=T})();const m=document.querySelector('[data-id="mobile-menu"]'),P=document.querySelector('[data-id="mobile-btn"]'),S=document.querySelector('[data-id="nav-icon"]'),D=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const E=document.querySelector('[data-id="mobile-menu__background"]'),j=document.querySelector('[data-id="header__logo"]');let b,g=!1;P.addEventListener("click",()=>{m.style.backgroundPosition="center top",S.classList.toggle("open"),m.classList.toggle("open"),E.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),b=document.documentElement.scrollTop,I(Number(b))});D.forEach(e=>e.addEventListener("click",C));j.addEventListener("click",C);function C(){S.classList.remove("open"),m.classList.remove("open"),E.classList.remove("open"),unlockScroll()}function I(e){m.style.backgroundPosition=`center -${e}px`}const F=document.querySelectorAll('[data-id="title-frame-path"]'),A=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),A.unobserve(t.target))})},{threshold:.5});F.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,A.observe(e)});const d=1200;function v(){return window.innerWidth<d}const N=`<svg width="288" height="450" viewBox="0 0 288 450">
  <defs>
    <clipPath id="cf-features-mobile">
      <polygon
        id="clipPoly"
        points="0,0
      37.44,0
      43.2,9
      112.32,9
      118.08,0
      279.36,0
      288,14.85
      288,14.85
      288,198
      282.24,207
      282.24,302.85
      288,311.85
      288,450
      14.4,450
      14.4,450
      0,435.15
      0,435.15"
      ></polygon>
    </clipPath>
  </defs>

  <image
    href="\${cardSrc}"
    width="288"
    height="450"
    clip-path="url(#cf-features-mobile)"
  />

  <polygon
    fill="none"
    stroke="#feffe8"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
    clip-path="url(#cf-features-mobile)"
    points="0,0
      37.44,0
      43.2,9
      112.32,9
      118.08,0
      279.36,0
      288,14.85
      288,14.85
      288,198
      282.24,207
      282.24,302.85
      288,311.85
      288,450
      14.4,450
      14.4,450
      0,435.15
      0,435.15"
  ></polygon>
</svg>
`,O=`<svg
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
    class="features__card-image"
    data-id="features__card-image"
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
</svg>`;function H(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function h(e){return e.map(t=>`<li class="features__card">

        ${(v()?N:O).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const R="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",K="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",G="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",V="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",W="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",Y="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",J="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",U="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",z="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",Z="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",Q="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",X="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",ee="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",te="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",se="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",ne="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",oe="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",ie="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",re="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",ae="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ce="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",le="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",de="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",pe="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",me="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ue="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ge="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",_e="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function c({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return v()?s>1?t:e:s>1?n:o}const fe=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:c({mobile1x:me,mobile2x:ue,desktop1x:ge,desktop2x:_e}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:c({mobile1x:ce,mobile2x:le,desktop1x:de,desktop2x:pe}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:c({mobile1x:oe,mobile2x:ie,desktop1x:re,desktop2x:ae}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:c({mobile1x:z,mobile2x:Z,desktop1x:Q,desktop2x:X}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:c({mobile1x:ee,mobile2x:te,desktop1x:se,desktop2x:ne}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:c({mobile1x:W,mobile2x:Y,desktop1x:J,desktop2x:U}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:c({mobile1x:R,mobile2x:K,desktop1x:G,desktop2x:V}),alt:"angry fighters"}],l=document.querySelector('[data-id="features__cards-deck"]'),ve=document.querySelector('[data-id="features__open-cards"]');let r=[...fe],_=!1;if(v())l.insertAdjacentHTML("beforeend",h(r));else{let t=function(){if(_)return;_=!0,l.style.cursor="default";const o=l.lastElementChild;o.classList.add("transition-anim"),setTimeout(()=>{o.style.right="-603px"},1e3),setTimeout(()=>{e.push(r[r.length-1]),r.pop(),r.unshift(e[0]),e.shift();const n=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__card-image"]');he(n,s),ke(e[0],n,s,i),ye(r[0],o),y(),setTimeout(()=>{be(n,s)},100),l.style.cursor="pointer",_=!1},2e3)};const e=[];e.push(r[r.length-1]),r.pop(),ve.innerHTML=`${h(e)}`,y(),l.insertAdjacentHTML("beforeend",H(r)),l.addEventListener("click",t)}function y(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function ke({title:e,description:t,src:o},n,s,i){n.textContent=e,s.textContent=t,i.setAttribute("href",o)}function be(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function he(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function ye({src:e},t){setTimeout(()=>{t.remove()},50),l.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function xe(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:i,desktop2x:a}=e;return`
        <picture class="${o}__card-picture">
        <source
          media="(min-width: ${d}px)"
          srcset="
            ${i}    1x,
            ${a}    2x
          "
        />
        <source
          media="(max-width: ${d-.02}px)"
          srcset="
            ${n}    1x,
            ${s}    2x
          "
        />
        <img
          class="${o}__card-img"
          src="${n}"
          alt="${t}"
        />
      </picture>
        `}function we(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${xe(n,s,Ve)}
    </li>
    `).join("")}const Le="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Se="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Ee="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Ce="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Ae="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",$e="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",qe="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Be="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Te="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Me="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Pe="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",De="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",je="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Ie="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Fe="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Ne="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Oe="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",He="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Re="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Ke="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ge=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:Le,mobile2x:Se,desktop1x:Ee,desktop2x:Ce},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Ae,mobile2x:$e,desktop1x:qe,desktop2x:Be},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Te,mobile2x:Me,desktop1x:Pe,desktop2x:De},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:je,mobile2x:Ie,desktop1x:Fe,desktop2x:Ne},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Oe,mobile2x:He,desktop1x:Re,desktop2x:Ke},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ve="heroes",We=document.querySelector('[data-id="heroes__cards-list"]'),Ye=document.querySelector('[data-id="heroes__prev-btn"]'),Je=document.querySelector('[data-id="heroes__next-btn"]'),Ue=document.querySelector('[data-id="heroes__swiper"]'),ze=document.querySelector('[data-id="heroes__sw-pagin-container"]');We.insertAdjacentHTML("beforeend",we(Ge));Ze();function Ze(){new L(Ue,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Ye,nextEl:Je},pagination:{el:ze},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const x="/stp-9255/assets/sprite-BFvqvIOA.svg";function $(e){return e.map(({name:t,comments:o,grade:n})=>`
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
          <div class="reviews__rating">${Qe(Number(n))}</div>
        </li>
      `).join("")}function Qe(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const w=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function f(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(w)),w)}const q=document.querySelector('[data-id="reviews__cards-list"]'),Xe=document.querySelector('[data-id="reviews__prev-btn"]'),et=document.querySelector('[data-id="reviews__next-btn"]'),tt=document.querySelector('[data-id="reviews__swiper"]');q.insertAdjacentHTML("beforeend",$(f()));st();function st(){new L(tt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:Xe,nextEl:et},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const nt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const k=document.querySelector('[data-id="review-form"]'),ot=document.querySelector('[data-id="review-form__close-btn"]'),B=document.querySelector('[data-id="review-form__form"]'),it=document.querySelector('[data-id="review-form__textarea-comm"]');nt.addEventListener("click",rt);ot.addEventListener("click",u);B.addEventListener("submit",at);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});k.addEventListener("click",e=>{e.target===e.currentTarget&&u()});it.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function rt(){k.classList.add("is-open"),lockScroll()}function u(){k.classList.remove("is-open"),unlockScroll()}function at(e){e.preventDefault();const t=ct(e);lt(t),u()}function ct(e){e.preventDefault();const t=new FormData(B);return console.log(Object.fromEntries(t.entries())),Object.fromEntries(t.entries())}function lt(e){const t=f();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),q.innerHTML=$(f())}new M('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
