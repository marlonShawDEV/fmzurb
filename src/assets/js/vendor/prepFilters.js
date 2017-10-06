/*
	author: Sherry Carrero
*/
(function($) {
  $.fn.filterAccContent = function (options){
	 var defaults = {
       dataF: '.filterform',
			 dataGP:'.accordion-pointer',
       dataE: '.accordion-item',
       dataL: '.accordion-title',
			 dataP: '.accordion-content',
			 dataC: 'li'
		},
		params = $.extend({}, defaults, options);
		params = $.metadata ? $.extend({}, params, this.metadata()) : params; 
    var 
      $frm = $(this).find(params.dataF),
      $acc = $(this).find(params.dataGP);        
	  postFilter = function (){            
		  $acc.find(params.dataE).each(function(){
				var sections = $(this).find(params.dataP), 
            matches = $(this).find(params.dataP).find(params.dataC).not(".hide").length;
				if(matches >0) { 
          $acc.foundation('down', sections, true);
				}
				else {
          $acc.foundation('up', sections, true);
				}
		  }); 
		},
		applyFilter = function(){ 
      var topic = $frm.find('[name="filterTopic"]:checked').length ? $frm.find('[name="filterTopic"]:checked').val() : '',
          str = $frm.find('.filterField').length ? $.trim($frm.find('.filterField').val()).replace(/\s+/g, '|') : '',
          patt = new RegExp(str, "i");
      $acc.find(params.dataP).find(params.dataC).each(function(){
        var text = $(this).text();
        if(str.length && topic.length){ 
          patt.test(text) && $(this).attr('data-topic').match(topic) ? $(this).removeClass('hide') : $(this).addClass('hide'); 
          postFilter();
        }
        else if (str.length){
          patt.test(text) ? $(this).removeClass('hide'): $(this).addClass('hide'); 
          postFilter();
        }
        else if (topic.length){
          $(this).attr('data-topic').match(topic) ? $(this).removeClass('hide') : $(this).addClass('hide'); 
          postFilter();
        } 
        else {
          $(this).removeClass('hide');
          $acc.find(params.dataE).each(function(){
            var sections = $(this).find(params.dataP);
            $acc.foundation('down', sections, true);
          });
        } 
      }); 
		}; 
    $frm.find(".filterReset").on("click", function(){
      $frm.find('.filterField').val("");
      applyFilter();
    });
    $frm.find('.filterField').on("keyup change", function(event){	
      if (event.keyCode == 27) { $(this).val(""); } 
      applyFilter();
    }); 
    $frm.find('[name="filterTopic"]').on("change", function(){
      applyFilter();
    });
    $acc.find(params.dataE).each(function(){	
      var $this = $(this);
      $this.find('.accordion-title').on("click", function(){ 
        $acc.find('.hide').removeClass('hide');
        if($frm.find('.filterField').length){ 
          $frm.find('.filterField').val("");
        }
        if($frm.find('[name="filterTopic"]').length){          
          $('[name="filterTopic"]').not('#AllToggle').prop('checked', false);
          $('#AllToggle').prop('checked', true);
        }
      });				  
    });    
    return this;            
  };   
})(jQuery);  
