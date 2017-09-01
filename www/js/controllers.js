angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams','$http', '$ionicPopup',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup) {
     
    $scope.data={};

        $scope.submit = function () {
            var link = 'https://eventi-musicali.herokuapp.com/login';
            email = $scope.data.email;
            password = $scope.data.password;

            console.log(email, password);
            
            $http.post(link, {email : email, password : password}).then(function (res){
                $scope.response = res.data;
                console.log(res.data.message);
                if(res.data.message === undefined){
                    window.location.href = "#/page4";
                }
                else {
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: res.data.message,
                        buttons: [{text: 'OK', type: 'button-positive'}]                
                    });
                } 
            });
            
  }

}])
   
.controller('signupCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};
    
            $scope.submit = function () {
                var link = 'http://eventi-musicali.herokuapp.com/signup';
                nome = $scope.data.nome;
                cognome = $scope.data.cognome;
                email = $scope.data.email;
                password = $scope.data.password;
                
                
                $http.post(link,{nome : nome, cognome : cognome, email : email, password : password}).then(function (res){
                    $scope.response = res.data;
                    console.log(res);
                    if(res.data.message === undefined){
                        window.location.href = "#/page4";
                    }
                    else {
                        var myPopup = $ionicPopup.show({
                            title: 'ERROR',
                            subTitle: res.data.message,
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                    } 
                });
                
      }
    

}])
   
.controller('eventsCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
    var link = 'https://eventi-musicali.herokuapp.com/events'
    $http.get(link).then(function (res){
        $scope.response = res.data;
    console.log(res.data);
    });
}])

.controller('loginOrgCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};
    
            $scope.submit = function () {
                var link = 'https://eventi-musicali.herokuapp.com/loginorg';
                email = $scope.data.email;
                password = $scope.data.password;
    
                console.log(email, password);
                
                $http.post(link, {email : email, password : password}).then(function (res){
                    $scope.response = res.data;
                    console.log(res.data.message);
                    if(res.data.message === undefined){
                        window.location.href = "#/page4";
                    }
                    else {
                        var myPopup = $ionicPopup.show({
                            title: 'ERROR',
                            subTitle: res.data.message,
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                    } 
                });
                
      }
    

}])
 