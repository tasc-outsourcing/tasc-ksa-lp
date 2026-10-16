// One supplied HubSpot form, with the requested resource retained until confirmation.
(() => {
  const modal=document.querySelector('#lead-dialog'), title=modal.querySelector('h2'), description=modal.querySelector('#lead-description'), status=modal.querySelector('#lead-status'), host=modal.querySelector('#hubspot-lead-form'), success=modal.querySelector('#lead-success');
  let library, trigger, overflow, generation=0;
  function loadLibrary(){
    if(window.hbspt?.forms)return Promise.resolve();
    if(!library)library=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://js.hsforms.net/forms/embed/v2.js';script.charset='utf-8';script.onload=resolve;script.onerror=()=>{library=null;reject(new Error('unavailable'));};document.head.append(script);});
    return library;
  }
  const labels={retail:'Saudi retail case study',technical:'Saudi technical manufacturing case study',automotive:'Saudi automotive case study'};
  async function open(kind='consultation',asset=''){
    if(modal.open)return;
    const current=++generation;
    trigger=document.activeElement;overflow=document.body.style.overflow;
    title.textContent=kind==='case'?'Read the '+labels[asset]:kind==='report'?'Get the hotel hiring report':kind==='project'?'Explore Project RPO':'Book an RPO consultation';
    description.textContent=kind==='case'?'Complete the form to access the case study.':kind==='report'?'Explore the talent data and planning questions behind three hotel operations hiring briefs. Review edition.':'Tell us about your hiring needs and our team will get in touch.';
    host.replaceChildren();host.hidden=false;success.replaceChildren();success.hidden=true;status.textContent='Loading form…';
    modal.showModal();document.body.style.overflow='hidden';title.focus();
    consultationShown=true;try{sessionStorage.setItem('tasc-consultation-shown','1');}catch{}
    const identifier=kind==='report'?'saudi-hotel-operations-october-2026-review':kind==='case'?asset+'-case-study':kind==='project'?'project-rpo':'rpo-consultation';
    window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'rpo_form_open',request_type:kind,resource_id:identifier});
    const target=document.createElement('div');target.id='hubspot-instance-'+current;host.append(target);
    try{
      await loadLibrary();if(current!==generation||!modal.open)return;
      hbspt.forms.create({portalId:'20309062',formId:'f4a9bb20-82ef-400d-aa71-ba72885695d0',region:'na1',inlineMessage:'Thank you. Your request has been received.',target:'#'+target.id,formInstanceId:'rpo-'+current,
        onFormReady:()=>{if(current===generation)status.textContent='';},
        onFormSubmitted:()=>{
          if(current!==generation)return;
          host.hidden=true;status.textContent='';success.hidden=false;
          const heading=document.createElement('h3');heading.tabIndex=-1;
          heading.textContent=kind==='report'?'Your report is ready.':kind==='case'?'Your case study is ready.':'Thank you. Your request has been received.';success.append(heading);
          if(kind==='case'||kind==='report'){
            const link=document.createElement('a');link.className='btn';link.textContent='Download PDF';link.href=kind==='report'?'documents/hotel-hiring-report-review.pdf':'documents/'+asset+'-case-study.pdf';link.download='';success.append(link);
          }
          window.dataLayer.push({event:'rpo_form_success',request_type:kind,resource_id:identifier});
          document.dispatchEvent(new CustomEvent('tasc:submission-confirmed',{detail:{confirmed:true,kind:kind==='report'?'report':'consultation'}}));heading.focus();
        }
      });
      setTimeout(()=>{if(current===generation&&modal.open&&status.textContent==='Loading form…')status.textContent='The form is taking longer to load. Check your connection or content blocker, then close and reopen this form.';},15000);
    }catch{status.textContent='The form could not load. Please check your connection and reopen it. Your details have not been sent.';}
  }
  document.addEventListener('click',e=>{
    const el=e.target.closest('a,button');if(!el)return;
    const href=el.getAttribute('href')||'',text=el.textContent.trim();
    const match=href.match(/documents\/(retail|technical|automotive)-case-study\.pdf/);
    let kind,asset='';
    if(el.closest('#lead-success'))return;
    if(match){kind='case';asset=match[1];}
    else if(el.matches('[data-open-report]'))kind='report';
    else if(/explore project rpo/i.test(text))kind='project';
    else if(el.matches('[data-open-meeting]')||(/contact\.html/.test(href)&&/Book an RPO consultation/i.test(text)))kind='consultation';
    if(!kind)return;
    e.preventDefault();e.stopImmediatePropagation();if(nav.classList.contains('is-open'))closeMenu();
    if(el.matches('[data-report-invitation]')&&invitation)invitation.hidden=true;
    open(kind,asset);
  },true);
  // Preserve the existing halfway scroll trigger, now opening the real supplied form.
  openConsultation=()=>open('consultation');
  document.querySelectorAll('.contact-form').forEach(async (form,index)=>{
    const panel=document.createElement('div');panel.className='inline-hubspot';
    const message=document.createElement('p');message.setAttribute('role','status');message.textContent='Loading consultation form…';
    const target=document.createElement('div');target.id='inline-consultation-'+index;panel.append(message,target);form.replaceWith(panel);
    try{
      await loadLibrary();
      hbspt.forms.create({portalId:'20309062',formId:'f4a9bb20-82ef-400d-aa71-ba72885695d0',region:'na1',target:'#'+target.id,formInstanceId:'inline-consultation-'+index,
        inlineMessage:'Thank you. Your request has been received.',
        onFormReady:()=>{message.textContent='';},
        onFormSubmitted:()=>{
          window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'rpo_form_success',request_type:'consultation',resource_id:'rpo-consultation',form_location:'inline'});
          document.dispatchEvent(new CustomEvent('tasc:submission-confirmed',{detail:{confirmed:true,kind:'consultation'}}));
        }
      });
    }catch{message.textContent='The form could not load. Please refresh the page or use a consultation button to try again.';}
  });
  modal.querySelector('.lead-close').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
  modal.addEventListener('close',()=>{generation++;document.body.style.overflow=overflow;trigger?.focus({preventScroll:true});refreshJourney();});
})();
