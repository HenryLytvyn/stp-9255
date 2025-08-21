import{S as L}from"./assets/vendor-CRZmPYk3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,i=0;const o=d=>d.preventDefault(),s=d=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(d.key)&&d.preventDefault()},n=()=>window.scrollTo(t,i);function r(){t=e.scrollLeft,i=e.scrollTop,window.addEventListener("scroll",n,{passive:!1}),window.addEventListener("wheel",o,{passive:!1}),document.addEventListener("wheel",o,{passive:!1,capture:!0}),window.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchmove",o,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function w(){window.removeEventListener("scroll",n),window.removeEventListener("wheel",o),document.removeEventListener("wheel",o,{capture:!0}),window.removeEventListener("touchmove",o),document.removeEventListener("touchmove",o,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=r,window.unlockScroll=w})();const p=document.querySelector('[data-id="mobile-menu"]'),C=document.querySelector('[data-id="mobile-btn"]'),f=document.querySelector('[data-id="nav-icon"]'),S=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const x=document.querySelector('[data-id="mobile-menu__background"]'),E=document.querySelector('[data-id="header__logo"]');let b,u=!1;C.addEventListener("click",()=>{p.style.backgroundPosition="center top",f.classList.toggle("open"),p.classList.toggle("open"),x.classList.toggle("open"),u?(unlockScroll(),u=!1):(lockScroll(),u=!0),b=document.documentElement.scrollTop,A(Number(b))});S.forEach(e=>e.addEventListener("click",y));E.addEventListener("click",y);function y(){f.classList.remove("open"),p.classList.remove("open"),x.classList.remove("open"),unlockScroll()}function A(e){p.style.backgroundPosition=`center -${e}px`}const T=document.querySelectorAll('[data-id="title-frame-path"]'),v=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),v.unobserve(t.target))})},{threshold:.5});T.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,v.observe(e)});const m=1200;function _(){return window.innerWidth<m}const $=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,q=`<svg
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
</svg>`;function B(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function k(e){return e.map(t=>`<li class="features__card">

        ${(_()?$:q).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const M="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",P="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",D="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",I="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",j="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",N="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",F="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",H="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",O="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",R="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",K="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",Y="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",W="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",G="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",U="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",V="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",z="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",J="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",Z="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",Q="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",X="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",ee="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",te="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",se="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",oe="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ne="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ie="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",ae="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function l({mobile1x:e,mobile2x:t,desktop1x:i,desktop2x:o}){const s=window.devicePixelRatio||1;return _()?s>1?t:e:s>1?o:i}const re=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:l({mobile1x:oe,mobile2x:ne,desktop1x:ie,desktop2x:ae}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:l({mobile1x:X,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:l({mobile1x:z,mobile2x:J,desktop1x:Z,desktop2x:Q}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:O,mobile2x:R,desktop1x:K,desktop2x:Y}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:l({mobile1x:W,mobile2x:G,desktop1x:U,desktop2x:V}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:j,mobile2x:N,desktop1x:F,desktop2x:H}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:l({mobile1x:M,mobile2x:P,desktop1x:D,desktop2x:I}),alt:"angry fighters"}],c=document.querySelector('[data-id="features__cards-deck"]'),le=document.querySelector('[data-id="features__open-cards"]');let a=[...re],g=!1;if(_())c.insertAdjacentHTML("beforeend",k(a));else{let t=function(){if(g)return;g=!0,c.style.cursor="default";const i=c.lastElementChild;i.classList.add("transition-anim"),setTimeout(()=>{i.style.right="-603px"},1e3),setTimeout(()=>{e.push(a[a.length-1]),a.pop(),a.unshift(e[0]),e.shift();const o=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),n=document.querySelector('[data-id="features__card-image"]');pe(o,s),ce(e[0],o,s,n),me(a[0],i),h(),setTimeout(()=>{de(o,s)},100),c.style.cursor="pointer",g=!1},2e3)};const e=[];e.push(a[a.length-1]),a.pop(),le.innerHTML=`${k(e)}`,h(),c.insertAdjacentHTML("beforeend",B(a)),c.addEventListener("click",t)}function h(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function ce({title:e,description:t,src:i},o,s,n){o.textContent=e,s.textContent=t,n.setAttribute("href",i)}function de(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function pe(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function me({src:e},t){setTimeout(()=>{t.remove()},50),c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function ue(e,t,i){const{mobile1x:o,mobile2x:s,desktop1x:n,desktop2x:r}=e;return`
        <picture class="${i}__card-picture">
        <source
          media="(min-width: ${m}px)"
          srcset="
            ${n}    1x,
            ${r}    2x
          "
        />
        <source
          media="(max-width: ${m-.02}px)"
          srcset="
            ${o}    1x,
            ${s}    2x
          "
        />
        <img
          class="${i}__card-img"
          src="${o}"
          alt="${t}"
        />
      </picture>
        `}function ge(e){return e.map(({title:t,description:i,images:o,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${i}</p>
      ${ue(o,s,Ie)}
    </li>
    `).join("")}const _e="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",be="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",ke="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",he="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",fe="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",xe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",ye="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",ve="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",we="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Le="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Ce="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Se="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Ee="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Ae="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Te="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",$e="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",qe="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Be="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Me="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Pe="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",De=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:_e,mobile2x:be,desktop1x:ke,desktop2x:he},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:fe,mobile2x:xe,desktop1x:ye,desktop2x:ve},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:we,mobile2x:Le,desktop1x:Ce,desktop2x:Se},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Ee,mobile2x:Ae,desktop1x:Te,desktop2x:$e},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:qe,mobile2x:Be,desktop1x:Me,desktop2x:Pe},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ie="heroes",je=document.querySelector('[data-id="heroes__cards-list"]'),Ne=document.querySelector('[data-id="heroes__prev-btn"]'),Fe=document.querySelector('[data-id="heroes__next-btn"]'),He=document.querySelector('[data-id="heroes__swiper"]'),Oe=document.querySelector('[data-id="heroes__sw-pagin-container"]');document.querySelector('[data-id="heroes__sw-pagin-item"]');je.insertAdjacentHTML("beforeend",ge(De));Re();function Re(){new L(He,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Ne,nextEl:Fe},pagination:{el:Oe},keyboard:{enabled:!0},breakpoints:{[m]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}
//# sourceMappingURL=index.js.map
