import { gsap } from "gsap";

gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
gsap.from("#second-line",{duration: 1, alpha:0, y:-70, delay:0.5});
gsap.from("#trails-btn",{duration: 1, alpha:0, y:50, delay:0.75});
//gsap.from("#trails-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});

let trailBtn = document.querySelector("#trails-btn");

trailBtn.addEventListener("mouseover",function(){
    gsap.to("#trails-btn",{duration:1, scale:1.25});

    //gsap.to("#trails-btn i",{duration: 1, rotateY:180});

    gsap.from("#first-line",{duration: 1, color: "#F28C28"});

})

trailBtn.addEventListener("mouseout",function(){
    gsap.to("#trails-btn",{duration:1, scale:1});

   // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

   gsap.from("#first-line",{duration: 1, color: "#FFF"});
 
})

gsap.to("#ghost", {duration: 3, alpha:0, y:-400}); 