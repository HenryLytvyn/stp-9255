import{S as x,A as q}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,n=0;const o=p=>p.preventDefault(),s=p=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(p.key)&&p.preventDefault()},i=()=>window.scrollTo(t,n);function a(){t=e.scrollLeft,n=e.scrollTop,window.addEventListener("scroll",i,{passive:!1}),window.addEventListener("wheel",o,{passive:!1}),document.addEventListener("wheel",o,{passive:!1,capture:!0}),window.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchmove",o,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function $(){window.removeEventListener("scroll",i),window.removeEventListener("wheel",o),document.removeEventListener("wheel",o,{capture:!0}),window.removeEventListener("touchmove",o),document.removeEventListener("touchmove",o,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=a,window.unlockScroll=$})();const m=document.querySelector('[data-id="mobile-menu"]'),T=document.querySelector('[data-id="mobile-btn"]'),L=document.querySelector('[data-id="nav-icon"]'),P=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const S=document.querySelector('[data-id="mobile-menu__background"]'),D=document.querySelector('[data-id="header__logo"]');let b,g=!1;T.addEventListener("click",()=>{m.style.backgroundPosition="center top",L.classList.toggle("open"),m.classList.toggle("open"),S.classList.toggle("open"),g?(unlockScroll(),g=!1):(lockScroll(),g=!0),b=document.documentElement.scrollTop,j(Number(b))});P.forEach(e=>e.addEventListener("click",E));D.addEventListener("click",E);function E(){L.classList.remove("open"),m.classList.remove("open"),S.classList.remove("open"),unlockScroll()}function j(e){m.style.backgroundPosition=`center -${e}px`}const H=document.querySelectorAll('[data-id="title-frame-path"]'),B=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),B.unobserve(t.target))})},{threshold:.5});H.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,B.observe(e)});const d=1200;function v(){return window.innerWidth<d}const I=`<svg width="288" height="450" viewBox="0 0 288 450">
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
</svg>`;function N(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function k(e){return e.map(t=>`<li class="features__card">

        ${(v()?I:F).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const z="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",O="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",R="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",V="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",K="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",G="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",W="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",Y="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",J="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",U="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",Z="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",Q="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",X="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",ee="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",te="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",se="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",oe="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",ne="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",ie="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",re="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",ae="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",le="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",ce="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",de="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",pe="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",me="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",ue="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",ge="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function l({mobile1x:e,mobile2x:t,desktop1x:n,desktop2x:o}){const s=window.devicePixelRatio||1;return v()?s>1?t:e:s>1?o:n}const _e=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:l({mobile1x:pe,mobile2x:me,desktop1x:ue,desktop2x:ge}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:l({mobile1x:ae,mobile2x:le,desktop1x:ce,desktop2x:de}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:l({mobile1x:oe,mobile2x:ne,desktop1x:ie,desktop2x:re}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:J,mobile2x:U,desktop1x:Z,desktop2x:Q}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:l({mobile1x:X,mobile2x:ee,desktop1x:te,desktop2x:se}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:K,mobile2x:G,desktop1x:W,desktop2x:Y}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:l({mobile1x:z,mobile2x:O,desktop1x:R,desktop2x:V}),alt:"angry fighters"}],c=document.querySelector('[data-id="features__cards-deck"]'),fe=document.querySelector('[data-id="features__open-cards"]');let r=[..._e],_=!1;if(v())c.insertAdjacentHTML("beforeend",k(r));else{let t=function(){if(_)return;_=!0,c.style.cursor="default";const n=c.lastElementChild;n.classList.add("transition-anim"),setTimeout(()=>{n.style.right="-603px"},1e3),setTimeout(()=>{e.push(r[r.length-1]),r.pop(),r.unshift(e[0]),e.shift();const o=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__card-image"]');be(o,s),ve(e[0],o,s,i),ke(r[0],n),y(),setTimeout(()=>{he(o,s)},100),c.style.cursor="pointer",_=!1},2e3)};const e=[];e.push(r[r.length-1]),r.pop(),fe.innerHTML=`${k(e)}`,y(),c.insertAdjacentHTML("beforeend",N(r)),c.addEventListener("click",t)}function y(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function ve({title:e,description:t,src:n},o,s,i){o.textContent=e,s.textContent=t,i.setAttribute("href",n)}function he(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function be(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function ke({src:e},t){setTimeout(()=>{t.remove()},50),c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function ye(e,t,n){const{mobile1x:o,mobile2x:s,desktop1x:i,desktop2x:a}=e;return`
        <picture class="${n}__card-picture">
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
            ${o}    1x,
            ${s}    2x
          "
        />
        <img
          class="${n}__card-img"
          src="${o}"
          alt="${t}"
        />
      </picture>
        `}function we(e){return e.map(({title:t,description:n,images:o,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${n}</p>
      ${ye(o,s,Ve)}
    </li>
    `).join("")}const xe="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",Le="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",Se="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",Ee="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",Be="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",Ce="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",Me="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Ae="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",$e="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",qe="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Te="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Pe="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",De="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",je="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",He="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",Ie="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Fe="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Ne="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",ze="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",Oe="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Re=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:xe,mobile2x:Le,desktop1x:Se,desktop2x:Ee},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Be,mobile2x:Ce,desktop1x:Me,desktop2x:Ae},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:$e,mobile2x:qe,desktop1x:Te,desktop2x:Pe},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:De,mobile2x:je,desktop1x:He,desktop2x:Ie},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Fe,mobile2x:Ne,desktop1x:ze,desktop2x:Oe},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ve="heroes",Ke=document.querySelector('[data-id="heroes__cards-list"]'),Ge=document.querySelector('[data-id="heroes__prev-btn"]'),We=document.querySelector('[data-id="heroes__next-btn"]'),Ye=document.querySelector('[data-id="heroes__swiper"]'),Je=document.querySelector('[data-id="heroes__sw-pagin-container"]');Ke.insertAdjacentHTML("beforeend",we(Re));Ue();function Ue(){new x(Ye,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Ge,nextEl:We},pagination:{el:Je},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}const Ze="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='star-rate'%20viewBox='0%200%2034%2032'%3e%3cpath%20d='M13.176%2023.299l3.765-2.902%203.765%202.902-1.412-4.784%203.529-2.51h-4.392l-1.49-4.863-1.49%204.863h-4.392l3.529%202.51-1.412%204.784zM7.255%2031.691l3.647-11.922-9.647-6.902h11.922l3.765-12.549%203.765%2012.549h11.922l-9.647%206.902%203.647%2011.922-9.686-7.373-9.686%207.373z'/%3e%3c/symbol%3e%3csymbol%20id='google-play'%20viewBox='0%200%2025%2032'%3e%3cpath%20d='M24.255%2014.099c1.155%200.86%201.155%202.798%200.072%203.659l-3.047%201.726-4.516-3.555%204.527-3.487%202.964%201.658z'%20fill='%23ffc801'%20style='fill:%20var(--color1,%20%23ffc801)'/%3e%3cpath%20d='M21.303%2019.467l-0.001-0.001h-0.001l-4.547-3.538-0.016%200.012-16.727%2012.74v0.532c-0%200.703%200.165%201.454%200.726%201.714%200.74%200.343%201.82-0.328%201.82-0.328l18.745-11.132z'%20fill='%23f93647'%20style='fill:%20var(--color2,%20%23f93647)'/%3e%3cpath%20d='M16.739%2015.94l-16.727%2012.74v-25.765l16.727%2013.025z'%20fill='%2300d3ff'%20style='fill:%20var(--color3,%20%2300d3ff)'/%3e%3cpath%20d='M0.012%202.657v0.258l16.727%2013.025%200.016-0.012%200.001-0.001%200.007-0.005%204.527-3.461c0%200-14.56-8.705-18.781-11.215-0.184-0.109-0.624-0.386-1.151-0.213-0.632%200.207-1.346%200.959-1.346%201.625z'%20fill='%2300ef77'%20style='fill:%20var(--color4,%20%2300ef77)'/%3e%3c/symbol%3e%3csymbol%20id='arrow-right'%20viewBox='0%200%2016%2032'%3e%3cpath%20d='M0.444%2032.003v-31.111l15.556%2015.556-15.556%2015.556z'/%3e%3c/symbol%3e%3csymbol%20id='arrow-left'%20viewBox='0%200%2017%2032'%3e%3cpath%20d='M16.444%2032.003l-15.556-15.556%2015.556-15.556v31.111z'/%3e%3c/symbol%3e%3csymbol%20id='ac-arrow'%20viewBox='0%200%2043%2032'%3e%3cpath%20d='M21.333%2029.639l-21.333-23.063%204.978-5.381%2016.356%2017.682%2016.356-17.682%204.978%205.381-21.333%2023.063z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='circle'%20viewBox='0%200%2024%2024'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'/%3e%3c/symbol%3e%3csymbol%20id='close-form'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M32%203.223%2028.777%200%2016%2012.777%203.223%200%200%203.223%2012.777%2016%200%2028.777%203.223%2032%2016%2019.223%2028.777%2032%2032%2028.777%2019.223%2016%2032%203.223z'/%3e%3c/symbol%3e%3csymbol%20id='name-frame'%20viewBox='0%200%20282%2072'%3e%3cpath%20d='M32.4395%201L39.3506%207.59473V7.5957L39.4893%207.72656L39.7783%208.00293H107.96L108.238%207.77148L108.367%207.66406V7.66309L116.349%201H281V62.3984L273.507%2071H234.718L226.679%2065.9668H226.678L226.578%2065.9023L226.333%2065.7471H162.565L162.304%2065.9355L162.188%2066.0195L155.227%2071H11.5371L1%2061.4023V1H32.4395Z'%20fill='none'%20stroke='%23FEFFE8'%20stroke-width='2'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e";function C(e){return e.map(({name:t,comments:n,grade:o})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="${Ze}#name-frame"></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${n}</p>
            </div>
          </div>
          <div class="reviews__rating">${Qe(Number(o))}</div>
        </li>
      `).join("")}function Qe(e){if(e<1||e>5)return;let t="";for(let n=e;n>0;n-=1)t+=`<svg
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
            </svg>`;for(let n=5-e;n>0;n-=1)t+=`<svg
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
            </svg>`;return t}const w=[{grade:5,name:"Alexander Winter",comments:"An epic saga of strategy and emotion. I’ve never cared this much about my army!"},{grade:5,name:"Mira Howard",comments:"The decisions actually matter! Every campaign feels different"},{grade:5,name:"Dante Kurphy",comments:"The mix of tactical gameplay and deep lore is masterful. Highly addictive"},{grade:4,name:"Selina Russel",comments:"Heroes have actual personality — I grew attached to every general in my roster"},{grade:5,name:"Zhao Ling",comments:"Best war strategy RPG on mobile. The visuals are on another level"}];function f(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(w)),w)}const M=document.querySelector('[data-id="reviews__cards-list"]'),Xe=document.querySelector('[data-id="reviews__prev-btn"]'),et=document.querySelector('[data-id="reviews__next-btn"]'),tt=document.querySelector('[data-id="reviews__swiper"]');M.insertAdjacentHTML("beforeend",C(f()));st();function st(){new x(tt,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:Xe,nextEl:et},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}const ot=document.querySelector('[data-id="reviews__feedback-btn"]');document.querySelector('[data-id="review-form__submit-btn"]');const h=document.querySelector('[data-id="review-form"]'),nt=document.querySelector('[data-id="review-form__close-btn"]'),A=document.querySelector('[data-id="review-form__form"]'),it=document.querySelector('[data-id="review-form__textarea-comm"]');ot.addEventListener("click",rt);nt.addEventListener("click",u);A.addEventListener("submit",at);document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});h.addEventListener("click",e=>{e.target===e.currentTarget&&u()});it.addEventListener("keydown",e=>{e.key===" "&&e.stopPropagation()},!0);function rt(){h.classList.add("is-open"),lockScroll()}function u(){h.classList.remove("is-open"),unlockScroll()}function at(e){e.preventDefault();const t=lt(e);ct(t),u()}function lt(e){e.preventDefault();const t=new FormData(A);return console.log(Object.fromEntries(t.entries())),Object.fromEntries(t.entries())}function ct(e){const t=f();t.unshift(e),localStorage.setItem("reviews",JSON.stringify(t)),M.innerHTML=C(f())}new q('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
