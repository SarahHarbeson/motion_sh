import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";



gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
     var tl = gsap.timeline()





      tl.from(".line1", {drawSVG: "50% 50%"}, {duration:1, transformOrigin: "center"}, 1, "drawIn")
      tl.from("#ball2, #ball1", {scale:0, duration:0.5, transformOrigin: "center"},2 )

        .from(".line4", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, 3, "drawIn")
        .from(".line2", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, 4, "drawIn")
       .from(".line3", {drawSVG: "40% 60%"}, {duration:2, transformOrigin: "center", immediateRender: "false"}, 5, "drawIn")

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
    tl.fromTo(".odd", {drawSVG:"0% 0%"}, {duration:2, drawSVG:"100% 0%", stagger:1, rotate: 360, transformOrigin: "center"}, "playPattern")
    .fromTo(".even",{drawSVG:"0% 0%"}, {duration:2, drawSVG:"0% -100%", stagger:1, rotate: -360, transformOrigin: "center"}, "playPattern")
   // .to(".odd", {duration: 1, stagger: 0.75, rotate: 360, transformOrigin: "center"}, 2)
 //   .from(".even", {duration: 1, stagger: 0.75, rotate: -360, transformOrigin: "center"}, 2)
    return tl; 
}

function UIMotion(){

 //  var bottomLine = document.querySelector("#bottom-line"); 
   // bottomLine = bottomLine.getBBox(); 

    var tl = gsap.timeline()
    tl.fromTo(".box",{drawSVG:"0% 0%"}, {duration:2, drawSVG:"0% -100%", stagger:1, transformOrigin: "center"}, "playPattern")
     .fromTo(".L, .O, .A, .D, .I, .N, .G",{drawSVG:"50% 50%" }, {duration: 2, drawSVG:"100% 0%"}, "playPattern")
     .fromTo(".L, .O, .A, .D, .I, .N, .G", 1, {fill:"none"}, {fill:"black"})

      .to(".box", {duration:1, scaleX:1.05, x: 20, transformOrigin: "center"}, 2)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:0.5, scaleX:1.2, x: 20, transformOrigin: "center"}, 2)
      .to(".box", {duration:0.5, scaleX:1, x:-20, transformOrigin: "center"}, 3)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:0.5, scaleX:1, x: -20, transformOrigin: "center"}, 3)
      .to(".box", {duration:0.5, scaleY:1.2, transformOrigin: "center"}, 4)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:0.5, scaleY:1.2, y: 10,  transformOrigin: "center"}, 4)
      .to(".box", {duration:0.5, scaleY:1, y: -20, transformOrigin: "center"}, 5)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:0.5, scaleY:1, y: -20, transformOrigin: "center"}, 5)
      .to(".box", {duration:1, scale:1.2, y:20, transformOrigin: "center"}, 6)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:1, scale:1.3, y:20, transformOrigin: "center"}, 6)
      .to(".box", {duration:0.5, scale:1, transformOrigin: "center"}, 7)
      .to(".L, .O, .A, .D, .I, .N, .G", {duration:0.5, scale:1, transformOrigin: "center"}, 7)

    .fromTo(".box",{drawSVG:"0% -100%"}, {duration:2, drawSVG:"0% 0%", stagger:1, transformOrigin: "center"}, 8, "playPattern")
     .fromTo(".L, .O, .A, .D, .I, .N, .G",{drawSVG:"100% 0%" }, {duration: 2, drawSVG:"50% 50%"}, 8, "playPattern")
     .fromTo(".L, .O, .A, .D, .I, .N, .G", {fill:"black"}, {fill:"none"}, 8)

    

    return tl; 
}

var mainTl = gsap.timeline();
mainTl.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion()); 


    GSDevTools.create();

