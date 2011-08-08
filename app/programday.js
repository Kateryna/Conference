
	var hello1 = function hello(){
	var txt = 'Please enter your name:<br /><form><input type="checkbox" id="alertName" name="alertName" value="OK">Add to my calendar</input></form>';
	function mycallbackform(v,m,f){
	console.log(v);
	if (v==1)
	location="calendarplugin.html";
	}
	$.prompt(txt,{
			callback: mycallbackform,
			buttons: { "Add to my calendar": '1', Close: '2' }
	});
	};

			function getInfo(session){
				var sessionDescription;
				var location;
				var sessionCategory;
				var presentationOrder = new Array();
				var submissionTitle = new Array();
				var submissionAuthors = new Array();
				records = xmlDoc.getElementsByTagName("record");
				for (i=0; i<records.length; i++) {
					if (records[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == session) {
						sessionDescription = records[i].getElementsByTagName("sessionDescription")[0].childNodes[0].nodeValue;
						location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						sessionCategory = records[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						presentationOrder.push (records[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
						submissionTitle.push (records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
						submissionAuthors.push (records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
					};
				}

				var allPresentation = '';			
				for (j=0; j<presentationOrder.length; j++){
					if (sessionCategory == 'Research and Industrial') {
						presentation = '<p class = "presentationName">Presentation # '+presentationOrder[j]+'</p><p><b>Title:</b> "'+submissionTitle[j]+'"</p><p><b>Authors:</b> '+submissionAuthors[j]+'</p>';
					} else {
						presentation = '<p class = "presentationName">Demo # '+presentationOrder[j]+'</p><p><b>Title:</b> "'+submissionTitle[j]+'"</p><p><b>Authors:</b> '+submissionAuthors[j]+'</p>';
					}
					allPresentation = allPresentation + presentation;
				}		
						
			$.prompt('<div class = "firstHeader"><div class = "sessionName">'+session+': '+sessionDescription+'</div><a class="location" href="#"> ('+location+')</a></div></br><div class = "allPresentations">'+allPresentation+'</div>');
			
				//alert (session+': '+sessionDescription+' ('+location+')'+ '\n' + '\n' +allPresentation);
			};
			
			function getInfoKeynoteTutorial(session){
				var location;
				var submissionTitle;
				var submissionAuthors;
				records = xmlDoc.getElementsByTagName("record");
				for (i=0; i<records.length; i++) {
					if (records[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == session) {
						location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						submissionTitle = records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue;	
						submissionAuthors = records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;	
					};
				}
				
				$.prompt('<div class = "firstHeader"><div class = "sessionName">'+session+'</div><a class="location" href="#"> ('+location+')</a></div></br><div class = "allPresentations"><p><b>Title:</b> "'+submissionTitle+'"</p><p><b>Authors:</b> '+submissionAuthors+'</p></div>');
				
				//alert (session + ' ('+location+')'+ '\n' + '\n' +'Title: "'+submissionTitle+'"'+'\n' + 'Authors: '+submissionAuthors);
			}
			
			function getInfoChalAndVisPhDWork(session){
				var location;
				var presentationOrder = new Array();
				var submissionTitle = new Array();
				var submissionAuthors = new Array();
				records = xmlDoc.getElementsByTagName("record");
				for (i=0; i<records.length; i++) {
					if (records[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == session) {
						location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						presentationOrder.push (records[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
						submissionTitle.push (records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
						submissionAuthors.push (records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
					};
				}

				var allPresentation = '';			
				for (j=0; j<presentationOrder.length; j++){
					presentation = '<p class = "presentationName">Presentation # '+presentationOrder[j]+'</p><p><b>Title:</b> "'+submissionTitle[j]+'"</p><p><b>Authors:</b> '+submissionAuthors[j]+'</p>';
					allPresentation = allPresentation + presentation;
				}		
				
				$.prompt('<div class = "firstHeader"><div class = "sessionName">'+session+'</div><a class="location" href="#"> ('+location+')</a></div></br><div class = "allPresentations">'+allPresentation+'</div>');				
				
				//alert (session+' ('+location+')'+ '\n' + '\n' +allPresentation);
			};
					
			function getGeneralInfo(workshop){
				var workshopName;
				var workshopDescription;
				var location;
				var organizers;
				workshops = xmlDoc.getElementsByTagName("workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						workshopDescription = workshops[i].getElementsByTagName("workshopDescription")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
					};
				}
				$.prompt('<div class = "workshopName">'+workshopName+'</div></br><p class = "room"><b>Room: </b><a href="#">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p></br><div class = "workshopDescription">'+workshopDescription+'</div>');
				
			//	alert (workshopName+'\n'+'\n'+'Room: '+location+'\n'+'Organizers: '+organizers+'\n'+'\n'+workshopDescription);
			};
				
			function getDetailInfo(workshop) {
				var workshopName;
				var location;
				var organizers;
				var sessionCategory;
				var sessionNameKeynote;
				var sessionName;
				var sessionNameKR;
				var submissionTitle;
				var submissionAuthors;
				var sessionNameAr = new Array();
				var presentationOrderAr = new Array();
				var submissionTitleAr = new Array();
				var submissionAuthorsAr = new Array();
				var presentationOrderArKR = new Array();
				var submissionTitleArKR = new Array();
				var submissionAuthorsArKR = new Array();
				workshops = xmlDoc.getElementsByTagName("workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
						sessionCategory = workshops[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						if (sessionCategory == 'KeynoteSession') {
							sessionNameKeynote = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							submissionTitle = workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue;	
							submissionAuthors = workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
						} else if (sessionCategory == 'ResearchSession') {
							sessionName = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							presentationOrderAr.push (workshops[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						} else if (sessionCategory == 'KeynoteResearchSession'){
							sessionNameAr.push (workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue);
							presentationOrderArKR.push (workshops[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleArKR.push (workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsArKR.push (workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						}
					}
				}
			
			//	console.log (sessionNameKeynote);
			//	console.log (submissionTitle);
			//	console.log (submissionAuthors);
			//	console.log (sessionName);
			//	console.log (presentationOrderAr);
			//	console.log (submissionTitleAr);
			//	console.log (submissionAuthorsAr);
			//	console.log (sessionNameAr);
			//	console.log (presentationOrderArKR);
			//	console.log (submissionTitleArKR);
			//	console.log (submissionAuthorsArKR);
			
				var allInfo;
				if (sessionCategory == 'KeynoteSession') {
					allInfo = '<p class = "sessionName">'+sessionNameKeynote+'</p></br><p><b>Title:</b> "'+submissionTitle+'"</p><p><b>Authors:</b> '+submissionAuthors+'</p>';
				} else if (sessionCategory == 'ResearchSession') {
					var allPresentation = '';		
					for (j=0; j<presentationOrderAr.length; j++){
								presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
							allPresentation = allPresentation + presentation;
						}		
					allInfo = '<p class = "sessionName">'+sessionName+'</p><br>'+allPresentation; 	
				} else if (sessionCategory == 'KeynoteResearchSession'){
					var allInfo1 = '<p class = "sessionName">'+sessionNameAr[0]+'</p></br><p><b>Title: </b>"'+submissionTitleArKR[0]+'"</p><p><b>Authors: </b>'+submissionAuthorsArKR[0]+'</p>';
					var allInfo2 = '';
					for (l=1; l<presentationOrderArKR.length; l++){
							presentation = '<p class = "presentationName">Presentation # '+presentationOrderArKR[l]+'</p><p><b>Title:</b> "'+submissionTitleArKR[l]+'"</p><p><b>Authors:</b> '+submissionAuthorsArKR[l]+'</p>';
						allInfo2 = allInfo2 + presentation;
					}		
					allInfo = allInfo1+'</br>'+'<p class = "sessionName">'+sessionNameAr[1]+'<p></br>'+allInfo2;		
				}
				
				$.prompt('<div class = "workshopName">'+workshopName+'</div></br><p class = "room"><b>Room: </b><a href="#">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p></br><div class = "allPresentations">'+allInfo+'</div>');
							
				//alert (workshopName+'\n'+'\n'+'Room: '+location+'\n'+'Organizers: '+organizers+'\n'+'\n'+allInfo);
			}	
			
			function getDetailMergedInfo(workshop) {
				var workshopName;
				var location;
				var organizers;
				var workshopNameMerged;
				var organizersMerged;
				var websiteMerged;
				var workshopDescriptionMerged;
				var sessionCategory;
				var sessionNameKeynote;
				var sessionName;
				var submissionTitle;
				var submissionAuthors;
				var presentationOrderAr = new Array();
				var submissionTitleAr = new Array();
				var submissionAuthorsAr = new Array();
				workshops = xmlDoc.getElementsByTagName("workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
						workshopNameMerged = workshops[i].getElementsByTagName("workshopNameMerged")[0].childNodes[0].nodeValue;
						organizersMerged = workshops[i].getElementsByTagName("organizersMerged")[0].childNodes[0].nodeValue;
						websiteMerged = workshops[i].getElementsByTagName("websiteMerged")[0].childNodes[0].nodeValue;
						workshopDescriptionMerged = workshops[i].getElementsByTagName("workshopDescriptionMerged")[0].childNodes[0].nodeValue;
						sessionCategory = workshops[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						if (sessionCategory == 'KeynoteSession') {
							sessionNameKeynote = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							submissionTitle = workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue;	
							submissionAuthors = workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
						} else if (sessionCategory == 'ResearchSession') {
							sessionName = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							presentationOrderAr.push (workshops[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						} 
					}
				}
			
			//	console.log (sessionNameKeynote);
			//	console.log (submissionTitle);
			//	console.log (submissionAuthors);
			//	console.log (sessionName);
			//	console.log (presentationOrderAr);
			//	console.log (submissionTitleAr);
			//	console.log (submissionAuthorsAr);

				var allInfo;
				if (sessionCategory == 'KeynoteSession') {
					allInfo = '<p class = "sessionName">'+sessionNameKeynote+'</p></br><p><b>Title:</b> "'+submissionTitle+'"</p><p><b>Authors:</b> '+submissionAuthors+'</p>';
				} else if (sessionCategory == 'ResearchSession') {
					var allPresentation = '';		
					for (j=0; j<presentationOrderAr.length; j++){
								presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
							allPresentation = allPresentation + presentation;
						}		
					allInfo = '<p class = "sessionName">'+sessionName+'</p></br>'+allPresentation; 	
				} 
				
				$.prompt('<div class = "workshopName">'+workshopName+'</div></br><p class = "room"><b>Room: </b><a href="#">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p></br><div class = "allPresentations">'+allInfo+'</div></br><div class = "workshopName">'+workshopNameMerged+'</div></br><p class = "room"><b>Room: </b><a href="#">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizersMerged+'</p><p class = "website"><b>Website: </b><a href="'+websiteMerged+'">'+websiteMerged+'</a></p></br><div class = "workshopDescription">'+workshopDescriptionMerged+'</div>');
				
			//	alert (workshopName+'\n'+'\n'+'Room: '+location+'\n'+'Organizers: '+organizers+'\n'+'\n'+allInfo+'\n'+workshopNameMerged+'\n'+'\n'+'Room: '+location+'\n'+'Organizers: '+organizersMerged+'\n'+'Website: '+websiteMerged+'\n'+'\n'+'Description: '+workshopDescriptionMerged);
			}	
	
			
			
			
			
			
			
			