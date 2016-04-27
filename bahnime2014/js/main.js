//ClickSearch
//id = accordionClick
//id = searchLayer
//id = searchLayerForm
//id = searchClick
$(document).ready(function(){

  $(document).foundation();
  
  $("#searchClick").click(function(){
  	$("#searchLayer").slideUp(200).delay(100).fadeIn(300, function(){
   		$("#searchInput").focus();});
  });

  $("#searchLayer").click(function(){
   	$("#searchLayer").slideDown(200).delay(100).fadeOut(300);
  });

  // -- RESIZE -- //
  $(window).resize(function() {
      window_resize();
      });
  // -- RESIZE -- //
      window_resize()

});


// -- RESIZE -- //
function window_resize() {

if($(window).width() < 2000)
{
	$(".nav_mob").attr({
	  "data-scroll":"up"
	})
	$("#nav_mob3").attr({
	  "data-scroll3":"up"
	})

	desktop_nav();
	acc_nav();
}

}

// -- DESKTOP NAV -- //
function desktop_nav() {

var lastScrollTop = 0;
    
    $(window).scroll(function(){
        
        var position = $(this).scrollTop();
        
        if (position > lastScrollTop){
            // scrolling down
            if($('.nav_mob').data('scroll') === 'up')
            {
                $('.nav_mob').data('scroll','down');
                $('.nav_mob').stop().animate({ "top": '-71px' }, 500, 'easeInOutExpo')
            }
        }

        else

        {
            // scrolling up
            if($('.nav_mob').data('scroll') === 'down')
            {
                $('.nav_mob').data('scroll','up');
                $('.nav_mob').stop().animate({ "top": '0px' }, 500, 'easeInOutExpo')
            }  
        }

        lastScrollTop = position;

    });
}
  
function acc_nav() {

var lastScrollTop3 = 0;
    
    $(window).scroll(function(){
        
        var position = $(this).scrollTop();
        
        if (position > lastScrollTop3){
            // scrolling down
            if($('#nav_mob3').data('scroll3') === 'up')
            {
                $('#nav_mob3').data('scroll3','down');
                $('#nav_mob3').stop().animate({ "top": '-71px' }, 550, 'easeInOutExpo')
            }
        }

        else

        {
            // scrolling up
            if($('#nav_mob3').data('scroll3') === 'down')
            {
                $('#nav_mob3').data('scroll3','up');
                $('#nav_mob3').stop().animate({ "top": '71px' }, 550, 'easeInOutExpo')
            }  
        }

        lastScrollTop3 = position;

    });
}
  



