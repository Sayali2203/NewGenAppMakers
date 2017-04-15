function compareApi(obj, activeTPP) {
        for (var i = 0; i < obj.apiAccess.length; i++) {
            var found = null;
            if (activeTPP.apiAccess !== undefined) {
                if (!angular.equals(obj.apiAccess, activeTPP.apiAccess)) {
                    found = checkComparison(obj.apiAccess[i],activeTPP.apiAccess);
                } else {
                    obj.apiAccess[i].enableApiChangeLnk = 'unchanged';
                    found = true;
                }
            } else {
                obj.apiAccess[i].enableApiChangeLnk = 'new';
            }
            if (angular.equals(found, null)) {
                obj.apiAccess[i].enableApiChangeLnk = 'new';
            }
        }
}

function checkComparison(obj,activeTPP) {
    var found = null;
    for (var j = 0; j < activeTPP.length; j++) {
        if (!angular.equals(obj,
                activeTPP[j])) {
            if (angular.equals(obj.api.id,
                    activeTPP[j].api.id)) {
                found = true;
                compareApiFields(obj,activeTPP[j]);
                break;
            }
        } else {
            obj.enableApiChangeLnk = 'unchanged';
            found = true;
        }
    }
    return found;
}
function reviewApiFields(actApiObj,changeApiObj,oldValue) {
    if(actApiObj.grantLevel.name !== changeApiObj.grntlvlname) {
        oldValue.name = actApiObj.grantLevel.name;
    }
    if(actApiObj.blocked !== changeApiObj.blocked) {
        if(!actApiObj.blocked) {
            oldValue.blocked = 'No';
        }
        else {
           oldValue.blocked = 'Yes';
        }
    }
    if(actApiObj.validFrom !== changeApiObj.validFrom) {
       oldValue.validFrom = actApiObj.validFrom;
    }
    if(actApiObj.validTo !== changeApiObj.validTo) {
        oldValue.validTo = actApiObj.validTo;
    }
}

function compareApiFields(obj,activeTPP) {
    if(activeTPP.validTo === undefined) {
        activeTPP.validTo = null;
    }
    if(obj.validTo === undefined) {
        obj.validTo = null;
    }
    if (obj.grantLevel.name !== activeTPP.grantLevel.name || obj.blocked !== activeTPP.blocked
            || obj.validFrom !== activeTPP.validFrom || obj.validTo !== activeTPP.validTo) {
        obj.enableApiChangeLnk = 'changed';
    }
    else {
        obj.enableApiChangeLnk = 'unchanged';
    }
}
function compareTpp(obj, activeTPP, change) {
    if (!angular.equals(obj, activeTPP) && (activeTPP !== '')) {
        compareTppFields(obj, activeTPP, change);
        if (obj.externalId !== activeTPP.externalId) {
            change.id = activeTPP.externalId;
        }
        if (obj.name !== activeTPP.name) {
            change.name = activeTPP.name;
        }

        if (obj.flowStatus !== activeTPP.flowStatus) {
            change.flowStatus = activeTPP.flowStatus;
        }
    } else if(!angular.equals(obj, activeTPP) && activeTPP === '') {
        change = {
            id : '',
            name : '',
            blocked : '',
            clientCertIssuerDn : '',
            clientCertSubjectDn : '',
            flowStatus : ''
        };
    }
}

function compareTppFields(obj, activeTPP, change) {
    if (obj.clientCertIssuerDn !== activeTPP.clientCertIssuerDn) {
        change.clientCertIssuerDn = activeTPP.clientCertIssuerDn;
    }
    if (obj.clientCertSubjectDn !== activeTPP.clientCertSubjectDn) {
        change.clientCertSubjectDn = activeTPP.clientCertSubjectDn;
    }
    if (obj.blocked !== activeTPP.blocked && !activeTPP.blocked) {
        change.blocked = 'No';
    }
    else if(obj.blocked !== activeTPP.blocked && activeTPP.blocked) {
        change.blocked = 'Yes';
    }
}


function errorHandling(msg) {
    var dialogInstance1 = new BootstrapDialog( {
        message : msg
    });
    setTimeout(function() {
        dialogInstance1.open();
    }, 20);
}

function displayBootstrapDialog(title, msg) {
    var dialogInstance1 = new BootstrapDialog( {
        title : title,
        message : msg
    });
    setTimeout(function() {
        dialogInstance1.open();
    }, 20);
}

function validate(Obj,ErrorService,$window) {
    if(angular.isUndefined(Obj.name) || Obj.name.trim() === '') {
      var msg = 'Name is mandatory';
      ErrorService.showError(msg);
    }else {
      $window.location.href = '#addAPI';
    }
}

function manageCertificate($fileContent, obj, ErrorService) {
    var cer = new X509();
    var str1;
    var str2;
    var foundIssuer;
    var foundDN;
    cer.readCertPEM($fileContent);
    str1 = cer.getIssuerString();
    str2 = cer.getSubjectString();
    String.prototype.replaceAll = function(s, r) {
        return this.split(s).join(r);
    };
    if (angular.equals(str1.substring(0, 1), '/')) {
        str1 = str1.substring(1);
    }
    if (angular.equals(str2.substring(0, 1), '/')) {
        str2 = str2.substring(1);
    }
    str1 = str1.replaceAll('/', ',').split(',').reverse().join();
    str2 = str2.replaceAll('/', ',').split(',').reverse().join();
    foundIssuer = str1.search('undefined');
    foundDN = str2.search('undefined');
    if (angular.equals(foundIssuer, -1) || angular.equals(foundDN, -1)) {
        obj.clientCertIssuerDn = str1;
        obj.clientCertSubjectDn = str2;
    } else {
        var msg = 'Invalid Certificate file!';
        ErrorService.showError(msg);
    }
}

function getAction(mutation) {
    if(angular.equals('CREATE',(mutation)) ) {
        return 'New';
    }else if(angular.equals('UPDATE',(mutation)) ) {
        return 'Changed';
    }else if(angular.equals('DELETE',(mutation)) ) {
        return 'Pending delete';
    }
};

function isButtonAllowed(actionsForXML, buttonName,$filter) {
    var flag = false;
    var found = $filter('filter')(actionsForXML, { name: buttonName }, true);
    if (angular.isDefined(found) && found.length && 'ALLOWED' === (found[0].userActionIndicator)) {
            flag = true;
    }
   return flag;
};
function encodeChar(value) {
    var hexcon = '#%&=';
    var encoded = '';
    for (var i = 0; i < value.length; i++) {
     var hex = value[i];
     if (hexcon.indexOf(value.charAt(i)) !== -1) {
        hex = '%' +value.charCodeAt(i).toString(16);
      }
     encoded = encoded + hex;
      }
return encoded;
};
