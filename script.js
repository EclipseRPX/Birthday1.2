/* =========================
   LEGENDARY EDITION SCRIPT
   ========================= */

/* -------------------------
   MUSIC MEMORY
------------------------- */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic) {

    const musicState = localStorage.getItem("musicPlaying");

    if (musicState === "true") {
        document.addEventListener("click", () => {
            bgMusic.play().catch(() => {});
        }, { once: true });
    }

    if (musicBtn) {
        musicBtn.addEventListener("click", () => {

            if (bgMusic.paused) {
                bgMusic.play();
                localStorage.setItem("musicPlaying", "true");
                musicBtn.innerHTML = "⏸ Pause Music";
            } else {
                bgMusic.pause();
                localStorage.setItem("musicPlaying", "false");
                musicBtn.innerHTML = "🎵 Play Music";
            }

        });
    }
}

/* -------------------------
   SCROLL REVEAL
------------------------- */

const revealElements = document.querySelectorAll(
".card,.timeline-item,.gallery-grid img,.letter-box,.section-title"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/* -------------------------
   FLOATING HEARTS
------------------------- */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(15+Math.random()*20)+"px";
heart.style.zIndex="999";
heart.style.pointerEvents="none";
heart.style.opacity="0.8";
heart.style.transition="all 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translateY(-110vh)
rotate(${Math.random()*360}deg)`;

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

}

setInterval(createHeart,2500);

/* -------------------------
   CONFETTI BLAST
------------------------- */

function launchConfetti(){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="8px";
confetti.style.height="8px";

const colors=[
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff"
];

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.style.left="50%";
confetti.style.top="50%";

confetti.style.zIndex="9999";
confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

const x=(Math.random()-0.5)*900;
const y=(Math.random()-0.5)*900;

confetti.animate([
{
transform:"translate(0,0)",
opacity:1
},
{
transform:`translate(${x}px,${y}px)`,
opacity:0
}
],{
duration:2500
});

setTimeout(()=>{

confetti.remove();

},2500);

}

}

/* -------------------------
   FIREWORKS
------------------------- */

function launchFirework(x,y){

for(let i=0;i<80;i++){

const spark=document.createElement("div");

spark.style.position="fixed";
spark.style.left=x+"px";
spark.style.top=y+"px";
spark.style.width="5px";
spark.style.height="5px";
spark.style.borderRadius="50%";
spark.style.background="#ffd166";
spark.style.zIndex="9999";

document.body.appendChild(spark);

const angle=Math.random()*360;
const distance=Math.random()*200;

const dx=Math.cos(angle)*distance;
const dy=Math.sin(angle)*distance;

spark.animate([
{
transform:"translate(0,0)",
opacity:1
},
{
transform:`translate(${dx}px,${dy}px)`,
opacity:0
}
],{
duration:2000
});

setTimeout(()=>{
spark.remove();
},2000);

}

}

/* -------------------------
   AUTO FIREWORKS
------------------------- */

function startBirthdayShow(){

setInterval(()=>{

launchFirework(
Math.random()*window.innerWidth,
Math.random()*window.innerHeight/2
);

},1200);

}

/* -------------------------
   GALLERY LIGHTBOX
------------------------- */

const galleryImages=
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="95%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

overlay.addEventListener("click",()=>{

overlay.remove();

});

document.body.appendChild(overlay);

});

});

/* -------------------------
   GIFT BOX SUPPORT
------------------------- */

const giftBtn=document.getElementById("openGift");

if(giftBtn){

giftBtn.addEventListener("click",()=>{

launchConfetti();

const message=
document.getElementById("giftMessage");

if(message){

message.style.display="block";

}

});

}

/* -------------------------
   PAGE FADE IN
------------------------- */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1s";
document.body.style.opacity="1";

},100);

});

/* -------------------------
   PAGE TRANSITIONS
------------------------- */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

if(
href &&
!href.startsWith("#") &&
!href.startsWith("http")
){

e.preventDefault();

document.body.style.transition="opacity .5s";
document.body.style.opacity="0";

setTimeout(()=>{

window.location.href=href;

},500);

}

});

});

/* -------------------------
   GLOBAL FUNCTIONS
------------------------- */

window.launchConfetti = launchConfetti;
window.launchFirework = launchFirework;
window.startBirthdayShow = startBirthdayShow;