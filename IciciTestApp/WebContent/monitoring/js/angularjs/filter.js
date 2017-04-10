angular.module('ng').filter('timestamp', function () {
	 return function (timestamp) {
		
		
		 var datetime=timestamp.split(' ');
		 
		var date=datetime[0].split('-');
		
		 return date[2]+'/'+date[1]+'/'+date[0]+" "+datetime[1].substring(0,8);
	 }
	 
	
 });

angular.module('ng').filter('icttimestamp', function () {
	 return function (timestamp) {
		
		
		 var datetime=timestamp.split(' ');
		 
		var date=datetime[0].split('-');
		
		 return date[0]+'/'+date[1]+'/'+date[2]+" "+datetime[1].substring(0,5) + " "+datetime[2];
	 }
	 
	
});
 angular.module('ng').filter('opcname', function () {
	 return function (opcnamewithindicator) {
		var opcname=opcnamewithindicator.split('_');
		if(opcname.length>1)
			{
			if(opcname[1]=='I')
				{
				opcname[1]='Incoming';
				}
			else if(opcname[1]=='O')
				{
				opcname[1]='Outgoing';
				}
			}
		
		 return opcname[0] +" "+ opcname [1];
	 }
	 
	
 });