$(document).ready(function(){
    $(".nav_wrap label").click(function(){
        $(".nav_wrap label").removeClass("on");
        $(this).addClass("on")
    })
})