/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const r=document.querySelector('[data-id="mobile-menu"]'),y=document.querySelector('[data-id="mobile-btn"]'),m=document.querySelector('[data-id="nav-icon"]'),v=document.querySelectorAll('[data-id="nav__item-link"]'),g=document.querySelector("body"),u=document.querySelector('[data-id="mobile-menu__background"]');let c;y.addEventListener("click",()=>{r.style.backgroundPosition="center top",m.classList.toggle("open"),r.classList.toggle("open"),u.classList.toggle("open"),g.classList.toggle("no-scroll"),c=document.documentElement.scrollTop,console.log("scroll: ",c),h(Number(c))});v.forEach(e=>e.addEventListener("click",()=>{m.classList.remove("open"),r.classList.remove("open"),u.classList.remove("open"),g.classList.remove("no-scroll")}));function h(e){r.style.backgroundPosition=`center -${e}px`,console.log(e)}const x=document.querySelectorAll('[data-id="title-frame-path"]'),b=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),b.unobserve(t.target))})},{threshold:.5});x.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,b.observe(e)});const k="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",w="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",C="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",S="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",L="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",P="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",q="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",E="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",p="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",d="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",A="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",B="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",D="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",I="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",M="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",N="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",j="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",T="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",$="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",F="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",O="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",z="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",K="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",H="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",R="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",W="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function _(){return window.innerWidth<=1199}const f=[{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:n({mobile1x:k,mobile2x:w,desktop1x:C,desktop2x:S}),alt:"angry fighters"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:n({mobile1x:L,mobile2x:P,desktop1x:q,desktop2x:E}),alt:"games map"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:n({mobile1x:p,mobile2x:p,desktop1x:d,desktop2x:d}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:n({mobile1x:A,mobile2x:B,desktop1x:D,desktop2x:I}),alt:"game heroes"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:n({mobile1x:M,mobile2x:N,desktop1x:j,desktop2x:T}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:n({mobile1x:$,mobile2x:F,desktop1x:O,desktop2x:z}),alt:"game heroes and the dragon"},{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:n({mobile1x:K,mobile2x:H,desktop1x:R,desktop2x:W}),alt:"game heroes"}];function n({mobile1x:e,mobile2x:t,desktop1x:i,desktop2x:a}){const s=window.devicePixelRatio||1;return _()?s>1?t:e:s>1?a:i}const G=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,J=`<svg
  class="card-frame-animation"
  data-id="card-frame-animation"
  width="554"
  height="866"
  viewBox="0 0 554 866"
  style="position: relative"
>
  <defs>
    <clipPath id="insideClip">
      <polygon
        id="clipPoly"
        points="0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122"
      >
        <animate
          id="clipAnim"
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

  <image
    href="\${cardSrc}"
    width="554"
    height="866"
    clip-path="url(#insideClip)"
  />

  <polygon
    fill="none"
    stroke="#feffe8"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
    stroke-linejoin="round"
    stroke-linecap="round"
    clip-path="url(#insideClip)"
    points="0,0 66.48,0 83.1,0 83.1,0 99.72,0 537.38,0 554,0 554,28.578 554,381.04 554,398.36 554,582.318 554,599.638 554,866 27.7,866 0,866 0,866 0,837.122"
  >
    <animate
      id="borderAnim"
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
</svg>
`,U=document.querySelector('[data-id="features__cards-list"]');console.log(f);function V(e){return e.map(t=>`
    <li class="features__card">
        <div
          class="features__card-img-wrapper"
          data-id="features__card-img-wrapper"
        >
        ${_()?G.replace("${cardSrc}",t.src):J.replace("${cardSrc}",t.src)}
        
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${t.title}</h3>
          <p class="features__card-text">
            ${t.description}
          </p>
        </div>
      </li>`).join("")}U.insertAdjacentHTML("beforeend",V(f));const X=document.querySelectorAll('[data-id="card-frame-animation"]');X.forEach(e=>{const t=e.querySelector("#clipAnim"),i=e.querySelector("#borderAnim");t&&i&&e.addEventListener("click",()=>{t.beginElement(),i.beginElement()})});
//# sourceMappingURL=index.js.map
