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
