function startTime() {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML = h+":"+m+":"+s;
	
	setTimeout(function(){startTime()},500);
	
	getNextRing(h,m);
	//getNextRing(10, 25, 1);
}

function getNextRing(h,m, time){
	$('#saraksts table tr').each(function(index){
		$(this).find('td').css("background-color", "white");
		
		var stundanr = $(this).children('td:nth-child(1)').text();		
		var test = $(this).children('td:nth-child(2)').text();		
		var test2 = $(this).children('td:nth-child(3)').text();		
		var myArray = test.split(':');
		var myArray2 = test2.split(':');
		var h1 = myArray[0];
		var m1 = myArray[1];
		var h2 = myArray2[0];
		var m2 = myArray2[1];
		var startTimeObject = new Date();
		startTimeObject.setHours(h, m, 0);
		var date = new Date();
		var weekday = date.getDay();
		
		var endTimeObject = new Date(startTimeObject);
		endTimeObject.setHours(h1, m1, 0);
		var endTimeObject2 = new Date(startTimeObject);
		endTimeObject2.setHours(h2, m2, 0);
		
		if((startTimeObject < endTimeObject) && ((weekday != 6) || (weekday !=7))){
			nextRing = test;
			
			$('#nextring').html(nextRing + " (sākas "+stundanr+")");
			return false;
		}else if((startTimeObject < endTimeObject2) && ((weekday != 6) || (weekday !=7))){
			nextRing = test2;
			
			$(this).children('td').css("background-color", "#ececec");	// iekrāsojam stundu
			$('#nextring').html(nextRing + " (beidzas "+stundanr+")");
			return false;
		}	  	
	});	
}


function checkTime(i) {
	if (i<10) {i = "0" + i};
	return i;
}

$(document).ready(function(){
	startTime();
	console.log('`Stundu saraksts` © Edgars Počs 2016');
});