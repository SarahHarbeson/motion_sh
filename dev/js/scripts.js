import { gsap } from "gsap";

gsap.from("#first-line",{duration: 1.5, alpha:0, y:-100});
gsap.to("#ghost-1", {duration: 4, alpha:0, y:-400}); 
gsap.to("#ghost-2", {duration: 4, alpha:0, y:-400}); 
gsap.to("#ghost-3", {duration: 4, alpha:0, y:-400}); 
gsap.to("#ghost-4", {duration: 4, alpha:0, y:-400}); 
gsap.to("#ghost-5", {duration: 4, alpha:0, y:-400}); 
//gsap.from("#boo-btn",{duration: 1, alpha:0, y:50, delay:0.75});
//gsap.from("#boo-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});

let BooBtn = document.querySelector("#boo-btn");

BooBtn.addEventListener("mouseover",function(){
    gsap.to("#boo-btn",{duration:1, scale:1.25});

    //gsap.to("#boo-btn i",{duration: 1, rotateY:180});


    gsap.to("#ghost-1", {duration:1, opacity: 100}); 
  //  gsap.to("#ghost-2", {duration: 4, alpha:0, y:-400}); 
    //gsap.to("#ghost-3", {duration: 4, alpha:0, y:-400}); 
    //gsap.to("#ghost-4", {duration: 4, alpha:0, y:-400}); 
    //gsap.to("#ghost-5", {duration: 4, alpha:0, y:-400}); 

})

BooBtn.addEventListener("mouseout",function(){
    gsap.to("#boo-btn",{duration:1, scale:1});

   // gsap.to("#trails-btn i",{duration: 1, rotateY:0});

 
}); 