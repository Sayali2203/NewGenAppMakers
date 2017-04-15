app.controller('getRequestListController', function ($scope,$http, $uibModal, $log,$rootScope) {
$( '#body' ).prepend( '<div id=\'loading\'><img src=\'images/ajax-loader.gif\' class=\'ajax-loader\'/></div>' );
$('#loading').show();
$scope.requestListSortType     = 'requestNo';
$scope.requestListSortReverse  = false;
$scope.requestListSearch   = '';


$scope.requestList =[{"requestNo": "100012345","clientNumber": "123456789","status": "Aadhar Card Verification pending"},
                     {"requestNo": "100012324","clientNumber": "123456234","status": "Verification pending"}];
$('#loading').hide();
});
