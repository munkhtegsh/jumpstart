
$(document).ready(function() {
 $('.carousel').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
     
 });
    
    var userScroll = 0;
    $(window).scroll(function() {
    var top = $(this).scrollTop();
    if(top - userScroll > 50){
        var height = $('.navbar').css('height');
        $('.navbar').animate({top:'-'+ height},150);
        userScroll = top;
    } else if(userScroll - top > 50) {
        $('.navbar').animate({top: '0'}, 150);
        userScroll = top;
    }
    });
    
});
    
    

    


    
    
    

