import{S as w,A as T}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=p=>p.preventDefault(),s=p=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(p.key)&&p.preventDefault()},i=()=>window.scrollTo(t,o);function a(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",i,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function $(){window.removeEventListener("scroll",i),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=a,window.unlockScroll=$})();const m=document.querySelector('[data-id="mobile-menu"]'),M=document.querySelector('[data-id="mobile-btn"]'),L=document.querySelector('[data-id="nav-icon"]'),P=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const S=document.querySelector('[data-id="mobile-menu__background"]'),D=document.querySelector('[data-id="header__logo"]');let b,g=!1;M.addEventListener("click",()=>{m.style.backgroundPosition="center top",L.classList.toggle("open"),m.classList.toggle("open"),S.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),b=document.documentElement.scrollTop,j(Number(b))});P.forEach(e=>e.addEventListener("click",E));D.addEventListener("click",E);function E(){L.classList.remove("open"),m.classList.remove("open"),S.classList.remove("open"),unlockScroll()}function j(e){m.style.backgroundPosition=`center -${e}px`}const I=document.querySelectorAll('[data-id="title-frame-path"]'),C=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),C.unobserve(t.target))})},{threshold:.5});I.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,C.observe(e)});const d=1200;function v(){return window.innerWidth<d}const N=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,F=`<svg
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

        ${(v()?N:F).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const O="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",R="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",K="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",G="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",V="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",W="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",Y="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",J="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",U="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",z="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",Z="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",Q="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",X="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",ee="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",te="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",se="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",ne="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",oe="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",ie="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",re="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ae="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",ce="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",le="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",de="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",pe="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",me="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ue="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",ge="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function c({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return v()?s>1?t:e:s>1?n:o}const _e=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:c({mobile1x:pe,mobile2x:me,desktop1x:ue,desktop2x:ge}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:c({mobile1x:ae,mobile2x:ce,desktop1x:le,desktop2x:de}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:c({mobile1x:ne,mobile2x:oe,desktop1x:ie,desktop2x:re}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:c({mobile1x:U,mobile2x:z,desktop1x:Z,desktop2x:Q}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:c({mobile1x:X,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:c({mobile1x:V,mobile2x:W,desktop1x:Y,desktop2x:J}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:c({mobile1x:O,mobile2x:R,desktop1x:K,desktop2x:G}),alt:"angry fighters"}],l=document.querySelector('[data-id="features__cards-deck"]'),fe=document.querySelector('[data-id="features__open-cards"]');let r=[..._e],_=!1;if(v())l.insertAdjacentHTML("beforeend",h(r));else{let t=function(){if(_)return;_=!0,l.style.cursor="default";const o=l.lastElementChild;o.classList.add("transition-anim"),setTimeout(()=>{o.style.right="-603px"},1e3),setTimeout(()=>{e.push(r[r.length-1]),r.pop(),r.unshift(e[0]),e.shift();const n=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__card-image"]');be(n,s),ve(e[0],n,s,i),he(r[0],o),y(),setTimeout(()=>{ke(n,s)},100),l.style.cursor="pointer",_=!1},2e3)};const e=[];e.push(r[r.length-1]),r.pop(),fe.innerHTML=`${h(e)}`,y(),l.insertAdjacentHTML("beforeend",H(r)),l.addEventListener("click",t)}function y(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function ve({title:e,description:t,src:o},n,s,i){n.textContent=e,s.textContent=t,i.setAttribute("href",o)}function ke(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function be(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function he({src:e},t){setTimeout(()=>{t.remove()},50),l.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function ye(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:i,desktop2x:a}=e;return`
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
        `}function xe(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${ye(n,s,Ge)}
    </li>
    `).join("")}const we="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Le="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Se="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Ee="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Ce="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Ae="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",qe="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Be="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",$e="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Te="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Me="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Pe="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",De="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",je="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Ie="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Ne="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Fe="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",He="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Oe="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Re="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ke=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:we,mobile2x:Le,desktop1x:Se,desktop2x:Ee},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Ce,mobile2x:Ae,desktop1x:qe,desktop2x:Be},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:$e,mobile2x:Te,desktop1x:Me,desktop2x:Pe},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:De,mobile2x:je,desktop1x:Ie,desktop2x:Ne},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Fe,mobile2x:He,desktop1x:Oe,desktop2x:Re},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ge="heroes",Ve=document.querySelector('[data-id="heroes__cards-list"]'),We=document.querySelector('[data-id="heroes__prev-btn"]'),Ye=document.querySelector('[data-id="heroes__next-btn"]'),Je=document.querySelector('[data-id="heroes__swiper"]'),Ue=document.querySelector('[data-id="heroes__sw-pagin-container"]');Ve.insertAdjacentHTML("beforeend",xe(Ke));ze();function ze(){new w(Je,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:We,nextEl:Ye},pagination:{el:Ue},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}function A(e){return e.map(({name:t,comments:o,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="./img/sprite.svg#name-frame"></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${o}</p>
            </div>
          </div>
          <div class="reviews__rating">${Ze(Number(n))}</div>
        </li>
      `).join("")}function Ze(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const x=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function f(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(x)),x)}const q=document.querySelector('[data-id="reviews__cards-list"]'),Qe=document.querySelector('[data-id="reviews__prev-btn"]'),Xe=document.querySelector('[data-id="reviews__next-btn"]'),et=document.querySelector('[data-id="reviews__swiper"]');q.insertAdjacentHTML("beforeend",A(f()));tt();function tt(){new w(et,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:Qe,nextEl:Xe},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const st=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const k=document.querySelector('[data-id="review-form"]'),nt=document.querySelector('[data-id="review-form__close-btn"]'),B=document.querySelector('[data-id="review-form__form"]'),ot=document.querySelector('[data-id="review-form__textarea-comm"]');st.addEventListener("click",it);nt.addEventListener("click",u);B.addEventListener("submit",rt);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});k.addEventListener("click",e=>{e.target===e.currentTarget&&u()});ot.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function it(){k.classList.add("is-open"),lockScroll()}function u(){k.classList.remove("is-open"),unlockScroll()}function rt(e){e.preventDefault();const t=at(e);ct(t),u()}function at(e){e.preventDefault();const t=new FormData(B);return console.log(Object.fromEntries(t.entries())),Object.fromEntries(t.entries())}function ct(e){const t=f();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),q.innerHTML=A(f())}new T('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
