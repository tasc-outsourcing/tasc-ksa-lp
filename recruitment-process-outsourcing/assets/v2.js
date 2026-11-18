// Accessible disclosure navigation. Native links retain their normal semantics.
(() => {
 const toggle=document.querySelector('.v2-resource-toggle'), links=document.querySelector('#resource-links');
 if(!toggle||!links)return;
 function close(){toggle.setAttribute('aria-expanded','false');links.hidden=true;}
 toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));links.hidden=expanded;});
 document.addEventListener('click',e=>{if(!e.target.closest('.v2-nav-resource'))close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!links.hidden){const focused=links.contains(document.activeElement);close();if(focused)toggle.focus();}});
 document.querySelector('.v2-nav-resource').addEventListener('focusout',()=>setTimeout(()=>{if(!document.activeElement.closest('.v2-nav-resource'))close();},0));
 links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
})();
// Capability explorer: keyboard and pointer controls share one visible panel.
(() => {
 const tabs=[...document.querySelectorAll('[data-capability]')];
 if(!tabs.length)return;
 function select(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',e=>{let index;if(e.key==='ArrowRight')index=(i+1)%tabs.length;if(e.key==='ArrowLeft')index=(i+tabs.length-1)%tabs.length;if(e.key==='Home')index=0;if(e.key==='End')index=tabs.length-1;if(index!==undefined){e.preventDefault();select(tabs[index]);tabs[index].focus();}})});
})();
(() => {
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('premium-enter');observer.unobserve(e.target);}}),{threshold:.12});
 document.querySelectorAll('.tower-preview,.industry-photograph,.pdf-story').forEach(el=>observer.observe(el));
})();
// Local, hypothetical recruitment budget scenario. No lead capture required.
(() => {
 const root=document.querySelector('#recruitment-cost-calculator');
 if(!root)return;
 const state={hires:200,cost:6000,reduction:20};
 const money=n=>'SAR '+new Intl.NumberFormat('en',{maximumFractionDigits:2}).format(n);
 let announce;
 function render(){
  const current=state.hires*state.cost,savings=current*state.reduction/100;
  root.querySelector('#cost-current').textContent=money(current);
  root.querySelector('#cost-savings').textContent=money(savings);
  root.querySelector('#cost-revised').textContent=money(current-savings);
  root.querySelector('#cost-equation').textContent=`${state.hires.toLocaleString('en')} hires × ${money(state.cost)} × ${state.reduction}%`;
  clearTimeout(announce);announce=setTimeout(()=>{root.querySelector('#cost-announcement').textContent=`Illustrative annual savings ${money(savings)}. Revised annual recruitment cost ${money(current-savings)}.`},350);
 }
 Object.keys(state).forEach(key=>{
  const number=root.querySelector(`[data-cost-number="${key}"]`),range=root.querySelector(`[data-cost-range="${key}"]`);
  range.addEventListener('input',()=>{state[key]=Number(range.value);number.value=range.value;render()});
  number.addEventListener('input',()=>{if(number.value!==''&&number.validity.valid){state[key]=Number(number.value);range.value=number.value;render()}});
  number.addEventListener('change',()=>{
   let value=number.value===''?state[key]:Number(number.value);
   value=Math.min(Number(number.max),Math.max(Number(number.min),value));
   value=Math.round(value/Number(number.step))*Number(number.step);
   number.value=range.value=String(value);state[key]=value;render();
  });
 });
 render();
})();
// One-time figure ticker. Screen readers retain the final value throughout.
(() => {
 const figures=[...document.querySelectorAll('.outcome-strip strong')];
 if(!figures.length||matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  observer.unobserve(entry.target);
  const el=entry.target,final=el.textContent,goal=parseFloat(final);
  if(!Number.isFinite(goal))return;
  const accessible=document.createElement('span');accessible.className='sr-only';accessible.textContent=final;
  const visual=document.createElement('span');visual.setAttribute('aria-hidden','true');
  el.replaceChildren(accessible,visual);
  let start;
  function tick(now){start??=now;const progress=Math.min((now-start)/1400,1),eased=1-Math.pow(1-progress,3);visual.textContent=Math.round(goal*eased)+'%';if(progress<1)requestAnimationFrame(tick);else visual.textContent=final;}
  requestAnimationFrame(tick);
 }),{threshold:.5});
 figures.forEach(el=>observer.observe(el));
})();
