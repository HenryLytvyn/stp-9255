/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector('[data-id="mobile-menu"]'),_=document.querySelector('[data-id="mobile-btn"]'),m=document.querySelector('[data-id="nav-icon"]'),y=document.querySelectorAll('[data-id="nav__item-link"]'),g=document.querySelector("body"),u=document.querySelector('[data-id="mobile-menu__background"]');let p;_.addEventListener("click",()=>{l.style.backgroundPosition="center top",m.classList.toggle("open"),l.classList.toggle("open"),u.classList.toggle("open"),g.classList.toggle("no-scroll"),p=document.documentElement.scrollTop,console.log("scroll: ",p),v(Number(p))});y.forEach(t=>t.addEventListener("click",()=>{m.classList.remove("open"),l.classList.remove("open"),u.classList.remove("open"),g.classList.remove("no-scroll")}));function v(t){l.style.backgroundPosition=`center -${t}px`,console.log(t)}const h=document.querySelectorAll('[data-id="title-frame-path"]'),b=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("animate"),b.unobserve(s.target))})},{threshold:.5});h.forEach(t=>{const s=t.getTotalLength();t.style.strokeDasharray=s,t.style.strokeDashoffset=s,b.observe(t)});const x="/stp-9255/assets/strategic-combat-mobile-BIxxsfDc.png",k="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",w="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",C="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",L="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",S="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",q="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",E="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",P="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",D="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",M="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",$="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",B="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",I="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",A="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",T="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",j="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",N="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",F="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",O="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",z="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",H="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",K="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",R="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",W="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",G="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",J="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",U="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function d(){return window.innerWidth<=1199}const r=[{id:"pvp-pve-modes",title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:a({mobile1x:W,mobile2x:G,desktop1x:J,desktop2x:U}),alt:"game heroes"},{id:"stunning-visuals",title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:a({mobile1x:z,mobile2x:H,desktop1x:K,desktop2x:R}),alt:"game heroes and the dragon"},{id:"dynasty-management",title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:a({mobile1x:j,mobile2x:N,desktop1x:F,desktop2x:O}),alt:"game heroes"},{id:"hero-system",title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:P,mobile2x:D,desktop1x:M,desktop2x:$}),alt:"game heroes"},{id:"interactive-storytelling",title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:a({mobile1x:B,mobile2x:I,desktop1x:A,desktop2x:T}),alt:"game heroes"},{id:"campaign-map",title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:a({mobile1x:L,mobile2x:S,desktop1x:q,desktop2x:E}),alt:"games map"},{id:"strategic-combat",title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:a({mobile1x:x,mobile2x:k,desktop1x:w,desktop2x:C}),alt:"angry fighters"}];function a({mobile1x:t,mobile2x:s,desktop1x:n,desktop2x:i}){const e=window.devicePixelRatio||1;return d()?e>1?s:t:e>1?i:n}const V=`<svg width="288" height="450" viewBox="0 0 288 450">
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
`,X=`<svg
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
</svg>`;function f(t){return t.map(s=>`<li class="features__card">

        ${(d()?V:X).replaceAll("${cardSrc}",s.src).replaceAll("${id}",s.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title">${s.title}</h3>
          <div class="wrapper"><p class="features__card-text">
            ${s.description}
          </p><div/>
        </div>
      </li>`).join("")}const Y=document.querySelector('[data-id="features__cards-deck"]'),Z=document.querySelector('[data-id="features__open-cards"]');if(!d()){const t=[];t.push(r[r.length-1]),r.pop(),Z.insertAdjacentHTML("beforeend",f(t)),document.querySelectorAll('[data-id="card-frame-animation"]').forEach(n=>{const i=n.querySelector('[data-anim="clip"]'),e=n.querySelector('[data-anim="border"]');n.addEventListener("click",o=>{o.preventDefault(),i&&i.beginElement(),e&&e.beginElement()})})}Y.insertAdjacentHTML("beforeend",f(r));
//# sourceMappingURL=index.js.map
