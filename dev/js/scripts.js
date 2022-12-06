import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);


gsap.set("#d2",{transformOrigin: "center bottom"});
gsap.set("#d2",{scaleY:0.6});
gsap.set("#clip", {transformOrigin: "center", scale: 0}, 0); 
gsap.set("#medium1", {scale: 0, transformOrigin: "bottom"}, 0); 
gsap.set("#medium", {scale: 0, transformOrigin: "bottom", x:-17}, 0); 
gsap.set("#smallmedium", {scale: 0, transformOrigin: "bottom"}, 0); 
gsap.set("#smallmedium", {x: -28, transformOrigin: "center"}, 0); 
gsap.set("#small", {scale: 0, transformOrigin: "bottom"}, 0); 
gsap.set("#small", {x:-35, transformOrigin: "center"}, 0); 

gsap.set("#large", {scale: 0, transformOrigin: "bottom"})

gsap.set("#start1", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start2", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start3", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start4", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start5", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start6", {scale: 0, transformOrigin: "bottom"})
gsap.set("#start7", {scale: 0, transformOrigin: "bottom"})

function center() {
    var tl = gsap.timeline(); 

     tl.to("#clip", {duration: 1, scale: 1}, 1)
      .to("#colors", {duration: 1.75, scale: 1.5, transformOrigin: 'center'}, 1)
      .to("#colors", {duration: 1.5, scale: 1, transformOrigin: 'center'}, 2.3)

      .to("#start1", {duration: 1, scale: 0.5, transformOrigin: "bottom"}, 1)
      .to("#start2", {duration: 1, scale: 1, transformOrigin: "bottom"}, 1.2)
      .to("#start3", {duration: 1, scale: 1, transformOrigin: "bottom"}, 1.4)
      .to("#start4", {duration: 1, scale: 1, transformOrigin: "bottom"}, 1.6)
      .to("#start5", {duration: 1, scale: 1, transformOrigin: "bottom"}, 1.8)
      .to("#start6", {duration: 1, scale: 1, transformOrigin: "bottom"}, 2)
      .to("#start7", {duration: 1, scale: 1, transformOrigin: "bottom"}, 2.2)


      .to("#large", {duration: 2, scale: 1, transformOrigin: "bottom"}, 2.5)
      .to("#medium1", {duration: 2, scale: 1, transformOrigin: "bottom"}, 2.7)
      .to("#medium", {duration: 2, scale: 1, transformOrigin: "bottom"}, 2.9)
      .to("#smallmedium", {duration: 2, scale: 1, transformOrigin: "bottom"}, 3.1)

      .to("#small", {duration: 2, scale: 1, transformOrigin: "bottom"}, 1.5)
      .to("#medium", {transformOrigin: "center", x: 5}, 4.85)
      .to("#smallmedium", {transformOrigin: "center", x: 8}, 4.85)
      .to("#small", {transformOrigin: "center", x: 8}, 4.85)


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
 .add(dAnimation(), 1.5)
 .add(hAnimation(), 1.55)
 .add(firstaAnimation(), 1.6)
 .add(rAnimation(), 1.65)
 .add(mAnimation(), 1.7)
 .add(secondaAnimation(), 1.75)
// .add(dotAnimation(),"-=0.55")


GSDevTools.create();