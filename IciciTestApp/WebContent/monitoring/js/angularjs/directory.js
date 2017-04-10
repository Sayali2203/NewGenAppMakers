 


myApp.directive('knob', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
         
           element.val(attrs.value).knob(
           {
          
        	 fgColor:attrs.fgColor,
        	 displayLable:"Time",	
        	 max:attrs.max,
        	 displayinput :true,
        	 height:80,
        	 width:80
           });
        }
    };
});

myApp.directive('ticker', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
    	
    	
            $(element).liScroll({travelocity: 0.07});
        }
    };
});
myApp.directive('chart', function($rootScope){
    return{
        restrict: 'EA',
        link: function(scope, elem, attrs){
    	
    	var chart = null,
           options = {
            		grid: {
                hoverable: true,
                borderColor: "#f3f3f3",
                borderWidth: 1,
                tickColor: "#f3f3f3"
               
                
            },
            series: {
                shadowSize: 0,
                lines: {
                    show: true
                },
                points: {
                    show: false
                    
                }
            },
            lines: {
                fill: false,
                color: ["#3c8dbc", "#f56954"]
            },
            yaxis: {
                show: true,
                tickDecimals:0,
                axisLabel: 'No Of Payments',
               axisLabelPadding: 1,
               min: 0,
               tickDecimals:0
            },
            xaxis: {
                show: true,
                tickSize: 2,
                tickDecimals:0,
                axisLabel: 'Hours',
                axisLabelPadding: 1,
                min: 0, // start of today
               
                max: 24 // end of today
            }
            };
    	  
                      
            var series = [];
            var series2 = [];
            var d = new Date();
           
            var min=d.getHours();
            var data=attrs.chartdata;
           
            
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $(elem).bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(0);

                    $("#line-chart-tooltip").html("Payment count at " + x + " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }

            });
           
            scope.$watch(attrs.ngModel, function(v){
            	
            	if(!chart){
                	
                	var data=v;
                	
                	var key;
                     for(key in data) {
                     
                     	series.push([key,data[key]]);
                     	
                      }
                     
                    
                   
                     var counter=0;
                     scope.latestKey=key;
                   
                     var line_data1 = {
                             data: series,
                            color: "#f39c12"
                          
                         };
                     var line_data2 = {
                             data: series2,
                            color: "#f39c12"
                          
                         };

                	 chart = $.plot($(elem), [line_data1], options);
                    elem.show();
                }
            	else{
                	
            		series = [];
            		var data=v;
            		var key;
                    for(key in data) {
                    	series.push([key,data[key]]);
                       }
                    scope.latestKey=key;
                    var counter=0;
                    var line_data1 = {
                             data: series,
                           color: "#f39c12"
                         
                         };
                 
                    chart = $.plot($(elem), [line_data1], options);
                }
            },true);
            
                
           
        }
    };
});
myApp.directive('piechart', function(){
    return{
        restrict: 'EA',
        link: function(scope, elem, attrs){
    	var id = null;
        if(attrs.ngModel == "pieDataIncoming"){
        	id="I";
        }
        if(attrs.ngModel == "pieDataOutgoing"){
        	id="O";
        }
        var chart = null,
         options = {
        		colors : ['#3498db','#2ecc71','#f39c12','#d35400','#16a085','#e74c3c','#e67e22','#8e44ad'],
        	    series: {
        	        pie: {
        	
        	            show: true,
        	            
        	            radius: 1,
        	            label: {
        	                show: true,
        	                radius: 2 / 3,
        	                formatter: function (label, series) {
        	                    return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+series.data[0][1] +'</div>';
        	                },
        	                threshold: 0.1,
        	                background: {
        	                    opacity: 2
        	                   
        	                }
        	            }
        	        }
        	    },
	        	    
        	    grid: {
        	        hoverable: true
        	    },
        	    tooltip: true,
        	      tooltipOpts: {
        	    	content: "%y.0 payments were received from %s ", // 
                    shifts: {
        	          x: 20,
        	          y: 0
        	        },
        	        defaultTheme: true
        	    },
        	    legend: {
        	        show: true,
        	        noColumns: 3,
        	        container: $("#chartLegend"+id),
        	        labelFormatter: function(label, series) {
        	            var percent= (series.percent).toFixed(2);
        	            var number= series.data[0][1]; //kinda weird, but this is what it takes
        	            return('<b>'+label+'</b>: '+number);
        	        }
        	        	
        	    }

        	};
       
        var data = scope[attrs.ngModel];            
       
       
        // If the data changes somehow, update it in the chart
        scope.$watch(attrs.ngModel, function(v){
             if(!chart){
                chart = $.plot(elem, v , options);
                elem.show();
            }else{
            	 chart.setData(v);
                chart.setupGrid();
                chart.draw();
            }
        });
    }};
});
myApp.directive('systemload', function(){
    return{
        restrict: 'EA',
        link: function(scope, elem, attrs){
    	
    	
            var chart = null,
                options = {
            	colors :['#F2AD21','#00a65a'],
            		valueLabels: {
                show: true
            },
            		xaxis: {
            	axisLabel: 'Date',
            	mode: "time",
                timeformat: "%d %b",
                tickSize: [1, "day"],
                tickLength:1
            	
             },    valueLabels: {
                    show: true
                },
                grid: {
        	        hoverable: true,
        	        tickLength: 0
        	    },tooltip: true,
        	      tooltipOpts: {
        	    	content: function(label, x, y) {
                    // format the content of tooltip
                    return parseInt(y) +" "+ label+" payments received for "+
                    moment(new Date(x)).format("Do MMM");
                },
        	    	//content: "%y %s payments registered for  %x  ", // 
                    shifts: {
        	          x:100,
        	          y: 0
        	        },
        	        defaultTheme: true
        	    },
            		series: {
                	  stack: true,
                bars: {
                order:1,
                show: true,
            	align: "center",
            	barWidth: 1000 * 60 * 60 * 10,
            	fill: true
                },
                yaxis : {
                	 tickLength: 0
                   
                }
            }
              };
                    
            var data = scope[attrs.ngModel];            
            
            // If the data changes somehow, update it in the chart
            scope.$watch('systemload', function(v){
                 if(!chart){
                    chart = $.plot(elem, v , options);
                    elem.show();
                }else{
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
    };
});
myApp.directive('historychart', function($rootScope){
    return{
        restrict: 'EA',
        link: function(scope, elem, attrs){
    	
    	var chart = null,
           options = {
            		grid: {
                hoverable: true,
                borderColor: "#f3f3f3",
                borderWidth: 1,
                tickColor: "#f3f3f3"
               
                
            },
            series: {
                shadowSize: 0,
                lines: {
                    show: true
                },
                points: {
                    show: false
                    
                }
            },
            lines: {
                fill: false,
                color: ["#3c8dbc", "#f56954"]
            },
            yaxis: {
                show: true,
                tickDecimals:0,
                axisLabel: 'No Of Payments',
               axisLabelPadding: 1,
               min: 0,
               tickDecimals:0
            },
            xaxis: {
                show: true,
                tickDecimals:0,
                axisLabel: 'Date',
                axisLabelPadding: 1,
                mode: "time",
              tickSize: [scope.tickSize, "day"],
              timeformat: "%d %b"
            }
            };
    	  
                      
            var series = [];
            var series2 = [];
            var d = new Date();
           
            var min=d.getHours();
            var data=attrs.chartdata;
           
            
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $(elem).bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0],
                            y = item.datapoint[1].toFixed(0);

                    $("#line-chart-tooltip").html("Payment count on " + moment(new Date(x)).format("DD MMM 'YY")+ " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }

            });
           
            scope.$watch(attrs.ngModel, function(v){
            	
            	if(!chart){
                	
                	var data=v;
                	
                	var key;
                     for(key in data) {
                    
                     	series.push([new Date((key)),data[key]]);
                     	
                      }
                     
                    
                   
                     var counter=0;
                     
                   
                     var line_data1 = {
                             data: series,
                            color: "#f39c12"
                          
                         };
                     

                	 chart = $.plot($(elem), [line_data1], options);
                    elem.show();
                }
            	else{
                	
            		series = [];
            		var data=v;
            		var key;
                    for(key in data) {
                    	series.push([key,data[key]]);
                       }
                    scope.latestKey=key;
                    var counter=0;
                    var line_data1 = {
                             data: series,
                           color: "#f39c12"
                         
                         };
                 
                    chart = $.plot($(elem), [line_data1], options);
                }
            },true);
            
                
           
        }
    };
});
