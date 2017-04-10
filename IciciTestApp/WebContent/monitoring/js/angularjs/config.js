myApp.run(function ($rootScope,$http) {
	$rootScope.refreshTime =[10,5,1]; 
	$rootScope.notificationSuccess=false;
    $http.get('/nl/ipf/sctorder/rest/configuration').
    success(function(data, status, headers, config) {
    
    	
    	$rootScope.refreshTime =data; 
    
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    
    
    $http.get('/nl/ipf/sctorder/rest/payments/realtimecount').
    success(function(data, status, headers, config) {
    
    	$rootScope.paymentsCount = data;
    	$rootScope.$broadcast('sourceDataOutgoing', {paymentSourceDataOutgoing:data.paymentSourceCountOutgoing}); 
    	$rootScope.$broadcast('sourceDataIncoming', {paymentSourceDataIncoming:data.paymentSourceCountIncoming});
    	//$rootScope.$broadcast('updateGraph', {realTimeGraphCount:data.paymentStatusGraphCount}); 
    	
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
myApp.config(['$routeProvider',
              function($routeProvider) {
            	
                $routeProvider.
                  when('/dashboard', {
                    templateUrl: 'dashboard.jsp'
                    
                  }).
                  when('/fmtools', {
                    templateUrl: 'fmtools.jsp'
                   
                  }).
                  when('/history', {
                      templateUrl: 'history.jsp'
                     
                    }).
                  otherwise({
                    redirectTo: '/dashboard'
                  });
              }]);