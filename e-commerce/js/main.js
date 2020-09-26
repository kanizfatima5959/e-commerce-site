$(function(){
    
    $(".scrollbar").click(function () {
        
        $('html,body').animate({
            
            scrollTop:0
            
               }, 1000);
        
    });
        $(window).scroll(function (){
            
            var $scrolling = $(this).scrollTop();
            
            if ($scrolling >= 100){
                
                $(".scrollbar").fadeIn();
            }
            else{
                $(".scrollbar").fadeOut();
            }
            
        });
    $('.slider-banner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
        dots:false,
        arrows:false,
        autoplay:true
});
    
});