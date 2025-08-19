import{S as v}from"./assets/vendor-CRZmPYk3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const p=document.querySelector('[data-id="mobile-menu"]'),w=document.querySelector('[data-id="mobile-btn"]'),k=document.querySelector('[data-id="nav-icon"]'),C=document.querySelectorAll('[data-id="nav__item-link"]'),x=document.querySelector("body"),h=document.querySelector('[data-id="mobile-menu__background"]'),L=document.querySelector('[data-id="header__logo"]');let m;w.addEventListener("click",()=>{p.style.backgroundPosition="center top",k.classList.toggle("open"),p.classList.toggle("open"),h.classList.toggle("open"),x.classList.toggle("no-scroll"),m=document.documentElement.scrollTop,console.log("scroll: ",m),S(Number(m))});C.forEach(e=>e.addEventListener("click",f));L.addEventListener("click",f);function f(){k.classList.remove("open"),p.classList.remove("open"),h.classList.remove("open"),x.classList.remove("no-scroll")}function S(e){p.style.backgroundPosition=`center -${e}px`,console.log(e)}const B=document.querySelectorAll('[data-id="title-frame-path"]'),y=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),y.unobserve(t.target))})},{threshold:.5});B.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,y.observe(e)});const d=1200;function u(){return window.innerWidth<d}const T=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,$=`<svg
  class="card-frame-animation"
  data-id="card-frame-animation"
  width="554"
  height="866"
  viewBox="0 0 554 866"
  style="position: relative"
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
    stroke="#feffe8"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
    stroke-linejoin="round"
    stroke-linecap="round"
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
</svg>`;function q(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function _(e){return e.map(t=>`<li class="features__card">

        ${(u()?T:$).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const M="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",A="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",P="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",E="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",D="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",I="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",j="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",N="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",F="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",H="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",O="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",R="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",K="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",Y="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",G="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",V="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",W="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",z="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",J="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",U="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",Z="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",Q="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",X="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",ee="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",te="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",se="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",oe="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",ne="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function r({mobile1x:e,mobile2x:t,desktop1x:i,desktop2x:n}){const s=window.devicePixelRatio||1;return u()?s>1?t:e:s>1?n:i}const ie=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:r({mobile1x:te,mobile2x:se,desktop1x:oe,desktop2x:ne}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:r({mobile1x:Z,mobile2x:Q,desktop1x:X,desktop2x:ee}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:r({mobile1x:W,mobile2x:z,desktop1x:J,desktop2x:U}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:F,mobile2x:H,desktop1x:O,desktop2x:R}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:r({mobile1x:K,mobile2x:Y,desktop1x:G,desktop2x:V}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:D,mobile2x:I,desktop1x:j,desktop2x:N}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:r({mobile1x:M,mobile2x:A,desktop1x:P,desktop2x:E}),alt:"angry fighters"}],l=document.querySelector('[data-id="features__cards-deck"]'),ae=document.querySelector('[data-id="features__open-cards"]');let a=[...ie],g=!1;if(u())l.insertAdjacentHTML("beforeend",_(a));else{let t=function(){if(g)return;g=!0,l.style.cursor="default";const i=l.lastElementChild;i.classList.add("transition-anim"),setTimeout(()=>{i.style.right="-603px"},1e3),setTimeout(()=>{e.push(a[a.length-1]),a.pop(),a.unshift(e[0]),e.shift();const n=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),o=document.querySelector('[data-id="features__card-image"]');ce(n,s),re(e[0],n,s,o),pe(a[0],i),b(),setTimeout(()=>{le(n,s)},100),l.style.cursor="pointer",g=!1},2e3)};const e=[];e.push(a[a.length-1]),a.pop(),ae.innerHTML=`${_(e)}`,b(),l.insertAdjacentHTML("beforeend",q(a)),l.addEventListener("click",t)}function b(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function re({title:e,description:t,src:i},n,s,o){n.textContent=e,s.textContent=t,o.setAttribute("href",i)}function le(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function ce(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function pe({src:e},t){setTimeout(()=>{t.remove()},50),l.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function de(e,t,i){const{mobile1x:n,mobile2x:s,desktop1x:o,desktop2x:c}=e;return`
        <picture class="${i}__card-picture">
        <source
          media="(min-width: ${d}px)"
          srcset="
            ${o}    1x,
            ${c}    2x
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
          class="${i}__card-img"
          src="${n}"
          alt="${t}"
        />
      </picture>
        `}function me(e){return e.map(({title:t,description:i,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${i}</p>
      ${de(n,s,Ee)}
    </li>
    `).join("")}const ge="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",ue="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",_e="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",be="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",ke="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",xe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",he="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",fe="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",ye="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",ve="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",we="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Ce="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",Le="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Se="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Be="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Te="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",$e="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",qe="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",Me="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Ae="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Pe=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:ge,mobile2x:ue,desktop1x:_e,desktop2x:be},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:ke,mobile2x:xe,desktop1x:he,desktop2x:fe},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:ye,mobile2x:ve,desktop1x:we,desktop2x:Ce},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Le,mobile2x:Se,desktop1x:Be,desktop2x:Te},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:$e,mobile2x:qe,desktop1x:Me,desktop2x:Ae},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ee="heroes",De=document.querySelector('[data-id="heroes__cards-list"]'),Ie=document.querySelector('[data-id="heroes__prev-btn"]'),je=document.querySelector('[data-id="heroes__next-btn"]'),Ne=document.querySelector('[data-id="heroes__swiper"]');De.insertAdjacentHTML("beforeend",me(Pe));Fe();function Fe(){new v(Ne,{slidesPerView:1,spaceBetween:16,loop:!0,speed:500,navigation:{prevEl:Ie,nextEl:je},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}
//# sourceMappingURL=index.js.map
