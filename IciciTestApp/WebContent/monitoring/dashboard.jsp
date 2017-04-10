<html>
    <head>
     
    <script>
    
        window.onload = function () {
            if (navigator.appName == 'Microsoft Internet Explorer')
                alert('Application Doesn\'t Support IE \n Please Use Google Chorme or Mozilla Firefox ');
               
        }
    </script> 
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
        <meta charset="UTF-8">
        <title>ICICI LOAN</title>
<meta content='width=device-width, initial-scale=1<form></form>, maximum-scale=1, user-scalable=no'
	name='viewport'>
<!-- bootstrap 3.0.2 -->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- font Awesome -->
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Ionicons -->
        <link href="css/ionicons.min.css" rel="stylesheet" type="text/css" />
       
        <!-- bootstrap wysihtml5 - text editor -->
        <link href="css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->	
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/jQueryUI/jquery-ui-1.10.3.custom.css" rel="stylesheet" type="text/css" />
		<!-- take-tour -->
		
	
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
      <link href="css/take-tour/bootstrap-tour.css" rel="stylesheet">


<!-- Add IntroJs styles -->
<!-- Date picker -->


<!-- Scripts -->
<script src="js/jquery.min.js"></script>


<!-- Bootstrap -->
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>

<script src="js/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
<script src="js/app.js" type="text/javascript"></script>
<script type="text/javascript" src="js/angularjs/angular.js"></script>

<script type="text/javascript" src="js/angularjs/angular-route.js"></script>
<script type="text/javascript" src="js/angularjs/controller.js"></script>
<script type="text/javascript" src="js/angularjs/directory.js"></script>
<script type="text/javascript" src="js/angularjs/filter.js"></script>
<script type="text/javascript" src="js/angularjs/config.js"></script>
<!-- FLOT CHARTS -->
<script src="js/plugins/flot/jquery.flot.min.js" type="text/javascript"></script>
<!-- FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized -->
<script src="js/plugins/flot/jquery.flot.resize.min.js"
	type="text/javascript"></script>
<script src="js/plugins/flot/jquery.flot.axislabels.js"
	type="text/javascript"></script>
<script src="js/plugins/flot/jquery.flot.pie.min.js"
	type="text/javascript"></script>
<script src="js/plugins/flot/jquery.flot.tooltip.min.js"
	type="text/javascript"></script>
	<script src="js/plugins/flot/jquery.flot.orderBars.js"
	type="text/javascript"></script>
	<script src="js/plugins/flot/jquery.flot.time.min.js"
	type="text/javascript"></script>
	
	
<script src="js/plugins/jquery.li-scroller.1.0.js"
	type="text/javascript"></script>



<!-- jQuery Knob Chart -->
<script src="js/plugins/jqueryKnob/jquery.knob.js"
	type="text/javascript"></script>
<script src="js/charts/linegraph.js" type="text/javascript"></script>
<script src="js/popup.js" type="text/javascript"></script>
<!-- Date picker -->
<script src="js/plugins/daterangepicker/moment.js" type="text/javascript"></script>



</head>
    
    <body id="body" class="skin-blue" ng-app="myApp">
    
    <header class="header">
            
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                
            <div class=" col-xs-12 col-lg-6" style="text-align: center;font-size: 26px;color:#16a085;" > 
            <a href="dashboard.jsp" class="logo">
                <!-- Add the class icon to your logo image or logo icon to add the margining -->
                 <img style="float:left" src="img/logo.gif"/> 
            </a>
              I<small >cici</small> L<small >onitoring & </small>  A<small >lerting</small>
            
            </div>
                <div class="navbar-right">
                    <ul class="nav navbar-nav">
                        <!-- Messages: style can be found in dropdown.less-->
                        <li class="messages-menu">
                            <a href="#dashboard" >
                              <span class="menu-text">
                              Dashboard
                              </span>
                            </a>
                            
                        </li>
                        <!-- Notifications: style can be found in dropdown.less -->
                        <li class="messages-menu">
                            <a href="#fmtools" class="" >
                              <span class="menu-text">
                              FM Tools
                              </span>
                            </a>
                            
                        </li>
                        <!-- Tasks: style can be found in dropdown.less -->
                        <li class="messages-menu">
                            <a href="#history" class="" data-toggle="">
                                <span class="menu-text">
                                History
                                </span>
                            </a>
                            
                        </li>
                        <li class="messages-menu">
                            <a  class="" data-toggle="modal" data-target="#basicModal" style="cursor: hand">
                               <span class="menu-text" >
                               Suggestions
                                </span>
                            </a>
                             
                        </li>
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown  messages-menu">
                            <a href="javascript:void(0);"  onclick="startTour();">
                               <span class="menu-text">
                                <span>Help</span>
                                </span>
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    

           
 	<div class="wrapper pad">
        		 <aside stlye ="top: 0;left: 0;right: 0; " class="right-side">

        
                <!-- Main content -->
                <section class="content no-padding" type=text/ng-template >
                <!-- First row -->
			<div class="row no-padding">
                                        

                             
              <div id="step4" class="col-xs-12 no-padding "  ng-controller="fetchNotificationsController">
                            <div class="box no-padding">
                                
                                <div class="box-body col-lg-4 pad" ng-repeat="notification in notifications | limitTo:3">
                                    <div class="alert alert-danger alert-dismissable bg-red"  style="font-size:14px;font-weight: bold;">
                                       

                                        {{notification.notificationText}}&nbsp <span> <small style="text-align: left">{{notification.timeStamp | timestamp}} </small><i class="fa fa-clock-o"></i></span>
                                    </div>
                                    
                                </div><!-- /.box-body -->
                            </div><!-- /.box -->
                 </div>                 
                 
				 </div>
   <script type="text/ng-template" id="dashboard.jsp">
				

     <jsp:include page="dashboardSection.jsp"></jsp:include>
 
    </script>
   
               
   <script type="text/ng-template" id="fmtools.jsp">
 	<jsp:include page="fmTools.jsp"></jsp:include>
   </script>  

  <jsp:include page="addSuggestion.jsp">
  </jsp:include>
     <div ng-view></div>
 <script type="text/ng-template" id="history.jsp">
				

     <jsp:include page="history.jsp"></jsp:include>
 
    </script>
<div ng-show="notificationSuccess" class="box box-success bg-green popup-notification" id="notificationSuccess">
          </br>
          Notification Added Successfully
</div>
<div ng-show="notificationDeletionSuccess"   class="box box-success bg-green popup-notification" id="notificationSuccess">
          </br>
          Notification Removed Successfully
</div>
<div ng-show="suggestionDeletionSuccess"   class="box box-success bg-green popup-notification" id="notificationSuccess">
          </br>
          Suggestion Removed Successfully
</div>
 <script src="js/take-tour/bootstrap-tour.js" type="text/javascript"></script>   
 <script>
   var tour = new Tour({
     backdrop: true,
      storage:false,
  steps: [
  {
  element: "#step1",
   
    content: "This section shows OPC status for critical technical processes.",
    placement: "top",
  },
  {
    element: "#step2",
    content: "This section shows counts for Non Happy Flow data. Hovering mouse over this will show the details of the NHF data for current day",
     placement: "top",
  },
   {
    element: "#step3",
    content: "This section shows All abended Jobs Data. Hovering mouse over specific tile will show the details of abended jobs for that ICT Product",
     placement: "top",
  },
  {
    element: "#step4",
    content: "This section shows latest three notifications added by users.",
     placement: "bottom",
  },
  {
  element: "#step5",
   
    content: "This section displays count of SEPA payments with high level categorization at current moment.",
    placement: "bottom",
  },
  {
    element: "#step6",
    content: "This section shows daily SEPA payment volume and growth on 24 hour scale.",
     placement: "top",
  } ,
  {
  element: "#step7",
   
    content: "This section is for adding/removing notifications, which are visible to all users of the application.",
    placement: "bottom",
  },
  {
    element: "#step8",
    content: "This section is for checking status of UPC/DO files submitted.",
     placement: "top",
  } ,
  {
    element: "#step9",
    content: "This section displays total number of UPC/DO payment files grouped based on status.",
     placement: "top",
  }  ,
  {
    element: "#step10",
    content: "This section displays suggestion added by the users of the application",
     placement: "bottom",
  }  ,
  {
    element: "#step11",
    content: "This section displays SEPA payment volume and growth for time period provided  by user",
     placement: "bottom",
  } ,
  {
    element: "#step12",
    content: "This section displays total number of SDD and SCT future payments.",
     placement: "top",
  } , 
  {
    element: "#step13",
    content: "This section displays total number of outgoing payments received from different sources graphically",
     placement: "top",
  } ,
  {
    element: "#step14",
    content: "This section displays total number of incoming payments received from different sources graphically",
     placement: "top",
  } ,
  {
    element: "#step15",
    content: "This section displays number of messages queued in IMS based on different sources",
     placement: "top",
  }  ,
  {
    element: "#step16",
    content: "This section displays all STOPPED/LOCKED/SUSPENDED IMS Transactions(BB and GZ)",
     placement: "top",
  } 
]
});

// Initialize the tour
tour.init();

function startTour()
{
if (tour.ended()) {
  tour.restart();
} else {
  tour.init();
  tour.start();
}
}
      </script>
    </body>
</html>