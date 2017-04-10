 $(function() {

               $("#In_Progress").hover(function(event) {
    $("#in-progress-info").css({top: event.clientY, left: event.clientX}).show();
}, function() {
    $("#in-progress-info").hide();
});   
});
 
function showdiv(divid,parentdiv){
    var div = document.getElementById(divid);
    //calculate the position of NHF block on screen
    var position = document.getElementById(parentdiv).getBoundingClientRect();
    var x = position.left;
    //calculate whether remaining space after NHF block is sufficient to display on hover NHF data or not
    var left = ((($(window).width())-($("#"+parentdiv).width()+x)) < $("#"+divid).width())? -($("#"+divid).width()+40) : $("#"+parentdiv).width();
    div.style.left = left;
    div.style.top = "0px";
    $("#"+divid).show();
    return false;
}
function hidediv(divid){
	 $("#"+divid).hide();
	 return false;
}
 
 
