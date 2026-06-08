const nav=document.getElementById('nav'),tog=document.getElementById('navToggle');
tog.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const W3F_KEY="__WEB3KEY__";
const qf=document.getElementById('quoteForm');
if(qf){qf.addEventListener('submit',async function(e){
  e.preventDefault();
  if(!qf.checkValidity()){qf.reportValidity();return;}
  const hp=qf.querySelector('.hp'); if(hp&&hp.checked)return;
  const btn=document.getElementById('quoteBtn'),errEl=document.getElementById('formError');
  if(errEl)errEl.style.display='none';
  const g=id=>{const el=document.getElementById(id);return el?el.value:'';};
  const ok=()=>{qf.style.display='none';document.getElementById('formSuccess').classList.add('show');};
  const payload={access_key:W3F_KEY,subject:"New FHA lead — "+document.title,from_name:"FHA Mortgages Florida",
    "First Name":g('fn'),"Last Name":g('ln'),Email:g('em'),Phone:g('ph'),Goal:g('goal'),County:g('county')||"(n/a)","Source Page":document.title,"Page URL":location.href};
  if(W3F_KEY.indexOf("YOUR-")===0){ok();return;}
  const orig=btn.textContent;btn.disabled=true;btn.textContent="Sending…";
  try{
    const r=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(payload)});
    const d=await r.json();
    if(d.success)ok();else throw new Error(d.message||"Failed");
  }catch(err){btn.disabled=false;btn.textContent=orig;if(errEl){errEl.textContent="Sorry, something went wrong. Please call us at __PHONE_DISPLAY__ and we'll help right away.";errEl.style.display="block";}}
});}
// ---- dropdown menus ----
(function(){
  var triggers=document.querySelectorAll('.nav-trigger');
  triggers.forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault(); e.stopPropagation();
      var item=btn.parentNode, isOpen=item.classList.contains('open');
      document.querySelectorAll('nav.main .nav-item.open').forEach(function(i){
        if(i!==item){ i.classList.remove('open'); var b=i.querySelector('.nav-trigger'); if(b) b.setAttribute('aria-expanded','false'); }
      });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.nav-item')){
      document.querySelectorAll('nav.main .nav-item.open').forEach(function(i){
        i.classList.remove('open'); var b=i.querySelector('.nav-trigger'); if(b) b.setAttribute('aria-expanded','false');
      });
    }
  });
})();
