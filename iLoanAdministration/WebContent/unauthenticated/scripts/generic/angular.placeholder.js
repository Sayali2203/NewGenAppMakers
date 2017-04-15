/***
 * The following functionality is a custom-based placeholder for AngularJS only for IE
 * @example  <input id="weight" name="weight" type="number" default-text="lbs" min="50" max="500" required />
 * For browsers greater than IE 10 the in-built placeholder functionality is used, otherwise
 * thethis is used
 */
provisionAdjustmentModule.directive('placeholder', ['$timeout',function ($timeout) {
    "use strict";
    
    var rv = -1;
    var isIE = false;
    if (navigator.appName == 'Microsoft Internet Explorer'){
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null){
        rv = parseFloat( RegExp.$1 );
      }
      isIE = true
    }
    if (!isIE || rv >= 10) {
        return {};
    }
    return {
        link: function (scope, elm, attrs) {
            if (attrs.type === 'password') {
                return;
            }
            
            /*
            $timeout(function () {
            	 $(elm).val(attrs.placeholder).focus(function () {
                     if ($(this).val() === $(this).attr('placeholder')) {
                         $(this).val('');
                         //$(this).css({"color": "#D8D8D8"});
                         $(this).css({"color": "#333"});
                     }
                     $(this).css({"color": "#333"});
                 }).blur(function () {
                     if ($(this).val() === '') {
                         $(this).val($(this).attr('placeholder'));
                        // $(this).css({"color": "#D8D8D8"});
                         $(this).css({"color": "#333"});
                     }
                 });
            });
            */
            
            
        }
    };
}]);