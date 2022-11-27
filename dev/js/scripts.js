import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin, MorphSVGPlugin);

function setup (){
    var tl=gsap.timeline(); 

    gsap.set("#m8",{rotate: 1,  x: 14.5, y: 20, immediateRender: true}, -1);
    gsap.set("#m7",{rotate: 2,  x: 16.5, y: 24, immediateRender: true}, -1);
    gsap.set("#m4",{rotate: 1,  x: 12.5, y: 10, immediateRender: true}, -1);
    gsap.set("#m3",{rotate: 1.5,  x: 16, y: 16, immediateRender: true}, -1);
    
    gsap.set("#mutterMuseum",{ x: -13, immediateRender: true}, -1);

    return tl; 
}

function skullAnimation(){
    var tl=gsap.timeline(); 


    gsap.from("#skull1, #skull2, #skull3, #skull4, #skull5, #skull6", {duration: 1, y: 50, alpha: 0}, 0);

    return tl; 
}

MorphSVGPlugin.convertToPath("circle");

function morphAnimation1(){
var tl = gsap.timeline(); 


gsap.to("#skull1", {duration: 1, morphSVG:"#bottle1"}, 1);
gsap.to("#skull2", {duration: 1, morphSVG:"#bottle2"}, 1);
gsap.to("#skull3", {duration: 1, morphSVG:"#bottle3"}, 1);
gsap.to("#skull4", {duration: 1, morphSVG:"#bottle4"}, 1);
gsap.to("#skull5", {duration: 1, morphSVG:"#bottle5"}, 1);
gsap.to("#skull6", {duration: 1, morphSVG:"#bottle6"}, 1);

gsap.to("#skull1", {duration: 1, morphSVG:"#bone1"}, 2);
gsap.to("#skull2", {duration: 1, morphSVG:"#bone2"}, 2);
gsap.to("#skull3", {duration: 1, morphSVG:"#bone3"}, 2);
gsap.to("#skull4", {duration: 1, morphSVG:"#bone4"}, 2);
gsap.to("#skull5", {duration: 1, morphSVG:"#bone5"}, 2);
gsap.to("#skull6", {duration: 1, morphSVG:"#bone6"}, 2);

gsap.to("#skull1", {duration: 1, morphSVG:"#scalpel1"}, 3);
gsap.to("#skull2", {duration: 1, morphSVG:"#scalpel2"}, 3);
gsap.to("#skull3", {duration: 1, morphSVG:"#scalpel3"}, 3);
gsap.to("#skull4", {duration: 1, morphSVG:"#scalpel4"}, 3);
gsap.to("#skull5", {duration: 1, morphSVG:"#scalpel5"}, 3);
gsap.to("#skull6", {duration: 1, morphSVG:"#scalpel6"}, 3);

    

return tl;

}

function mPath(){
    var tl = gsap.timeline();

    gsap.from("#ms", {duration: 1, y: 50, alpha: 0}, 4);

    return tl;
}


function cutPath(){

    var tl = gsap.timeline();



    tl.to("#skull",{duration: 2, 
        motionPath:{
            path:"#scalpel-path", 
            align:"#scalpel-path"
        },
            scale: 0.7, transformOrigin:"right", ease: "expo.in"});

        tl.to("#skull", {duration: 1, y: -1, x: -245});     

        tl.to("#m7",{rotate: -2,  x: -16.5, y: -24}, 1.9);
        tl.to("#m8",{rotate: -1,  x: -14.5, y: -20}, 2);
        tl.to("#m3",{rotate: -1.5,  x: -16, y: -16}, 2.1);
        tl.to("#m4",{rotate: -1,  x: -12.5, y: -10}, 2.35);

    return tl;
}

function museum(){
    var tl = gsap.timeline(); 

    tl.from("#mutterMuseum",{duration: 2, y: 16, alpha: 0}, 2.2);

    return tl; 
}



 var mainTL = gsap.timeline();
 mainTL.add(setup())
 .add(skullAnimation(), 2)
 .add(morphAnimation1(), 3)
 .add(mPath(), 4)
 .add(cutPath(), 4)
 .add(museum(), 5)



GSDevTools.create();
gsap.registerPlugin(MotionPathHelper);