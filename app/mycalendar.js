
	var hash = window.location.search.substring(1);
	var info = hash.replace("%20"," ").replace("eventName=","").replace("loc=","").replace("docId=","");
	var dat=info.split("&",3);
	var eventName=dat[0];
	var loc=dat[1];
	var docId=dat[2];
	var startTime=[];
	var endTime=[];
	var allRecords=[];
if (docId==1){
 allRecords= getDoc("Program.xml", "record");
		for (i=0; i<records.length; i++){
		if (allRecords[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == eventName){
		startTime.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);
		endTime.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);
		}
}
console.log(startTime, endTime);
} else if (docId==2){
allRecords = getDoc("XMLworkshops.xml", "record");
		for (i=0; i<records.length; i++){
		if (allRecords[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == eventName){
		startTime.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);
		endTime.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);
		}
			
		}
console.log(startTime, endTime);
} else {console.log("Something wrong...");}

  $(function () {

$.icalendar.addSite('another', 'Test Calendar', 'app/calendar/icalendar.png', 
    'http://www.anothercal.com/add?title={t}&desc={d}' + 
    '&start={s}&end={e}&loc={l}'); 
	$('#basicICal').icalendar($.extend({sites:['google','yahoo'], copyFlash:''}, {start: new Date(2008, 1-1, 26, 11, 30, 00),
    end: new Date(2008, 1-1, 26, 12, 45, 00),
    title: 'Australia Day lunch',
    description: 'A traditional barbeque for our big day',
    location: 'On your local beach'}));
    

});