function getDoc(nameDoc,tagName){
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","app/"+nameDoc, false);
xmlhttp.send();
programDoc = xmlhttp.responseXML;
//console.log(tagName);
var allRecords = programDoc.getElementsByTagName(tagName);
return allRecords;
};

function fastMakeTable(buf, row, col, cell) {
	var COLS = col;
	var ROWS = row;

	buf += "<div align='center'><table id='table' style='bordborder-collapse:collapse;table-layout:fixed;width:90%'>";
	for ( var i = 0; i < ROWS; i++) {
		var row = "<tr id='article" + i + "'>";
		for ( var j = 0; j < COLS; j++) {
			row += "<td class='sessionFirstTypeList'><a onclick='getAbstract("
					+ i + ")'><div>" + cell[i] + "</div></a></td>";
		}
		row += "</tr>";

		buf += row;
	}
	buf += "</table><br></div>";

	return buf;
};



function roomId(roomName){
//console.log("room id " + roomName);
var roomid;

switch (roomName) {
case "Grand Crescent":
		roomid = "grandCrescent";
		break;
case "Grand 1":
		roomid = "grand1";
		break;
case "Grand 2":
		roomid = "grand2";
		break;
case "Grand 3":
		roomid = "grand3";
		break;
case "Cascade 1":
		roomid = "cascade";
		break;
case "Cascade 2":
		roomid = "cascade";
		break;		
case "Cascade 1 & 2":
		roomid = "cascade";
		break;
		
case "Vashon":
		roomid = "vashon";
		break;
case "Fifth Avenue":
		roomid = "fifthAvenueRoom";
		break;
case "Not defined":
		roomid = "hello";
		break;
		
}
return roomid;
console.log("room id " + roomid);

}

			
function parsingDate(dateData){
	dateString=dateData.replace(/ /g, "/").replace(/:/g,"/");
	var d = dateString.split("/",7);
	var hours=parseInt(d[3]);
	
//	console.log(d);
	if ((d[6]=="PM")&&(hours!=12) )
	hours+=12;
	
	var date = new Date (d[2],d[0]-1,d[1],hours,d[4]);
//	console.log(date);
//alert("DATE "+date);
	return date;
// new Date = 
}	

function addToWebCalendar (sTime, eTime, eName, eLoc){
		var start;
		var end;
		try {start = parsingDate(sTime);}
		catch (err) { start = ["8/30/2011 10:30:00 AM"];}
		try {end =  parsingDate(eTime);}
		catch (err) { end = ["9/2/2011 5:30:00 PM"];}
		
console.log ("Event\n"+eName+"\n"+start+"\n"+end+"\n"+eLoc);		
	
		
			
		
$(document).ready(function() {
  
  $('.ibutton').AddToCal({
    // ical and vcal require an ics or vcs file to be served. 
    // Disable these features if reqired (as a result the 30boxes, iCal and vCalendar menu links will not appear)
    icalEnabled:false,
    vcalEnabled:false,
    getEventDetails: function( element ) {
    	
  
 /*
 var 
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
        title: eName, 
        details: null, 
        location: eLoc, 
        url: null
        };
    },
  });

});	

}
