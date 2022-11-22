import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);



function morphAnimation1(){
var tl = gsap.timeline(); 

gsap.to("#skull1", {duration: 1, morphSVG:"#bottle1"});
gsap.to("#skull2", {duration: 1, morphSVG:"#bottle2"});
gsap.to("#skull3", {duration: 1, morphSVG:"#bottle3"});
gsap.to("#skull4", {duration: 1, morphSVG:"#bottle4"});
gsap.to("#skull5", {duration: 1, morphSVG:"#bottle5"});
gsap.to("#skull6", {duration: 1, morphSVG:"#bottle6"});

return tl;

}

// function morphAnimation2(){
//         var tl = gsap.timeline(); 
        
//         gsap.to("#bottle1", {duration: 1, morphSVG:"#bone1"});
//         gsap.to("#bottle2", {duration: 1, morphSVG:"#bone2"});
//         gsap.to("#bottle3", {duration: 1, morphSVG:"#bone3"});
//         gsap.to("#bottle4", {duration: 1, morphSVG:"#bone4"});
//         gsap.to("#bottle5", {duration: 1, morphSVG:"#bone5"});
//         gsap.to("#bottle6", {duration: 1, morphSVG:"#bone6"});
        
//         return tl;
        
//         }

// gsap.set("#t-down",{scaleY:0.5});
// gsap.set("#t-cross",{transformOrigin: "center"});
// gsap.set("#i",{transformOrigin: "center bottom"});
// gsap.set("#e",{transformOrigin: "left bottom"});
// gsap.set("#dot",{transformOrigin: "50% 50%", xPercent:-50, yPercent:-50});

// function tAnimation(){
//         var tl = gsap.timeline();
//         tl.from("#t-down",{duration:0.5, y:"-=500", ease:"none"})

//         // stretch out bottom of T
//         .to("#t-down",{duration:0.5, scaleY:1.5, ease: "none)"})

//         // animate the bottom of the T path
//         .from("#t-path",{duration:0.25, scaleY:0, ease: "none)"},"-=20%")
//         .fromTo("#t-path",{duration:0.25, drawSVG: "0% 10%"}, {drawSVG:"90% 100%", ease:"none"}, "tAnimation")

//         // animate the t cross bar
//         .from("#t-cross",{duration:0.5, scaleX:0, ease: "elastic.out(1, 0.3)"}, "tAnimation")

//         // snap T back into shape
//         .to("#t-down",{duration:0.5, scaleY:1, ease: "elastic.out(1, 0.3)"},"-=80%")
//         return tl;
// }

// function eAnimation(){
//         var tl = gsap.timeline();
//         //rotate E 
//         tl.from("#e", {duration:0.75, rotate: 120, ease: "elastic.out(1, 0.5)"})
//         return tl;
// }

// function kAnimation(){
//         var tl = gsap.timeline();
//         // drop in K
//         tl.from("#k", {duration:0.25, y:"-=200", ease: "bounce",autoAlpha:0})
//         return tl;
// }

// function nAnimation(){
//         var tl = gsap.timeline();
//         //skew the N in
//         tl.from("#n", {duration:0.25, scaleX:0})
//         return tl;
// }

// function iAnimation(){
//         var tl = gsap.timeline();
//         // make I pop out
//         tl.from("#i",{duration:0.5, scaleY:0, ease: "elastic.out(1, 0.5)"})
//         return tl;
// }

// function tPathAnimation(){
//         var tl = gsap.timeline();
//          // make T path disappear
//         tl.to("#t-path",{duration:0.25, scaleY:0})
//         return tl;
// }

// function dotAnimation(){
//         var tl = gsap.timeline();
//         // dot pops out and lands
//         tl.from("#dot",{duration:0.01, autoAlpha:0})
//         .from("#dot",{duration:1, motionPath:{path:"#dot-path", align:"#dot-path"},ease: "bounce.out"});
//         return tl;
// }

 var mainTL = gsap.timeline();
 mainTL.add(morphAnimation1(), -1)
 //.add(morphAnimation2(), 2)
// .add(eAnimation(),"-=0.25")
// .add(kAnimation(),"-=0.6")
// .add(nAnimation(),"-=0.35")
// .add(iAnimation(),"-=0.6")
// .add(tPathAnimation(),"-=0.6")
// .add(dotAnimation(),"-=0.55")


GSDevTools.create();