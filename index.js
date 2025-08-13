/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const r=document.querySelector('[data-id="mobile-menu"]'),_=document.querySelector('[data-id="mobile-btn"]'),p=document.querySelector('[data-id="nav-icon"]'),f=document.querySelectorAll('[data-id="nav__item-link"]'),d=document.querySelector("body"),m=document.querySelector('[data-id="mobile-menu__background"]');let c;_.addEventListener("click",()=>{r.style.backgroundPosition="center top",p.classList.toggle("open"),r.classList.toggle("open"),m.classList.toggle("open"),d.classList.toggle("no-scroll"),c=document.documentElement.scrollTop,console.log("scroll: ",c),y(Number(c))});f.forEach(e=>e.addEventListener("click",()=>{p.classList.remove("open"),r.classList.remove("open"),m.classList.remove("open"),d.classList.remove("no-scroll")}));function y(e){r.style.backgroundPosition=`center -${e}px`,console.log(e)}const v=document.querySelectorAll('[data-id="title-frame-path"]'),g=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),g.unobserve(t.target))})},{threshold:.5});v.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,g.observe(e)});const h="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",x="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",k="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",w="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",L="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",S="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",C="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",E="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",q="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",P="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",D="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",$="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",B="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",I="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",M="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",A="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",N="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",T="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",j="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",F="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",O="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",z="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",K="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",H="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",R="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",W="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",G="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",J="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function u(){return window.innerWidth<=1199}const b=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:a({mobile1x:R,mobile2x:W,desktop1x:G,desktop2x:J}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:a({mobile1x:O,mobile2x:z,desktop1x:K,desktop2x:H}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:a({mobile1x:N,mobile2x:T,desktop1x:j,desktop2x:F}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:q,mobile2x:P,desktop1x:D,desktop2x:$}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:a({mobile1x:B,mobile2x:I,desktop1x:M,desktop2x:A}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:L,mobile2x:S,desktop1x:C,desktop2x:E}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:a({mobile1x:h,mobile2x:x,desktop1x:k,desktop2x:w}),alt:"angry fighters"}];function a({mobile1x:e,mobile2x:t,desktop1x:n,desktop2x:i}){const s=window.devicePixelRatio||1;return u()?s>1?t:e:s>1?i:n}const U=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,V=`<svg
  xmlns="http://www.w3.org/2000/svg"
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
            0,0 66.48,0 83.1,25.98 210.52,25.98 226.14,0 537.38,0 554,28.578 554,28.578 554,381.04 543.92,398.36 543.92,582.318 554,599.638 554,866 27.7,866 27.7,866 0,837.122 0,837.122;
            0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122
          "
        />
      </polygon>
    </clipPath>
  </defs>

  <!-- ИЗОБРАЖЕНИЕ -->
  <image
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
        0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122
      "
    />
  </polygon>
</svg>`,X=document.querySelector('[data-id="features__cards-deck"]');console.log(b);function Y(e){return e.map(t=>`<li class="features__card">
        <div
          class="features__card-img-wrapper"
          data-id="features__card-img-wrapper"
        >
        ${(u()?U:V).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${t.title}</h3>
          <p class="features__card-text">
            ${t.description}
          </p>
        </div>
      </li>`).join("")}X.insertAdjacentHTML("beforeend",Y(b));const Z=document.querySelectorAll('[data-id="card-frame-animation"]');Z.forEach(e=>{const t=e.querySelector('[data-anim="clip"]'),n=e.querySelector('[data-anim="border"]');e.addEventListener("click",i=>{i.preventDefault(),t&&t.beginElement(),n&&n.beginElement()})});
//# sourceMappingURL=index.js.map
