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


// Smooth subtle cursor glow

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e=>{
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});
