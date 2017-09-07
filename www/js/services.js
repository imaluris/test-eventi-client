angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('orgCompany', [function(){
    var company = [];
    
      var addCompany = function(newObj) {
          company.push(newObj);
      };
    
      var getCompany = function(){
          return company;
      };
    
      return {
        addCompany: addCompany,
        getCompany: getCompany
      };
    

}]);