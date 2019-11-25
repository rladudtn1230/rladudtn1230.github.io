$(document).ready(function(){
    $(".ham_btn").click(function(){
        var right = $(".menu_wrap").css("right")
        if(right == "0px"){
            $(".menu_wrap").css("right","-500px")
        }else{
            $(".menu_wrap").css("right","0")
        }
    })
})