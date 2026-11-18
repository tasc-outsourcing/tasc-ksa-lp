(() => {
 const root=document.querySelector('#recruitment-cost-calculator');if(!root)return;
 function paint(){root.querySelectorAll('input[type=range]').forEach(r=>r.style.setProperty('--fill',`${(Number(r.value)-Number(r.min))/(Number(r.max)-Number(r.min))*100}%`));}
 root.addEventListener('input',paint);root.addEventListener('change',paint);paint();
})();
