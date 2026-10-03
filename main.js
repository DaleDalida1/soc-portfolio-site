(function(){
  var el=document.getElementById('clock');
  function tick(){
    try{
      el.textContent=new Date().toLocaleTimeString('en-US',{timeZone:'America/Chicago',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})+' CT';
    }catch(e){el.textContent='';}
  }
  tick(); setInterval(tick,1000);
  // reveal on scroll
  var items=document.querySelectorAll('.case, .log__item, .kit__group, .timeline li, .thm__card, .badges li');
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    items.forEach(function(i){i.classList.add('reveal');});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
    items.forEach(function(i){io.observe(i);});
  }
})();
