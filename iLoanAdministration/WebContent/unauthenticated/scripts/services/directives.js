app.directive('aabTpcNav', function() {
    return {
        restrict:'E',
        controller: 'tpcNavController',
        templateUrl: 'views/nav.html'
    };
});

app.directive('aabPanelSubmitted', function() {
    return {
        restrict:'E',
        templateUrl: 'views/submitted.html'
    };
});
app.directive('aabPanelRejected', function() {
    return {
        restrict:'E',
        templateUrl: 'views/rejected.html'
    };
});
app.directive('aabPanelSaved', function() {
    return {
        restrict:'E',
        templateUrl: 'views/saved.html'
    };
});

app.directive('aabCcSubmittedPanel', function() {
    return {
        restrict:'E',
        templateUrl: 'views/submittedAccountSettings.html'
    };
});

app.directive('aabCcRejectedPanel', function() {
    return {
        restrict:'E',
        templateUrl: 'views/rejctedAccountSettings.html'
    };
});


app.directive('aabOnReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.aabOnReadFile);
            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, { $fileContent:onLoadEvent.target.result});
                    });
                };
                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});

app.controller('tpcNavController', ['$scope', '$route',function ($scope, $route) {
 $scope.tab_name = $route.current.navTab;
 $scope.isTabActive = function (tabName) {
     if (tabName === $scope.tab_name) {
         $('#sidebar').hide();
         $('#searchbar').hide();
     if($scope.tab_name === 'cc') {
        $('#searchbar').show();
     }
      else if($scope.tab_name === 'tpc') {
         $('#sidebar').show();
      }
     return 'active';
     }
 };

}]);

/*Please note that $modalInstance represents a modal window (instance) dependency.
It is not the same as the $uibModal service used above.
*/
app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, tppObj) {
    $scope.tpp = tppObj;
    $scope.ok = function (tppRejReason) {
        if(tppRejReason === undefined)
        {
            $('#rejectionText').css( {'border-color': 'red'} );
        }
        else {
            $uibModalInstance.close(tppRejReason);
        }
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
