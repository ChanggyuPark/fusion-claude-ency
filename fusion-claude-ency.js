/* Fusion × Claude × ENCY CAM Sixshop integration · v12
 * Target: pathname === '/fusion-claude-ency' AND #page2767228 exists.
 * Source of markup/style: ENCY_AI_랜딩_v07.html (unchanged content/copy).
 * Edit CONTENT settings only once real assets/form link are ready.
 */
(function () {
  'use strict';
  const CONFIG = {
    path: '/fusion-claude-ency',
    pageId: 'page2767228',
    rootId: 'ency-fusion-claude-app',
    routeClass: 'ency-fusion-claude-route-active',
    utmKey: 'ency_fusion_claude_utm_v1',
    utmKeys: ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
  };
  if (window.__encyFusionClaudeRuntime) return;
  window.__encyFusionClaudeRuntime = true;

  // Confirmed WorkForms destinations: separate guide and consultation forms.
  const CONTENT = {
    guideFormUrl: 'https://wkf.ms/4eG6Ozw',
    consultFormUrl: 'https://wkf.ms/3TRljbJ',
    guideParam: '',           // Optional form prefill query, if supported
    consultParam: '',         // Optional form prefill query, if supported
    youtubeAI: '',           // YouTube 11-character video ID
    youtubeCAM: '',          // YouTube 11-character video ID
    images: {hero:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_1.jpg?v=20261112-11', drawing:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_9.jpg?v=20261112-11', model:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_3.jpg?v=20261112-11', toolpath:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_4.jpg?v=20261112-11', simulation:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_5.jpg?v=20261112-11', detail:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_6.jpg?v=20261112-11'},
    insetImages: {model:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_2.jpg?v=20261112-11', toolpath:'https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Capture_7.jpg?v=20261112-11'}
  };

  const MARKUP = `<main id="ency-campaign">
<section aria-labelledby="main-title" class="hero dark">
<div class="wrap">
<div class="hero-copy reveal"><h1 id="main-title"><span>AI로 설계하고,</span><span>ENCY로 가공하다.</span></h1><p class="lead">2D 도면부터 3D 모델링, 가공경로와 시뮬레이션까지 실제 시연으로 확인하세요.</p>
<div aria-label="Claude, Autodesk Fusion, ENCY CAM 연결 기술" class="brand-line">
<div class="brand-unit"><img alt="" onerror="this.style.display='none'" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/claude.svg"/><span class="wordmark claude">Claude</span></div>
<span aria-hidden="true" class="brand-separator">×</span>
<div class="brand-unit"><img alt="" onerror="this.style.display='none'" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/autodesk.svg"/><span class="wordmark">Fusion</span></div>
<span aria-hidden="true" class="brand-separator">×</span>
<div class="brand-unit"><img alt="" class="ency-hero-icon" onerror="this.style.display='none'" src="https://ik.imagekit.io/smartware/ency%20logo/Ency%20CAM_black.png"/><span class="wordmark ency-wordmark">ENCY CAM</span></div>
</div>
<div class="hero-actions"><a class="btn btn-primary js-guide" href="#guide">기술 가이드북 신청</a><a class="textlink" href="#videos">실제 시연 영상 보기</a></div>
</div>
<div class="hero-stage reveal"><div class="stage-note">ENCY CAM 실제 시연</div><div class="stage-screen" data-img="hero"><div class="missing"><strong>ENCY CAM</strong><small>2D 도면에서 가공 준비까지</small></div></div><div class="stage-float"><strong>모델링 다음은<br/>실제 가공 준비.</strong><p>AI 설계와 CAM 작업을 하나의 흐름으로.</p></div></div>
</div>
</section>
<section aria-labelledby="workflow-heading" class="section workflow"><div class="wrap"><h2 class="section-heading" id="workflow-heading"><strong>도면에서 가공 준비까지.</strong><br/><span class="thin-heading">작업의 흐름을 따라가 보세요.</span></h2><p class="section-intro">ENCY World 2026: Korean Edition에서 선보인 실제 시연을 바탕으로, 모델링부터 가공 프로그래밍까지 이어지는 과정을 정리했습니다.</p><div aria-hidden="true" class="workflow-divider"></div>
<div class="workflow-item"><div class="wf-copy"><h3>도면에서 시작합니다.</h3><p>PDF 형태의 2D 도면을 바탕으로 가공할 부품의 형상과 모델링에 필요한 정보를 확인합니다.</p></div><div class="wf-visual" data-img="drawing" data-label="PDF 도면"><div class="wf-fallback"><b>2D 도면</b><small>2D 도면 확인</small></div></div></div>
<div aria-hidden="true" class="flow-link"><svg focusable="false" role="presentation" viewbox="0 0 108 164" xmlns="http://www.w3.org/2000/svg"><path class="flow-chevron ch-one" d="M20 12 L54 42 L88 12"></path><path class="flow-chevron ch-two" d="M20 60 L54 90 L88 60"></path><path class="flow-chevron ch-three" d="M20 108 L54 138 L88 108"></path></svg></div>
<div class="workflow-item reverse"><div class="wf-copy"><div aria-label="Claude와 Autodesk Fusion" class="inline-logo"><img alt="" onerror="this.style.display='none'" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/claude.svg"/><b>Claude</b><span class="symbol-cross">×</span><img alt="" onerror="this.style.display='none'" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/autodesk.svg"/><b>Fusion</b></div><h3>Claude와 Fusion으로<br/>3D 모델을 만듭니다.</h3><p>Claude AI와 Autodesk Fusion을 연결해 3D 모델링 작업을 진행합니다. 실제 시연의 과정을 화면으로 확인할 수 있습니다.</p></div><div class="wf-visual" data-img="model" data-label="Claude × Autodesk Fusion"><div class="wf-fallback"><b>3D 모델링</b><small>Claude × Fusion 모델링</small></div></div></div>
<div aria-hidden="true" class="flow-link"><svg focusable="false" role="presentation" viewbox="0 0 108 164" xmlns="http://www.w3.org/2000/svg"><path class="flow-chevron ch-one" d="M20 12 L54 42 L88 12"></path><path class="flow-chevron ch-two" d="M20 60 L54 90 L88 60"></path><path class="flow-chevron ch-three" d="M20 108 L54 138 L88 108"></path></svg></div>
<div class="workflow-item"><div class="wf-copy"><div class="inline-logo ency-inline"><img alt="" onerror="this.style.display='none'" src="https://ik.imagekit.io/smartware/ency%20logo/Ency%20CAM_black.png"/><b>ENCY CAM</b></div><h3>ENCY CAM으로<br/>가공경로를 설정합니다.</h3><p>생성된 3D 모델을 활용해 공구와 가공 조건을 설정하고, 실제 작업에 필요한 툴패스를 구성합니다.</p></div><div class="wf-visual" data-img="toolpath" data-label="ENCY CAM 가공경로"><div class="wf-fallback"><b>가공 프로그래밍</b><small>ENCY CAM 툴패스</small></div></div></div>
<div aria-hidden="true" class="flow-link"><svg focusable="false" role="presentation" viewbox="0 0 108 164" xmlns="http://www.w3.org/2000/svg"><path class="flow-chevron ch-one" d="M20 12 L54 42 L88 12"></path><path class="flow-chevron ch-two" d="M20 60 L54 90 L88 60"></path><path class="flow-chevron ch-three" d="M20 108 L54 138 L88 108"></path></svg></div>
<div class="workflow-item reverse"><div class="wf-copy"><h3>시뮬레이션으로<br/>가공 과정을 검토합니다.</h3><p>가공 시뮬레이션을 통해 작업 과정을 확인하고, 검증이 필요한 부분을 살펴봅니다.</p></div><div class="wf-visual" data-img="simulation" data-label="ENCY CAM 시뮬레이션"><div class="wf-fallback"><b>시뮬레이션 · 검토</b><small>ENCY CAM 시뮬레이션</small></div></div></div>
</div></section>
<section aria-labelledby="videos-heading" class="section demo" id="videos"><div class="wrap"><h2 class="section-heading" id="videos-heading">실제 화면에서 확인해보세요!</h2><p class="section-intro">EWK 2026에서 선보인 AI 모델링과 ENCY CAM 가공 프로그래밍의 실제 작업 흐름을 확인해 보세요.</p><div class="demo-grid">
<article class="video-card"><div class="video-space" data-video="ai"><div class="video-empty"><b>AI 기반 3D 모델링 시연</b></div></div><div class="video-info"><h3>2D 도면에서 3D 모델링까지</h3><p>Claude AI와 Fusion을 연결한 모델링 과정</p></div></article>
<article class="video-card"><div class="video-space" data-video="cam"><div class="video-empty"><b>ENCY CAM 가공 시연</b></div></div><div class="video-info"><h3>가공경로에서 시뮬레이션까지</h3><p>ENCY CAM의 실제 프로그래밍과 검토 과정</p></div></article>
</div></div></section>
<section aria-labelledby="benefit-heading" class="section benefit"><div class="wrap"><h2 class="section-heading" id="benefit-heading"><span class="thin-heading">3D 모델을 만든 다음,</span><br/><strong>가공 현장에는 무엇이 필요할까요?</strong></h2><p class="section-intro">모델링 이후의 실제 제조 과정에는 장비와 공구, 가공경로, 검토 단계가 이어집니다.<br/>ENCY CAM은 그 과정에서 활용하는 CAM 솔루션입니다.</p><div class="benefit-spotlight"><div class="large-visual" data-img="detail"><div class="missing">ENCY CAM 가공 작업</div></div><ul class="benefit-list"><li><b>가공 조건 설정</b><p>장비와 작업 조건에 맞춰 필요한 가공 방식을 준비합니다.</p></li><li><b>툴패스 구성</b><p>부품 형상과 작업 목적에 따라 가공경로를 설정합니다.</p></li><li><b>시뮬레이션 검토</b><p>설정한 가공 과정을 화면에서 확인하고 검토합니다.</p></li></ul></div></div></section>
<section aria-labelledby="guide-heading" class="section guide" id="guide"><div class="wrap guide-layout"><div class="guide-cover"><img class="guide-cover-image" loading="lazy" alt="Fusion × Claude × ENCY CAM 기술 가이드북 표지" src="https://ik.imagekit.io/smartware/26conference/marketing/fusion-claude-ency/Fusion_Claude_ENCY_CAM_Cover_A4.jpg?v=20261113-12"/></div><div class="guide-copy"><h2 class="section-heading" id="guide-heading">시연 내용을<br/>가이드북으로 받아보세요.</h2><div aria-label="Claude, Fusion, ENCY CAM" class="guide-brand-line"><span class="guide-brand"><img alt="" loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/claude.svg"/><span>Claude</span></span><span aria-hidden="true" class="guide-cross">×</span><span class="guide-brand"><img alt="" loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/autodesk.svg"/><span>Fusion</span></span><span aria-hidden="true" class="guide-cross">×</span><span class="guide-brand"><img alt="" loading="lazy" src="https://ik.imagekit.io/smartware/ency%20logo/Ency%20CAM_black.png"/><span>ENCY CAM</span></span></div><p>모델링부터 가공경로 설정과 시뮬레이션까지, 실제 작업 화면을 중심으로 정리한 기술자료를 살펴보세요.</p><ul class="guide-points"><li>Claude × Fusion 모델링 과정</li><li>ENCY CAM 가공경로 설정</li><li>시뮬레이션과 작업 검토</li></ul><a class="btn btn-primary js-guide" href="#guide">무료 가이드북 신청</a></div></div></section>
<section aria-labelledby="consult-heading" class="consult" id="consult"><div class="wrap"><h2 class="section-heading" id="consult-heading">우리 제조 환경에도<br/>적용할 수 있을까요?</h2><p>현재 사용 중인 CAD/CAM 환경과 장비 조건에 맞춰 ENCY CAM 활용 및 도입 가능성을 함께 검토해 보세요.</p><a class="btn js-consult" href="#consult">기술·도입 상담 신청</a></div></section>
</main>`;
  const FALLBACK_ALT = {
    hero:'ENCY CAM 가공 시뮬레이션 화면', drawing:'2D 도면',
    model:'Claude와 Fusion의 3D 모델링', toolpath:'ENCY CAM 가공경로',
    simulation:'ENCY CAM 시뮬레이션',detail:'ENCY CAM 작업 상세 화면'
  };
  const D = document;
  let mountedPage = null;
  let lastPath = '';
  let lastUTM = '';
  let revealObserver = null;
  let flowObserver = null;
  let refreshTimer = null;
  let installed = false;
  let attribution = {};

  function getStorage() {
    try { return window.sessionStorage; } catch (_) { return null; }
  }
  function loadStoredUTM() {
    const store = getStorage();
    if (!store) return {};
    try {
      const value = JSON.parse(store.getItem(CONFIG.utmKey) || '{}');
      if (!value || typeof value !== 'object') return {};
      const result = {};
      CONFIG.utmKeys.forEach(k => {if (typeof value[k] === 'string' && value[k] !== '') result[k] = value[k];});
      return result;
    } catch (_) {return {};}
  }
  function collectUTM() {
    const p = new URLSearchParams(location.search);
    const incoming = {};
    let hasAny = false;
    CONFIG.utmKeys.forEach(k => {
      if (p.has(k)) {
        hasAny = true;
        const v = p.get(k) || '';
        if (v) incoming[k] = v;
      }
    });
    if (!hasAny) {attribution = loadStoredUTM();return;}
    // A new attributed visit replaces the previous set instead of mixing campaigns.
    attribution = incoming;
    const store = getStorage();
    if (store) {
      try {store.setItem(CONFIG.utmKey, JSON.stringify(attribution));} catch (_) {}
    }
  }
  function formLink(kind) {
    const baseUrl = kind === 'guide' ? CONTENT.guideFormUrl : CONTENT.consultFormUrl;
    if (!baseUrl) return null;
    let u;
    try {u = new URL(baseUrl, location.href);} catch (_) {return null;}
    if (!/^https?:$/.test(u.protocol)) return null;
    const prefill = kind === 'guide' ? CONTENT.guideParam : CONTENT.consultParam;
    if (prefill) {
      const params = new URLSearchParams(prefill.replace(/^\?/,''));
      params.forEach((value,key) => u.searchParams.set(key,value));
    }
    CONFIG.utmKeys.forEach(k => {
      if (attribution[k]) u.searchParams.set(k, attribution[k]);
      // Missing keys: preserve pre-existing non-UTM form params, do not invent values.
    });
    return u.toString();
  }
  function setFormLinks(root) {
    root.querySelectorAll('a.js-guide, a.js-consult').forEach(a => {
      const kind = a.classList.contains('js-guide') ? 'guide' : 'consult';
      const url = formLink(kind);
      if (!a.dataset.encyBaseHref) a.dataset.encyBaseHref = a.getAttribute('href') || '';
      if (url) {
        a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.dataset.encyFormType = kind;
        a.removeAttribute('title');
      } else {
        a.href = a.dataset.encyBaseHref;
        a.removeAttribute('target'); a.removeAttribute('rel');
        a.removeAttribute('data-ency-form-type');
      }
    });
  }
  // Synchronously compute on first click so rendering/timing cannot lose first-click UTM.
  function onClick(e) {
    const link = e.target.closest('a.js-guide, a.js-consult');
    const root = D.getElementById(CONFIG.rootId);
    if (!root || !link || !root.contains(link)) return;
    collectUTM();
    const kind = link.classList.contains('js-guide') ? 'guide' : 'consult';
    const u = formLink(kind);
    if (u) {link.href = u; link.target = '_blank';link.rel = 'noopener noreferrer';}
    // No preventDefault: links retain native opening/navigation behaviour.
  }
  function applyImages(root) {
    Object.entries(CONTENT.images).forEach(([name,src]) => {
      if (!src) return;
      root.querySelectorAll('[data-img="'+name+'"]').forEach(el => {
        const img=D.createElement('img');
        img.src=src; img.alt=FALLBACK_ALT[name]||'실제 소프트웨어 시연 화면';
        img.className=name==='hero'?'screen-image':'';
        img.addEventListener('load',()=>{el.querySelector('.missing, .wf-fallback')?.remove();}, {once:true});
        img.addEventListener('error',()=>img.remove(),{once:true});
        el.appendChild(img);
      });
    });
  }
  // Optional image-only overlays. Base screenshot/UI remains untouched.
  function applyInsetImages(root) {
    const captions = {model:'Fusion 3D 모델',toolpath:'추가 가공 사례'};
    Object.entries(CONTENT.insetImages || {}).forEach(([name, src]) => {
      const parent = root.querySelector('[data-img="'+name+'"]');
      if (!parent || !src || parent.querySelector('.inset-card')) return;
      const inset = D.createElement('div');
      inset.className = 'inset-card';
      inset.setAttribute('aria-label', captions[name] || '보조 이미지');
      const img = D.createElement('img');
      img.src = src;
      img.alt = captions[name] || '보조 화면';
      img.loading = 'lazy';
      img.addEventListener('error', () => inset.remove(), {once:true});
      inset.appendChild(img);
      parent.appendChild(inset);
    });
  }
  function applyVideos(root) {
    [['ai',CONTENT.youtubeAI],['cam',CONTENT.youtubeCAM]].forEach(([name,id]) => {
      if (!/^[\w-]{11}$/.test(id)) return;
      const el=root.querySelector('[data-video="'+name+'"]');
      if (!el) return;
      const f=D.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?rel=0';
      f.title=name==='ai'?'AI 모델링 시연':'ENCY CAM 시연';
      f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen=true;f.loading='lazy';el.replaceChildren(f);
    });
  }
  function initializeAnimations(root) {
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // v07: only hero elements retain the reveal animation.
      root.classList.add('js');
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
      }), {threshold:.07});
      root.querySelectorAll('.hero .reveal').forEach(el => revealObserver.observe(el));
    }
    if ('IntersectionObserver' in window) {
      flowObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {entry.target.classList.add('is-visible');flowObserver.unobserve(entry.target);}
      }),{threshold:.35});
      root.querySelectorAll('.flow-link').forEach(el=>flowObserver.observe(el));
    } else root.querySelectorAll('.flow-link').forEach(el=>el.classList.add('is-visible'));
  }
  function getTargetPage() {return D.getElementById(CONFIG.pageId);}
  function isTargetRoute() {return location.pathname === CONFIG.path;}
  function cleanup() {
    if (revealObserver) {revealObserver.disconnect();revealObserver=null;}
    if (flowObserver) {flowObserver.disconnect();flowObserver=null;}
    const old=D.getElementById(CONFIG.rootId);
    if(old) old.remove();
    D.body?.classList.remove(CONFIG.routeClass);
    mountedPage=null;
  }
  function mount(page) {
    cleanup();
    const parent=page.parentElement;
    if (!parent) return;
    const root=D.createElement('div');
    root.id=CONFIG.rootId;
    root.innerHTML=MARKUP;
    page.insertAdjacentElement('afterend',root);
    mountedPage=page;
    collectUTM();
    D.body.classList.add(CONFIG.routeClass);
    applyImages(root);
    applyInsetImages(root);
    applyVideos(root);
    setFormLinks(root);
    initializeAnimations(root);
  }
  function refresh() {
    const path=location.pathname;
    const query=location.search;
    const page=getTargetPage();
    if (path !== CONFIG.path || !page || !page.isConnected) {
      if (mountedPage || D.getElementById(CONFIG.rootId)) cleanup();
      lastPath=path;lastUTM=query;
      return;
    }
    const root=D.getElementById(CONFIG.rootId);
    if (!root || !root.isConnected || mountedPage !== page || !D.body.classList.contains(CONFIG.routeClass)) {
      mount(page);
    } else if (lastUTM !== query) {
      collectUTM();setFormLinks(root);
    }
    lastPath=path;lastUTM=query;
  }
  function boot() {
    if (installed || !D.body) return;
    installed=true;
    D.addEventListener('click', onClick, true);
    refresh();
    // Sixshop SPA: inexpensive location+DOM check; does not patch History APIs.
    refreshTimer=window.setInterval(refresh,300);
    window.addEventListener('popstate', refresh);
    window.addEventListener('pageshow', refresh);
  }
  if (D.readyState==='loading') D.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();