(function($){
  $.fn.textFieldEffects = function(options){
    
    var defaultOptions = {
      animationType : 'overlap'
    }
    
    options = $.extend({}, defaultOptions, options);
    
    return this.each(function(){
      var $this = $(this);
      if(defaultOptions.animationType === 'overlap'){
        overlap($this);
      }
    });
    
    function overlap($this){
      $this.on('focus blur', 'input', function(e){
        $this.closest('.js-form-group--overlap').toggleClass('isFocused', e.type === 'focusin' || this.value.length > 0);
      })
    }
  }
})(jQuery);
