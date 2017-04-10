<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content ">
            <form ng-controller="addSuggestionController" ng-submit="addSuggestion()">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">close</button>
            <h4 class="modal-title" id="myModalLabel">Add Suggestions</h4>
            </div>
            
            <div class="modal-body ">
            <div ng-show="suggestionSuccess" class="box box-success bg-green " id="suggestionSuccess">
          	
         &nbsp Your suggestion Added Successfully. &nbspThank you ..!!
	</div>
            <div class="form-group">
          <label for="Name">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
        </div>
          
            <div class="form-group">
          <label for="Suggestion">Suggestion:</label>
          <textarea  class="form-control" id="notificationText" placeholder="Enter suggestion"></textarea>
        	</div>
            
            </div>
            
            <div class="modal-footer">
            
<!--                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
                <button type="submit" class="btn btn-primary" >Submit</button>
       	 </div>
       	 </form>
    </div>
  </div>
</div>