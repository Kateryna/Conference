//console.log(programDoc);
var allRecords = getDoc("Program.xml", "record");
var authorsArray = new Array();
var firstAuthorsArray = new Array();
//console.log(allRecords);

for (i = 0; i < allRecords.length; i++) {
allAuthors = allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
firstAuthor = allAuthors.split(",",1);
firstAuthorsArray
			.push(firstAuthor);
}
firstAuthorsArraySorted=eliminateDuplicates(firstAuthorsArray.sort());


//console.log(firstAuthorsArraySorted);

function eliminateDuplicates(arr) {
	  var i,
      len=arr.length,
      out=[],
      obj={};
 
  for (i=0;i<len;i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
 }
	  return out;
}
	

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

	var table = fastMakeTable("", firstAuthorsArraySorted.length, 1, firstAuthorsArraySorted);
//	console.log(table);

	document.getElementById("result").innerHTML = table;
	
}

function getAbstract(num) {
	var elements=document.getElementsByName("info");
	var element=document.getElementById("article" + num +"abstract");
	console.log(element);
	console.log(elements[1]);
   var parent = document.getElementById("table").childNodes[0];
	if (elements.length!=0){
		for (e=elements.length-1; e>-1; e--){
	parent.removeChild(elements[e]);
	}
	} 
	else {
	var titlRow = document.getElementById("article" + num);
	var allAuthArray=[];
	var start=[];
	var end=[];
	var loc=[];
	var category=[];	
	var submissionTitle=[];
	for (i=0; i<allRecords.length; i++){	
	if (allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue.split(",",1)==firstAuthorsArraySorted[num]){
	allAuthArray.push(allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);
	try {start.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);} catch (err) {start.push("Not defined");}
	try {end.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);} catch (err) {end.push("Not defined");}
	try {loc.push(allRecords[i].getElementsByTagName("location")[0].childNodes[0].nodeValue);} catch (err) {loc.push("Not defined");}
	try {submissionTitle.push(allRecords[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);} catch (err) {category.push("Not defined");}	
	try {category.push(allRecords[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue);} catch (err) {category.push("Not defined");}	
	}
	}
	for (j=0; j<allAuthArray.length; j++){
	var abstrRow = document.createElement("tr");
	abstrRow.setAttribute("id","article" + num+"abstract");
	abstrRow.setAttribute("name","info");
	var listener = "addToCalendar("+submissionTitle[j]+","+loc[j]+","+1+");";
	console.log(listener);
	abstrRow.innerHTML = "<td class='event'><div><b>Article: </b>" +submissionTitle[j]+"</div><hr/><div class='textSmall'><b>Authors: </b>"+allAuthArray[j]+"<br><i>"+start[j]+" - "+end[j]+"</i><br><a href='rooms.html#"+roomId(loc[j])+"'>"+loc[j]+"</a><br>"+category[j]+"<div align='left'><FORM ><INPUT TYPE='BUTTON' VALUE='Add event' class='backbutton' ONCLICK=''></FORM></div></div></td>";
	document.getElementById("table").childNodes[0].insertBefore(abstrRow,
			titlRow.nextSibling);
		}	
	}
};

function addToCalendar(eventName,loc, docId){
location="calendarplugin.html?eventName="+eventName +"&loc="+loc+"&docId="+docId;
console.log(location);
};
					