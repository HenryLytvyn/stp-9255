/* empty css                      */import{S as L,a as N,A as H}from"./assets/vendor-D22bJHWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},a=()=>window.scrollTo(t,o);function i(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",a,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function F(){window.removeEventListener("scroll",a),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=i,window.unlockScroll=F})();const p=document.querySelector('[data-id="mobile-menu"]'),O=document.querySelector('[data-id="mobile-btn"]'),S=document.querySelector('[data-id="nav-icon"]'),R=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const E=document.querySelector('[data-id="mobile-menu__background"]'),G=document.querySelector('[data-id="header__logo"]');let h,g=!1;O.addEventListener("click",()=>{p.style.backgroundPosition="center top",S.classList.toggle("open"),p.classList.toggle("open"),E.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),h=document.documentElement.scrollTop,K(Number(h))});R.forEach(e=>e.addEventListener("click",A));G.addEventListener("click",A);function A(){S.classList.remove("open"),p.classList.remove("open"),E.classList.remove("open"),unlockScroll()}function K(e){p.style.backgroundPosition=`center -${e}px`}const V=document.querySelectorAll('[data-id="title-frame-path"]'),$=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),$.unobserve(t.target))})},{threshold:.5});V.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,$.observe(e)});const c=1200;let _=window.innerWidth<c;const f=[];function W(){const e=window.innerWidth<c;e!==_&&(_=e,f.forEach(t=>t()),console.log(f))}window.addEventListener("resize",W);function Y(e){f.push(e)}function q(){return _}const z=`<svg
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
        `}const k="features",r=document.querySelector('[data-id="features__cards-deck"]'),M=document.querySelector('[data-id="features__open-cards"]');function J(e){return e.map(({images:t,alt:o})=>`
        <li class="features__deck-item">
            ${m(t,o,k)}
        </li>`).join("")}function U({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return q()?s>1?t:e:s>1?n:o}function B(e){return e.map(({title:t,images:o,id:n,description:s})=>`<div class="features__card">

        ${z.replaceAll("${cardSrc}",U(o)).replaceAll("${id}",n)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </div>`).join("")}const Z="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",Q="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",X="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",ee="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",te="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",se="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",ne="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",oe="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",ae="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",ie="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",re="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",ce="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",le="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",de="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",pe="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",me="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",ue="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",ge="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",_e="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",fe="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ve="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",ke="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",be="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",he="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",ye="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",xe="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",we="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",Le="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",y=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",images:{mobile1x:ye,mobile2x:xe,desktop1x:we,desktop2x:Le},alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",images:{mobile1x:ve,mobile2x:ke,desktop1x:be,desktop2x:he},alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",images:{mobile1x:ue,mobile2x:ge,desktop1x:_e,desktop2x:fe},alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:ae,mobile2x:ie,desktop1x:re,desktop2x:ce},alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",images:{mobile1x:le,mobile2x:de,desktop1x:pe,desktop2x:me},alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",images:{mobile1x:te,mobile2x:se,desktop1x:ne,desktop2x:oe},alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",images:{mobile1x:Z,mobile2x:Q,desktop1x:X,desktop2x:ee},alt:"angry fighters"}];function Se(e){return e.map(({images:t,alt:o,title:n,description:s})=>`<li class="features__deck-item framed">
        ${m(t,o,k)}
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${n}</h3>
          <p class="features__card-text" data-id="features__card-text">
            ${s}
          </p>
        </div>
      </li>`).join("")}let v=!1;function Ee(){if(v)return;v=!0,r.style.cursor="default";const e=r.lastElementChild;return e.classList.add("transition-anim"),e}function Ae(e){e.style.right="-603px"}function $e(e,t,o){e.push(t[t.length-1]),t.pop(),t.unshift(e[0]),e.shift(),M.innerHTML=`${B([e[0]])}`;const n=document.querySelector('[data-id="features__open-card-image"]'),s=document.querySelector('[data-id="features__card-title"]'),a=document.querySelector('[data-id="features__card-text"]');qe(s,a),s.textContent=e[0].title,a.textContent=e[0].description,n.onload=i,n.complete&&i();function i(){o.remove(),Be(t[0]),requestAnimationFrame(()=>{C(),Me(s,a),r.style.cursor="pointer"}),v=!1}}function qe(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function Me(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function Be({images:e,alt:t}){r.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
      ${m(e,t,k)}
    </li>`)}function C(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}let l=null;T();Y(()=>T());function T(){if(l&&(r.removeEventListener("click",l),l=null),q())r.style.cursor="default",r.innerHTML=Se(y);else{let e=[...y];const t=[];t.push(e[e.length-1]),e.pop(),M.innerHTML=`${B(t)}`,C(),r.innerHTML=J(e),l=function(){const n=Ee();setTimeout(()=>{Ae(n)},1e3),setTimeout(()=>{$e(t,e,n)},2e3)},r.addEventListener("click",l)}}function Ce(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${m(n,s,et)}
    </li>
    `).join("")}const Te="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",De="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Ie="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Pe="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",je="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Fe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",Ne="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",He="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Oe="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Re="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Ge="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Ke="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Ve="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",We="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Ye="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",ze="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Je="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Ue="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Ze="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Qe="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Xe=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:Te,mobile2x:De,desktop1x:Ie,desktop2x:Pe},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:je,mobile2x:Fe,desktop1x:Ne,desktop2x:He},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Oe,mobile2x:Re,desktop1x:Ge,desktop2x:Ke},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ve,mobile2x:We,desktop1x:Ye,desktop2x:ze},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Je,mobile2x:Ue,desktop1x:Ze,desktop2x:Qe},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],et="heroes",tt=document.querySelector('[data-id="heroes__cards-list"]'),st=document.querySelector('[data-id="heroes__prev-btn"]'),nt=document.querySelector('[data-id="heroes__next-btn"]'),ot=document.querySelector('[data-id="heroes__swiper"]'),at=document.querySelector('[data-id="heroes__sw-pagin-container"]');tt.insertAdjacentHTML("beforeend",Ce(Xe));it();function it(){new L(ot,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:st,nextEl:nt},pagination:{el:at},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const x="/stp-9255/assets/sprite-BFvqvIOA.svg";function D(e){return e.map(({name:t,comments:o,grade:n})=>`
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
          <div class="reviews__rating">${rt(Number(n))}</div>
        </li>
      `).join("")}function rt(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const w=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function I(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(w)),w)}const P=document.querySelector('[data-id="reviews__cards-list"]'),ct=document.querySelector('[data-id="reviews__prev-btn"]'),lt=document.querySelector('[data-id="reviews__next-btn"]'),dt=document.querySelector('[data-id="reviews__swiper"]');P.insertAdjacentHTML("beforeend",D(I()));pt();function pt(){new L(dt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:ct,nextEl:lt},keyboard:{enabled:!0},breakpoints:{[c]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}async function mt(){const{data:e}=await N.get("https://stp-9255-backend.onrender.com/reviews");return e.data}const ut=mt();console.log(ut);const gt=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const b=document.querySelector('[data-id="review-form"]'),_t=document.querySelector('[data-id="review-form__close-btn"]'),j=document.querySelector('[data-id="review-form__form"]'),ft=document.querySelector('[data-id="review-form__textarea-comm"]');gt.addEventListener("click",vt);_t.addEventListener("click",u);j.addEventListener("submit",kt);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});b.addEventListener("click",e=>{e.target===e.currentTarget&&u()});ft.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function vt(){b.classList.add("is-open"),lockScroll()}function u(){b.classList.remove("is-open"),unlockScroll()}function kt(e){e.preventDefault();const t=bt();ht(t),u()}function bt(){const e=new FormData(j);return console.log(Object.fromEntries(e.entries())),Object.fromEntries(e.entries())}function ht(e){const t=I();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),P.insertAdjacentHTML("afterbegin",D([e]))}new H('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
