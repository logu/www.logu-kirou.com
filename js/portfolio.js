var Portfolio = function () {



    return {

        init: function () {

        	var pagination = $('.pagination'),
        		$sorting = $('#portfolio-grid');

	          function setPagination () {
	              pagination.jPages({
	                  containerID: 'portfolio-grid',
	                  perPage : 6,
	                  first: false,
	                  last: false
	              });
	          };

	          function destroyPagination () {
	              pagination.jPages('destroy');
	          };

	          setPagination();


		     $sorting.mixItUp({
		     	animation: {
		     	    enable: false
		     	},
		     	selectors: {
		     	    target: '.mix'
		     	},
		     	load: {
		     		filter:'all'
		     	}/*,
				debug: {
			        enable: true
			    }*/
			});
		     $(document).on('sectionChanged',function(e){
		     	if(e.elements.selected.attr("id") == $('#Portfolio').attr("id"))
		     	{
		     		$sorting.mixItUp('filter', 'all');	
		     	}
		     		
		     });
		    

	        $sorting.on('mixLoad', function(e, state){
	        	setPagination();
			});
	        $sorting.on('mixStart', function(e, state){
	        	destroyPagination();
			});
	        $sorting.on('mixEnd ', function(e, state){
	        	setPagination();
			});		

        }	
    };

}();