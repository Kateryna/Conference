//console.log(programDoc);
var allRecords = getDoc("Program.xml", "record");
var authorsArray = new Array();
var firstAuthorsArray = new Array();

var authorsDistinquishFN = new Array();
var authorsDistinquishLN = new Array();
for (i = 0; i < allRecords.length; i++) {
allAuthors = allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
var author = allAuthors.split(", ");
	for (a in author){
		var aName = author[a];
	
		var lastName =aName.split(" ",2)[1] +", "+aName;
authorsDistinquishFN.push(aName);
authorsDistinquishLN.push(lastName);

}
			
}


var authorsDistinquishFNSorted=eliminateDuplicates(authorsDistinquishFN.sort());
var authorsDistinquishLNSorted=eliminateDuplicates(authorsDistinquishLN.sort());
//console.log(authorsDistinquishFNSorted.length);
//console.log(authorsDistinquishLNSorted);






for (i = 0; i < allRecords.length; i++) {
allAuthors = allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
firstAuthor = allAuthors.split(",",1);
firstAuthorsArray
			.push(firstAuthor);
}
firstAuthorsArraySorted=eliminateDuplicates(firstAuthorsArray.sort());




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
	

function comparison(auth){
for (i=0; i<allRecords.length; i++){	
	var str=allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue.split(", ");
	
	console.log(str);
	for (s in str){
	if (str[s]==auth)
	return true;
}
}	
}


function init(){
$(function() {
			// setup ul.tabs to work as tabs for each div directly under div.panes
			$("ul.tabs").tabs("div.panes > div");
		});
	var tableF = fastMakeTable("", authorsDistinquishFNSorted.length, 1, authorsDistinquishFNSorted);
	var tableL = fastMakeTable("", authorsDistinquishLNSorted.length, 1, authorsDistinquishLNSorted);


document.getElementById("resultF").innerHTML = tableF;
document.getElementById("resultL").innerHTML = tableL;

	
}

function getAbstract(num) {
	var elements=document.getElementsByName("info"+num);
	var element=document.getElementById("article" + num +"abstract");
	console.log(element);
	console.log(elements[1]);
		
   var parent = document.getElementById("table").childNodes[0];
	if (elements.length!=0)
	{
		for (e=elements.length-1; e>-1; e--)
		{
	parent.removeChild(elements[e]);
		}
	} 
	else 
	{
	var titlRow = document.getElementById("article" + num);
	var allAuthArray=[];
	var start=[];
	var end=[];
	var loc=[];
	var category=[];	
	var submissionTitle=[];
		for (i=0; i<allRecords.length; i++)
		{	
			var str=allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue.split(", ");
			for (s in str)
			{
				if (str[s]==authorsDistinquishFNSorted[num])
				{
					console.log("hurray");	
					allAuthArray.push(allRecords[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);
					try {start.push(allRecords[i].getElementsByTagName("startDate")[0].childNodes[0].nodeValue);} catch (err) {start.push("Not defined");}
					try {end.push(allRecords[i].getElementsByTagName("endDate")[0].childNodes[0].nodeValue);} catch (err) {end.push("Not defined");}
					try {loc.push(allRecords[i].getElementsByTagName("location")[0].childNodes[0].nodeValue);} catch (err) {loc.push("Not defined");}
					try {submissionTitle.push(allRecords[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);} catch (err) {category.push("Not defined");}	
					try {category.push(allRecords[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue);} catch (err) {category.push("Not defined");}	
				}
			}
		}
		console.log(category);
		for (j=0; j<allAuthArray.length; j++)
		{
			var abstrRow = document.createElement("tr");
			abstrRow.setAttribute("id","article" + num+"abstract");
			abstrRow.setAttribute("name","info"+num);
			var element = "<div id='event' style='visibility:hidden'><div class='summary'>"+category[j]+"</div><span class='dtstart'>"+start[j]+"</span><span class='dtend'>"+end[j]+"</span><div class='location'>"+loc[j]+"</div></div>";
			var listener = "<div class='textSmall' style='text-align:center; font-size:1px;'><a href='#null' id= 'btnW' class='ibutton'><div><b>Add to web calendar</b>"+element+"</div></a></div><div class='textSmall' style='text-align:center;'><a href='#null' id= 'btnL' class='ibutton2'><b>Add to local calendar</b></a></div>";
			//console.log(listener);
			abstrRow.innerHTML = "<td class='event'><div><b>Article: </b>" +submissionTitle[j]+"</div><hr/><div class='textSmall'><b>Authors: </b>"+allAuthArray[j]+"<br><i>"+start[j]+" - "+end[j]+"</i><br><a href='rooms.html#"+roomId(loc[j])+"'>"+loc[j]+"</a><br>"+category[j]+"</div>"+listener+"</td>";
			document.getElementById("table").childNodes[0].insertBefore(abstrRow,	titlRow.nextSibling);

			var btnL = document.getElementById("btnL");
			console.log("in file "+category[j]);
			addToWebCalendar();

			btnL.setAttribute("onclick","addToLocalCalendar('"+category[j]+"','"+start[j]+"','"+end[j]+"','"+loc[j]+"')");
//			addToWebCalendar(start[j],end[j], category[j], loc[j]);
		
		}	
	}
	

};			







