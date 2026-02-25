/* Scroll Reveal */

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add('active');
}
});
});

/* 3D Tilt Cards */

document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const center = rect.width/2;
const rotateY = (x-center)/15;
card.style.transform=`rotateY(${rotateY}deg) scale(1.05)`;
});
card.addEventListener('mouseleave',()=>{
card.style.transform="rotateY(0) scale(1)";
});
});

/* Portfolio Filter */

const buttons=document.querySelectorAll('.filters button');
const items=document.querySelectorAll('.item');

buttons.forEach(btn=>{
btn.addEventListener('click',()=>{
document.querySelector('.filters .active').classList.remove('active');
btn.classList.add('active');
const filter=btn.dataset.filter;

items.forEach(item=>{
if(filter==="all"||item.classList.contains(filter)){
item.style.display="block";
}else{
item.style.display="none";
}
});
});
});

/* Modal */

const modal=document.querySelector('.modal');
const modalImg=document.querySelector('.modal-img');
const close=document.querySelector('.close');

items.forEach(item=>{
item.addEventListener('click',()=>{
modal.style.display="flex";
modalImg.src=item.querySelector('img').src;
});
});

close.addEventListener('click',()=>{
modal.style.display="none";
});

/* Before After Slider */

const range=document.querySelector('.range');
const before=document.querySelector('.before');

range.addEventListener('input',()=>{
before.style.clipPath=`inset(0 ${100-range.value}% 0 0)`;
});
