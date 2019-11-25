$(document).ready(function(){
    function nextAni(){
        $(".img_slide").not(":animated").animate({"margin-top":"-300px"}, 500, function(){
            $(".img_slide li").eq(0).appendTo($(".img_slide"));
            $(".img_slide").css("margin-top","0px");
        });
    }
    function prevAni(){
        $(".img_slide li").eq(2).prependTo($(".img_slide"));
        $(".img_slide").css("margin-top","-300px")
        $(".img_slide").not(":animated").animate({"margin-top":"0px",}, 500);
    }
    var intv = setInterval(function(){
        nextAni();
    }, 2900);
    $(".slide_btn .down").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){nextAni(); },2900)
    });
    $(".slide_btn .up").click(function(){
        clearInterval(intv)
        prevAni();
        intv = setInterval(function(){nextAni();},2900);
    });
});