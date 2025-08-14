/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector('[data-id="mobile-menu"]'),y=document.querySelector('[data-id="mobile-btn"]'),m=document.querySelector('[data-id="nav-icon"]'),v=document.querySelectorAll('[data-id="nav__item-link"]'),g=document.querySelector("body"),u=document.querySelector('[data-id="mobile-menu__background"]'),h=document.querySelector('[data-id="header__logo"]');let p;y.addEventListener("click",()=>{l.style.backgroundPosition="center top",m.classList.toggle("open"),l.classList.toggle("open"),u.classList.toggle("open"),g.classList.toggle("no-scroll"),p=document.documentElement.scrollTop,console.log("scroll: ",p),x(Number(p))});v.forEach(t=>t.addEventListener("click",b));h.addEventListener("click",b);function b(){m.classList.remove("open"),l.classList.remove("open"),u.classList.remove("open"),g.classList.remove("no-scroll")}function x(t){l.style.backgroundPosition=`center -${t}px`,console.log(t)}const k=document.querySelectorAll('[data-id="title-frame-path"]'),f=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate"),f.unobserve(s.target))})},{threshold:.5});k.forEach(t=>{const s=t.getTotalLength();t.style.strokeDasharray=s,t.style.strokeDashoffset=s,f.observe(t)});const w="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",C="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",L="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",S="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",q="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",E="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",P="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",D="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",M="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",$="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",B="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",I="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",A="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",T="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",j="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",N="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",F="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",O="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",z="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",H="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",K="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",R="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",W="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",G="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",J="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",U="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",V="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",X="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function d(){return window.innerWidth<=1199}const r=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:a({mobile1x:J,mobile2x:U,desktop1x:V,desktop2x:X}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:a({mobile1x:K,mobile2x:R,desktop1x:W,desktop2x:G}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:a({mobile1x:F,mobile2x:O,desktop1x:z,desktop2x:H}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:M,mobile2x:$,desktop1x:B,desktop2x:I}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:a({mobile1x:A,mobile2x:T,desktop1x:j,desktop2x:N}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:q,mobile2x:E,desktop1x:P,desktop2x:D}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:a({mobile1x:w,mobile2x:C,desktop1x:L,desktop2x:S}),alt:"angry fighters"}];function a({mobile1x:t,mobile2x:s,desktop1x:n,desktop2x:i}){const e=window.devicePixelRatio||1;return d()?e>1?s:t:e>1?i:n}const Y=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,Z=`<svg
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
        0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122
      "
    />
  </polygon>
</svg>`;function _(t){return t.map(s=>`<li class="features__card">

        ${(d()?Y:Z).replaceAll("${cardSrc}",s.src).replaceAll("${id}",s.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${s.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${s.description}
          </p><div/>
        </div>
      </li>`).join("")}const Q=document.querySelector('[data-id="features__cards-deck"]'),ee=document.querySelector('[data-id="features__open-cards"]');if(!d()){const t=[];t.push(r[r.length-1]),r.pop(),ee.insertAdjacentHTML("beforeend",_(t)),document.querySelectorAll('[data-id="card-frame-animation"]').forEach(n=>{const i=n.querySelector('[data-anim="clip"]'),e=n.querySelector('[data-anim="border"]');n.addEventListener("click",o=>{o.preventDefault(),i&&i.beginElement(),e&&e.beginElement()})})}Q.insertAdjacentHTML("beforeend",_(r));
//# sourceMappingURL=index.js.map
