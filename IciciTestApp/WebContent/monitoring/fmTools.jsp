<div class="wrapper pad">
        		 <aside stlye ="top: 0;left: 0;right: 0; " class="right-side">

        
                <!-- Main content -->
                <section class="content pad" type=text/ng-template id=dashbia.html>
                <!-- First row -->
			<div class="row no-padding">
				<div class="col-sm-12  col-xs-12 col-lg-6 " >
					<div class="box box-primary" id="step7">
                                			<div class="box-header">
                                    			<h3 class="box-title"><i class="fa fa-comments-o"></i> Add New  Notification</h3>
                                    
                                    			<div class="pull-right box-tools">

						</div>
                                    
                               			 </div>
                                			<div class="box-body chat" id="chat-box"  >
                                  				<form ng-controller="addNotificationController" ng-submit="addNotification()">
                                  				 <div class="input-group"> 
                                        			<input class="form-control" name="notificationTextMessage" id="notificationTextMessage" placeholder="Type message..."/>
                                        			<div class="input-group-btn">
                                           				 <button class="btn btn-primary"><i class="fa fa-plus"></i></button>
                                       				 </div>
                                    				</div> 
                                    				</form>
                                   				<div ng-controller="removeNotificationController">
                                     					 <div class="box-header">
                                      					 <h3 class="box-title" style="font-weight: bold;"> Active Notifications</h3></br>
                                       					</div>
                                      					 <div class="pad" style="height:150px;overflow: scroll">
                                      					 <div ng-repeat="notification in notifications" >
                                       					<p class="message" >
                                        					{{notification.notificationText}}<small class="text-muted  pad"><i class="fa fa-clock-o"></i>  {{notification.timeStamp | timestamp}}</small>
                                            					<a href="#" class="pull-right" ng-click="removeNotification(notification.userId,notification.timeStamp)">Remove 
                                            					 </a>
                                           
                                        				</p>
                                       					</div>
                                        				</div>
                                    				</div>
                                    
                                    
                                			</div>
                                			<div class="box-footer">
                                    
                                			</div>
                                		</div>
                            </div>			

			
			<div class="col-sm-12  col-xs-12 col-lg-6 " id="step10">
					<div class="box box-primary" >
                                			<div class="box-header">
                                    			<h3 class="box-title"><i class="fa fa-comments-o"></i> Suggestions</h3>
                                    
                                    			<div class="pull-right box-tools">

						</div>
                                    
                               			 </div>
                                			<div class="box-body chat" id="chat-box" ng-controller="fetchSuggestionsController" >
                                  				
                                   				<div ng-controller="removeNotificationController">
                                     					 <div class="box-header">
                                      					 
                                       					</div>
                                      					 <div class="pad" style="height:225px;overflow: scroll">
                                      					 <div ng-repeat="suggestion in suggestions" >
                                       					<p class="message" >
                                        					{{suggestion.userId}} - {{suggestion.notificationText}}<small class="text-muted  pad"><i class="fa fa-clock-o"></i>  {{suggestion.timeStamp | timestamp}}</small>
                                            					 <a href="#" class="pull-right" ng-click="removeSuggestion(suggestion.userId,suggestion.timeStamp)">Remove
                                            					 </a>
                                           
                                        				</p>
                                       					</div>
                                        				</div>
                                    				</div>
                                    
                                    
                                			</div>
                                			<div class="box-footer">
                                    
                                			</div>
                                		</div>
                            </div>			
			<div class="col-sm-12  col-xs-12 col-lg-6" >
                                 	<div class="box box-primary" id="step8">
                                 		<div class="box-header">
                                   		<h3 class="box-title" > Check File Status</h3>
                                  		<div class="pull-right box-tools">

					</div>
                                	</div>  
                                	<div class="box-body " ng-controller="fetchFileDetailController" style="top:2;">
                                		<form id="fileDetailForm" class="form-search" ng-submit="getFileDetail()" style="">
								<div class="form-group"  style="bottom:0;" ng-controller="autocompleteController">
											<div class="row pad" style="">
												<div class="col-sm-10 col-xs-10 ui-widget " >
															
													<input ng-click="setDefaultValues()" ng-model="fileName"  id="fileName" name="fileName"  style=" font-size: 10px;"   placeholder="Search File " class="form-control" />
      												</div>
                                 						 		<div class="col-sm-2 col-xs-2">
                                  									<button   ng-click='fileSelected=true;' type="submit" class="pull-right btn  btn-primary"  >
											                  Search <i class="fa fa-arrow-circle-right"></i>
															</button>
                              							  	 </div>
                              									 <div style="height:150px;overflow-y: auto;overflow-x: hidden;width:100%" ng-show="fileName && !fileSelected">	
      													 <p class="message pad"   style="list-style:none;font-size:15px;" ng-animate="animate" ng-repeat="file in fileNames | filter:fileName" >
      													 <a href="javascript:void(0)" ng-click="setFileName(file)"> {{file}} 
      													 </a>
      													 </p> 
      													 </div>
												</div>
								</div>
					</form>	
				<div  class="box-footer clearfix">
					<div ng-show="$root.fileSearched && fileDetail.fileName" class="box box-solid {{fileDetail.statusCSSClass}}">
                                									
                                									<div class="box-header" >
                                   									<h3 class="box-title" >{{fileDetail.fileName}}</h3>
                                   										 <div class="pull-right box-tools">
                                    										<button onclick="return false" class="btn {{fileDetail.statusCSSClass}} btn-xs" ng-click="$root.fileSearched=false"  title="Remove"><i class="fa fa-times"></i></button>
                                   		 						 		</div><!-- /. tools -->
                                									</div>
                                									<div class="box-body" style="text-align: left" >
                                   									  		  Status: <code>{{fileDetail.statusDesc}}</code>
                                    									  <p >Start Time - {{fileDetail.insertTime}}</br>Last Update Time - {{fileDetail.lastUpdateTime}}
                                    									  </p>
                                 									 </div>
                                 									 <!-- /.box-body -->
                                 									
                            			</div>
				</div>
			</div>
															
					<h3 class="box-title" style="top:0 "><small style="color:black" ></small></h3>
																	
				</div>
                               						 						

			</div>
			</div>
    
   	</section> 
   	</aside>
  </div>
  