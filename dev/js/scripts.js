import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";



gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
     var tl = gsap.timeline()





      tl.from(".line1", {drawSVG: "50% 50%"}, {duration:1, transformOrigin: "center"}, "drawIn")
      tl.from("#ball2, #ball1", {scale:0, duration:0.5, transformOrigin: "center"})

      tl.from(".line4", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, "drawIn")
      tl.from(".line2", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, "drawIn")
      tl.from(".line3", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, "drawIn")

        tl.to(".line1", {duration: 1, rotate: 45, transformOrigin: "center", immediateRender: "false" })
        .from("#ball3, #ball5", {scale:0, duration:0.5, transformOrigin: "center"})


        tl.to(".line4", {duration: 1, rotate: 45, transformOrigin: "center", immediateRender: "false" })
        .from("#ball7, #ball8", {scale:0, duration:0.5, transformOrigin: "center"})

        tl.to(".line2", {duration: 1, rotate: 45, transformOrigin: "center", immediateRender: "false" })
        .from("#ball4, #ball6", {scale:0, duration:0.5, transformOrigin: "center"})


        tl.to(".line3", {duration: 1, rotate: 45, transformOrigin: "center", immediateRender: "false" })



    return tl; 
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".odd", {duration:1, drawSVG:0, stagger:1, transformOrigin: "center"}, "playPattern")
    .fromTo(".even",{drawSVG:"0% 0%"}, {duration:2, drawSVG:"0% -100%", stagger:1, transformOrigin: "center"}, "playPattern")
    .to(".odd", {duration: 1, stagger: 0.5, rotate: 360})
    .from("even", {duration: 1, stagger: 0.75, rotate: -360})
    return tl; 
}

function UIMotion(){

 //  var bottomLine = document.querySelector("#bottom-line"); 
   // bottomLine = bottomLine.getBBox(); 

    var tl = gsap.timeline()
    tl.from("#box", {duration:1, scale:1.4, strokeWidth: 4})
   // .from("#bottom-line", {duration:0.5, drawSVG:0}, "drawIn")
    

    return tl; 
}

var mainTl = gsap.timeline();
mainTl.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion()); 


    GSDevTools.create();

