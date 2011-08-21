//console.log(programDoc);
var allRecords = getDoc("Program.xml", "record");

function goToCategory(categoryId){
	location="demo.html?category="+categoryId;
	return false;	
}
	
function init(){
	var hash = window.location.search.substring(1);
	var categoryId = hash.replace("category=","");
//	console.log(categoryId)
	var categoryTitle;
	switch (categoryId) {
	case "Demo":
		categoryTitle = "Demo Track";
		break;
	case "Research":
		categoryTitle = "Research Track";
		break;
	case "ChallengesAndVision":
		categoryTitle = "Challenges and Vision Track";
		break;
	case "Industrial":
		categoryTitle = "Industrial Track";
		break;
	case "PhDWorkshop":
		categoryTitle = "PhD Workshop";
		break;
	case "Tutorial":
		categoryTitle = "Tutorials";
		break;
		
	}
	
	
	
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
document.getElementById("category").innerHTML = "<h3>"+categoryTitle+"</h3>";
var table = fastMakeTable("", articlesArraySorted.length, 1, articlesArraySorted);	
document.getElementById("result").innerHTML = table;
//console.log(table);	

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
	try {category=allRecords[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue} catch (err) {loc="Not defined";}
		
	var listener = "<div class='textSmall' style='text-align:center;'><a href='calendarplugin.html?eventName="+category +"&loc="+loc+"&docId="+1+"' class='ibutton'><b>Add to calendar</b></a></div>";	
	abstrRow.innerHTML = "<td class='event'><div class='textSmall'><b>Authors: </b>"+author+"<br><hr/><i>"+start+" - "+end+"</i><br><a href='rooms.html#"+roomId(loc)+"'>"+loc+"</a></div>"+listener+"</td>";
	document.getElementById("table").childNodes[0].insertBefore(abstrRow,
			titlRow.nextSibling);	
	}
	}
	}
};