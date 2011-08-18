 
	var hash = window.location.search.substring(1);
	console.log(hash);
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
console.log(startTime, endTime);
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
console.log(startTime, endTime);
} else {console.log("Something wrong...");}

var calendarEvent= {start: parsingDate(startTime[0]),
    end: parsingDate(endTime[0]),
    title: eventName,
    description: desc,
    location: loc};
console.log(calendarEvent);
var txt = "<h4>Event:</h4> "+eventName+"<h4>Location:</h4>"+loc+"<h4>Start time: </h4>" +startTime[0]+ "<h4>End time: </h4>"+endTime[0];





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
  //$(function () {
//	$('#basicICal').icalendar($.extend({sites:['google','yahoo','outlook']}, calendarEvent));

//});


function init(){
	
var eventHolder=document.getElementById("eventPlace");
eventHolder.innerHTML=txt;
}

/*
function init(){
	var locCalendar= "<a href='appcalendar.htm?"+hash+"' class='ibutton'><b>Local calendar</b></a>";	
	var btnPlace = document.getElementById("basicICal2");
	btnPlace.innerHTML = locCalendar;
}	
*/



$(document).ready(function() {

  $('.event').AddToCal({
    // ical and vcal require an ics or vcs file to be served. 
    // Disable these features if reqired (as a result the 30boxes, iCal and vCalendar menu links will not appear)
    icalEnabled:false,
    vcalEnabled:false,
    getEventDetails: function( element ) {

var start =  parsingDate(startTime[0]);
var end =  parsingDate(endTime[0]);
var title = eventName;
var eLocation=loc;
var descript = desc;
 /*       var 
          dtstart_element = element.find('.dtstart'), start,
          dtend_element = element.find('.dtend'), end,
          title_element = element.find('.summary'), title,
          details_element = element.find('.description'), details;
        
        // in this demo, we attempt to get hCalendar attributes or otherwise just dummy the values
        start = dtstart_element.length ? dtstart_element.attr('title') : new Date();
        if(dtend_element.length) {
          end = dtend_element.attr('title');
        } else {
          end = new Date();
          end.setTime(end.getTime() + 60 * 60 * 1000);
        }
        title = title_element.length ? title_element.html() : element.attr('id');
        details = details_element.length ? details_element.html() : element.html();
*/
      // return the required event structure
      return { 
        webcalurl: null,
        icalurl: null,
        vcalurl: null, 
        start: start, 
        end: end, 
        title: title, 
        details: descript, 
        location: eLocation, 
        url: null
        };
    },
  });

});
