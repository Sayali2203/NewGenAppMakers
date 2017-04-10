
 
  
var myApp = angular.module('myApp',['ngRoute']);


var stripWidth=0;

 
 
 
 myApp.controller('AllFileStatusController',function($scope,$rootScope,$http,$timeout) {
	    var timeout;
		
		$scope.getFileStatus = function(){
			
			timeout=$timeout($scope.getFileStatus,60000*$rootScope.refreshTime[1]);
		$http.get('/nl/ipf/sctorder/rest/files/statuscount').
	    success(function(data, status, headers, config) {
	    
	    	$scope.files = data;
	    
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
		$scope.$on('$locationChangeStart', function(){
	        $timeout.cancel(timeout);
	    });
	    
	    };
	    var timeout=$timeout($scope.getFileStatus,0);
	});
myApp.controller('opcController',function($scope,$rootScope,$http,$timeout) {
    
    $scope.onTimeout = function(){
    	
    		
    mytimeout = $timeout($scope.onTimeout,60000*$rootScope.refreshTime[2]);
    
    $http.get('/nl/ipf/sctorder/rest/opcs').
    success(function(data, status, headers, config) {
    
     $scope.opcList = data;
    
    }).
    error(function(data, status, headers, config) {
      // log error
    });
    }
    var d = new Date();
	var sec = d.getSeconds();
	
    var mytimeout = $timeout($scope.onTimeout,(60-sec)*1000);
    $http.get('/nl/ipf/sctorder/rest/opcs').
    success(function(data, status, headers, config) {
    
     $scope.opcList = data;
    
    }).
    error(function(data, status, headers, config) {
      // log error
    	
    });
    
    $scope.$on('$locationChangeStart', function(){
        $timeout.cancel(mytimeout);
    });
    
   
    
});
myApp.controller('nhfDataController',function($scope,$rootScope,$http,$timeout) {
	$scope.onTimeout = function(){	
	    mytimeout = $timeout($scope.onTimeout,60000*$rootScope.refreshTime[2]);
	    
	    $http.get('/nl/ipf/sctorder/rest/opc/nhfdata').
	    success(function(data, status, headers, config) {
	    
	     $scope.nhfData = data;
	    
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
	    }
	var d2 = new Date();
	var sec2 = d2.getSeconds();
	
    var mytimeout = $timeout($scope.onTimeout,(60-sec2)*1000);
    $http.get('/nl/ipf/sctorder/rest/opc/nhfdata').
    success(function(data, status, headers, config) {
    
     $scope.nhfData = data;
    
    }).
    error(function(data, status, headers, config) {
      // log error
    	
    });
    
    $scope.$on('$locationChangeStart', function(){
        $timeout.cancel(mytimeout);
    });
});

myApp.controller('abendController',function($scope,$rootScope,$http,$timeout) {
	$scope.onTimeout = function(){
    	
		
	    mytimeout = $timeout($scope.onTimeout,60000*$rootScope.refreshTime[2]);
	    
	    $http.get('/nl/ipf/sctorder/rest/opc/abendedJobs').
	    success(function(data, status, headers, config) {
	    
	     $scope.abendList = data;
	    
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
	    }
	var d1 = new Date();
	var sec1 = d1.getSeconds();
	
    var mytimeout = $timeout($scope.onTimeout,(60-sec1)*1000);
    $http.get('/nl/ipf/sctorder/rest/opc/abendedJobs').
    success(function(data, status, headers, config) {
    
     $scope.abendList = data;
    
    }).
    error(function(data, status, headers, config) {
      // log error
    	
    });
    
    $scope.$on('$locationChangeStart', function(){
        $timeout.cancel(mytimeout);
    });
});

myApp.controller('removeNotificationController', function($scope,$rootScope,$http,$timeout) {
$scope.removeNotification = function(userid,timestamp) {
	 $http.delete('/nl/ipf/sctorder/rest/notifications/'+userid+'/'+timestamp).
			 success(function(data, status, headers, config) {
				 
				 $rootScope.notificationDeletionSuccess=true;
				 $scope.hide = function(){
					
					$rootScope.notificationDeletionSuccess=false;
				 }
				 $timeout($scope.hide,5000);
				 $http.get('/nl/ipf/sctorder/rest/notifications').
				    success(function(data, status, headers, config) {
				   $rootScope.notifications = data;
				   
				    }).
				    error(function(data, status, headers, config) {
				      // log error
				    });
			   
			    }).
			    error(function(data, status, headers, config) {
			      // log error
			    });
	};
});
myApp.controller('autocompleteController', function($scope,$rootScope, $http) {
  getFiles(); 
  $scope.setFileName= function(file)
  {
  
  document.getElementById("fileName").value=file;
  $scope.fileSelected=true;
  $scope.fileName='';
  $rootScope.$broadcast('fetchFileDetail', {}); 
 
 
  }
  $scope.setDefaultValues=function()
  {
	  $rootScope.fileSearched=false;
	  $scope.fileSelected=false;
	  $scope.fileName=document.getElementById("fileName").value;
  }
  function getFiles(){  
 $http.get('/nl/ipf/sctorder/rest/files/name').
    success(function(data, status, headers, config) {
    
     $scope.fileNames = data;
     $scope.fileSelected=false;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
      
  };
});

myApp.controller('fetchNotificationsController', function($scope,$rootScope, $http,$timeout) {
	
	
	  
	  
	$scope.getNotifications = function(){  
		
		 timeout= $timeout($scope.getNotifications,60000*$rootScope.refreshTime[1]);
		  $http.get('/nl/ipf/sctorder/rest/notifications').
	    success(function(data, status, headers, config) {
	    	
	    	$rootScope.notifications = data;
	   

	
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
		  $scope.$on('$locationChangeStart', function(){
		        $timeout.cancel(timeout);
		    });
	  };
	  var timeout=$timeout($scope.getNotifications(),0); 
	 
	});
myApp.controller('fetchPaymentsCountController', function($scope,$rootScope, $http,$timeout) {
	   
	 
	
	$scope.refreshCount = function(){
    	
		timeout = $timeout($scope.refreshCount,$rootScope.refreshTime[1]*60000);
    		
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
	    $scope.$on('$locationChangeStart', function(){
	        $timeout.cancel(timeout);
	    });
	    }
	var timeout=$timeout($scope.refreshCount,0);
	
	 
	});
myApp.controller('paymentsGraphController', function($scope,$rootScope, $http,$timeout) {
	
	
	$scope.$on('updateGraph', function(event, args) {
	 var obj;    
	
	      realTime=args.realTimeGraphCount;
	     
	      var graphCount=$scope.paymentsGraphData;
	      
	      var paymentType;
	      for(var index=0;index < graphCount.length;index++)
	    	  {
	    	  
	    	  paymenttype= graphCount[index].paymentType;
	    	  for(var graphIn=0 ;graphIn<realTime.length;graphIn++)
	    		  {
	    		  
	    		  if(paymenttype==realTime[graphIn].paymentType)
	    			  {
	    			  obj=realTime[graphIn].paymentCount;
	    			  for(key in obj)
	    			  {  
	    			  graphCount[index].paymentCount[key]=obj[key];
	    			
	    			  $scope.latestKey=key;
	    			 
	    			  }
	    			  }
	    		  }
	    	  
	    	 
	    	  }
	      $scope.paymentsGraphData=graphCount;
	    	  
	    }); 
	 
	
	$scope.getGraphDetail = function(){
		var timeout;  
	$http.get('/nl/ipf/sctorder/rest/payments/graphdata').
	    success(function(data, status, headers, config) {
	    	
	    	var d = new Date();
	    	var hr=d.getHours();
	    	var min=d.getMinutes();
	    	
	    	//$rootScope.lastUpdatetime=d;
	    	$scope.paymentsGraphData = data;
	    
	    	//var minToNextDay=(23-hr)*60 + (60-min);
	    	
	    	timeout=$timeout($scope.getGraphDetail,$rootScope.refreshTime[1]*60000);
	    	
	    	
	   }).
	    error(function(data, status, headers, config) {
	      // log error
	    });

	$scope.$on('$locationChangeStart', function(){
			       
				  $timeout.cancel(timeout);
			    });
	 }  
	$timeout($scope.getGraphDetail,0);
	});

myApp.controller('fetchFileDetailController', function($scope,$rootScope, $http) {
  
   
	$rootScope.$on('fetchFileDetail', function(event, args) {
      
       $scope.getFileDetail();
    });        
  $scope.getFileDetail = function() { 
var fname=document.getElementById("fileName").value;

 if(fname==null || $.trim(fname) == "")
		{
	 
		document.getElementById("fileName").focus();
		alert("Please enter file name");
	
		return false;
		}
		else
		{
 $http.get('/nl/ipf/sctorder/rest/files',
 {
  params: {
  fileName:fname
  }
 
 }).
 success(function(data, status, headers, config) {
    
	
    if(typeof(data)!='object'  )
    	{
    	
    	alert('Please enter valid file name');
    	}
    else
    	{
	 
	 $scope.fileDetail = data;
     
	 $rootScope	.fileSearched=true;
	 document.getElementById("fileName").value='';
	 $scope.fileName='';
 }
   
    }).
    error(function(data, status, headers, config) {
      
    
    });
    }
  };
  
});
myApp.controller('addNotificationController', function($scope,$rootScope, $http,$timeout) {
	  
	   
	 
	 $scope.addNotification = function() { 
	var text=document.getElementById("notificationTextMessage").value;
	

	 if(text==null || $.trim(text) == "")
			{
			$scope.searched=false;
			document.getElementById("notificationTextMessage").focus();
			alert("Please enter notification");
			return false;
			}
	 	else if (text.length > 100) {
		    alert("Notification cannot contains more than 100 characters");
		    document.getElementById("notificationTextMessage").focus();
		    return false;
	 	}
	 	else if(!(/^([a-zA-Z0-9\. _-]+)$/.test( text ) )) {
        alert('Notification is not alphanumeric');
        return false;
    }	
			else
			{
	 $http.put('/nl/ipf/sctorder/rest/notifications/'+text,
	 {
	  
	 
	 }).
	 success(function(data, status, headers, config) {
		 
		 $rootScope.notificationSuccess=true;
		 $scope.hide = function(){
			 $rootScope.notificationSuccess=false;
		 }
		 $timeout($scope.hide,5000);
		 
		 $http.get('/nl/ipf/sctorder/rest/notifications').
		    success(function(data, status, headers, config) {
		    	
		    document.getElementById("notificationTextMessage").value="";
		    	$rootScope.notifications = data;
		 
		    }).
		    error(function(data, status, headers, config) {
		      // log error
		    });
	   
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
	    }
	  };
	  
	});



myApp.controller('sourcePieControllerOutgoing', function($scope,$rootScope){
    
   
	$scope.$on('sourceDataOutgoing', function(event, args) {
		 var sourceDataOutgoing=[];    
		 for(key in args.paymentSourceDataOutgoing)
	    	{
			 var source=[];
			 source['label']=key;
			source['data']=args.paymentSourceDataOutgoing[key] ;
			    
			 
			 
			sourceDataOutgoing.push(source);
	    	
	    	}
	 
		 $scope.pieDataOutgoing=sourceDataOutgoing;
	});
});

myApp.controller('sourcePieControllerIncoming', function($scope,$rootScope){
 
	$scope.$on('sourceDataIncoming', function(event, args) {
		 var sourceDataIncoming=[];    
		 for(key in args.paymentSourceDataIncoming)
	    	{
			 var source=[];
			 source['label']=key;
			source['data']=args.paymentSourceDataIncoming[key] ;
			    
			 
			 
			sourceDataIncoming.push(source);
	    	
	    	}
	 
		 $scope.pieDataIncoming=sourceDataIncoming;
	});  
});

var options = {
	    "backdrop" : "static"
	}
$('#basicModal').modal(options);

myApp.controller('addSuggestionController', function($scope,$rootScope, $http,$timeout) {
	   
	   
	 
	 $scope.addSuggestion = function() { 
		 
	var text=document.getElementById("notificationText").value;
	var name=document.getElementById("name").value;
	
	if(name==null || $.trim(name) == "")
	{
	
	document.getElementById("name").focus();
	alert("Please enter name");
	return false;
	}
	else if(!(/^([a-zA-Z0-9\. _-]+)$/.test( name ) )) {
	     alert('Name not alphanumeric');
	     return false;
		 	}
	else if(name.length>20)
		{
		document.getElementById("name").focus();
		alert("Name cannot contains more than 20 characters");
		}
	else  if(text==null || $.trim(text) == "")
			{
			$scope.searched=false;
			document.getElementById("notificationText").focus();
			alert("Please enter Suggestion");
			return false;
			}
	 	else if (text.length > 500) {
		    alert("Suggestion cannot contains more than 100 characters");
		    document.getElementById("notificationText").focus();
		    return false;
	 	}
	 	else if(!(/^([a-zA-Z0-9\. _-]+)$/.test( text ) )) {
     alert('Suggestionis not alphanumeric');
     return false;
	 	}	
	 	
			else
			{
				
	 $http.put('/nl/ipf/sctorder/rest/suggestions/'+name+'/'+text,
	 {
	  
	 
	 }).
	 success(function(data, status, headers, config) {
		 
		 $rootScope.suggestionSuccess=true;
		 $scope.hide = function(){
			 $rootScope.suggestionSuccess=false;
		 }
		 $timeout($scope.hide,10000);
		 document.getElementById("notificationText").value="";
		 document.getElementById("name").value="";
		 $http.get('/nl/ipf/sctorder/rest/suggestions').
		    success(function(data, status, headers, config) {
		    	
		    	$rootScope.suggestions = data;
		   
		    }).
		    error(function(data, status, headers, config) {
		      // log error
		    	
		    })
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
	    }
	  };
	  
	});
myApp.controller('fetchSuggestionsController', function($scope,$rootScope, $http,$timeout) {
	
	
	  
	  
	$scope.getSuggestions = function(){
		
		   timeout= $timeout($scope.getSuggestions,60000*$rootScope.refreshTime[1]);
		  $http.get('/nl/ipf/sctorder/rest/suggestions').
	    success(function(data, status, headers, config) {
	    	
	    	$rootScope.suggestions = data;
	   
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    	
	    });
		  $scope.$on('$locationChangeStart', function(){
		       
			  $timeout.cancel(timeout);
		    });
	  };
	  var timeout=$timeout($scope.getSuggestions,0); 
	  $scope.removeSuggestion = function(userid,timestamp) {
			 $http.delete('/nl/ipf/sctorder/rest/notifications/'+userid+'/'+timestamp).
					 success(function(data, status, headers, config) {
						 
						 $rootScope.suggestionDeletionSuccess=true;
						 $scope.hide = function(){
							
							$rootScope.suggestionDeletionSuccess=false;
						 }
						 $timeout($scope.hide,5000);
						 $http.get('/nl/ipf/sctorder/rest/suggestions').
						    success(function(data, status, headers, config) {
						    	$rootScope.suggestions = data;
						   
						    }).
						    error(function(data, status, headers, config) {
						      // log error
						    });
					   
					    }).
					    error(function(data, status, headers, config) {
					      // log error
					    });
			};
	});



myApp.controller('systemLoadController', function($scope,$rootScope, $http,$timeout) {
	
	$timeout(getSystemLoad(),0);
	 
	$scope.refreshData = function(msg) {
		
		getSystemLoad();
   };
	  function getSystemLoad(){
		 
		 
		  $http.get('/nl/ipf/sctorder/rest/payments/systemload').
	    success(function(data, status, headers, config) {
	    	 var dataForGraph=[];
	    	
	    	
	    	 var keyInDate;
	    		for(status in data)  {
	    			
	    	 data[status]['data']=[];
	    	  
	    	
				for(key in data[status].dataPoints)
					{
					
					
					keyInDate= sqlToJsDate(key.toString());
					
					data[status].data.push([keyInDate.getTime(),data[status].dataPoints[key]]);
					
	    	 
					}
				
				dataForGraph.push(data[status]);
	    		}
	    		
	    		
	    	
	    	
	    
	    
	    $scope.systemload = dataForGraph;
	  
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    	
	    });
	      
	  };
	});

myApp.controller('fetchIMSQueueCountAndStatusController', function($scope,$rootScope, $http,$timeout) {
	
	  
	$scope.getIMSQueueCount = function(){ 
		
		  timeout=$timeout($scope.getIMSQueueCount,60000*$rootScope.refreshTime[1]);
		  $http.get('/nl/ipf/sctorder/rest/ims/queuecountandstatus').
	    success(function(data, status, headers, config) {
	    	
	    	$scope.imsData = data;
	   
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    	
	    });
		  $scope.$on('$locationChangeStart', function(){
		       $timeout.cancel(timeout);
		   }); 
	  };
	  var timeout=$timeout($scope.getIMSQueueCount,0); 
	 
	  
	});
myApp.controller('showHistoricalDateGraphController', function($scope,$rootScope,$http,$timeout) {
	
	$scope.updateDates=function(no)
	{
		if(no=='currentmonth')
			{
			
			var toDate = moment(new Date()).add(1,"days").format("DD-MM-YYYY") ;
			
			var fromDate=moment(new Date()).startOf('month').format("DD-MM-YYYY");
			
			$scope.fromDateLabel=fromDate;
			$scope.toDateLabel=toDate;
			document.getElementById("fromDate").value=fromDate;
			document.getElementById("toDate").value=toDate;
			$scope.showHistoricalGraph();
			}
		else
			{
		
			var toDate = moment(new Date()).format("DD-MM-YYYY") ;
		var fromDate=moment(new Date()).subtract(no,"days").format("DD-MM-YYYY");
		$scope.fromDateLabel=fromDate;
		$scope.toDateLabel=toDate;
		document.getElementById("fromDate").value=fromDate;
		document.getElementById("toDate").value=toDate;
		$scope.showHistoricalGraph();
			}
	}
	
	$scope.showHistoricalGraph = function() {
		
		var fromDate=document.getElementById("fromDate").value;
		var toDate=document.getElementById("toDate").value;
		var toDateMomentObject=moment(toDate,"DD-MM-YYYY");
		var fromDateMomentObject=moment(fromDate,"DD-MM-YYYY");
		
		if(null==fromDate || fromDate.trim()=="")
			{
			alert("Please enter from date");
			document.getElementById("fromDate").focus();
			return false;
			}
		else if(null==toDate || toDate.trim()=="")
			{
			alert("Please enter to date");
			document.getElementById("toDate").focus();
			return false;
			}
		else if(!isDate(toDate))
		{
		alert("Please enter valid date");
		document.getElementById("toDate").focus();
		return false;
		}
		else if(!isDate(fromDate))
		{
		alert("Please enter valid date");
		document.getElementById("fromDate").focus();
		return false;
		}
		
		var diffInDays=moment.duration(toDateMomentObject.diff(fromDateMomentObject)).asDays();
		if(diffInDays<0)
			{
			alert("To date must be after from date");
			document.getElementById("fromDate").focus();
			return false;
			}
		
		$scope.fromDateLabel=fromDate;
		$scope.toDateLabel=toDate;
		$scope.enterPeriod=false;
		$scope.paymentsGraphData=null;
		
		$scope.tickSize=getTickSize(diffInDays);
		 $http.get('/nl/ipf/sctorder/rest/payments/historicdategraph/'+fromDate+'/'+toDate).
				 success(function(data, status, headers, config) {
					 $scope.paymentsGraphData = data;
					
					    }).
					    error(function(data, status, headers, config) {
					      // log error
					    });
				   
				    
				    error(function(data, status, headers, config) {
				      // log error
				    });
		}

	
	$scope.updateDates2=function(no)
	{
		if(no=='currentmonth')
			{
			
			var toDate = moment(new Date()).add(1,"days").format("DD-MM-YYYY") ;
			
			var fromDate=moment(new Date()).startOf('month').format("DD-MM-YYYY");
			
			$scope.fromDateLabel2=fromDate;
			$scope.toDateLabel2=toDate;
			document.getElementById("fromDate2").value=fromDate;
			document.getElementById("toDate2").value=toDate;
			$scope.showHistoricalGraph2();
			}
		else
			{
		
			var toDate = moment(new Date()).format("DD-MM-YYYY") ;
		var fromDate=moment(new Date()).subtract(no,"days").format("DD-MM-YYYY");
		$scope.fromDateLabel2=fromDate;
		$scope.toDateLabel2=toDate;
		document.getElementById("fromDate2").value=fromDate;
		document.getElementById("toDate2").value=toDate;
		$scope.showHistoricalGraph2();
			}
	}
	
	$scope.showHistoricalGraph2 = function() {
		
		var fromDate=document.getElementById("fromDate2").value;
		var toDate=document.getElementById("toDate2").value;
		var toDateMomentObject=moment(toDate,"DD-MM-YYYY");
		var fromDateMomentObject=moment(fromDate,"DD-MM-YYYY");
		
		if(null==fromDate || fromDate.trim()=="")
			{
			alert("Please enter from date");
			document.getElementById("fromDate2").focus();
			return false;
			}
		else if(null==toDate || toDate.trim()=="")
			{
			alert("Please enter to date");
			document.getElementById("toDate2").focus();
			return false;
			}
		else if(!isDate(toDate))
		{
		alert("Please enter valid date");
		document.getElementById("toDate2").focus();
		return false;
		}
		else if(!isDate(fromDate))
		{
		alert("Please enter valid date");
		document.getElementById("fromDate2").focus();
		return false;
		}
		var diffInDays=moment.duration(toDateMomentObject.diff(fromDateMomentObject)).asDays();
		if(diffInDays<0)
			{
			alert("To date must be after from date");
			document.getElementById("fromDate2").focus();
			return false;
			}
		$scope.fromDateLabel2=fromDate;
		$scope.toDateLabel2=toDate;
		$scope.enterPeriod2=false;
		$scope.paymentsGraphData2=null;
		
		$scope.tickSize=getTickSize(diffInDays);
		 $http.get('/nl/ipf/sctorder/rest/payments/historicdategraph/'+fromDate+'/'+toDate).
				 success(function(data, status, headers, config) {
					 
					 $scope.paymentsGraphData2 = data;
					 }).
					    error(function(data, status, headers, config) {
					      // log error
					    });
				   
				    
				    error(function(data, status, headers, config) {
				      // log error
				    });
		}
});


function getTickSize(no)
{
	
	var tickSize=0;
	if(no<9)
		return 1;
	tickSize=no/9;
		
	
	return tickSize;
}
function sqlToJsDate(sqlDate){
	
	    //sqlDate in SQL DATETIME format ("Thu Dec 04 00:00:00 CET 2014")
	
	    var sqlDateArr1 = sqlDate.split(" ");
	
	    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
	
	    var sYear = sqlDateArr1[5];
	
	    var sMonth = sqlDateArr1[1];
	
	    
	
	    var sDay = sqlDateArr1[2];
	
	    var sqlDateArr3 = sqlDateArr1[3].split(":");
	
	   
	    return new Date(sMonth+" "+sDay+","+sYear+" "+sqlDateArr1[3]);
	
	}
function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\-)(\d{1,2})(\-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
    //Checks for dd-mm-yyyy format.
    dtMonth = dtArray[3];
    dtDay= dtArray[1];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}


