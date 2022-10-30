gsap.registerPlugin(ScrollTrigger);

function intro() {
    var tl = gsap.timeline();
    tl.from(".gsap1", {
       opacity:0,
       duration:3
     })

    tl.to(".gsap1", {
       height:"100%",
       width:"100%",
       duration:2,
    })

    gsap.from(".gsap2", {
        y:"50px",
        opacity:0,
        delay:1.4,
     })

     gsap.from(".gsap3", {
        y:"50px",
        opacity:0,
        delay:1.6
     })

     gsap.from(".gsap4", {
        y:"50px",
        opacity:0,
        delay:1.8,
     })

    

    

}


intro();