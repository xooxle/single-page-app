var spa = (function(){
	var initModule = function($container){
		spa.shell.initModule($container);
		//$container.html(
		//'<h1 style="display:inline-block;margin:25px;">' + 'Hello World!' + '</h1>'		
		//);
	};
	return {initModule : initModule};
})();