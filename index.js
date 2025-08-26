import{S as f,A as C}from"./assets/vendor-C95eCV1u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();(()=>{const e=document.scrollingElement||document.documentElement;let t=0,o=0;const n=p=>p.preventDefault(),s=p=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"," ","Spacebar"].includes(p.key)&&p.preventDefault()},i=()=>window.scrollTo(t,o);function r(){t=e.scrollLeft,o=e.scrollTop,window.addEventListener("scroll",i,{passive:!1}),window.addEventListener("wheel",n,{passive:!1}),document.addEventListener("wheel",n,{passive:!1,capture:!0}),window.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1,capture:!0}),window.addEventListener("keydown",s,{passive:!1})}function S(){window.removeEventListener("scroll",i),window.removeEventListener("wheel",n),document.removeEventListener("wheel",n,{capture:!0}),window.removeEventListener("touchmove",n),document.removeEventListener("touchmove",n,{capture:!0}),window.removeEventListener("keydown",s)}window.lockScroll=r,window.unlockScroll=S})();const m=document.querySelector('[data-id="mobile-menu"]'),E=document.querySelector('[data-id="mobile-btn"]'),y=document.querySelector('[data-id="nav-icon"]'),A=document.querySelectorAll('[data-id="nav__item-link"]');document.querySelector("body");const x=document.querySelector('[data-id="mobile-menu__background"]'),$=document.querySelector('[data-id="header__logo"]');let v,u=!1;E.addEventListener("click",()=>{m.style.backgroundPosition="center top",y.classList.toggle("open"),m.classList.toggle("open"),x.classList.toggle("open"),u?(unlockScroll(),u=!1):(lockScroll(),u=!0),v=document.documentElement.scrollTop,B(Number(v))});A.forEach(e=>e.addEventListener("click",w));$.addEventListener("click",w);function w(){y.classList.remove("open"),m.classList.remove("open"),x.classList.remove("open"),unlockScroll()}function B(e){m.style.backgroundPosition=`center -${e}px`}const T=document.querySelectorAll('[data-id="title-frame-path"]'),L=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),L.unobserve(t.target))})},{threshold:.5});T.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t,L.observe(e)});const d=1200;function _(){return window.innerWidth<d}const q=`<svg width="288" height="450" viewBox="0 0 288 450">
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
</svg>`;function P(e){return e.map(t=>`
        <li class="features__deck-item">
            <img class="features__deck-img" src="${t.src}" />
        </li>`).join("")}function h(e){return e.map(t=>`<li class="features__card">

        ${(_()?q:M).replaceAll("${cardSrc}",t.src).replaceAll("${id}",t.id)}
        </div>
        <div class="features__card-text-wrapper">
          <h3 class="features__card-title" data-id="features__card-title">${t.title}</h3>
          <div class="wrapper"><p class="features__card-text" data-id="features__card-text">
            ${t.description}
          </p><div/>
        </div>
      </li>`).join("")}const D="/stp-9255/assets/strategic-combat-mobile-DnWdx4jd.png",j="/stp-9255/assets/strategic-combat-mobile@2x-DGN-21DS.png",I="/stp-9255/assets/strategic-combat-desktop-Pvj2IX3i.png",N="/stp-9255/assets/strategic-combat-desktop@2x-c35N_TIJ.png",H="/stp-9255/assets/campaign-map-mobile-B8ak0bwP.png",O="/stp-9255/assets/campaign-map-mobile@2x-uvzBI2qE.png",R="/stp-9255/assets/campaign-map-desktop-BRxi-9s5.png",F="/stp-9255/assets/campaign-map-desktop@2x-sabWSrUd.png",K="/stp-9255/assets/hero-system-mobile-CYJCR1oq.png",G="/stp-9255/assets/hero-system-mobile@2x-CbcpMv8o.png",V="/stp-9255/assets/hero-system-desktop-CXmjitRz.png",W="/stp-9255/assets/hero-system-desktop@2x-D0r76M6E.png",Y="/stp-9255/assets/interactive-storytelling-mobile-XK1hZngn.png",J="/stp-9255/assets/interactive-storytelling-mobile@2x-C5speNig.png",U="/stp-9255/assets/interactive-storytelling-desktop-CtKsF1qe.png",z="/stp-9255/assets/interactive-storytelling-desktop@2x-1wjonUrV.png",Z="/stp-9255/assets/dynasty-management-mobile-Cf8LtExT.png",Q="/stp-9255/assets/dynasty-management-mobile@2x-D3o4mBWa.png",X="/stp-9255/assets/dynasty-management-desktop-CjmkT_ur.png",ee="/stp-9255/assets/dynasty-management-desktop@2x-Cb5s4HkB.png",te="/stp-9255/assets/stunning-visuals-mobile-B0gIuKtj.png",se="/stp-9255/assets/stunning-visuals-mobile@2x-CUv8_C8e.png",ne="/stp-9255/assets/stunning-visuals-desktop-BW7EijNh.png",oe="/stp-9255/assets/stunning-visuals-desktop@2x-DACFDkts.png",ie="/stp-9255/assets/pvp-and-pve-mobile-Dwt5VCsS.png",ae="/stp-9255/assets/pvp-and-pve-mobile@2x-CHcbywGq.png",re="/stp-9255/assets/pvp-and-pve-desktop-DZYKJwhp.png",le="/stp-9255/assets/pvp-and-pve-desktop@2x-DLIYu3gz.png";function l({mobile1x:e,mobile2x:t,desktop1x:o,desktop2x:n}){const s=window.devicePixelRatio||1;return _()?s>1?t:e:s>1?n:o}const ce=[{title:"PvP & PvE Modes",description:"Compete globally or conquer through immersive solo campaigns",src:l({mobile1x:ie,mobile2x:ae,desktop1x:re,desktop2x:le}),alt:"game heroes"},{title:"Stunning Visuals",description:"Breathtaking animations, hand-drawn portraits, and dynamic environments",src:l({mobile1x:te,mobile2x:se,desktop1x:ne,desktop2x:oe}),alt:"game heroes and the dragon"},{title:"Dynasty Management",description:"Manage resources, diplomacy, armies, and political stability.",src:l({mobile1x:Z,mobile2x:Q,desktop1x:X,desktop2x:ee}),alt:"game heroes"},{title:"Hero System",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:K,mobile2x:G,desktop1x:V,desktop2x:W}),alt:"game heroes"},{title:"Interactive Storytelling",description:"Choices affect relationships, war outcomes, and future events",src:l({mobile1x:Y,mobile2x:J,desktop1x:U,desktop2x:z}),alt:"game heroes"},{title:"Massive Campaign Map",description:"Explore kingdoms, mountains, deserts, and lost temples",src:l({mobile1x:H,mobile2x:O,desktop1x:R,desktop2x:F}),alt:"games map"},{title:"Deep Strategic Combat",description:"Tactical battles that challenge your mind and military precision",src:l({mobile1x:D,mobile2x:j,desktop1x:I,desktop2x:N}),alt:"angry fighters"}],c=document.querySelector('[data-id="features__cards-deck"]'),de=document.querySelector('[data-id="features__open-cards"]');let a=[...ce],g=!1;if(_())c.insertAdjacentHTML("beforeend",h(a));else{let t=function(){if(g)return;g=!0,c.style.cursor="default";const o=c.lastElementChild;o.classList.add("transition-anim"),setTimeout(()=>{o.style.right="-603px"},1e3),setTimeout(()=>{e.push(a[a.length-1]),a.pop(),a.unshift(e[0]),e.shift();const n=document.querySelector('[data-id="features__card-title"]'),s=document.querySelector('[data-id="features__card-text"]'),i=document.querySelector('[data-id="features__card-image"]');ue(n,s),pe(e[0],n,s,i),ge(a[0],o),k(),setTimeout(()=>{me(n,s)},100),c.style.cursor="pointer",g=!1},2e3)};const e=[];e.push(a[a.length-1]),a.pop(),de.innerHTML=`${h(e)}`,k(),c.insertAdjacentHTML("beforeend",P(a)),c.addEventListener("click",t)}function k(){const e=document.querySelector('[data-anim="clip"]'),t=document.querySelector('[data-anim="border"]');e&&t&&(e.beginElement(),t.beginElement())}function pe({title:e,description:t,src:o},n,s,i){n.textContent=e,s.textContent=t,i.setAttribute("href",o)}function me(e,t){e.classList.add("open"),t.classList.add("open"),e.classList.remove("close"),t.classList.remove("close")}function ue(e,t){e.classList.add("close"),t.classList.add("close"),e.classList.remove("open"),t.classList.remove("open")}function ge({src:e},t){setTimeout(()=>{t.remove()},50),c.insertAdjacentHTML("afterbegin",`<li class="features__deck-item">
            <img class="features__deck-img" src="${e}" />
        </li>`)}function _e(e,t,o){const{mobile1x:n,mobile2x:s,desktop1x:i,desktop2x:r}=e;return`
        <picture class="${o}__card-picture">
        <source
          media="(min-width: ${d}px)"
          srcset="
            ${i}    1x,
            ${r}    2x
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
          class="${o}__card-img"
          src="${n}"
          alt="${t}"
        />
      </picture>
        `}function ve(e){return e.map(({title:t,description:o,images:n,alt:s})=>`<li class="heroes__card swiper-slide">
      <h3 class="heroes__card-title">${t}</h3>
      <p class="heroes__card-text">${o}</p>
      ${_e(n,s,Ne)}
    </li>
    `).join("")}const he="/stp-9255/assets/general-kairos-mobile-D7GAxY08.png",ke="/stp-9255/assets/general-kairos-mobile@2x-MFWBAY1u.png",be="/stp-9255/assets/general-kairos-desktop-BjqaNA35.png",fe="/stp-9255/assets/general-kairos-desktop@2x-CxLhHi5N.png",ye="/stp-9255/assets/lady-an-may-mobile-BPMc0N6Q.png",xe="/stp-9255/assets/lady-an-may-mobile@2x-BB1B6RPL.png",we="/stp-9255/assets/lady-an-may-desktop-wuVrYL2y.png",Le="/stp-9255/assets/lady-an-may-desktop@2x-BayOmFME.png",Se="/stp-9255/assets/master-shen-mobile-BKbkMWhn.png",Ce="/stp-9255/assets/master-shen-mobile@2x-VRcrJC7c.png",Ee="/stp-9255/assets/master-shen-desktop-TZKarTUm.png",Ae="/stp-9255/assets/master-shen-desktop@2x-BiLQGFbu.png",$e="/stp-9255/assets/prince-riku-mobile-JcTYtw8v.png",Be="/stp-9255/assets/prince-riku-mobile@2x-TI4d2rqO.png",Te="/stp-9255/assets/prince-riku-desktop-tAvdkiv4.png",qe="/stp-9255/assets/prince-riku-desktop@2x-NZWFPiP2.png",Me="/stp-9255/assets/the-empress-mobile-BcFsZUb5.png",Pe="/stp-9255/assets/the-empress-mobile@2x-BLhNgvQB.png",De="/stp-9255/assets/the-empress-desktop-DITHj0IT.png",je="/stp-9255/assets/the-empress-desktop@2x-C7nTO3y_.png",Ie=[{title:"General&nbsp;Kairos",description:"A fallen warlord known for brutal tactics and undying loyalty",images:{mobile1x:he,mobile2x:ke,desktop1x:be,desktop2x:fe},alt:"A heavily armored knight in a black robe"},{title:"Lady An-Mei",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:ye,mobile2x:xe,desktop1x:we,desktop2x:Le},alt:"anime girl"},{title:"Master Shen",description:"A cunning diplomat skilled in espionage and poison",images:{mobile1x:Se,mobile2x:Ce,desktop1x:Ee,desktop2x:Ae},alt:"bald sensei"},{title:"Prince Riku",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:$e,mobile2x:Be,desktop1x:Te,desktop2x:qe},alt:"Yong prince in a dark blue robe"},{title:"The Empress in Exile",description:"A noble warrior haunted by the betrayal that shattered his realm",images:{mobile1x:Me,mobile2x:Pe,desktop1x:De,desktop2x:je},alt:"red-haired anime girl with a sword in her hand, wearing armor and a short skirt"}],Ne="heroes",He=document.querySelector('[data-id="heroes__cards-list"]'),Oe=document.querySelector('[data-id="heroes__prev-btn"]'),Re=document.querySelector('[data-id="heroes__next-btn"]'),Fe=document.querySelector('[data-id="heroes__swiper"]'),Ke=document.querySelector('[data-id="heroes__sw-pagin-container"]');He.insertAdjacentHTML("beforeend",ve(Ie));Ge();function Ge(){new f(Fe,{slidesPerView:1,spaceBetween:20,loop:!0,speed:500,navigation:{prevEl:Oe,nextEl:Re},pagination:{el:Ke},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:1,spaceBetween:21}}})}function Ve(e){return e.map(({name:t,review:o,grade:n})=>`
        <li class="reviews__card swiper-slide">
          <div class="reviews__card-content-wrapper">
            <div class="reviews__card-title-wrapper">
              <h3 class="reviews__card-title">${t}</h3>
              <svg class="reviews__card-title-frame" aria-hidden="true">
                <use href="./img/sprite.svg#name-frame"></use>
              </svg>
            </div>
            <div class="reviews__card-text-wrapper">
              <p class="reviews__card-text">${o}</p>
            </div>
          </div>
          <div class="rating">${We(Number(n))}<div/>
        </li>
      `).join("")}function We(e){if(e<1||e>5)return;let t="";for(let o=e;o>0;o-=1)t+=`<svg
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
            </svg>`;for(let o=5-e;o>0;o-=1)t+=`<svg
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
            </svg>`;return t}const b=[{name:"Alexander Winter",review:"An epic saga of strategy and emotion. I’ve never cared this much about my army!",grade:5},{name:"Mira Howard",review:"The decisions actually matter! Every campaign feels different",grade:5},{name:"Dante Kurphy",review:"The mix of tactical gameplay and deep lore is masterful. Highly addictive",grade:5},{name:"Selina Russel",review:"Heroes have actual personality — I grew attached to every general in my roster",grade:4},{name:"Zhao Ling",review:"Best war strategy RPG on mobile. The visuals are on another level",grade:5}];function Ye(){let e;try{e=JSON.parse(localStorage.getItem("reviews"))}catch{e=null}return Array.isArray(e)&&e.length?e:(localStorage.setItem("reviews",JSON.stringify(b)),b)}const Je=document.querySelector('[data-id="reviews__cards-list"]'),Ue=document.querySelector('[data-id="reviews__prev-btn"]'),ze=document.querySelector('[data-id="reviews__next-btn"]'),Ze=document.querySelector('[data-id="reviews__swiper"]');Je.insertAdjacentHTML("beforeend",Ve(Ye()));Qe();function Qe(){new f(Ze,{slidesPerView:1,spaceBetween:20,loop:!1,speed:500,navigation:{prevEl:Ue,nextEl:ze},keyboard:{enabled:!0},breakpoints:{[d]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:21}},watchOverflow:!0})}new C('[data-id="faq__ac-list"]');
//# sourceMappingURL=index.js.map
