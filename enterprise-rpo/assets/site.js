const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
function closeMenu() { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded',String(open)); nav.classList.toggle('is-open',open); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
const productButtons = document.querySelectorAll('[data-product]');
productButtons.forEach(button => button.addEventListener('click', () => {
  productButtons.forEach(item => { const active = item === button; item.setAttribute('aria-pressed',String(active)); document.getElementById(item.getAttribute('aria-controls')).hidden = !active; });
}));
const dialog = document.querySelector('.image-dialog');
let lastImageTrigger;
document.querySelectorAll('[data-enlarge]').forEach(button => button.addEventListener('click', () => {
  const figure = button.closest('figure'); const original = figure.querySelector('img'); const image = dialog.querySelector('img');
  image.src = original.src; image.alt = original.alt; image.width = Number(original.getAttribute('width')); image.height = Number(original.getAttribute('height')); image.style.setProperty('--natural-width',`${original.getAttribute('width')}px`);
  dialog.querySelector('#image-title').textContent = figure.querySelector('.screen-label').textContent.trim();
  dialog.querySelector('.dialog-caption').textContent = figure.querySelector('figcaption').textContent;
  dialog.querySelector('.dialog-scroll').classList.remove('zoomed'); dialog.querySelector('[data-zoom]').textContent = 'Actual size'; dialog.querySelector('[data-zoom]').setAttribute('aria-pressed','false');
  lastImageTrigger = button; dialog.showModal(); document.body.style.overflow = 'hidden';
}));
dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; if (document.activeElement === document.body || dialog.contains(document.activeElement)) lastImageTrigger?.focus(); });
dialog.querySelector('[data-zoom]').addEventListener('click', event => { const zoomed = dialog.querySelector('.dialog-scroll').classList.toggle('zoomed'); event.currentTarget.textContent = zoomed ? 'Fit screen' : 'Actual size'; event.currentTarget.setAttribute('aria-pressed',String(zoomed)); });
document.querySelectorAll('.contact-form').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); form.querySelector('[role="status"]').textContent = 'Submission is unavailable in this local preview. Nothing has been sent or saved.'; }));

// No media URL is assigned until the visitor explicitly chooses to play.
const video = document.querySelector('#rpo-video');
const videoPlay = document.querySelector('[data-video-play]');
if (video && videoPlay) {
  video.controls = false;
  const status = document.querySelector('.video-error');
  const showVideoError = () => {
    status.hidden = false;
    status.textContent = 'The video could not play. Please try again.';
    videoPlay.hidden = false;
  };
  videoPlay.addEventListener('click', async () => {
    status.hidden = true;
    videoPlay.hidden = true;
    video.controls = true;
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    try { await video.play(); video.focus(); } catch { showVideoError(); }
  });
  video.addEventListener('error', showVideoError);
}

// Shared image area for each product. Tabs and thumbnails select the same view.
document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const views = JSON.parse(gallery.dataset.views);
  const tabs = [...gallery.querySelectorAll('[role="tab"]')];
  const thumbs = [...gallery.querySelectorAll('[data-thumb]')];
  const panel = gallery.querySelector('[role="tabpanel"]');
  const img = gallery.querySelector('.gallery-main');
  function select(index) {
    const view = views[index];
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    thumbs.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === index)));
    panel.setAttribute('aria-labelledby', tabs[index].id);
    img.src = view.src; img.alt = view.alt;
    img.width = view.width; img.height = view.height;
    gallery.querySelector('.screen-label').textContent = view.title;
    gallery.querySelector('figcaption').textContent = view.caption;
    gallery.querySelector('[data-enlarge]').setAttribute('aria-label', `Enlarge ${view.title}`);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index));
    tab.addEventListener('keydown', event => {
      const keys = ['ArrowLeft','ArrowRight','Home','End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      let next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(next); tabs[next].focus({preventScroll:true});
    });
  });
  thumbs.forEach((thumb, index) => thumb.addEventListener('click', () => select(index)));
});

// Preview only: no endpoint is configured. Do not insert the success template until
// an approved integration has confirmed successful lead capture.
const reportDialog = document.querySelector('#report-dialog');
if (reportDialog) {
  let reportTrigger;
  let previousOverflow;
  document.querySelectorAll('[data-open-report]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      reportTrigger = trigger;
      previousOverflow = document.body.style.overflow;
      reportDialog.showModal();
      document.body.style.overflow = 'hidden';
      reportDialog.querySelector('#report-title').focus();
    });
  });
  reportDialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...reportDialog.querySelectorAll('button, input:not([type=hidden]), textarea, a[href]')].filter(el => !el.disabled);
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement.id === 'report-title')) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  reportDialog.querySelector('.report-close').addEventListener('click', () => reportDialog.close());
  reportDialog.addEventListener('click', event => {
    if (event.target !== reportDialog) return;
    const r = reportDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) reportDialog.close();
  });
  reportDialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    (reportTrigger?.getClientRects().length ? reportTrigger : document.querySelector('.service-hero .btn'))?.focus({preventScroll:true});
  });
  reportDialog.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#report-status').textContent = 'Submission is unavailable in this local preview. Your details have not been sent or saved. Use the review PDF link below to inspect the report.';
  });
}

// Supplied client interview. Nothing is downloaded until play is requested.
const clientVideo = document.querySelector('#client-video');
const clientPlay = document.querySelector('.testimonial-play');
if (clientVideo && clientPlay) {
  clientVideo.controls = false;
  clientPlay.addEventListener('click', async () => {
    const error = document.querySelector('.testimonial-error');
    error.hidden = true; clientPlay.hidden = true; clientVideo.controls = true;
    if (!clientVideo.getAttribute('src')) clientVideo.src = clientVideo.dataset.src;
    try { await clientVideo.play(); clientVideo.focus(); }
    catch { error.textContent = 'The video could not play. Please try again.'; error.hidden = false; clientPlay.hidden = false; }
  });
}
// No analytics service is installed. Emit anonymous journey hooks for an existing
// host integration; never collect form values or infer successful submissions.
function trackJourney(eventName) {
  document.dispatchEvent(new CustomEvent('tasc:journey', {detail:{event:eventName}}));
  if (typeof window.gtag === 'function') window.gtag('event',eventName);
  else if (Array.isArray(window.dataLayer)) window.dataLayer.push({event:eventName});
}
document.querySelector('.site-header .nav .btn')?.addEventListener('click',()=>trackJourney('header_consultation_click'));
clientVideo?.addEventListener('play',()=>trackJourney('testimonial_play'));
document.querySelectorAll('a[data-case]').forEach(a=>a.addEventListener('click',()=>trackJourney('case_study_open_'+a.dataset.case)));
const meeting = document.querySelector('.meeting-dialog');
const stickyEnquiry = document.querySelector('.scroll-enquiry');
const invitation = document.querySelector('.talent-invitation');
function onScreen(element) {
  if (!element || !element.getClientRects().length) return false;
  const r=element.getBoundingClientRect(); return r.bottom>90 && r.top<innerHeight;
}
function journeyBusy() {
  return !!document.querySelector('dialog[open], .nav.is-open') ||
    /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||'') ||
    [...document.querySelectorAll('form')].some(onScreen) ||
    [...document.querySelectorAll('video')].some(v=>!v.paused) ||
    [...document.querySelectorAll('[data-cookie-notice], .cookie-banner, #cookie-banner')].some(onScreen);
}
let refreshJourney = () => {};
let openConsultation = () => {};
let consultationShown=false;
try{consultationShown=sessionStorage.getItem("tasc-consultation-shown")==="1";}catch{}
if (meeting) {
  let previousFocus,previousOverflow;
  function openMeeting() {
    if(meeting.open) return;
    consultationShown=true;
    try{sessionStorage.setItem("tasc-consultation-shown","1");}catch{}
    previousFocus=document.activeElement;previousOverflow=document.body.style.overflow;
    meeting.showModal();document.body.style.overflow='hidden';meeting.querySelector('h2').focus();refreshJourney();
  }
  openConsultation=openMeeting;
  document.querySelectorAll('[data-open-meeting]').forEach(b=>b.addEventListener('click',()=>{if(b.closest('.scroll-enquiry'))trackJourney('mobile_consultation_click');openMeeting();}));
  // All consultation links on this page use the same consultation form.
  document.querySelectorAll('a[href="contact.html"]').forEach(a=>{if(a.textContent.trim()==='Book an RPO consultation')a.addEventListener('click',e=>{e.preventDefault();openMeeting();});});
  meeting.querySelector('.meeting-close').addEventListener('click',()=>meeting.close());
  meeting.addEventListener('click',e=>{if(e.target!==meeting)return;const r=meeting.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)meeting.close();});
  meeting.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;refreshJourney();(previousFocus?.getClientRects().length&&previousFocus!==document.body?previousFocus:document.querySelector('.service-hero .btn'))?.focus({preventScroll:true});});
  meeting.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const f=[...meeting.querySelectorAll('button,input:not([type="hidden"]),textarea')];if(e.shiftKey&&(document.activeElement===f[0]||document.activeElement.id==='meeting-title')){e.preventDefault();f.at(-1).focus();}else if(!e.shiftKey&&document.activeElement===f.at(-1)){e.preventDefault();f[0].focus();}});
  meeting.querySelector('form').addEventListener('submit',e=>{e.preventDefault();meeting.querySelector('#meeting-status').textContent='Submission is unavailable in this local preview. Your details have not been sent or saved.';});
}
if(stickyEnquiry || invitation) {
  let reachedHalfway=false,visibleTime=0,lastTick=performance.now(),hasSeenInsights=false,offered=false,eligible=false,dismissed=false,successful=false;
  try {offered=sessionStorage.getItem('tasc-hotel-invitation-shown')==='1';dismissed=Number(localStorage.getItem('tasc-hotel-invitation-dismissed-until'))>Date.now();successful=sessionStorage.getItem('tasc-hotel-report-success')==='1';}catch{}
  refreshJourney=()=>{
    const scrollableHeight=document.documentElement.scrollHeight-innerHeight;
    if(scrollableHeight>0 && scrollY/scrollableHeight>=0.5)reachedHalfway=true;
    const busy=journeyBusy();
    const mobile=matchMedia('(max-width:700px)').matches;
    const keyboard=window.visualViewport && innerHeight-window.visualViewport.height>140;
    const heroCTA=document.querySelector('.traction-hero .actions .btn');
    const afterCTA=heroCTA && heroCTA.getBoundingClientRect().bottom<=72;
    if(stickyEnquiry) stickyEnquiry.hidden=!mobile || !afterCTA || busy || keyboard || onScreen(document.querySelector('footer')) || (invitation && !invitation.hidden && onScreen(invitation));
    if(meeting && reachedHalfway && !consultationShown && !document.hidden && !busy && !keyboard){
      openConsultation();
      return;
    }
    if(!invitation)return;
    const suppress=document.hidden || busy || keyboard || dismissed || successful;
    if(suppress)invitation.hidden=true;
    else if(eligible)invitation.hidden=false;
    else if(!offered && visibleTime>=20000 && hasSeenInsights){
      offered=true;eligible=true;invitation.hidden=false;
      try{sessionStorage.setItem('tasc-hotel-invitation-shown','1');}catch{}
      trackJourney('report_invitation_view');
    }
    if(mobile && !invitation.hidden && onScreen(invitation) && stickyEnquiry)stickyEnquiry.hidden=true;
  };
  const insights=document.querySelector('#talent-insights');
  if(insights)new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))hasSeenInsights=true;refreshJourney();}).observe(insights);
  document.addEventListener('visibilitychange',()=>{lastTick=performance.now();refreshJourney();});
  const tick=setInterval(()=>{const now=performance.now();if(!document.hidden)visibleTime+=now-lastTick;lastTick=now;refreshJourney();if(offered)clearInterval(tick);},500);
  invitation?.querySelector('.talent-offer-close').addEventListener('click',()=>{const restore=invitation.contains(document.activeElement);dismissed=true;eligible=false;invitation.hidden=true;try{localStorage.setItem('tasc-hotel-invitation-dismissed-until',String(Date.now()+7*86400000));}catch{}trackJourney('report_invitation_dismiss');refreshJourney();if(restore)document.querySelector('#talent-insights .insight-copy [data-open-report]')?.focus({preventScroll:true});});
  invitation?.querySelector('[data-report-invitation]').addEventListener('click',()=>{eligible=false;invitation.hidden=true;trackJourney('report_invitation_click');refreshJourney();});
  addEventListener('scroll',refreshJourney,{passive:true});addEventListener('resize',refreshJourney);window.visualViewport?.addEventListener('resize',refreshJourney);
  document.addEventListener('focusin',refreshJourney);document.addEventListener('focusout',()=>setTimeout(refreshJourney,0));
  document.querySelectorAll('dialog').forEach(d=>d.addEventListener('close',refreshJourney));
  document.querySelectorAll('video').forEach(v=>{v.addEventListener('play',refreshJourney);v.addEventListener('pause',refreshJourney);});
  new MutationObserver(refreshJourney).observe(document.querySelector('.nav'),{attributes:true,attributeFilter:['class']});
  // Future form integration must dispatch this only after its backend confirms acceptance.
  document.addEventListener('tasc:submission-confirmed',e=>{if(e.detail?.confirmed!==true)return;if(e.detail.kind==='report'){successful=true;eligible=false;if(invitation)invitation.hidden=true;try{sessionStorage.setItem('tasc-hotel-report-success','1');}catch{}trackJourney('report_submission_success');}else if(e.detail.kind==='consultation')trackJourney('consultation_submission_success');refreshJourney();});
  refreshJourney();
}

// Local, accessible dashboard views. No network requests or live account data.
document.querySelectorAll('[data-dashboard]').forEach(dashboard => {
 const tabs = [...dashboard.querySelectorAll('[data-ct-tab]')];
 const activate = tab => {
  tabs.forEach(t => {
   const selected = t === tab;
   t.setAttribute('aria-selected', String(selected));
   t.tabIndex = selected ? 0 : -1;
   document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
  });
 };
 tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', e => {
   let next;
   if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
   if (e.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
   if (e.key === 'Home') next = 0;
   if (e.key === 'End') next = tabs.length - 1;
   if (next !== undefined) { e.preventDefault(); activate(tabs[next]); tabs[next].focus(); }
  });
 });
});
