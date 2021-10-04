////<reference path="../JS/jquery-3.5.1.js" />
$(document).ready(()=>{
    
    $(window).scroll(()=>{
        let scrollValue = $(window).scrollTop();
        if(scrollValue === 0){
            console.log(scrollValue);
            $(".header").css("background-color","rgb(0 0 0 / 0%)");
        }
        else{
            $(".header").css("background-color","rgb(0 0 0 / 15%)");
        }
    });

    $(".hamburger").click(()=>{
        $(".topnav").fadeToggle();
    });

})