angular.module('gettext').run(
        [ 'gettextCatalog', '$http', function(gettextCatalog, $http) {
            $http.get('json/label.json').success(function(data) {
                gettextCatalog.setStrings('en', data);
            }).error(function() {
                gettextCatalog.setStrings('en', {});
            });
        } ]);
