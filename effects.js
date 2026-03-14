// Scroll animation

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el);
});


// Mouse reactive glow background

document.addEventListener("mousemove", e=>{

const x = e.clientX / window.innerWidth * 100;
const y = e.clientY / window.innerHeight * 100;

document.body.style.background =
`radial-gradient(circle at ${x}% ${y}%, rgba(80,160,255,.18), transparent 40%), #05070d`;

});
