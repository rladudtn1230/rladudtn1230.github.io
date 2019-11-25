$(document).ready(function(){
    $(".main_menu li").mouseover(function(){
        $(this).children(".sub_menu").stop().slideDown();
    });
    $(".main_menu li").mouseout(function(){
        $(this).children(".sub_menu").stop().slideUp();
    });


  function nextAni(){
      $(".banner_wrap").not(":animated").animate({"margin-left":"-100%"},800, function(){
          $(".slide").eq(0).appendTo($(".banner_wrap"));
          $(".banner_wrap").css("margin-left","0px")
      })
    }
      var int = setInterval(function(){
            nextAni();
      }, 3000);
      var st = 0;
      




      $(".go_right").click(function(){
          if(st<5){
          st++;
          $(".menu_slider").stop().animate({"margin-left":-100*st+"%"},500) 
          console.log(st)         
        }
      })
      $(".go_left").click(function(){
          if(st>0){
          st--;
          $(".menu_slider").stop().animate({"margin-left":-100*st+"%"},500)
          console.log(st)  
        }
      })
      
});