import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";



gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
     var tl = gsap.timeline()
     var line = document.querySelector("#lines");

     var Ball1 = document.querySelector("#ball1");
     var Ball5 = document.querySelector("#ball5");

 //    gsap.set("#ball1",{x:line.width / 2 + Ball1.width / 2, transformOrigin:"center" })
   //  gsap.set("#ball5",{x:-line.width/2 - Ball5.width / 2, transformOrigin:"center" })


      tl.from("#ball1",{scale:0, duration:0.25, drawSVG: 0})
//     //  .from("#left-ball",{scale:0, duration:0.25},"-=50%")
       .to("#ball1",{x:0, duration:0.25},"rollOut")
      .to("#ball2",{x:0, duration:0.25},"rollOut")
       .fromTo("#lines",{drawSVG:"10% 90%"},{duration:0.25, drawSVG: "0% 100%"},"rollOut")
    //  .from("#center",{duration: 0.25, scale:0, transformOrigin:"center"},"-=50%")
    //  .to("#center",{duration: 0.25, y: -center.height / 2 - 50},"-=50%")
    //  .to("#center",{duration: 0.15, y: 0})
    //  .fromTo("#center-outline",{drawSVG:"100% 50%"},{duration:0.15,drawSVG:"125% 25%"},"-=50%")

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

    var bottomLine = document.querySelector("#bottom-line"); 
    bottomLine = bottomLine.getBBox(); 

    var tl = gsap.timeline()
    tl.to("#pencil", {duration:0.5, x:bottomLine.width}, "drawIn")
    .from("#bottom-line", {duration:0.5, drawSVG:0}, "drawIn")
    

    return tl; 
}

var mainTl = gsap.timeline();
mainTl.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion()); 


    GSDevTools.create();

