import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";



gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function simpleMotion(){
     var tl = gsap.timeline()

   //  var bottomLine = document.querySelector("#line"); 
     var center = document.querySelector("#center");
     center = center.getBBox();
   // bottomLine = bottomLine.getBBox(); 

     //tl.from("#center",{duration: 0.25, scale:0, transformOrigin:"center"},"-=50%")
        tl.from(".line1", {duration:0.5, drawSVG:0, stagger: 0.5, transformOrigin: "center"}, "drawIn")
        .from(".dot1, .dot2", {scale: 0, duration: .5, drawSVG: 0, stagger: .5}, "drawIn");



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

