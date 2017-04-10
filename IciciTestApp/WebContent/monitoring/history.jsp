<div class="wrapper pad">
        		 <aside stlye ="top: 0;left: 0;right: 0; " class="right-side">

        
                <!-- Main content -->
                <section class="content pad"   ng-controller="showHistoricalDateGraphController" >
                <!-- First row -->
			<div class="row no-padding">
				<div class="col-sm-12  col-xs-12 col-lg-12 " id="step11">
					<div class="box box-primary" >
						<form  ng-submit="showHistoricalGraph()" >
                                			<div class="box-header">
                                    			<h3 class="box-title"><i class="fa  fa-bar-chart-o"></i> Historical Graph</h3>
                                    
                                    			<div class="pull-right box-tools">

						</div>
                                    
                               			 </div>
                               			 <div class="modal-header">
          					 <label for="Name">Periodic Graph  - </label>
          					 <div class="btn-group">
                					 <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                 						  <span data-bind="label">Select Period</span>&nbsp;<span class="caret"></span>
                					 </button>
                					 <ul class="dropdown-menu" role="menu" >
                  						 <li><a href="javascript:void(0);" ng-click="updateDates(7)">Last 7 days</a></li>
                  						 <li><a href="javascript:void(0);" ng-click="updateDates(15)">Last 15 Days</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="updateDates(30)">Last 30 Days</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="updateDates('currentmonth')">Current Month</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="enterPeriod=true;">Enter Period </a></li>
                					 </ul>
                					
               					</div>
            					</div>
            					
                                			<div class="modal-body " ng-show="enterPeriod">
            						
            						<div class="form-group">
            						
         								<label for="From">From:</label>
         								 <input type="text" class="" ng-model="fromDate" id="fromDate"  placeholder="Enter from date " />
        
          							<label for="To">To:</label>
        							          <input  type="text" class="" ng-model="toDate" id="toDate" placeholder="Enter to date "></input>
        							
        							<button type="submit" class="btn btn-primary" >Submit</button>
        							</br>
        							<small STYLE=font-style:italic "> Date Format - DD-MM-YYYY</small>
        							</div>
            
            					</div>
            					
                                			<div class="box-footer pull-left"  ng-show="paymentsGraphData">
                                    	 		  <h4 ng-if='fromDateLabel!=toDateLabel'> 
                                    	 		  <i class="fa  fa-calendar"></i> {{fromDateLabel}}  <small>To </small>  {{toDateLabel}}</h4>
                                    	 		  <h4 ng-if='fromDateLabel==toDateLabel'> 
                                    	 		  <i class="fa  fa-calendar"></i> {{fromDateLabel}}  </h4>
                                			</div>
                                			</form>
                                		</div>
                            </div>			

			
			
			
			
     			<div class="col-sm-12  col-xs-12 col-lg-3 pad"  ng-repeat="paymentGraphData in paymentsGraphData">
                            				
                            		 <div class="box box-primary"  >
                               		<div class="box-header">
                                					
                                  			<h3 class="box-title"> {{paymentGraphData.paymentType | opcname}}  </h3>
                                  				 		
                                   		</div>
                                   		
                               		<div class="box-body no-padding" ng-if='paymentGraphData.paymentCount' >  
	 				<div id="{{paymentGraphData.paymentType}}"  ng-if='!paymentGraphData.timeWise' historychart style="height:200px;"   ng-model='paymentGraphData.paymentCount'></div> 				
					<div id="{{paymentGraphData.paymentType}}" ng-if='paymentGraphData.timeWise'  chart style="height:200px;"   ng-model='paymentGraphData.paymentCount'></div>
					</div>
					
					<div ng-if='!paymentGraphData.paymentCount'>
					</br>
					<center><small>No Data Found</small></center>
					</br>
					</div>
					 </div>
			</div>
			</div>
			<div class="row no-padding">
				<div class="col-sm-12  col-xs-12 col-lg-12 " id="step10">
					<div class="box box-primary" >
						<form  ng-submit="showHistoricalGraph2()" >
                                			<div class="box-header">
                                    			<h3 class="box-title"><i class="fa  fa-bar-chart-o"></i> Compare Historical Graph</h3>
                                    
                                    			<div class="pull-right box-tools">

						</div>
                                    
                               			 </div>
                               			 <div class="modal-header">
          					 <label for="Name">Periodic Graph 2 - </label>
          					 <div class="btn-group">
                					 <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                 						  <span data-bind="label">Select Period</span>&nbsp;<span class="caret"></span>
                					 </button>
                					 <ul class="dropdown-menu" role="menu" >
                  						 <li><a href="javascript:void(0);" ng-click="updateDates2(7)">Last 7 days</a></li>
                  						 <li><a href="javascript:void(0);" ng-click="updateDates2(15)">Last 15 Days</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="updateDates2(30)">Last 30 Days</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="updateDates2('currentmonth')">Current Month</a></li>
                   						 <li><a href="javascript:void(0);" ng-click="enterPeriod2=true;">Enter Period </a></li>
                					 </ul>
                					
               					</div>
            					</div>
            					
                                			<div class="modal-body " ng-show="enterPeriod2">
            						
            						<div class="form-group">
            						
         								<label for="From">From:</label>
         								 <input type="text" class="" ng-model="fromDate2" id="fromDate2"  placeholder="Enter from date " />
        
          							<label for="To">To:</label>
        							          <input  type="text" class="" ng-model="toDate2" id="toDate2" placeholder="Enter to date "></input>
        							
        							<button type="submit" class="btn btn-primary" >Submit</button>
        							</br>
        							<small STYLE=font-style:italic "> Date Format - DD-MM-YYYY</small>
        							</div>
            
            					</div>
            					
                                			<div class="box-footer pull-left"  ng-show="paymentsGraphData2">
                                    	 		  <h4 ng-if='fromDateLabel2!=toDateLabel2'> 
                                    	 		  <i class="fa  fa-calendar"></i> {{fromDateLabel2}}  <small>To </small>  {{toDateLabel2}}</h4>
                                    	 		  <h4 ng-if='fromDateLabel2==toDateLabel2'> 
                                    	 		  <i class="fa  fa-calendar"></i> {{fromDateLabel2}}  </h4>
                                			</div>
                                			</form>
                                		</div>
                            </div>			

			
			
			
			
     			<div class="col-sm-12  col-xs-12 col-lg-3 pad"  ng-repeat="paymentGraphData in paymentsGraphData2">
                            				
                            		 <div class="box box-primary"  >
                               		<div class="box-header">
                                					
                                  			<h3 class="box-title"> {{paymentGraphData.paymentType | opcname}}  </h3>
                                  				 		
                                   		</div>
                               		<div class="box-body no-padding" ng-if='paymentGraphData.paymentCount'>  
                               		
	 					<div id="{{paymentGraphData.paymentType}}"  ng-if='!paymentGraphData.timeWise' historychart style="height:200px;"   ng-model='paymentGraphData.paymentCount'></div> 				
					<div id="{{paymentGraphData.paymentType}}" ng-if='paymentGraphData.timeWise'  chart style="height:200px;"   ng-model='paymentGraphData.paymentCount'></div> 				
					</div>
					 <div ng-if='!paymentGraphData.paymentCount'>
					</br>
					<center><small>No Data Found</small></center>
					</br>
					</div>
					 </div>
					 
			</div>
			</div>
   	</section> 
   	</aside>
  </div>
  
  