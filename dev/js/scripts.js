import { gsap } from "gsap";

gsap.set("#skull-btn i",{transformOrigin:"center bottom"});

gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
gsap.from("#skull-btn",{duration: 1, alpha:0, y:50, delay:0.75});
gsap.from("#skull-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});

let skullBtn = document.querySelector("#skull-btn");
skullBtn.addEventListener("mouseover",function(){
    gsap.to("#skull-btn",{duration:1, scale:2});

    gsap.to("#skull-btn i",{duration: 1, rotateY:180});

    gsap.to("#first-line",{duration: 1, alpha:0, y:50});
})

skullBtn.addEventListener("mouseout",function(){
    gsap.to("#skull-btn",{duration:1, scale:1});

    gsap.to("#skull-btn i",{duration: 1, rotateY:0});

    gsap.to("#first-line",{duration: 1, alpha:1, y:0});
})