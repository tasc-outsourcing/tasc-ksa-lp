(() => {
 const root=document.querySelector('.hiw');if(!root)return;
 const tabs=[...root.querySelectorAll('[role="tab"]')];if(!tabs.length)return;
 function select(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!active;});}
 tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>select(tab));
  tab.addEventListener('keydown',e=>{
   let next;if(['ArrowRight','ArrowDown'].includes(e.key))next=(i+1)%tabs.length;
   if(['ArrowLeft','ArrowUp'].includes(e.key))next=(i+tabs.length-1)%tabs.length;
   if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;
   if(next!==undefined){e.preventDefault();select(tabs[next]);tabs[next].focus();}
  });
 });
 // Match the tablist's orientation to its actual responsive layout.
 const mobile=matchMedia('(max-width:600px)');
 const orientation=()=>root.querySelector('[role="tablist"]').setAttribute('aria-orientation',mobile.matches?'vertical':'horizontal');
 orientation();mobile.addEventListener('change',orientation);
})();
