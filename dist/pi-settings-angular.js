(function(){
  angular
    .module('pi.common', []);

  angular
    .module('pi.common')
    .config([function(){

    }])
    .run(['$rootScope',
      function($rootScope){

      }]);
})();

(function(){
  angular
    .module('pi.common')
    .factory('typeEnum', function(){
      var svc = {
        string: 'string',
        int: 'number',
        decimal: 'number',
        float: 'number',
        number: 'number',
        bool: 'boolean',
        object: 'object'
      }

      return svc;
    })
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
