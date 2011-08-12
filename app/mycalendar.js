 
	var hash = window.location.search.substring(1);
	var info = hash.replace(/%20/g," ").replace("eventName=","").replace("loc=","").replace("docId=","");
	var dat=info.split("&",3);
	var eventName=dat[0];
	var loc=dat[1];
	var docId=dat[2];
	var desc="";
//	console.log(dat);
	
		
	var startTime=[];
	var endTime=[];
	var allRecords=[];
if (docId==1){
 allRecords= getDoc("Program.xml", "record");
		for (i=0; i<allRecords.length; i++){
		if (allRecords[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == eventName){
		try {startTime.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);} 
	
		catch (err) { startTime = ["8/30/2011 10:30:00 AM"];}
		try {
		endTime.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);}
		catch (err) { endTime = ["9/2/2011 5:30:00 PM"];}
		
		}
}
//console.log(startTime, endTime);
} else if (docId==2){
allRecords = getDoc("XMLworkshops.xml", "workshop");
		for (i=0; i<allRecords.length; i++){
		if (allRecords[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == eventName){
		try {startTime.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);} 
			catch (err) { 
			desc="All day event";
			startTime=["8/30/2011 10:30:00 AM"];}
		try {endTime.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);}
		
			catch (err) {endTime = ["9/2/2011 5:30:00 PM"]; }
		}
		}
//console.log(startTime, endTime);
} else {console.log("Something wrong...");}

var calendarEvent= {start: parsingDate(startTime[0]),
    end: parsingDate(endTime[0]),
    title: eventName,
    description: desc,
    location: loc};
//console.log(calendarEvent);


function parsingDate(dateData){
	dateString=dateData.replace(/ /g, "/").replace(/:/g,"/");
	var d = dateString.split("/",7);
	var hours=parseInt(d[3]);
	
//	console.log(d);
	if ((d[6]=="PM")&&(hours!=12) )
	hours+=12;
	
	var date = new Date (d[2],d[0]-1,d[1],hours,d[4],d[5]);
//	console.log(date);
	return date;
// new Date = 
}



  $(function () {
	$('#basicICal').icalendar($.extend({sites:['google','yahoo'], copyFlash:''}, calendarEvent));

});