// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      controller: 'SearchController',
      templateUrl: 'templates/search.html'
    })
    .state('settings', {
      url: '/settings',
      controller: 'SettingsController',
      templateUrl: 'templates/settings.html'
    })
    .state('weather', {
      url: '/weather/:city/:lat/:lng',
      controller: 'WeatherController',
      templateUrl: 'templates/weather.html'
    });

  $urlRouterProvider.otherwise('/search');
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.filter('timezone', function () {
  return function (input, timezone) {
    if (input && timezone) {
      var time = moment.tz(input * 1000, timezone);
      return time.format('LT');
    }
    return '';
  };
})

.filter('chance', function () {
  return function (chance) {
    if (chance) {
      var value = Math.round(chance * 10);
      return value * 10;
    }
    return 0;
  };
})

.filter('icons', function () {
  var map = {
    'clear-day': 'ion-ios-sunny',
    'clear-night': 'ion-ios-moon',
    rain: 'ion-ios-rainy',
    snow: 'ion-ios-snowy',
    sleet: 'ion-ios-rainy',
    wind: 'ion-ios-flag',
    fog: 'ion-ios-cloud',
    cloudy: 'ion-ios-cloudy',
    'partly-cloudy-day': 'ion-ios-partlysunny',
    'partly-cloudy-night': 'ion-ios-cloudy-night'
  };
  return function (icon) {
    return map[icon] || '';
  }
});





