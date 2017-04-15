app.controller('getApplicationDetailsController',function($scope,$routeParams) {
	$scope.applicationDetailsSortType     = 'VerificationType';
	$scope.applicationDetailsSortReverse  = false;
	$scope.applicationDetailsSearch   = '';


	$scope.verificationList = [{"VerificationType": "100012345","VerificationDetails": "Aadhar Card Verification","status": "Pending"},
	                           {"VerificationType": "100012347","VerificationDetails": "Document Verification","status": "Pending"}];
	
	$scope.applnId = $routeParams.applnId; 
});