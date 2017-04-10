<!-- Second row  <a ng-if="$first" href="#"><   Previous</a>-->
				 <div id="step5" class="row no-padding"  ng-controller="fetchPaymentsCountController" >
				 	<div  ng-repeat="paymentCount in paymentsCount.paymentStatusCount">
				 		<div ng-if="$first">
				 
							 <div class="col-lg-3 col-md-12 col-sm-12">
				 			 	<div class="small-box bg-blue" style="color:white;">
                                	<div class="inner title box-title ">
                                    	<div class="row">                               
                                        	<div style="border-right: 1px solid #f4f4f4" class="col-xs-4 text-center" ng-repeat="(type, count) in paymentCount.paymentTypeCount">
                                            {{count}}
                                            	<div class="knob-label">{{type}}
                                            	</div>
                                        	</div><!-- ./col -->
                                        </div>
                                    </div>                                                                                    
                                	<a class="small-box-footer no-padding" style="cursor:default"  href="#">
                                   		<p>
                                   			{{paymentCount.statusName.replace('_', ' ')}}
                                   		</p>
                                	</a>
                            	</div>
				 			</div>
				 		</div>
					 </div>
				  	 <div class="col-lg-9 col-xs-12 col-md-12 ">
					 	<div ng-repeat="paymentCount in paymentsCount.paymentStatusCount" >
							<div ng-if="!$first" ng-mouseover="showSub=true">
				 				<div class="col-lg-3 col-xs-12 col-md-6  col-sm-6" >				  
                            	<!-- small box -->
                            		<div class="small-box {{paymentCount.statusName}}" style="color:white" ng-init="showsubstatus=[]" ng-mouseenter="showsubstatus[$index]=true;" ng-mouseleave='showsubstatus[$index]=false'>
                                		<div class="inner small-title ">
                                    		<div class="row">
                                       			<div style="border-right: 1px solid #f4f4f4" class="col-xs-4 text-center" ng-repeat="(type, count) in paymentCount.paymentTypeCount" >                                      
                                            		{{count}}
                                           			 <div class="knob-label">{{type}}
                                           			 </div>
                                        		</div><!-- ./col -->
                                    		</div>                              
                                		</div>                               
                                		<a class="small-box-footer no-padding " style="cursor:default"   href="#">
                                   				<p>
                                         			{{paymentCount.statusName.replace('_', ' ');}}
                                    			</p>
                                		</a>                           
                                		<div   ng-if="paymentCount.subStatusCount!=null" ng-show="showsubstatus[$index]" id="in-progress-info" style="position: absolute; z-index: 1000;" ">								
   											<div class="box box-warning" style="background-color:#FFF5EE">
                                			 	<div class="box-header pad "><h4 class="box-title"><b>Status-wise Payment Count </b></h4>
                                			 	</div>
                                			 	<div class="box-body no-padding">
                                					<table class="table table-condensed" style="bottom:0;padding: 2%;width:100%">
                                       									 <tbody>
                                       									 
                                        									
                                                                    		<th  style="text-align: center"><small>Status</small></th>
                                           			                       
                                            		                       	<th style="text-align: center"><small>Count</small></th>
                                            		                      
                                        			                        </tr>
                                       				                        <tr >
                                                                      		
                                                                       		<tr ng-repeat="(type, count) in paymentCount.subStatusCount">
                                                                      		<td align="center">{{type}} </td>
                                                                      		<td align="center"> {{count}}</td>
                                                                       		</tr>
                                                                       		
                                                                       		</tbody>
                                               		</table>
                                               </div>
                                       		</div>
                                		</div>
                            		</div>
                        		</div>
                        	</div>
                     	</div><!-- ./col -->                                                             
                     </div>
                 </div>
<!-- end second row -->				
<!-- third row -->	
							
				 <div class="row pad " style="" id="opcDiv">
				 	<div class="pad" id="loading-example">                                
                    	<div  id ="step1" class="box-body no-padding ">
                        	<div class="row pad" ng-controller="opcController">  
                                                                     
                            	<div ng-animate="'animate'" ng-repeat="opc in opcList" class="col-lg-1 col-xs-4 col-md-4 ">
                          			
                                	<div class="box {{opc.statusCSSClass}} " id="öpc" style=" " title='{{opc.opcDescriptionTooltip}}' >
                                   		
                                
                                   		<div class="box-header no-padding">                                                                                                             
											<h4 class="box-title-opc">{{opc.groupName}}</h4>                                                                       
                                		</div>
                                   		<div class="box-body no-padding" ng-repeat="run in opc.opcRunCycles"  >
                                 			<center>                                                            
												<knob class="knob" ictProduct="opc" inputColor="red"  fg-color="{{run.knobColor}}" max="{{run.maxTime}}" value={{run.showTime}}></knob>								
												
											</center>
                                 		  	<div class=" box-footer-opc " ng-if='run != null ' style="height:90px">
                                  				</br>
                                  				<center>
                                  					<table style="font-size: 13px;">
                                  						<tr><td > <center><p>{{run.opcName}}</p></center></td> 
                                  						</tr>
                                  						<tr style="text-align: left;" ng-if="run.opcName!='#DBB#DAY'"><td > <small><p>RunCycle - </small> {{run.runCycleStartTime}}</p></td> 
                                  						</tr>
                                  						<tr style="text-align: left;"><td><small> <p ng-if='run.nextCycle'>NextCycle - {{run.nextCycle || ' None '}}</p></small></td>
														</tr>
                                  					</table>
                                  				</center>
                                  			</div>
                                  			<div class=" box-footer-opc " ng-if='run == null' style="height:90px">
                					 			<center>
													<table style="text-align: center;font-size: 13px;">
                                  						<tr><td > </br></td> 
                                  						</tr>
                                  						<tr><td>Not Yet Started
                                  						</td></tr>
                                  					</table>
                                  				</center>                        			
                                  			</div>
                                   		</div>
                                  	</br>
                                   	</div>
                                </div>
                              
                                <div ng-controller="nhfDataController">

								<div id="step2" class="col-lg-1 col-xs-4 col-md-4"  onmouseover="showdiv('nhfinfo','step2')" onmouseout="hidediv('nhfinfo')">
							
									<div class="box {{nhfData.knobNHFCss}}" id="öpc" style="">
										<div class="box-header no-padding">                                                                                                             
											<h4 class="box-title-opc" >PAYMENT</h4>
										</div>
										<div class="box-body no-padding">
											<center>
												<div ng-if="nhfData.onHoverNonHappyFlowList.length==0">
													<knob class="knob" fg-color="{{nhfData.nhfKnobColor}}" max="0" value="60" style="margin-top:32px !Important;"><p class="ictKnobCenterContent">NHF</p></knob>											
												</div>
												<div ng-if="nhfData.onHoverNonHappyFlowList.length > 0"> 
													<knob class="knob" fg-color="{{nhfData.nhfKnobColor}}" max="0" value=60 style="margin-top:32px !Important;"><p class="ictKnobCenterContent">NHF</p></knob>
												</div>
											</center>
											<div class=" box-footer-opc " style="height:90px">
												</br>
												<center>
												<table style="font-size: 13px;">
													<tr style="text-align: left">
														<td><small>AUTO RSND</small></td>
														<td>:</td>
														<td style="text-align: right">{{nhfData.totalCountAutoResend}}</td> 
													</tr>
													
													<tr style="text-align: left">
														<td><small>AUTO SGNL</small></td>
														<td>:</td>
														<td style="text-align: right">{{nhfData.totalCountAutoSignal}}</td> 
													</tr>
													
													<tr style="text-align: left">
														<td><small>MANUAL</small></td>
														<td>:</td>
														<td style="text-align: right">{{nhfData.totalCountManual}}</td> 
													</tr>
							                    </table>
							                    </center>
							                  </div>
							                <br>
										</div>
									</div>
									<div id="nhfinfo" style="position:absolute;display:none;width:240;z-index:1000">								
									<div class="box box-warning" style="background-color:#FFF5EE; width:120%;">
										<div class="box-header pad" >
											<h4 class="box-title" align="center" style="width:100%">                                			 		
												<p><b>Non Happy Flow (NHF)</b><br><br>
												<b>Payment Corrections</b></p>                                                			 		
											</h4>
										</div>
							                                		
										<div class="box-body no-padding ict-detail-table">
											<table class="table table-condensed" style="bottom:0;padding: 2%;width:100%">
												<tbody> 
													<tr style="position: relative;">                                      									            									
														<th style="text-align: center"><small>Process</small></th>                                           			                       
														<th style="text-align: center" ><small>Type</small></th>
														<th style="text-align: center" ><small>Time</small></th>
														<th style="text-align: center" ><small>Count</small></th>                                       		                      
													</tr>
							                                       				      
													<tr ng-repeat="nhf in nhfData.onHoverNonHappyFlowList">
														<td align="center"><small>{{nhf.correctionProcess}}</small></td>
														<td align="center" width="auto"><small>{{nhf.correctionType}}</small></td>
														<td align="center" width="auto"><small>{{nhf.correctionTime}}</small></td>
														<td align="center" width="auto"><small>{{nhf.count}}</small></td>
													</tr>                                                              		
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
                       </div> 
                             
                               <div class="row pad" ng-controller="abendController" >
                                			
     						    		<div id="step3" ng-repeat="ict in abendList" class="col-lg-1 col-xs-4 col-md-4"  ng-init="showsubstatus=[]" ng-mouseenter="showsubstatus[$index]=true;" ng-mouseleave='showsubstatus[$index]=false' >
     						    			<div class="box {{ict.stringCssClass}} title-ict"  id="öpc" style=" ">
     						    				<div class="box-header no-padding">                                                                                                             
													<h4 class="box-title-opc " >{{ict.ictProduct}}</h4>                                                                       
                                				</div>
                                				<div class="box-body no-padding">
                                					<center>                                                            
														<div ng-if="ict.abendedJobs.length==0">
														<knob class="knob" fg-color="{{ict.ictKnobColor}}" max="0" value=60 style="margin-top:32px !Important;"><p class="ictKnobCenterContent">{{ict.abendedJobs.length}}</p></knob>											
													</div>
													<div ng-if="ict.abendedJobs.length!=0"> 
													<knob class="knob" fg-color="{{ict.ictKnobColor}}" max="0" value=60 style="margin-top:32px !Important;"><p class="ictKnobCenterContent">{{ict.abendedJobs.length}}</p></knob>
													</div>
													</center>
												
							
													<div class=" box-footer-opc " ng-if='ict.abendedJobs.length != 0' style="height:90px">
                                  						</br>
                                  						<center>
                                  							<table style="font-size: 13px;">
                            
                                  								<tr><td colspan="3">JOB FAILURE
                                  								</td></tr>
                                  								<tr><td></br></td></tr>
                                  								
                                  								<tr style="text-align: left"><td > <small>5 Minutes</small></td><td>:</td><td style="text-align: right">{{ict.abendCountFiveMin}}</td> 
                                  								</tr>
                                  								<tr style="text-align: left"><td > <small>1 Hour</small></td><td>:</td><td style="text-align: right">{{ict.abendCountOneHr}}</td> 
																</tr>
                                  							</table>
                                  						</center>
                                  					</div>
                                  					<div class=" box-footer-opc " ng-if='ict.abendedJobs.length == 0' style="height:90px">
                					 					<center>
															<table class="ict-table">
																<tr><td></br></td></tr>                                  								
                                  								<tr><td>No</td></tr>                                  							                                								   
                                  								<tr><td>Abended</td></tr>                                                          							
                                  								<tr><td >Jobs</td></tr> 
																
                                  							</table>
                                  						</center>                        			
                                  					</div>
                                  					<br>
                                				</div>
     						    			</div>
     						    			<div   ng-if="ict.abendedJobs.length != 0" ng-show="showsubstatus[$index]" id="in-progress-info" style="position:absolute;margin-top:-245;margin-left:95%;z-index: 1000;">								
   											<div class="box box-warning" style="background-color:#FFF5EE; width:170%;">
                                			 	<div class="box-header pad" >
                                			
                                			
                                			 		<h4 class="box-title" align="center" style="width:100%">                                			 		
                                			 			<p><b>{{ict.ictDetailTableHeading}}</b></br>
                                			 			<b>{{ict.ictProduct}}</b></p>                               			 	                            			 			
                                			 			<b>ABEND JOBS LIST</b>                                	
                                			 		</h4>
                                			 	</div>                                		
                                	
                                			 	<div class="box-body no-padding ict-detail-table">
                                					<table class="table table-condensed" style="bottom:0;padding: 2%;width:100%">
                                       									 <tbody>                                       									            									
                                                                    		<th  style="text-align: center"><small>Job Name</small></th>                                           			                       
                                            		                       	<th style="text-align: center" ><small>Abend Time</small></th>
                                            		                                                               		                      
                                        			                        </tr>
                                       				                        <tr >                                                              
                                                                       		<tr ng-repeat="job in ict.abendedJobs">
                                                                      		<td align="left"><small>{{job.jobName}}</small> </td>
                                                                      		<td align="center" width="auto"><small>{{job.abendDateAndTime | icttimestamp}}</small></td>
                                                                      		
                                                                       		</tr>                                                              		
                                                                       		</tbody>
                                               		</table>
                                               </div>
                                       		</div>
     						 
     						    		</div>
     						 		
     						</div>
     						
<!--                                   <div  class="col-lg-1 col-xs-4 smallpad">-->
<!--                                   <div class="box bg-grey">-->
<!--                                   <div class="box-header no-padding"> -->
<!--                                   <h4 class="box-title-opc">NEED HELP ?</h4>-->
<!--                                   </div>-->
<!--                                   <div class="box-body no-padding" >-->
<!--                                  <center> <a class="btn btn-large btn-primary" href="javascript:void(0);" onclick="startTour();">Take A Tour</a>-->
<!--                                  </center>-->
<!--                                  </br>-->
<!--                                   </div>-->
<!--                                    </div>-->
<!--                                   </div>                            -->
     						</div>
     						<!-- /.row - inside box -->
                        </div><!-- /.box-body -->                                
                    </div><!-- /.box --> 
				
				 
				  
				 
				<!-- Fourth row -->
        
                           <div class="row pad">
                           <div class="col-sm-12  col-xs-12 col-lg-6" ng-controller="fetchIMSQueueCountAndStatusController">
                     	 <div class="col-sm-12  col-xs-12 col-lg-6" >
                                 	<div class="box box-primary" id="step15">
                                 		<div class="box-header">
                                   		<h3 class="box-title" >IMS Queue Count</h3>
                                  		
                                	</div>  
                                	<div class="box-body " style="top:2;">
                                		
				
					<div  class="box box-solid ">
                                		<table class="table table-striped" style="bottom:0 " >
                                       									 <tbody style="">
                                        									<tr >
                                                                    		<th>Source</th>
                                           			                       	<th>Queue Count</th>
                                            		                       	
                                        			                        </tr>
                                       				                        <tr  ng-repeat="imsQueueCount in imsData.imsQueueCountList">
                                                                      		 <td>{{imsQueueCount.sourceName}}</td>
                                                                       		 <td ng-if='imsQueueCount.queueCount == 0' ><span class="badge bg-green">{{imsQueueCount.queueCount}}</span></td>
                                                                    		   	<td ng-if='imsQueueCount.queueCount != 0' ><span class="badge bg-yellow">{{imsQueueCount.queueCount}}</span></td>
                                                                      		   </td>
                                                                       		</tr>

                                   										 </tbody>
                                	 	</table>							
                                									
                                 									
                            			</div>
                            		</div>
                            			
			</div>
															
					<h3 class="box-title" style="top:0 "><small style="color:black" ></small></h3>
																	
				</div>
                               						 						
			
			
			
				
				<div class="col-sm-12  col-xs-12 col-lg-6" >
			<div class="box box-primary" id="step16">
                                 		<div class="box-header">
                                   		<i class="fa  fa-search"></i><h3 class="box-title" >IMS Transactions (BB,GZ) Status</h3>
                                  		
                                	</div>  
                                	<div class="box-body " style="top:2;height:300px;overflow-y: scroll">
                                	<table class="table table-striped" style="bottom:0 ;" ng-show="imsData.imsTransactionStatusDTOList.length" >
                                       									 <tbody>
                                        									<tr >
                                                                    			<th>Transaction </th>
                                           			                       	<th>Status</th>
                                            		                       	
                                        			                        </tr>
                                       				                        <tr ng-repeat="imsStatus in imsData.imsTransactionStatusDTOList">
                                                                      		
                                                                       		 <td>{{imsStatus.transactionName}}</td>
                                                                    		   
                                                                    		    		<td><span class="badge bg-red">{{imsStatus.transactionStatus}}</span></td>
                                                                    		   
                                                                      		   
                                                                       		</tr>
									
                                   						 </tbody>
                                   						 
                                	 	</table>	
                                	 	<div ng-show="!imsData.imsTransactionStatusDTOList.length"><span class="badge bg-green" style="font-size: 15px"> All Transactions (BB,GZ) Started</span></div>
                                	</div>		
				
			</div>
															
					<h3 class="box-title" style="top:0 "><small style="color:black" ></small></h3>
																	
				</div>
                           		</div>
                   <div class="col-sm-12  col-xs-12 col-lg-3" >
				<div class="box box-primary " id="step9">
                                	<div class="box-header">
                                   	 <h3 class="box-title"> Overall File Status</h3>
                                    
                                   	 	<div class="pull-right box-tools">

					</div><!-- /. tools -->
                                    
                                	</div>
                                <div class="box-body ">
                                    <table class="table table-condensed" style="bottom:0 " ng-controller="AllFileStatusController">
                                       									 <tbody>
                                        									<tr >
                                                                    		<th>Status</th>
                                           			                       	<th>Comments</th>
                                            		                       	<th>Count</th>
                                        			                        </tr>
                                       				                        <tr title='{{file.fileStatusToolTip}}' ng-repeat="file in files">
                                                                      		 <td>{{file.fileStatus}}</td>
                                                                       		 <td>{{file.statusDesc}}</td>
                                                                    		   <td id="popup_window" >	 <span class="badge {{file.statusCSSClass}}" >{{file.fileCount}}</span>
                                                                      		   </td>
                                                                       		</tr>

                                   										 </tbody>
                                 </table>
                                </div><!-- /. -->
                             
                            		</div>  
			</div>
			
				
		</div>				
                     
                    <div class="row pad" id="step6" ng-controller="paymentsGraphController" >
                       
                     					 <div class="col-sm-12  col-xs-12 col-lg-3 pad"  ng-repeat="paymentGraphData in paymentsGraphData">
                            				 <div class="box box-primary"  >
                               					<div class="box-header">
                                					
                                  				 		 <h3 class="box-title"> {{paymentGraphData.paymentType | opcname}}  </h3>
                                  				 		<div class="pull-right box-tools" >( {{paymentGraphData.paymentCount[latestKey]}} )</div>
                                   				</div>
                               					<div class="box-body no-padding">  
	 											<div id="{{paymentGraphData.paymentType}}"   chart style="height:200px;"   ng-model='paymentGraphData.paymentCount'></div> 				
												</div>
											 </div>
										</div>
		</div>   	
		<div class="row pad">
                      <div class="col-sm-12  col-xs-12 col-lg-6 " >
					<div class="box box-primary" id="step12" ng-controller="systemLoadController">
                                			<div class="box-header">
                                    				<i class="fa fa-signal"></i><h3 class="box-title">
                                    				Load Prediction</h3>
                                    			 <div class="pull-right box-tools" ><button ng-click="refreshData()"><i class="fa fa-refresh"></i> Refresh</button></div>
                               			 </div>
                               			
                                			<div class="box-body" >
                                 				<div  id="placeholder1" systemload ng-model='systemLoadData' style="height:250px;"></div>    
						</div>
                                    
                                    
                               			
                                			
                                		</div>
                           		 </div>
					<div class="col-sm-12  col-xs-6 col-lg-3 " >
					<div class="box box-primary" id="step13">
                                			<div class="box-header">
                                    				<h3 class="box-title">
                                    				Outgoing Source-wise Count</h3>
                                    
                               			 </div>
                                			<div class="box-body chat"  ng-controller='sourcePieControllerOutgoing' >
                                			 <div id="placeholder" piechart ng-model='pieDataOutgoing' style="height:250px;"></div>  
                                    			
                               			 </div>
                                			<div class="box-footer">
                                    <center><div id="chartLegendO" class="pad " ></div></center>
                                			</div>
                                		</div>
                           		 </div>
                 <div class="col-sm-12  col-xs-6 col-lg-3 " >
					<div class="box box-primary" id="step14">
                                			<div class="box-header">
                                    				<h3 class="box-title">
                                    				Incoming Source-wise Count</h3>
                                    
                               			 </div>
                                			<div class="box-body chat"  ng-controller='sourcePieControllerIncoming' >
                                			 <div id="placeholder" piechart ng-model='pieDataIncoming' style="height:250px;"></div>  
                                    			
                               			 </div>
                                			<div class="box-footer">
                                    <center><div id="chartLegendI" class="pad " ></div></center>
                                			</div>
                                		</div>
                   </div>
                    </div>  	
             </section><!-- /.content -->
           
        </div><!-- ./wrapper -->                   
                           
                          
                       
                   
