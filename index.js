/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const l=document.querySelector('[data-id="mobile-menu"]'),x=document.querySelector('[data-id="mobile-btn"]'),b=document.querySelector('[data-id="nav-icon"]'),C=document.querySelectorAll('[data-id="nav__item-link"]'),y=document.querySelector("body"),v=document.querySelector('[data-id="mobile-menu__background"]'),L=document.querySelector('[data-id="header__logo"]');let d;x.addEventListener("click",()=>{l.style.backgroundPosition="center top",b.classList.toggle("open"),l.classList.toggle("open"),v.classList.toggle("open"),y.classList.toggle("no-scroll"),d=document.documentElement.scrollTop,console.log("scroll: ",d),S(Number(d))});C.forEach(e=>e.addEventListener("click",h));L.addEventListener("click",h);function h(){b.classList.remove("open"),l.classList.remove("open"),v.classList.remove("open"),y.classList.remove("no-scroll")}function S(e){l.style.backgroundPosition=`center -${e}px`,console.log(e)}const w=document.querySelectorAll('[data-id="title-frame-path"]'),k=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),k.unobserve(t.target))})},{threshold:.5});w.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,k.observe(e)});function g(){return window.innerWidth<=1199}const q=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,M=`<svg
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
</svg>`;function u(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function m(e){return e.map(t=>`<li class="features__card">

        ${(g()?q:M).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const E="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",P="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",D="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",T="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",$="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",B="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",I="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",A="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",j="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",N="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",H="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",F="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",O="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",z="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",K="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",R="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",W="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",G="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",J="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",U="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",V="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",X="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",Y="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",Z="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",Q="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ee="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",te="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",se="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",i=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:a({mobile1x:Q,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:a({mobile1x:V,mobile2x:X,desktop1x:Y,desktop2x:Z}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:a({mobile1x:W,mobile2x:G,desktop1x:J,desktop2x:U}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:j,mobile2x:N,desktop1x:H,desktop2x:F}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:a({mobile1x:O,mobile2x:z,desktop1x:K,desktop2x:R}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:$,mobile2x:B,desktop1x:I,desktop2x:A}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:a({mobile1x:E,mobile2x:P,desktop1x:D,desktop2x:T}),alt:"angry fighters"}];function a({mobile1x:e,mobile2x:t,desktop1x:n,desktop2x:r}){const s=window.devicePixelRatio||1;return g()?s>1?t:e:s>1?r:n}const c=document.querySelector('[data-id="features__cards-deck"]'),f=document.querySelector('[data-id="features__open-cards"]');if(g())c.insertAdjacentHTML("beforeend",m(i));else{let t=function(){let n=c.lastElementChild;n.classList.add("transition-anim"),setTimeout(()=>{n.style.right="-603px"},1e3),setTimeout(()=>{e.push(i[i.length-1]),i.pop(),i.unshift(e[0]),e.shift(),c.innerHTML=u(i);//! cardDeck.insertAdjacentHTML('afterbegin');
f.innerHTML=m(e),_()},2e3)};const e=[];e.push(i[i.length-1]),i.pop(),f.innerHTML=`${m(e)}`,document.querySelectorAll('[data-id="card-frame-animation"]');//!======================
//!======================
_(),c.insertAdjacentHTML("beforeend",u(i)),c.addEventListener("click",t)}function _(){const e=document.querySelector('[data-id="card-frame-animation"]'),t=e.querySelector('[data-anim="clip"]'),n=e.querySelector('[data-anim="border"]');t&&n&&(t.beginElement(),n.beginElement())}
//# sourceMappingURL=index.js.map
