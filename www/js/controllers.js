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
                var link = 'http://eventi-musicali.herokuapp.com/user';
                nome = $scope.data.nome;
                cognome = $scope.data.cognome;
                email = $scope.data.email;
                password = $scope.data.password;
                
                
                $http.post(link,{nome : nome, cognome : cognome, email : email, password : password}).then(function (res){
                    $scope.response = res.data;
                    console.log(res);
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                        window.location.href = "#/page5";
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
   
.controller('eventsCtrl', ['$scope', '$http', '$stateParams',  '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {
    var link = 'https://eventi-musicali.herokuapp.com/events'
    events: any = [];
    dataEst = "";
    this.date = "";
    this.temp = "";
    this.hour = 0;;
    n = 0;
    i = 0;

    $http.get(link).then(function (res){
        events = res.data;
        n = events.length;
        while(i < n){
            dataEst = events[i].data.split("T");
            this.date = dataEst[0].split("-").reverse().join("-");
            this.temp = dataEst[1].split(":");
            this.hour = temp[0] + ':' + temp[1];
            events[i].data = this.date;
            events[i].ora = hour;
            i++;
        }
        $scope.events = events;
    });

    $scope.buy = function() {
        var myPopup = $ionicPopup.show({
            title: 'Evento acquistato',
            buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
        });
    }
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
                        window.location.href = "#/page7";
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

.controller('signuporgCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};
    
            $scope.submit = function () {
                var link = 'http://eventi-musicali.herokuapp.com/organizzatore';
                nome = $scope.data.nome;
                cognome = $scope.data.cognome;
                email = $scope.data.email;
                password = $scope.data.password;
                company = $scope.data.company;
                
                
                $http.post(link,{nome : nome, cognome : cognome, email : email, password : password, company: company}).then(function (res){
                    $scope.response = res.data;
                    console.log(res);
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                        window.location.href = "#/page5";
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

.controller('homeCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
   
}])

.controller('orgChoiceCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
   
}])

.controller('eventsOrgCtrl', ['$scope', '$http', '$stateParams',  '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {
    var link = 'https://eventi-musicali.herokuapp.com/events'
    events: any = [];
    dataEst = "";
    this.date = "";
    this.temp = "";
    this.hour = 0;;
    n = 0;
    i = 0;

    $http.get(link).then(function (res){
        events = res.data;
        n = events.length;
        while(i < n){
            dataEst = events[i].data.split("T");
            this.date = dataEst[0].split("-").reverse().join("-");
            this.temp = dataEst[1].split(":");
            this.hour = temp[0] + ':' + temp[1];
            events[i].data = this.date;
            events[i].ora = hour;
            i++;
        }
        $scope.events = events;
    });

    $scope.buy = function() {
        var myPopup = $ionicPopup.show({
            title: 'Evento acquistato',
            buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
        });
    }
}])

.controller('addEventCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};
    
            $scope.submit = function () {
                var link = 'http://eventi-musicali.herokuapp.com/events';
                artista = $scope.data.artista;
                luogo = $scope.data.luogo;
                data = $scope.data.mese + " " + $scope.data.giorno + " " + $scope.data.anno + " " + $scope.data.orario;
                prezzo = $scope.data.prezzo;
                
                
                $http.post(link,{artista : artista, luogo : luogo, data : data, prezzo : prezzo}).then(function (res){
                    $scope.response = res.data;
                    console.log(artista);
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Evento aggiunto',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                        window.location.href = "#/page2";
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
 