/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const l=document.querySelector('[data-id="mobile-menu"]'),k=document.querySelector('[data-id="mobile-btn"]'),_=document.querySelector('[data-id="nav-icon"]'),x=document.querySelectorAll('[data-id="nav__item-link"]'),b=document.querySelector("body"),y=document.querySelector('[data-id="mobile-menu__background"]'),C=document.querySelector('[data-id="header__logo"]');let p;k.addEventListener("click",()=>{l.style.backgroundPosition="center top",_.classList.toggle("open"),l.classList.toggle("open"),y.classList.toggle("open"),b.classList.toggle("no-scroll"),p=document.documentElement.scrollTop,console.log("scroll: ",p),L(Number(p))});x.forEach(e=>e.addEventListener("click",v));C.addEventListener("click",v);function v(){_.classList.remove("open"),l.classList.remove("open"),y.classList.remove("open"),b.classList.remove("no-scroll")}function L(e){l.style.backgroundPosition=`center -${e}px`,console.log(e)}const S=document.querySelectorAll('[data-id="title-frame-path"]'),h=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),h.unobserve(t.target))})},{threshold:.5});S.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,h.observe(e)});function g(){return window.innerWidth<=1199}const w=`<svg width="288" height="450" viewBox="0 0 288 450">
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
  style="position: relative"
>
  <defs>
    <clipPath id="clip-\${id}">
      <polygon
        id="clip-poly-\${id}"
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
</svg>`;function E(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function u(e){return e.map(t=>`<li class="features__card">

        ${(g()?w:q).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const M="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",D="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",P="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",T="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",$="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",A="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",I="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",B="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",j="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",N="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",F="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",H="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",O="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",R="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",z="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",K="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",W="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",G="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",J="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",U="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",V="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",X="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",Y="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",Z="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",Q="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ee="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",te="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",se="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",oe=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:r({mobile1x:Q,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:r({mobile1x:V,mobile2x:X,desktop1x:Y,desktop2x:Z}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:r({mobile1x:W,mobile2x:G,desktop1x:J,desktop2x:U}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:j,mobile2x:N,desktop1x:F,desktop2x:H}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:r({mobile1x:O,mobile2x:R,desktop1x:z,desktop2x:K}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:$,mobile2x:A,desktop1x:I,desktop2x:B}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:r({mobile1x:M,mobile2x:D,desktop1x:P,desktop2x:T}),alt:"angry fighters"}];function r({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:a}){const s=window.devicePixelRatio||1;return g()?s>1?t:e:s>1?a:o}const c=document.querySelector('[data-id="features__cards-deck"]'),ne=document.querySelector('[data-id="features__open-cards"]');let i=[...oe],m=!1;if(g())c.insertAdjacentHTML("beforeend",u(i));else{let t=function(){if(m)return;m=!0;let o=c.lastElementChild;o.classList.add("transition-anim"),setTimeout(()=>{o.style.right="-603px"},1e3),setTimeout(()=>{e.push(i[i.length-1]),i.pop(),i.unshift(e[0]),e.shift(),ie(e),f(),ae(i[0],o),m=!1},2e3)};const e=[];e.push(i[i.length-1]),i.pop(),ne.innerHTML=`${u(e)}`,f(),c.insertAdjacentHTML("beforeend",E(i)),c.addEventListener("click",t)}function f(){const e=document.querySelector('[data-id="card-frame-animation"]'),t=e.querySelector('[data-anim="clip"]'),o=e.querySelector('[data-anim="border"]');t&&o&&(t.beginElement(),o.beginElement())}function ie(e){const t=document.querySelector('[data-id="features__card-image"]'),o=document.querySelector(".features__card-title"),a=document.querySelector(".features__card-text");o.textContent=e[0].title,a.textContent=e[0].description,t.setAttribute("href",e[0].src)}function ae({src:e},t){t.remove(),c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}
//# sourceMappingURL=index.js.map
