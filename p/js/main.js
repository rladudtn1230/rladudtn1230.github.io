$(document).ready(function(){
    
    $(".menu_nav a").click(function(){
        $(".menu_nav a").removeClass("on")
        $(this).addClass("on")
    })
     $(".ch_tit").click(function(){
         $(".menu_ch").css({"display":"block"});
         $(".menu_side").css({"display":"none"});
         $(".ch_btn").css({"display":"block"})
         $(".side_btn").css({"display":"none"})
     })
    $(".side_tit").click(function(){
         $(".menu_ch").css({"display":"none"});
         $(".menu_side").css({"display":"block"});
         $(".ch_btn").css({"display":"none"})
         $(".side_btn").css({"display":"block"})
     })
})