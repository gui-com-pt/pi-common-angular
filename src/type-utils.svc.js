(function(){
  angular
    .module('pi.common')
    .provider('typeUtils', [function(){

      function typeOf (obj) {
        return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
      }

			this.$get = [function(){
        var self = this;

        return {
					typeOf: function(obj) {
            return typeOf(obj);
          }
				}
			}];
		}]);
})();
