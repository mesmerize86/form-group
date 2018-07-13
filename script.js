(function($){
  $.fn.textFieldEffects = function(){
    return this.each(function(){
      var $this = $(this);
      $this.on('focus blur', 'input', function(e){
        $this.closest('div').toggleClass('isFocused', e.type === 'focusin' || this.value.length > 0);
      })
    });    
  }
})(jQuery);
