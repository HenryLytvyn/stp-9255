/* empty css                      */import{S as L,A as I}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,n=0;const o=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},i=()=>window.scrollTo(t,n);function r(){t=e.scrollLeft,n=e.scrollTop,window.addEventListener("scroll",i,{passive:!1}),window.addEventListener("wheel",o,{passive:!1}),document.addEventListener("wheel",o,{passive:!1,capture:!0}),window.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchmove",o,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function j(){window.removeEventListener("scroll",i),window.removeEventListener("wheel",o),document.removeEventListener("wheel",o,{capture:!0}),window.removeEventListener("touchmove",o),document.removeEventListener("touchmove",o,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=r,window.unlockScroll=j})();const p=document.querySelector('[data-id="mobile-menu"]'),N=document.querySelector('[data-id="mobile-btn"]'),S=document.querySelector('[data-id="nav-icon"]'),F=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const E=document.querySelector('[data-id="mobile-menu__background"]'),O=document.querySelector('[data-id="header__logo"]');let b,u=!1;N.addEventListener("click",()=>{p.style.backgroundPosition="center top",S.classList.toggle("open"),p.classList.toggle("open"),E.classList.toggle("open"),u?(unlockScroll(),u=!1):(lockScroll(),u=!0),b=document.documentElement.scrollTop,H(Number(b))});F.forEach(e=>e.addEventListener("click",C));O.addEventListener("click",C);function C(){S.classList.remove("open"),p.classList.remove("open"),E.classList.remove("open"),unlockScroll()}function H(e){p.style.backgroundPosition=`center -${e}px`}const R=document.querySelectorAll('[data-id="title-frame-path"]'),A=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),A.unobserve(t.target))})},{threshold:.5});R.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,A.observe(e)});const l=1200;let _=window.innerWidth<l;function $(){_=window.innerWidth<l}window.addEventListener("resize",$);$();console.log(_);const v=_,K=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,W=`<svg
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
</svg>`;function f(e,t,n){const{mobile1x:o,mobile2x:s,desktop1x:i,desktop2x:r}=e;return`
        <picture class="${n}__card-picture">
        <source
          media="(min-width: ${l}px)"
          srcset="
            ${i}    1x,
            ${r}    2x
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
          class="${n}__card-img"
          src="${o}"
          alt="${t}"
        />
      </picture>
        `}function G(e){return e.map(({images:t,alt:n})=>`
        <li class="features__deck-item">
            ${f(t,n,B)}
        </li>`).join("")}function q({mobile1x:e,mobile2x:t,desktop1x:n,desktop2x:o}){const s=window.devicePixelRatio||1;return v?s>1?t:e:s>1?o:n}function h(e){return e.map(({title:t,images:n,id:o,description:s})=>`<div class="features__card">

        ${(v?K:W).replaceAll("${cardSrc}",q(n)).replaceAll("${id}",o)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const V="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",Y="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",J="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",U="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",z="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",Z="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",Q="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",X="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",ee="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",te="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",se="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",ne="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",oe="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",ie="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",ae="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",re="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",ce="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",le="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",de="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",pe="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",me="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",ue="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",ge="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",_e="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",ve="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",fe="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ke="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",be="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",he=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:ve,mobile2x:fe,desktop1x:ke,desktop2x:be},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:me,mobile2x:ue,desktop1x:ge,desktop2x:_e},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:ce,mobile2x:le,desktop1x:de,desktop2x:pe},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ee,mobile2x:te,desktop1x:se,desktop2x:ne},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:oe,mobile2x:ie,desktop1x:ae,desktop2x:re},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:z,mobile2x:Z,desktop1x:Q,desktop2x:X},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:V,mobile2x:Y,desktop1x:J,desktop2x:U},alt:"angry fighters"}],B="features",c=document.querySelector('[data-id="features__cards-deck"]'),ye=document.querySelector('[data-id="features__open-cards"]');let a=[...he],g=!1;if(v)c.insertAdjacentHTML("beforeend",h(a));else{let t=function(){if(g)return;g=!0,c.style.cursor="default";const n=c.lastElementChild;n.classList.add("transition-anim"),setTimeout(()=>{n.style.right="-603px"},1e3),setTimeout(()=>{e.push(a[a.length-1]),a.pop(),a.unshift(e[0]),e.shift();const o=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__open-card-image"]');Le(o,s),xe(e[0],o,s,i),Se(a[0],n),y(),setTimeout(()=>{we(o,s)},100),c.style.cursor="pointer",g=!1},2e3)};const e=[];e.push(a[a.length-1]),a.pop(),ye.innerHTML=`${h(e)}`,y(),c.insertAdjacentHTML("beforeend",G(a)),c.addEventListener("click",t)}function y(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function xe({title:e,description:t,images:n},o,s,i){o.textContent=e,s.textContent=t,i.setAttribute("href",q(n))}function we(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Le(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function Se({images:e,alt:t},n){setTimeout(()=>{n.remove()},50),c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${f(e,t,B)}
    </li>`)}function Ee(e){return e.map(({title:t,description:n,images:o,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${n}</p>
      ${f(o,s,Je)}
    </li>
    `).join("")}const Ce="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Ae="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",$e="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",qe="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Be="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Te="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",Me="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Pe="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",De="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",je="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Ie="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Ne="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Fe="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Oe="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",He="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Re="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Ke="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",We="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Ge="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Ve="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ye=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:Ce,mobile2x:Ae,desktop1x:$e,desktop2x:qe},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Be,mobile2x:Te,desktop1x:Me,desktop2x:Pe},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:De,mobile2x:je,desktop1x:Ie,desktop2x:Ne},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Fe,mobile2x:Oe,desktop1x:He,desktop2x:Re},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ke,mobile2x:We,desktop1x:Ge,desktop2x:Ve},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Je="heroes",Ue=document.querySelector('[data-id="heroes__cards-list"]'),ze=document.querySelector('[data-id="heroes__prev-btn"]'),Ze=document.querySelector('[data-id="heroes__next-btn"]'),Qe=document.querySelector('[data-id="heroes__swiper"]'),Xe=document.querySelector('[data-id="heroes__sw-pagin-container"]');Ue.insertAdjacentHTML("beforeend",Ee(Ye));et();function et(){new L(Qe,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:ze,nextEl:Ze},pagination:{el:Xe},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const x="/stp-9255/assets/sprite-BFvqvIOA.svg";function T(e){return e.map(({name:t,comments:n,grade:o})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${x}#name-frame" xlink:href="${x}#name-frame">></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${n}</p>
            </div>
          </div>
          <div class="reviews__rating">${tt(Number(o))}</div>
        </li>
      `).join("")}function tt(e){if(e<1||e>5)return;let t="";for(let n=e;n>0;n-=1)t+=`<svg
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
            </svg>`;return t}const w=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function M(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(w)),w)}const P=document.querySelector('[data-id="reviews__cards-list"]'),st=document.querySelector('[data-id="reviews__prev-btn"]'),nt=document.querySelector('[data-id="reviews__next-btn"]'),ot=document.querySelector('[data-id="reviews__swiper"]');P.insertAdjacentHTML("beforeend",T(M()));it();function it(){new L(ot,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:st,nextEl:nt},keyboard:{enabled:!0},breakpoints:{[l]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const at=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const k=document.querySelector('[data-id="review-form"]'),rt=document.querySelector('[data-id="review-form__close-btn"]'),D=document.querySelector('[data-id="review-form__form"]'),ct=document.querySelector('[data-id="review-form__textarea-comm"]');at.addEventListener("click",lt);rt.addEventListener("click",m);D.addEventListener("submit",dt);document.addEventListener("keydown",e=>{e.key==="Escape"&&m()});k.addEventListener("click",e=>{e.target===e.currentTarget&&m()});ct.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function lt(){k.classList.add("is-open"),lockScroll()}function m(){k.classList.remove("is-open"),unlockScroll()}function dt(e){e.preventDefault();const t=pt();mt(t),m()}function pt(){const e=new FormData(D);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function mt(e){const t=M();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),P.insertAdjacentHTML("afterbegin",T([e]))}new I('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
