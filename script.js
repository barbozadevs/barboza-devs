const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';observer.unobserve(entry.target)}})
},{threshold:.08});
document.querySelectorAll('.project-card,.service,.about-copy,.hero-copy,.hero-terminal').forEach((el,i)=>{
  el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ease ${Math.min(i*.04,.25)}s, transform .55s ease ${Math.min(i*.04,.25)}s`;observer.observe(el)
});
