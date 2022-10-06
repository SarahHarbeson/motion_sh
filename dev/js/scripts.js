import { gsap } from "gsap";

//gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
gsap.from("#trails-btn",{duration: 1, alpha:0, y:50, delay:0.75});
//gsap.from("#trails-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});

let trailBtn = document.querySelector("#trails-btn");

trailBtn.addEventListener("mouseover",function(){
    gsap.to("#trails-btn",{duration:1, scale:1.25});

    //gsap.to("#trails-btn i",{duration: 1, rotateY:180});

    gsap.from("#first-line",{color: "#F28C28"});

})

trailBtn.addEventListener("mouseout",function(){
    gsap.to("#trails-btn",{duration:1, scale:1});

   // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

   gsap.from("#first-line",{color: "#FFF"});
 
})

gsap.to("#ghost-1", {duration: 3.5, alpha:0, y:-400}); 
gsap.to("#ghost-2", {duration: 3.5, alpha:0, y:-400}); 
gsap.to("#ghost-3", {duration: 3.5, alpha:0, y:-400}); 
gsap.to("#ghost-4", {duration: 3.5, alpha:0, y:-400}); 
gsap.to("#ghost-5", {duration: 3.5, alpha:0, y:-400}); 