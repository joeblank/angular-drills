angular.module('app6', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'homeCtrl'
            })
            .state('signUp', {
              url: '/signup',
              templateUrl: 'signUp/signUp.html',
              controller: 'signUpCtrl'
            })
            .state('details', {
              url: '/details/:id',
              templateUrl: 'details/details.html',
              controller: 'detailsCtrl'
            })



    })
