(function() {

	var types = ['html', 'body', 'div', 'pre', 'span', 'code', 'table', 'td', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em'];

	var init = function() {
		//change the bg color and text color for our list of nodes
		types.forEach(RemoveEmoji);
		//cleanup <a> tags
		fixUpLinks();
	};

    
    var RemoveEmoji = function(type) {
        var nodes = document.getElementsByTagName(type);
		if(nodes) {
			for (var i = 0; i < nodes.length; ++i) {
				var n = nodes[i];
				n.style.elem.remove(aria-level);
			}
		}
	};
        
 
	return {
		init: init
	};

})().init();
