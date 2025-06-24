window.addEventListener("beforeunload", function(){
    this.window.scrollTo(0, 0);
})
// 인트로
const intro_hide_event = function(e){    
    const intro_section = document.querySelector(".intro-section");
    const intro_target_section = document.querySelector(".page-wrapper");
    function preventScroll(e) {
        e.preventDefault();
    }
    /*스크롤 막기 */
    intro_section.addEventListener("wheel", preventScroll, {
        passive: false
    });    
    /*스크롤 막기 */
    setTimeout(function(){
        intro_target_section.classList.add("visible")        
        setTimeout(function(){
            intro_target_section.classList.add("done")
            intro_section.classList.add("hide")
        },800)
    },1800)
}

intro_hide_event();


//main title event
const main_tit_effect = function(){
    const tit_wrap = document.querySelector(".main-tit");
    const tit = tit_wrap.querySelectorAll(".tit-box");
    console.log(tit);
    for(let i = 0; i < tit.length; i++){
        setTimeout(function(){
            tit[i].classList.add("on")
        }, i * 150)
    }
}
window.addEventListener("load",function(){
    setTimeout(function(){
        main_tit_effect();
    },3000)
})

//scroll-overflow-multi
const scroll_overflow_multi_effect = function(){
    const txt_wrap = document.querySelectorAll(".scroll-overflow-multi");

    function scroll_event(){        
        txt_wrap.forEach(function(e){            
            const windowHeight = window.innerHeight;
            const thisTop = e.getBoundingClientRect().top + 100;

            if(windowHeight > thisTop && !e.classList.contains("on")){
                e.classList.add("on");
                const txt = e.querySelectorAll(".scroll-box");
                for(let i = 0; i <  txt.length; i++){
                    setTimeout(function(){
                        txt[i].classList.add("on");
                    },300 * i)
                }
            }
        })
    }
    scroll_event();
    
    window.addEventListener("scroll",function(){
        scroll_event();
    })   
}
scroll_overflow_multi_effect()

//scroll-obj
const scroll_effect = function(){
    const scroll_obj = document.querySelectorAll(".scroll-obj");
    
    function scroll_event(){
        scroll_obj.forEach(function(e){            
            const windowHeight = window.innerHeight;
            const thisTop = e.getBoundingClientRect().top + 100

            if(windowHeight  > thisTop) {
                e.classList.add("on");
            }
        })     
    }                
    scroll_event(); 
    
    window.addEventListener("scroll",function(){
        scroll_event();
    })                            
    
}
scroll_effect();

/*gspa - scrollTrigger, MotionPathPlugin */
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);    


function main_visual_event(){
    gsap.to(".main-visual-content-box", {
        scrollTrigger: {
            trigger: ".main-visual-wrapper",
            scrub: true,
            start: "top top",
            end: "bottom bottom",
            pin: ".main-visual-content-box",
            pinSpacing: true // 필요 시 true로 설정해도 됨
        },
        "border-radius": "30px",            
        scale: 0.8
    });  
}      

main_visual_event()

function my_work_opacity(){
    gsap.to(".portfolio-wrapper", {
        scrollTrigger: {
            trigger: ".portfolio-wrapper",
            scrub: true,
            start: "top 100%",
            end: "top -50%",
        },
        opacity:1,
        y:0
    });  
}      

my_work_opacity()


function about_me_deco1(){
    gsap.to(".about-wrapper .deco1", {
        scrollTrigger: {
            trigger: ".about-wrapper",
            scrub: 2,
            start: "top 50%",
            end: "top 10%",
        },            
        y:0
    });  
}      

about_me_deco1()

function about_me_deco2(){
    gsap.to(".about-wrapper .deco2", {
        scrollTrigger: {
            trigger: ".about-wrapper",
            scrub: 2,
            start: "top 50%",
            end: "top 10%",
        },            
        y:0
    });  
}      

about_me_deco2()

function my_career_deco(){
    gsap.to(".career-wrapper .deco-wrap", {
        scrollTrigger: {
            trigger : ".career-wrapper",
            scrub: 2,
            start: "top 50%",
            end: "bottom 50%",
        },
        y: 0
    })
}

my_career_deco()
