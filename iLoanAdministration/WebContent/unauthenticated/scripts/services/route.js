app.config(function ($routeProvider) {
  //  $httpProvider.interceptors.push('tpcHttpInterceptor');
    //configure the routing rules here
    $routeProvider.when('/apiAdministration', {
        templateUrl: 'views/apiAdministration.html',
        controller: 'fetchAPIController',navTab: 'api'
    }).when('/updateAPIDetails/:apiId', {
        templateUrl: 'views/updateAPIDetails.html',
        controller: 'updateAPIController',navTab: 'api'
    }).when('/selectaccountnumber', {
        templateUrl: 'views/customerControlselectIBAN.html',
        controller: 'ccSelectAccountNumberController',navTab: 'cc'
    }).when('/selectaccountnumbersearch', {
        templateUrl: 'views/customerControlselectIBAN.html',
        controller: 'ccSelectAccountNumberController',navTab: 'cc'
    }).
    when('/activeaccountsettings', {
        templateUrl: 'views/accountSettings.html',
        controller: 'ccSearchAccountSettingController',navTab: 'cc'
    }).
    when('/accountsettings', {
        templateUrl: 'views/accountSettings.html',
        controller: 'ccAccountSettingController',navTab: 'cc'
    }).
    when('/ccadministration', {
        templateUrl: 'views/ccOutstandingActionOverview.html',
        controller: 'ccAdministrationController',navTab: 'cc'
    }).
    when('/addnewsetting', {
        templateUrl: 'views/addAccountAccess.html',
        controller: 'ccAddAccountAccessController',navTab: 'cc'
    }).
    when('/createTPP', {
        templateUrl: 'views/createTPP.html',
        controller: 'createTPPController',navTab: 'tpc'
    }).
    when('/createTPP/:back', {
        templateUrl: 'views/createTPP.html',
        controller: 'createTPPController',navTab: 'tpc'
    }).
    when('/changeTPP/:tppId', {
        templateUrl: 'views/createTPP.html',
        controller: 'changeTPPController',navTab: 'tpc'
    }).
    when('/changeOverview', {
        templateUrl: 'views/changeOverview.html',
        controller: 'overviewTPPController',navTab: 'tpc'
    }).
    when('/tppDetails/:tppId', {
        templateUrl: 'views/tppDetails.html',
        controller: 'changeTPPController',navTab: 'tpc'
    }).
    when('/addAPI', {
        templateUrl: 'views/addAPI.html',
        controller: 'addAPIController',navTab: 'tpc'
    }).
    when('/apiMaintenance', {
        templateUrl: 'views/apiMaintenance.html',
        controller: 'apiMaintenanceController',navTab: 'tpc'
    }).
    when('/apiMaintenance/:apiIndx', {
        templateUrl: 'views/apiMaintenance.html',
        controller: 'editApiController',navTab: 'tpc'
    }).
    when('/apiReview/:apiIndx', {
        templateUrl: 'views/apiReview.html',
        controller: 'addApiReviewController',navTab: 'tpc'
    }).
    when('/searchTPP', {
        templateUrl: 'views/searchTPP.html',
        controller: 'searchTPPController',navTab: 'tpc'
    }).
    when('/reviewAPIChange/:apiIndx', {
        templateUrl: 'views/apiChangeReview.html',
        controller: 'reviewAPIChangeController',navTab: 'tpc'
    }).
    when('/editActiveTpp/:tppId', {
        templateUrl: 'views/createTPP.html',
        controller: 'editActiveTppController',navTab: 'tpc'
    }).
    when('/tppAdministration', {
        templateUrl: 'views/requestList.html',
        controller: 'tppAdministrationController',navTab: 'tpc'
    }).
    when('/detailActiveTPP/:tppId/:objType', {
        templateUrl: 'views/tppDetails.html',
        controller: 'changeTPPController',navTab: 'tpc'
    }).
    when('/reviewTppChange/:tppId', {
        templateUrl: 'views/changeOverview.html',
        controller: 'reviewTppChangeController',navTab: 'tpc'
    }).
    when('/tppapiaccountsettingsmanagerequests/:id', {
        templateUrl: 'views/customerControlOverviewAccountSettings.html',
        controller: 'ccOverviewAccountSettingsController',navTab: 'cc'
    }).
    when('/applicationDetails/:applnId', {
        templateUrl: 'views/applicationDetails.html',
        controller: 'getApplicationDetailsController',navTab: 'tpc'
    }).
    when('/requestList', {
        templateUrl: 'views/requestList.html',
        controller: 'getRequestListController',navTab: 'tpc'
    }).
    otherwise( { redirectTo: '/requestList'
    });
});
