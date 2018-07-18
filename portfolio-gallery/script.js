(function($){

  $.fn.filterGallery = function(options){
    var defaultOptions = {
      animationDuration: 800
    }
    
    options = $.extend({}, defaultOptions, options);
    
     var gallery = function(e){
       var $this = $(this);
       var filterContent = $('.gallery-thumbnail');
       if($this.attr('data-filter')){
         filterContent.hide(options.animationDuration, function(){
           $(this).filter('[data-category=' + $this.attr('data-filter')+']').show();
         });
       }else{
         filterContent.show(options.animationDuration);
       }
     }
    return this.each(function(){
      var $this = $(this);
      $this.find('.gallery-nav-link').click(gallery);
    });
  }
})(jQuery);