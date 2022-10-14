import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function heroAnimation(){
    var tl = gsap.timeline(); 
tl.from("#first-line",{duration: 0.5, alpha:0, y:-100})
    .from("#boo-btn i",{duration: 0.5, alpha:0, rotation:180})
    .to("#ghost-3", {duration: .75, alpha:0, y:-300})
    .to("#ghost-4", {duration: .75, alpha:0, y:-500})
    .to("#ghost-1", {duration: .75, alpha:0, y:-400})
    .to("#ghost-2", {duration: 1, alpha:0, y:-650})
    .to("#ghost-5", {duration: .75, alpha:0, y:-560})
    return tl; 

}


var heroSizeNumber = 1; 

let mm = gsap.matchMedia(); 

mm.add("(min-width: 768px)", () => {
heroSizeNumber = 2; 
}); 

mm.add("(max-width: 768px)", () => {
    heroSizeNumber = 1.25; 
 }); 

    

let booBtn = document.querySelector("#boo-btn");

var buttonAnimation = gsap.timeline({paused:true}); 
buttonAnimation.to("#boo-btn",{duration:1, scale:heroSizeNumber}, "goAway")

    .to("#first-line",{duration: 1, alpha:0, y:50}, "goAway")

        .to("#boo-btn i",{duration: .5, rotation: 360})
        .to("#ghost-3", {duration:.25, opacity: .6})
        .to("#ghost-5", {duration:.25, opacity: .6})
        .to("#ghost-1", {duration:.25, opacity: .6})
        .to("#ghost-2", {duration:.25, opacity: .6})
        .to("#ghost-4", {duration:.25, opacity: .6});
 

booBtn.addEventListener("mouseover",function(){
buttonAnimation.play(); 
})

booBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse(); 
})



function crossbones(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#crossbones", 
    scrub: true,
    markers: true, 
    end:"top 20%",
    start:"top 70%"
    }})

    .to("#crossbones",{duration:2, scale:6, alpha:0},"same");
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(heroAnimation())
.add(crossbones()); 
