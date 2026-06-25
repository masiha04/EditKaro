const buttons=document.querySelectorAll('.filters button');
const cards=document.querySelectorAll('.card');

buttons.forEach(btn=>{
 btn.addEventListener('click',()=>{
   document.querySelector('.active').classList.remove('active');
   btn.classList.add('active');
   const filter=btn.dataset.filter;
   cards.forEach(card=>{
     card.style.display=(filter==='all'||card.dataset.category===filter)?'block':'none';
   });
 });
});

document.querySelectorAll('.card video').forEach(video=>{
 video.addEventListener('mouseenter',()=>video.play());
 video.addEventListener('mouseleave',()=>{video.pause();video.currentTime=0;});
});

const lightbox=document.getElementById('lightbox');
const lightboxVideo=document.getElementById('lightboxVideo');

document.querySelectorAll('.card').forEach(card=>{
 card.addEventListener('click',()=>{
   const src=card.querySelector('video').src;
   lightboxVideo.src=src;
   lightbox.style.display='flex';
 });
});

document.getElementById('close').onclick=()=>{
 lightbox.style.display='none';
 lightboxVideo.pause();
};
