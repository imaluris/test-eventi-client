angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
    
    .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('events', {
    url: '/page4',
    templateUrl: 'templates/events.html',
    controller: 'eventsCtrl'
  })

  .state('loginorg', {
    url: '/page5',
    templateUrl: 'templates/loginorg.html',
    controller: 'loginOrgCtrl'
  })

  .state('signuporg', {
    url: '/page6',
    templateUrl: 'templates/signuporg.html',
    controller: 'signuporgCtrl'
  })

  .state('orgchoice', {
    url: '/page7',
    templateUrl: 'templates/orgchoice.html',
    controller: 'orgChoiceCtrl'
  })

  .state('eventsorg', {
    url: '/page8',
    templateUrl: 'templates/eventsorg.html',
    controller: 'eventsOrgCtrl'
  })

  .state('addevent', {
    url: '/page9',
    templateUrl: 'templates/addevent.html',
    controller: 'addEventCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});