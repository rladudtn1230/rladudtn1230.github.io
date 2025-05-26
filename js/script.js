$(document).ready(function(){
    //main title event
    const main_tit_effect = function(){
        const tit = $(".main-tit .tit-box");
        for(let i = 0; i < tit.length; i++){
            setTimeout(function(){
                tit.eq(i).addClass("on")
            }, i * 150)
        }
    }
    $(window).on("load",function(){
        setTimeout(function(){
            main_tit_effect();
        },300)
    })

    //scroll-overflow-multi
    const scroll_overflow_multi_effect = function(){
        const txt_wrap = $(".scroll-overflow-multi");

        function scroll_event(){
            txt_wrap.each(function(){
                if($(window).scrollTop() + $(window).innerHeight() > $(this).offset().top + 100 && !$(this).hasClass("on")) {
                    $(this).addClass("on")
                    const txt = $(this).find(".scroll-box");
                    for(let i = 0; i < txt.length; i++){
                        setTimeout(function(){
                            txt.eq(i).addClass("on");
                        },300 * i)
                    }
                }
            })
        }
        scroll_event() 
        
        $(window).on("scroll",function(){
            scroll_event()
        })   
    }
    scroll_overflow_multi_effect()

    //scroll-obj
    const scroll_effect = function(){
        const scroll_obj = $(".scroll-obj");        
        
        function scroll_event(){
            scroll_obj.each(function(){
                if($(window).scrollTop() + $(window).innerHeight() > $(this).offset().top + 100) {
                    $(this).addClass("on")
                }
            })            
        }                
        scroll_event() 
        
        $(window).on("scroll",function(){
            scroll_event()
        })                            
        
    }
    scroll_effect();

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
                scrub: true,
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
                scrub: true,
                start: "top 50%",
                end: "top 10%",
            },            
            y:0
        });  
    }      
    
    about_me_deco2()
})