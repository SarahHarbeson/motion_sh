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
let houseBtn = document.querySelector("#house-btn");
let costumeBtn = document.querySelector("#costume-btn");
let pastBtn = document.querySelector("#past-btn");


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
    .from("#bodyCopy i", {alpha: 0, rotation: 360, duration: 3}, "same")

    return tl;
}

function gallery(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#gallery", 
    scrub: true,
    //markers: true, 
    end:"top 20%",
    start:"top 70%"
    }})

    .from("#gallery1",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
    .from("#gallery2",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})
    .from("#gallery3",{duration:0.5, clipPath:"inset(100% 0% 0% 0% )"})

    .from("#gallery button",{duration:0.5, clipPath:"inset(0% 0% 100% 0% )"})


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
    .from("#footertext2", {duration: 1, y:50, alpha: 0}, "same")


    return tl;
}

var buttonAnimation2 = gsap.timeline({paused:true}); 
buttonAnimation2.to("#house-btn" ,{duration:1, scale:heroSizeNumber}, "goAway")

houseBtn.addEventListener("mouseover",function(){
buttonAnimation2.play(); 
})

houseBtn.addEventListener("mouseout",function(){
        buttonAnimation2.reverse(); 
    })

    var buttonAnimation3 = gsap.timeline({paused:true}); 
    buttonAnimation3.to("#costume-btn" ,{duration:1, scale:heroSizeNumber}, "goAway")
    
    costumeBtn.addEventListener("mouseover",function(){
    buttonAnimation3.play(); 
    })
    
    costumeBtn.addEventListener("mouseout",function(){
            buttonAnimation3.reverse(); 
        })

var buttonAnimation4 = gsap.timeline({paused:true}); 
buttonAnimation4.to("#past-btn" ,{duration:1, scale:heroSizeNumber}, "goAway")
        
pastBtn.addEventListener("mouseover",function(){
buttonAnimation4.play(); 
        })
        
pastBtn.addEventListener("mouseout",function(){
buttonAnimation4.reverse(); 
            })        

    
var buttonAnimation5 = gsap.timeline({paused:true}); 
buttonAnimation5.to("#tickets-btn",{duration:1, scale:heroSizeNumber}, "goAway")

ticketsBtn.addEventListener("mouseover",function(){
buttonAnimation5.play(); 
})

ticketsBtn.addEventListener("mouseout",function(){
        buttonAnimation5.reverse(); 
    })




var mainTl = gsap.timeline();
mainTl.add(heroAnimation())
.add(crossbones())
.add(gallery())
.add(ghoulstext()) 
.add(skeleton())
.add(scream()) 
.add(footer()); 


