// =====================================
// TYPEWRITER EFFECT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const typingElement =
    document.getElementById("typing");

    if (typingElement) {

        const text =
        "Hi Ziya ❤️";

        let index = 0;

        function typeWriter() {

            if (index < text.length) {

                typingElement.innerHTML +=
                text.charAt(index);

                index++;

                setTimeout(
                    typeWriter,
                    120
                );
            }
        }

        typeWriter();
    }

});

// =====================================
// MUSIC SYSTEM
// =====================================

const music =
document.getElementById(
"bgMusic"
);

if (music) {

    const savedTime =
    localStorage.getItem(
    "musicTime"
    );

    if (savedTime) {

        music.currentTime =
        parseFloat(savedTime);

    }

    const musicEnabled =
    localStorage.getItem(
    "musicEnabled"
    );

    if (musicEnabled === "true") {

        music.play()
        .catch(() => {});
    }

    setInterval(() => {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }, 1000);

}

// =====================================
// LETTER OPENING
// =====================================

function openLetter() {

    const letter =
    document.getElementById(
    "letter"
    );

    if (!letter) return;

    letter.classList.add(
    "show-letter"
    );

    letter.scrollIntoView({

        behavior:"smooth",

        block:"center"

    });

}

// =====================================
// SURPRISE REVEAL
// =====================================

function startFinalReveal(){

    const reveal =
    document.getElementById(
    "finalReveal"
    );

    if(!reveal) return;

    reveal.classList.add(
    "show-reveal"
    );

    launchConfetti();

}

// =====================================
// CONFETTI
// =====================================

function launchConfetti(){

    const colors = [

        "#ff69b4",
        "#ff1493",
        "#ff85c1",
        "#ffc0cb",
        "#ffffff"

    ];

    for(let i=0;i<150;i++){

        const confetti =
        document.createElement(
        "div"
        );

        confetti.style.position =
        "fixed";

        confetti.style.width =
        "10px";

        confetti.style.height =
        "10px";

        confetti.style.left =
        Math.random()*100 + "vw";

        confetti.style.top =
        "-20px";

        confetti.style.borderRadius =
        "50%";

        confetti.style.background =
        colors[
        Math.floor(
        Math.random()*
        colors.length
        )
        ];

        confetti.style.zIndex =
        "9999";

        confetti.style.pointerEvents =
        "none";

        confetti.style.animation =
        `confettiFall ${
        Math.random()*3+3
        }s linear forwards`;

        document.body.appendChild(
        confetti
        );

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

// =====================================
// CONFETTI ANIMATION
// =====================================

const confettiStyle =
document.createElement("style");

confettiStyle.innerHTML = `

@keyframes confettiFall{

0%{
transform:
translateY(0)
rotate(0deg);
opacity:1;
}

100%{
transform:
translateY(120vh)
rotate(1080deg);
opacity:0;
}

}

`;

document.head.appendChild(
confettiStyle
);

// =====================================
// CURSOR HEARTS
// =====================================

document.addEventListener(
"mousemove",
function(e){

    if(window.innerWidth < 768)
    return;

    if(Math.random() > 0.85){

        createCursorHeart(
        e.clientX,
        e.clientY
        );

    }

}
);

function createCursorHeart(
x,
y
){

    const heart =
    document.createElement(
    "div"
    );

    heart.innerHTML = "❤️";

    heart.style.position =
    "fixed";

    heart.style.left =
    x + "px";

    heart.style.top =
    y + "px";

    heart.style.pointerEvents =
    "none";

    heart.style.zIndex =
    "9999";

    heart.style.fontSize =
    "14px";

    heart.style.animation =
    "heartFly 2s ease forwards";

    document.body.appendChild(
    heart
    );

    setTimeout(()=>{

        heart.remove();

    },2000);

}

// =====================================
// HEART ANIMATION
// =====================================

const heartStyle =
document.createElement(
"style"
);

heartStyle.innerHTML = `

@keyframes heartFly{

0%{

transform:
translateY(0)
scale(1);

opacity:1;

}

100%{

transform:
translateY(-60px)
scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(
heartStyle
);

// =====================================
// RANDOM FLOATING HEARTS
// =====================================

function createHeart(){

    const heart =
    document.createElement(
    "div"
    );

    const hearts = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "💞"

    ];

    heart.innerHTML =

    hearts[
    Math.floor(
    Math.random()*
    hearts.length
    )
    ];

    heart.style.position =
    "fixed";

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.bottom =
    "-50px";

    heart.style.fontSize =
    Math.random()*15+20+"px";

    heart.style.zIndex =
    "999";

    heart.style.pointerEvents =
    "none";

    heart.style.animation =
    `floatPremium ${
    Math.random()*4+6
    }s linear forwards`;

    document.body.appendChild(
    heart
    );

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(
createHeart,
2500
);

// =====================================
// FLOAT ANIMATION
// =====================================

const floatStyle =
document.createElement(
"style"
);

floatStyle.innerHTML = `

@keyframes floatPremium{

0%{

transform:
translateY(0);

opacity:1;

}

100%{

transform:
translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(
floatStyle
);

// =====================================
// BUTTON RIPPLE EFFECT
// =====================================

document.querySelectorAll(
".btn"
).forEach(btn=>{

    btn.addEventListener(
    "click",
    function(e){

        const circle =
        document.createElement(
        "span"
        );

        const size =
        Math.max(
        btn.clientWidth,
        btn.clientHeight
        );

        circle.style.width =
        size + "px";

        circle.style.height =
        size + "px";

        circle.style.position =
        "absolute";

        circle.style.borderRadius =
        "50%";

        circle.style.background =
        "rgba(255,255,255,.5)";

        circle.style.transform =
        "scale(0)";

        circle.style.left =
        e.offsetX -
        size/2 + "px";

        circle.style.top =
        e.offsetY -
        size/2 + "px";

        circle.style.animation =
        "ripple .6s linear";

        btn.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

const rippleStyle =
document.createElement(
"style"
);

rippleStyle.innerHTML = `

.btn{
position:relative;
overflow:hidden;
}

@keyframes ripple{

to{

transform:
scale(4);

opacity:0;

}

}

`;

document.head.appendChild(
rippleStyle
);

// =====================================
// PAGE FADE IN
// =====================================

document.body.style.opacity =
"0";

window.addEventListener(
"load",
()=>{

document.body.style.transition =
"opacity 1s ease";

document.body.style.opacity =
"1";

}
);

// =====================================
// VISIT TRACKER
// =====================================

localStorage.setItem(
"lastVisit",
new Date().toLocaleString()
);

console.log(
"❤️ Birthday Website Loaded"
);