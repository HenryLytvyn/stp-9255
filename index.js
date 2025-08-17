/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const d=document.querySelector('[data-id="mobile-menu"]'),k=document.querySelector('[data-id="mobile-btn"]'),_=document.querySelector('[data-id="nav-icon"]'),x=document.querySelectorAll('[data-id="nav__item-link"]'),b=document.querySelector("body"),y=document.querySelector('[data-id="mobile-menu__background"]'),C=document.querySelector('[data-id="header__logo"]');let p;k.addEventListener("click",()=>{d.style.backgroundPosition="center top",_.classList.toggle("open"),d.classList.toggle("open"),y.classList.toggle("open"),b.classList.toggle("no-scroll"),p=document.documentElement.scrollTop,console.log("scroll: ",p),S(Number(p))});x.forEach(e=>e.addEventListener("click",h));C.addEventListener("click",h);function h(){_.classList.remove("open"),d.classList.remove("open"),y.classList.remove("open"),b.classList.remove("no-scroll")}function S(e){d.style.backgroundPosition=`center -${e}px`,console.log(e)}const L=document.querySelectorAll('[data-id="title-frame-path"]'),v=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),v.unobserve(t.target))})},{threshold:.5});L.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,v.observe(e)});function g(){return window.innerWidth<=1199}const q=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,w=`<svg
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
</svg>`;function E(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function u(e){return e.map(t=>`<li class="features__card">

        ${(g()?q:w).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const M="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",A="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",D="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",P="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",T="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",$="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",I="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",B="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",j="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",N="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",F="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",H="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",O="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",R="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",z="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",K="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",W="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",G="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",J="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",U="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",V="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",X="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",Y="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",Z="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",Q="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ee="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",te="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",se="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png",ne=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:r({mobile1x:Q,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:r({mobile1x:V,mobile2x:X,desktop1x:Y,desktop2x:Z}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:r({mobile1x:W,mobile2x:G,desktop1x:J,desktop2x:U}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:j,mobile2x:N,desktop1x:F,desktop2x:H}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:r({mobile1x:O,mobile2x:R,desktop1x:z,desktop2x:K}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:r({mobile1x:T,mobile2x:$,desktop1x:I,desktop2x:B}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:r({mobile1x:M,mobile2x:A,desktop1x:D,desktop2x:P}),alt:"angry fighters"}];function r({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:a}){const s=window.devicePixelRatio||1;return g()?s>1?t:e:s>1?a:o}const l=document.querySelector('[data-id="features__cards-deck"]'),oe=document.querySelector('[data-id="features__open-cards"]');let i=[...ne],m=!1;if(g())l.insertAdjacentHTML("beforeend",u(i));else{let t=function(){if(m)return;m=!0;let o=l.lastElementChild;o.classList.add("transition-anim"),setTimeout(()=>{o.style.right="-603px"},1e3),setTimeout(()=>{re(),e.push(i[i.length-1]),i.pop(),i.unshift(e[0]),e.shift(),ie(e[0]),ae(i[0],o),f(),m=!1},2e3)};const e=[];e.push(i[i.length-1]),i.pop(),oe.innerHTML=`${u(e)}`,f(),l.insertAdjacentHTML("beforeend",E(i)),l.addEventListener("click",t)}function f(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function ie({title:e,description:t,src:o}){const a=document.querySelector('[data-id="features__card-image"]'),s=document.querySelector(".features__card-title"),n=document.querySelector(".features__card-text");s.textContent=e,n.textContent=t,a.setAttribute("href",o)}function ae({src:e},t){t.remove(),l.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function re(){var o;const e=document.querySelector('[data-id="card-frame-animation"]');if(!e)return;e.querySelectorAll('[data-anim="clip"], [data-anim="border"]').forEach(a=>{const s=a.parentElement;if(!s)return;const n=s.getAttribute("points"),c=s.cloneNode(!0);c.setAttribute("points",n),s.replaceWith(c)}),(o=e.setCurrentTime)==null||o.call(e,0)}
//# sourceMappingURL=index.js.map
