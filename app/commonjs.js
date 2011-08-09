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
			row += "<td class='sessionFirstTypeList'><a href='#'  onclick='getAbstract("
					+ i + ")'><div>" + cell[i] + "</div></a></td>";
		}
		row += "</tr>";

		buf += row;
	}
	buf += "</table></div>";

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
case "Cascade 1"||"Cascade 2"||"Cascade 1 & 2":
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
//console.log(roomid);	
}