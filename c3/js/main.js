$(document).ready(function(){
    $(".ham_btn").click(function(){
        var right = $(".menu_wrap").css("right")
        if(right == "0px"){
            $(".menu_wrap").css("right","-500px")
            $(".line1").css("transform","rotate(0deg)").css("top","0")
            $(".line2").css("display","block").css("top","15px")
            $(".line3").css("transform","rotate(0deg)").css("top","30px")
        }else{
            $(".menu_wrap").css("right","0")
            $(".line1").css("transform","rotate(-45deg)").css("top","15px")
            $(".line2").css("display","none").css("top","15px")
            $(".line3").css("transform","rotate(45deg)").css("top","15px")
        }
    })
})
