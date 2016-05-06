/*

Author: Héctor Jaraba Romero
Web: www.hjaraba.com
Version: 0.1

//////////////////////////////
//// All right reserved /////
//////////////////////////////

*/

(function( $ ){


  $.fn.speaksyBtnProgress = function(options, f){

    var settings = $.extend({
    // These are the defaults.
      time: 1000,
      "easing": "linear"
    }, options );

if(!$(this).hasClass("speaksytructure")){
        $(this).each(function (index) {

          $(this).addClass("speaksytructure");
          var textContent = $.trim($(this).html());
              $(this).html("<span class='content'>"+textContent+"</span><span class='progress'><span class='progress-inner'></span></span>");

         });

}

    $(this).bind("mouseover click",this,function(){
      var self = this;

      $(this).find(".progress-inner").stop().animate({"width" : "100%"}, settings.time,settings.easing,function(){
        f.call($(self));
      });
    });

    $(this).bind(
      "mouseout",function(){
        $(this).find(".progress-inner").stop().animate({"width" : "0%"}, settings.time,settings.easing);
      });

  }

})( jQuery );
