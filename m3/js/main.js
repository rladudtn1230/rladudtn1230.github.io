$(document).ready(function(){
    var st = 0;
    $(".l_btn").click(function(){ 
        if(st>0){
            st--;
            $(".album_box").stop().css("margin-left",-100*st+"vw")
                              
        }
        console.log(st)
    })
    $(".r_btn ").click(function(){                
        if(st<4){
            st++;
            $(".album_box").stop().css("margin-left",-100*st+"vw") 
                                                 
        }
        console.log(st)
    })
    $(".gal_more").click(function(){
        var wh =$(".gal_wrap").css("height")
        $(".gal_wrap").css("height","auto")
        console.log(wh)
    })
    function Ani(){
        $(".slide_wrap").not(":animated").animate({"margin-left":"-100vw"},300,function(){
            $(".slide").eq(0).appendTo(".slide_wrap")
            $(".slide_wrap").css("margin-left","0")
        })
    }
    var intv = setInterval(function(){
        Ani();
    },3000)
})