function addToLocalCalendar(eName, eStart, eEnd, eLoc){
	 document.addEventListener("deviceready", onDeviceReady, false);
    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Events", "1.0", "CalendarEvents", 200000);
        db.transaction(populateDB, errorCB, successCB);

    }
    // Populate the database 
    //
    function populateDB(tx) {
         tx.executeSql('INSERT INTO EVENT (eName, eStart, eEnd, eLoc) VALUES ("'+eName+'","'+eStart+'","'+eEnd+'","'+eLoc+'")');
    }
    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
   //     alert("Entry is added to local calendar");
    }
}


///////////////////////////////////////////
//////////////////////////////////////////
////////////////////////////////////////////
//////////////Fullfill calendar////////////////
//////////////////////////////////////////////
////////////////////////////////////////////
var eventArray;

function retrieveFromDB(){
 document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Events", "1.0", "CalendarEvents", 200000);
        db.transaction(queryDB, errorCB, successCB);
    }
		
		
   function queryDB(tx) {
        tx.executeSql('SELECT DISTINCT * FROM EVENT', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
 //       alert("EVENT table: " + len + " rows found.");
        eventArray=[];
var startE;
 	var endE ;
        for (var i=0; i<len; i++){
        	if (results.rows.item(i).eStart!="Not defined"&&results.rows.item(i).eEnd!="Not defined"){
        	       	
        	startE = parsingDate(results.rows.item(i).eStart);
			endE = parsingDate(results.rows.item(i).eEnd);
  //     alert("Row = " + i + " Event = " + results.rows.item(i).eName + " Start =  " + results.rows.item(i).eStart+" End= "+results.rows.item(i).eEnd+" Loc= "+results.rows.item(i).eLoc);   	
  //      alert(startE+" "+endE);
        eventArray[i]= {title: results.rows.item(i).eName, start: startE, end: endE, place: results.rows.item(i).eLoc, allDay: false};
     } else {
     	
     	 	startE = parsingDate("8/30/2011 10:30:00 AM");
			endE = parsingDate("9/1/2011 5:30:00 PM");
			eventArray[i]= {title: results.rows.item(i).eName, start: startE, end: endE, place: results.rows.item(i).eLoc};
     	}
     
     
}
   //     alert(eventArray[1]);

    }

    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
   //     alert("Calendar entries updated");
        	$(document).ready(function() {
	
	

	
		$('#calendar').fullCalendar({
		height: 1250,
			
	windowResize: function(view) {
        //alert('The calendar has adjusted to a window resize');
    },
		eventClick: function(calEvent, jsEvent, view) {
		var txt = "<h2>Event:</h2><h5>"+calEvent.title+"</h5><h2>Location:</h2><h5><a href='rooms.html#"+roomId(calEvent.place)+"'>"+calEvent.place+"</a></h5><h2>Start time:</h2><h5> "+calEvent.start+"</h5><h2>End time:</h2><h5> "+calEvent.end+"</h5>";
	
	function mycallbackform(v,m,f){
				console.log(v);
				if (v==1)
		deleteFromDB(calEvent.title);
}
			$.prompt(txt,{
				submit: mycallbackform,
				buttons: {"Delete event": '1', "Close": '2' },
				show:'slideDown'
			});
	        // change the border color just for fun
        $(this).css('border-color', 'red');

    },
    		buttonText: {
        prev: '&lt;',
        next: '&gt;'
    		},
			header: {
				left: 'prev,next today',
				right: 'agendaWeek,agendaDay'
			},
			
			editable: true,

			defaultView: 'agendaWeek',
			firstHour: 6,
			disableDragging: true,
			disableResizing : true,

			events: eventArray

			/*[
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-5),
					end: new Date(y, m, d-2)
				}]
*/

		});
	});
 }
}
//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////Delete entry//////////////////////////
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function deleteFromDB(eName){
	
	 document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Events", "1.0", "CalendarEvents", 200000);
        db.transaction(queryDB, errorCB, successCB);
    }
		
		
   function queryDB(tx) {
        tx.executeSql("DELETE FROM EVENT WHERE eName='"+eName+"'", [], querySuccess, errorCB);
        
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        //alert("EVENT table: " + len + " rows found.");
     //   alert("Event was deleted");
     }

    // Transaction error callback
    //
    function errorCB(err) {
        alert("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
       // alert("success");
	 window.location='appcalendar.html';
    }
	
	
	
	}





