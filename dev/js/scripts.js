import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);


gsap.set("#d2",{transformOrigin: "center bottom"});
gsap.set("#d2",{scaleY:0.6});
gsap.set("#clip", {transformOrigin: "center", scale: 0}, 0); 
gsap.set("#medium", {transformOrigin: "center", x:-17}, 0); 
gsap.set("#smallmedium", {transformOrigin: "center", x:-28}, 0); 
gsap.set("#small", {transformOrigin: "center", x:-35}, 0); 
// gsap.set("#t-cross",{transformOrigin: "center"});
// gsap.set("#i",{transformOrigin: "center bottom"});
// gsap.set("#e",{transformOrigin: "left bottom"});
// gsap.set("#dot",{transformOrigin: "50% 50%", xPercent:-50, yPercent:-50});

function center() {
    var tl = gsap.timeline(); 

     tl.to("#clip", {duration: 1, scale: 1}, 1)
      .to("#colors", {duration: 1.75, scale: 1.75, transformOrigin: 'center'}, 1)
      .to("#colors", {duration: 1.5, scale: 1, transformOrigin: 'center'}, 2.3)
      .to("#medium", {transformOrigin: "center", x: 5}, 3.2)
      .to("#smallmedium", {transformOrigin: "center", x: 8}, 3.2)
      .to("#small", {transformOrigin: "center", x: 8}, 3.2)


    return tl; 
}

function dAnimation(){
                var tl = gsap.timeline();

                tl.from("#d1, #d2", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
                 .to("#d2", {duration:1, scaleY:1, ease: "none"}, 0.75)

                return tl;
}

function hAnimation(){
        var tl = gsap.timeline();

        tl.from("#h1, #h2, #h3", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
         .fromTo("#h3", {drawSVG:"0% 0%"}, {duration:1, drawSVG:"0% 100%"}, 0.75)

        return tl;
}

function firstaAnimation(){
        var tl = gsap.timeline();


         tl.from("#a1, #a2, #a3", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
           .fromTo("#a3", {drawSVG:"0% 0%"}, {duration:1, drawSVG:"0% -100%"}, 0.75)

        return tl;
}

function rAnimation(){
        var tl = gsap.timeline();


         tl.from("#r1, #r2", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
           .fromTo("#r2", {drawSVG:"0% 0%"}, {duration:1, drawSVG:"0% 100%"}, 0.75)

        return tl;
}

function mAnimation(){
        var tl = gsap.timeline();


         tl.from("#m1, #m2, #m3, #m4", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
           .fromTo("#m3, #m4", {drawSVG:"0% 0%"}, {duration:1, drawSVG:"0% 100%"}, 0.75)

        return tl;
}

function secondaAnimation(){
        var tl = gsap.timeline();


         tl.from("#a4, #a5, #a6", {duration:1, y:"+=50", ease: "elastic.out(0.7)", alpha: 0}, 1)
           .fromTo("#a6", {drawSVG:"0% 0%"}, {duration:1, drawSVG:"0% -100%"}, 0.75)

        return tl;
}



var mainTL = gsap.timeline();
mainTL.add(center(), 0)
 .add(dAnimation(), 0.5)
 .add(hAnimation(), 0.55)
 .add(firstaAnimation(), 0.6)
 .add(rAnimation(), 0.65)
 .add(mAnimation(), 0.7)
 .add(secondaAnimation(), 0.75)
// .add(dotAnimation(),"-=0.55")


GSDevTools.create();