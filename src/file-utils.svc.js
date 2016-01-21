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
