//console.log(programDoc);
var allRecords = getDoc("Program.xml", "record");
var authorsArray = new Array();
var firstAuthorsArray = new Array();
//console.log(allRecords);

for (i = 0; i < allRecords.length; i++) {
allAuthors = allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
firstAuthor = allAuthors.split(",",1);
authorsArray.push(allAuthors);
firstAuthorsArray
			.push(firstAuthor);
}
firstAuthorsArraySorted=firstAuthorsArray.sort();
authorsArraySorted=authorsArray.sort();
//console.log(firstAuthorsArraySorted.length);
//console.log(authorsArraySorted);


function init(){

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

	var table = fastMakeTable("", firstAuthorsArray.length, 1, firstAuthorsArray);
//	console.log(table);

	document.getElementById("result").innerHTML = table;
	
}

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
	if (allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue==authorsArraySorted[num]){
	var start;
	var end;
	var loc;
	var category;	
	
	try {start = allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue;} catch (err) {start="Not defined";}
	try {end=allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue} catch (err) {end="Not defined";}
	try {loc=allRecords[i].getElementsByTagName("location")[0].childNodes[0].nodeValue} catch (err) {loc="Not defined";}
	try {category=allRecords[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue} catch (err) {category="Not defined";}	
		
		
	abstrRow.innerHTML = "<td class='event'><div><b>Article: </b>" +allRecords[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue+"</div><hr/><div class='textSmall'><b>Authors: </b>"+allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue+"<br><i>"+start+" - "+end+"</i><br><a href='rooms.html#"+roomId(loc)+"'>"+loc+"</a><br>"+category+"</div></td>";
	document.getElementById("table").childNodes[0].insertBefore(abstrRow,
			titlRow.nextSibling);	
	}
}
}
};