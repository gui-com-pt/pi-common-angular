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
    .provider('fileUtils', [function(){

      function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
      }

			this.$get = [function(){
        var self = this;

        return {
					dataURLtoBlob: function(obj) {
            return dataURLtoBlob(obj);
          },
          typeFromBlog: function(blobStr) {
            return blobStr.substring(blobStr.lastIndexOf(":")+1,blobStr.lastIndexOf(";"))
          }
				}
			}];
		}]);
})();

(function(){
  var piStack = function() {

    return {
      create: function(){
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    }
  };
  piStack.$inject = [];

  angular
    .module('pi.common')
    .factory('piStack', piStack);
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
    });
})();

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
