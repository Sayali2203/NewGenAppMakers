			
$(function() {
/*
             * Custom Label formatter
             * ----------------------
             */
            function labelFormatter(label, series) {
            	
                return "<div style='font-size:12px; text-align:center; padding:1px; color: #fff; font-weight: 600;'>"
                        
                        + Math.round(series['data'][0][1]) + "</div>";
            }
            
          
   		 
            /*
             * LINE CHART
             * ----------
             */
            //LINE randomly generated data

            var lineDate = [], cos = [];
            var counter=0;
            for (var i = 1; i < 25; i += 0.05) {
            	counter++;
            	if(counter==12)
            	{
            		counter=0;
            		i+=0.45;
            		}
            	lineDate.push([i,Math.floor(i)*i]);
               // cos.push([i, (i-Math.random())*Math.random()]);
            }
            var line_data1 = {
                data: lineDate,
               color: "#f39c12"
             
            };
            
            
            $.plot("#line-chart", [line_data1], {
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
                        show: true
                        
                    }
                },
                lines: {
                    fill: false,
                    color: ["#3c8dbc", "#f56954"]
                },
                yaxis: {
                    show: true,
                    axisLabel: 'No Of Payments',
                    
                    axisLabelPadding: 1
                },
                xaxis: {
                    show: true,
                    tickSize: 2,
                    axisLabel: 'Time',
                    
                    axisLabelPadding: 1
                }
            });
            //Initialize tooltip on hover
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $("#line-chart").bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                    $("#line-chart-tooltip").html("Payment count at " + x + " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }

            });
            /* END LINE CHART */
            
            
             /*
             * LINE CHART
             * ----------
             */
            //LINE randomly generated data

            var lineDate = [], cos = [];
            for (var i = 1; i < 25; i += 1) {
            	lineDate.push([i,Math.floor((i)*Math.random()*(Math.random()*750))]);
                // cos.push([i, i*Math.random()]);
            }
            var line_data1 = {
                data: lineDate,
                
                color: "#2980b9"
            };
            
            $.plot("#line-chart1", [line_data1], {
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
                        show: true
                    }
                },
                lines: {
                    fill: false,
                    color: ["#3c8dbc", "#f56954"]
                },
                yaxis: {
                    show: true,
                    axisLabel: 'No Of Payments',
                    
                    axisLabelPadding: 1
                },
                xaxis: {
                    show: true,
                    tickSize: 2,
                    axisLabel: 'Time',
                    
                    axisLabelPadding: 1
                }
            });
            //Initialize tooltip on hover
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $("#line-chart1").bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                    $("#line-chart-tooltip").html("Payment count at " + x + " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }

            });
            /* END LINE CHART */
            /*
             * LINE CHART
             * ----------
             */
            //LINE randomly generated data

            var lineDate = [], cos = [];
            for (var i = 1; i < 25; i += 1) {
            	lineDate.push([i,Math.floor((i)*Math.random()*(Math.random()*750))]);
            }
            var line_data1 = {
                data: lineDate,
               
                color: "#16a085"
            };
            
            $.plot("#line-chart2", [line_data1], {
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
                        show: true
                    }
                },
                lines: {
                    fill: false,
                    color: ["#3c8dbc", "#f56954"]
                },
                yaxis: {
                    show: true,
                    axisLabel: 'No Of Payments',
                    
                    axisLabelPadding: 1
                },
                xaxis: {
                    show: true,
                    tickSize: 2,
                    axisLabel: 'Time',
                    
                    axisLabelPadding: 1
                }
            });
            //Initialize tooltip on hover
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $("#line-chart2").bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                    $("#line-chart-tooltip").html("Payment count at " + x + " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }

            });
            /* END LINE CHART */
            
            
             /*
             * LINE CHART
             * ----------
             */
            //LINE randomly generated data

            var lineDate = [], cos = [];
            for (var i = 1; i < 25; i += 1) {
            	lineDate.push([i,Math.floor((i)*Math.random()*(Math.random()*750))]);
                // cos.push([i, i*Math.random()]);
            }
            var line_data1 = {
                data: lineDate,
                
                color: "#8e44ad"
            };
            
            $.plot("#line-chart3", [line_data1], {
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
                        show: true
                    }
                },
                lines: {
                    fill: false,
                    color: ["#3c8dbc", "#f56954"]
                },
                yaxis: {
                    show: true,
                    axisLabel: 'No Of Payments',
                    
                    axisLabelPadding: 1
                },
                xaxis: {
                    show: true,
                    tickSize: 2,
                    axisLabel: 'Time',
                    
                    axisLabelPadding: 1
                }
            });
            //Initialize tooltip on hover
            $("<div class='tooltip-inner' id='line-chart-tooltip'></div>").css({
                position: "absolute",
                display: "none",
                opacity: 0.8
            }).appendTo("body");
            $("#line-chart3").bind("plothover", function(event, pos, item) {

                if (item) {
                    var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                    $("#line-chart-tooltip").html("Payment count at " + x + " was  " + y)
                            .css({top: item.pageY + 5, left: item.pageX + 5})
                            .fadeIn(200);
                } else {
                    $("#line-chart-tooltip").hide();
                }
                /* END LINE CHART */
               
                // Bind a listener to the "jqplotDataClick" event.  Here, simply change
                // the text of the info3 element to show what series and ponit were
                // clicked along with the data for that point.
               
               
            });
});