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
let ticketsBtn = document.querySelector("#tickets-btn");

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
    //markers: true, 
    end:"top 20%",
    start:"top 70%"
    }})

    .to("#crossbones",{duration:2, scale:7, alpha:0},"same")
    .from("#content2",{alpha:0, y:-100, duration: 2},"same")
    .from("content2 h1", {alpha: 0, x:-100, duration: 1}, "same")

    return tl;
}

function ghoulstext(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#ghoulstext", 
    scrub: true,
   // markers: true, 
    end:"top 20%",
    start:"top 70%"
    }})

    .from("#ghoulstext h1",{duration:2, x:-200, alpha:0, stagger:0.5},"same")
    .from("#ghoulstext p",{duration:4, x:-200, alpha:0, stagger:0.3},"same")
    .from("#ghoulstext button",{duration:6, x:-200, alpha:0},"same")


    return tl;
}

function skeleton(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#skeleton", 
    scrub: true,
  //  markers: true, 
    end:"bottom 20%",
    start:"top 80%"
    }})

    .from("#skeleton",{duration:2, y:-300, alpha:0},"same")


    return tl;
}

function scream(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#scream", 
    scrub: true,
   // markers: true, 
    end:"bottom 20%",
    start:"top 20%"
    }})

    .from("#scream",{duration:2, scale:2, y:-200, alpha:0},"same")
  

    return tl;
}

function footer(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#footer", 
    scrub: true,
  //  markers: true, 
    end:"top 5%",
    start:"top 100%"
    }})

    .from("#footertext",{duration:1, y:-100, alpha:0},"same")


    return tl;
}

var buttonAnimation2 = gsap.timeline({paused:true}); 
buttonAnimation2.to("#tickets-btn",{duration:1, scale:heroSizeNumber}, "goAway")

ticketsBtn.addEventListener("mouseover",function(){
buttonAnimation2.play(); 
})

ticketsBtn.addEventListener("mouseout",function(){
        buttonAnimation2.reverse(); 
    })




var mainTl = gsap.timeline();
mainTl.add(heroAnimation())
.add(crossbones())
.add(ghoulstext()) 
.add(skeleton())
.add(scream()) 
.add(footer()); 