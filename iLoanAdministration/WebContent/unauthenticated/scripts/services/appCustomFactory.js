app.factory('tpcHttpInterceptor', ['$q','$rootScope',function($q,$rootScope) {
return {
'request': function(config) {
return config;
  },
'requestError': function(rejection) {
if (canRecover(rejection)) {
 return responseOrNewPromise;
 }
 return $q.reject(rejection);
  },
 'response': function(response) {
 return response;
 },
 'responseError': function(rejection) {
 $rootScope.throwError(rejection);
 return $q.reject(rejection);
   }
  };
}]);

app.factory('DataService',function() {
return {
screenFlow:'',
activeObj:'',
status:'',
thirdPartyPaymentServiceProviderManageRequest: {
    targetTpp:''
},
api: {
},
concurrencyId:'',
mutation:'',
actions:'',
back:''
};
});

app.factory('apiServiceList', function($http, $q,$rootScope) {
/*this runs the first time the service is injected
this creates the service*/
var url=$rootScope.getUrl()+'apis';
var apiList = $http.get(url).then(function(resp) {
return resp.data.apiList.apis;
});
var apiServiceList = {
 get: function() {
 return apiList;
        }
};
return apiServiceList;
});


app.factory('grantServiceList', function($http, $q,$rootScope) {
/*this runs the first time the service is injected
this creates the service*/
var url=$rootScope.getUrl()+'grantlevels';
var grantList = $http.get(url).then(function(resp) {
return resp.data.grantLevelList.grantLevels;
});
var grantServiceList = {
 get: function() {
 return grantList;
        }
};
return grantServiceList;
});


app.factory('ErrorService', ['gettextCatalog', function(gettextCatalog) {
return {
showError: function(error) {
var text = error;
$('#http-error-id').empty();
$('#http-error-id').addClass('xx-http-error-message').html('<div class=\'mcf-notification-container\' style=\'position:relative;\'><div class=\'mcf-notification-icon mcf-notification-icon-warning\' style=\'margin:-6px;position:absolute;\'><img src=\'images/mcf-message-warning.png\' alt=\'warning\'></div>'
+'<div class=\'mcf-notification-message-container\'><p style=\'margin-left:35px;\'>' + text +'</p></div></div>' );
$('#http-error-id').show();
  },
showErrors: function(errors) {
$('#http-error-id').empty();
$('#http-error-id').addClass('xx-http-error-message');
angular.forEach(errors, function (er) {
var text = gettextCatalog.getString(er);
$('#http-error-id').append('<div class=\'mcf-notification-container\' style=\'position:relative;\'><div class=\'mcf-notification-icon mcf-notification-icon-warning\' style=\'margin:-6px;position:absolute;\'><img src=\'images/mcf-message-warning.png\' alt=\'warning\'></div>' +
'<div class=\'mcf-notification-message-container\'><p style=\'margin-left:35px;\'>' + text +'</p></div></div>' );
  });
$('#http-error-id').show();
  }
 };
}]);

app.factory('activeTPPList', function($http, $q,$rootScope) {
    /*this runs the first time the service is injected
    this creates the service*/
    var url=$rootScope.getUrl()+'thirdpartypaymentserviceproviders';
    var actTPPList = $http.get(url).then(function(resp) {
    return resp.data.thirdPartyPaymentServiceProviderList.thirdPartyPaymentServiceProviders;
});
var activeTPPList = {
get: function() {
return actTPPList;
 }
 };
return activeTPPList;
});

