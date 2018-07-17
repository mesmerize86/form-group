(function($){

  $.fn.filterGallery = function(){
     var gallery = function(e){
       var $this = $(this);
       var filterContent = $('.gallery-thumbnail');
       if($this.attr('data-filter')){
         filterContent.hide(800, function(){
           $(this).filter('[data-category=' + $this.attr('data-filter')+']').show();
         });
       }else{
         filterContent.show(800);
       }
     }
    return this.each(function(){
      var $this = $(this);
      $this.find('.gallery-nav-link').click(gallery);
    });
  }
})(jQuery);