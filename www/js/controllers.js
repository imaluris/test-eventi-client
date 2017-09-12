angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams','$http', '$ionicPopup',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup) {
     
    $scope.data={};

        $scope.submit = function () {
            var link = 'https://eventi-musicali.herokuapp.com/login';
            this.email = $scope.data.email;
            this.password = $scope.data.password;
            
            
            $http.post(link, {email : this.email, password : this.password}).then(function (res){
                $scope.response = res.data;
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
                this.nome = $scope.data.nome;
                this.cognome = $scope.data.cognome;
                this.email = $scope.data.email;
                this.password = $scope.data.password;

                if((this.nome  === undefined) || (this.nome === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing credentials',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else if ((this.cognome  === undefined) || (this.cognome === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing credentials',
                        
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if (this.email === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato email: example@example.it',
                        
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if (this.password === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing password',
                        
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else if (this.password.length < 6){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato password: minimo 6 caratteri',
                        
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }
                
                $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                        window.location.href = "#/page2";
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

        events.sort(function (a, b) {
            var temp1 = a.data;
            var temp2 = b.data;
        
            if (temp1 < temp2) {
                return -1;
            } else if (temp1 == temp2) {
                return 0;
            } else {
                return 1;
            }
        });

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

    $scope.logout = function() {
        var linkout = 'https://eventi-musicali.herokuapp.com/logout'
        var myPopup = $ionicPopup.show({
            title: 'Logout effettuato',
            buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
        });
            window.location.href = "#/page2";
        
    }
}])

.controller('loginOrgCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup','orgCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {

    $scope.data={};
    
            $scope.submit = function () {
                var link = 'https://eventi-musicali.herokuapp.com/loginorg';
                this.email = $scope.data.email;
                this.password = $scope.data.password;
                var organizzatore = ""
                
    
                
                $http.post(link, {email : this.email, password : this.password}).then(function (res){
                    $scope.response = res.data.message;
                    organizzatore = res.data.org
                    orgCompany.addCompany(organizzatore.company);
                    console.log(res.data);
                    if(res.data.message === "Logged In Successfully"){
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
                this.nome = $scope.data.nome;
                this.cognome = $scope.data.cognome;
                this.email = $scope.data.email;
                this.password = $scope.data.password;
                this.company = $scope.data.company;

                if((this.nome  === undefined) || (this.nome === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing credentials',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else if ((this.cognome  === undefined) || (this.cognome === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing credentials',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if (this.email === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato email: example@example.it',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if (this.password === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing password',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else if (this.password.length < 6){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato password: minimo 6 caratteri',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if ((this.company  === undefined) || (this.company === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Missing credentials',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }
                
                
                $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password, company: this.company}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
                        window.location.href = "#/page5";
                    }
                });
                
      }
    

}])

.controller('homeCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
   
}])

.controller('orgChoiceCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {

    $scope.logout = function() {
        var linkout = 'https://eventi-musicali.herokuapp.com/logout'
        var myPopup = $ionicPopup.show({
            title: 'Logout effettuato',
            buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
        });
            orgCompany.deleteCompany();
            window.location.href = "#/page5";
    }
   
}])

.controller('eventsOrgCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {
    var link = 'https://eventi-musicali.herokuapp.com/events'
    events: any = [];
    dataEst = "";
    this.date = "";
    this.temp = "";
    this.hour = 0;;
    n = 0;
    i = 0;
    compagnia1 = orgCompany.getCompany();
    compagnia2 = compagnia1[0];
    console.log(compagnia2);

    $http.get(link).then(function (res){
        events = res.data;

        events.sort(function (a, b) {
            var temp1 = a.data;
            var temp2 = b.data;
        
            if (temp1 < temp2) {
                return -1;
            } else if (temp1 == temp2) {
                return 0;
            } else {
                return 1;
            }
        });

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
        console.log(events);
    });

    $scope.remove = function(array, index) {
        cod = events[index].id;
        company = events[index].compagnia;
        var link = 'https://eventi-musicali.herokuapp.com/events/destroy/' + cod;
        if(compagnia2 === company){
            array.splice(index,1);
            $http.delete(link).then(function (res){
                var myPopup = $ionicPopup.show({
                    title: 'Evento eliminato',
                    buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
                });
        });
    } else {
        var myPopup = $ionicPopup.show({
            title: 'Non hai i permessi per eliminare questo evento',
            buttons: [{text: 'OK', type: 'button button-positive button-small'}]                
        });
    }
    }
}])

.controller('addEventCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {

    $scope.data={};

    
            $scope.submit = function () {
                var link = 'http://eventi-musicali.herokuapp.com/events';
                artista = $scope.data.artista;
                luogo = $scope.data.luogo;
                data = $scope.data.mese + " " + $scope.data.giorno + " " + $scope.data.anno + " " + $scope.data.orario;
                prezzo = $scope.data.prezzo;
                compagnia1 = orgCompany.getCompany();
                compagnia2 = compagnia1[0];
                
                m = new Date();
                day = m.getDate();
                month = m.getMonth() + 1;
                year = m.getFullYear();
                dataGiorno = parseInt($scope.data.giorno);
                dataMese = parseInt($scope.data.mese);
                dataAnno = parseInt($scope.data.anno);




                if((artista  === undefined) || (artista === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Compila tutti i campi',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else if ((luogo  === undefined) || (luogo === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Compila tutti i campi',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if ((prezzo  === undefined) || (prezzo === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Compila tutti i campi',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }
                if (($scope.data.mese === undefined ) || ($scope.data.giorno === undefined) || ($scope.data.anno === undefined)){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci la data',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false;
                } 
                if(dataAnno === year){
                    if(dataMese < month){
                                var myPopup1 = $ionicPopup.show({
                                    title: 'ERROR',
                                    subTitle: 'La data che hai inserito e passata',
                                    buttons: [{text: 'OK', type: 'button-positive'}]
                                });
                                return false
                    }else if(dataMese === month){
                        if(dataGiorno < day){
                                var myPopup1 = $ionicPopup.show({
                                     title: 'ERROR',
                                     subTitle: 'La data che hai inserito e passata',
                                     buttons: [{text: 'OK', type: 'button-positive'}]
                                });
                                return false
                            }
                        }
                 }

                
                if (($scope.data.orario  === undefined) || ($scope.data.orario === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Compila tutti i campi',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                } else {
                    ora = $scope.data.orario;
                    ora = ora.split(":");
                    if((ora[0] > 24) || (ora[0] < 0) || (ora[1] > 59) || (ora[1] < 0)){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Orario non valido',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                    return false;
                    }
                }
                
                
                $http.post(link,{artista : artista, luogo : luogo, data : data, prezzo : prezzo, compagnia: compagnia2}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Evento aggiunto',
                            buttons: [{text: 'OK', type: 'button-positive'}]                
                        });
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
 