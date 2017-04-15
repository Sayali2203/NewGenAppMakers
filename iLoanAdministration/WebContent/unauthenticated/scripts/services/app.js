var app = angular.module('tpAdmin', ['ngRoute','ui.bootstrap','gettext','ngCookies']);


app.run(function($http,$window,$rootScope,$filter, $uibModal,gettextCatalog,ErrorService) {
    $rootScope.throwError = function(rejection) {
        var data = rejection.data;
        var arrError = ['MESSAGE_DAO374_0030','MESSAGE_DAO374_0031','MESSAGE_DAO374_0032','MESSAGE_DAO374_0033',
                        'MESSAGE_DAO374_0034','MESSAGE_DAO374_0035','MESSAGE_DAO374_0040','MESSAGE_DAO374_0041'];
        if(angular.equals(data,'')) {
            if(angular.equals(rejection.status,401) || angular.equals(rejection.status,403)) {
                ErrorService.showError('You are not authorized to use this application.Please contact your Role Manager');
            }
        }
        else {
            var messages = data.messages[0].messageKey;
            var txt = gettextCatalog.getString(messages);
            var found = false;
            for(var i = 0;i < arrError.length;i++) {
                if(arrError[i] === data.messages[0].messageKey) {
                    found = true;
                }
            }
            if(angular.equals(found,true)) {
                $window.location.href = '#home';
                errorHandling('TPP authorized successfully.' + txt);
            }
            else if(angular.equals(data.messages[0].messageKey,'MESSAGE_DAO374_0013')) {
                ErrorService.showError(txt + '.' + data.messages[0].params);
            }
            else {
                $rootScope.multError.push(txt);
                ErrorService.showErrors($rootScope.multError);
            }
        }
    };
    $rootScope.getUrl = function() {
        return localUrl;
    };
    $rootScope.getButtonAccess = function(actionsForXML, buttonName) {
        var flag = isButtonAllowed(actionsForXML, buttonName,$filter);
        return flag;
    };
    $rootScope.getModalInstance = function(animationsEnabled, templateUrl, size, tppObject) {
        return $uibModal.open( {
            animation: animationsEnabled,
            templateUrl: templateUrl,
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                tppObj: function () {
                    return tppObject;
                }
            }
        });
    };
    $rootScope.withdrawChange = function (size,obj) {
        $rootScope.multError = [];
        var modalInstance = $rootScope.getModalInstance(false, 'withdrawTpp.html', size,obj);
        modalInstance.result.then(function () {
            $http( {
                method: 'DELETE',
                url: $rootScope.getUrl() + 'tppmanagerequests/'+obj.id,
                data    : '',
                headers : { 'Content-Type': 'application/json' }
            })
            .success(function() {
                $window.location.href = '#home';
                var msg = 'TPP withdrawn successfully';
                errorHandling(msg);
            });
        });
    };
    $rootScope.rejectChange = function (size,operation,obj,concurrencyId) {
        $rootScope.multError = [];
        var modalInstance = $rootScope.getModalInstance(false, 'rejectTpp.html', size, obj);
        modalInstance.result.then(function (tpp) {
            var resultObj = {
                    'thirdPartyPaymentServiceProviderManageRequest': {
                        'id':obj.id,
                        'intendedAction':operation,
                        'reason':tpp,
                        'concurrencyId':concurrencyId
                    }
            };
            $http( {
                method: 'POST',
                url: $rootScope.getUrl() + 'tppmanagerequests/'+obj.id+'/patch',
                data    : resultObj,
                headers : { 'Content-Type': 'application/json' }
            })
            .success(function() {
                $window.location.href = '#home';
                var msg = 'TPP rejected';
                errorHandling(msg);
            });
        });
    };

    $rootScope.withdrawChangeCC = function (size,id) {
        $rootScope.multError = [];
        var modalInstance = $rootScope.getModalInstance(false, 'withdrawCC.html', size,id);
        modalInstance.result.then(function () {
            $http( {
                method: 'DELETE',
                url: $rootScope.getUrl() + 'tppapiaccountsettingsmanagerequests/' + id,
                data    : '',
                headers : { 'Content-Type': 'application/json' }
            })
            .success(function() {
                $window.location.href = '#ccadministration';
                var msg = 'Account Settings withdrawn successfully';
                errorHandling(msg);
            });
        });
    };
});
