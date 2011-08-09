//console.log(programDoc);
var allRecords = getDoc("VLDB2011Program.xml", "record");

function goToCategory(categoryId){
	location="demo.html?category="+categoryId;
	return false;	
}
	
function init(){
	var hash = window.location.search.substring(1);
	var categorydata = hash.replace("category=","");
	var categoryId;
	
	switch(categorydata){
	case 	"Research":
		categoryId = "Research and Industrial";
		break;
	case 	"Industrial":
		categoryId = "Research and Industrial";
		break;
	case 	"Challenges":
		categoryId = "Challenges and Vision";
		break;
	case 	"Tutorial":
		categoryId = "Tutorial";
		break;
	case 	"Demo":
		categoryId = "Demo";
		break; 
	case 	"Workshop":
		categoryId = "Workshop";
		break;
	return categoryId;
	}
		
	console.log(categoryId)
	var articles = new Array();
	var articlesArray = new Array();
//	var articlesArraySorted = new Array();
	
for (i = 0; i < allRecords.length; i++) {
	if (allRecords[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue==categoryId)
	{
		articlesArray.push(allRecords[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);
	}
}
	articlesArraySorted=articlesArray.sort();
	console.log(articlesArraySorted.length);
var table = fastMakeTable("", articlesArraySorted.length, 1, articlesArraySorted);	
document.getElementById("result").innerHTML = table;
console.log(table);	
	
	
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
}
};
function getAbstract(num) {
	
	var element=document.getElementById("article" + num +"abstract"); 
   var parent = document.getElementById("table").childNodes[0];
	if (element!=null){
	
	parent.removeChild(element);
			} 
	else {
	var abstrRow = document.createElement("tr");
	abstrRow.setAttribute("id","article" + num+"abstract");
	var titlRow = document.getElementById("article" + num);
	for (i=0; i<allRecords.length; i++){	
	if (allRecords[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue==articlesArraySorted[num]){
	var start;
	var end;
	var loc;
	var author;

	try {author = allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue; } catch (err) {author = "Not defined";}
	try {start = allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue;} catch (err) {start="Not defined";}
	try {end=allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue} catch (err) {end="Not defined";}
	try {loc=allRecords[i].getElementsByTagName("location")[0].childNodes[0].nodeValue} catch (err) {loc="Not defined";}

		
		
	abstrRow.innerHTML = "<td class='event'><div class='textSmall'><b>Authors: </b>"+author+"<br><hr/><i>"+start+" - "+end+"</i><br><a href='rooms.html#"+roomId(loc)+"'>"+loc+"</a></div></td>";
	document.getElementById("table").childNodes[0].insertBefore(abstrRow,
			titlRow.nextSibling);	
	}
	}
	}
};
function roomId(roomName){
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
case "Cascade 1"||"Cascsde 2":
		roomid = "cascade";
		break;
		case "Vashon":
		roomid = "vashon";
		break;
case "Fifth Avenue":
		roomid = "fifthAvenueRoom";
		break;
case "Not defined":
		roomid = "";
		break;
		}
}