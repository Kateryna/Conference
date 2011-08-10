		var txt;
		function addToCalendar(){
			function mycallbackform(v,m,f){
				console.log(v);
				if (v==1)
				location="calendarplugin.html";
			}
			$.prompt(txt,{
				callback: mycallbackform,
				buttons: {"Add to my calendar": '1', "Close": '2' },
				show:'slideDown'
			});
			
		};
							
			function getInfo(session){
				var sessionDescription;
				var location;
				var sessionCategory;
				var submissionTitle;
				var submissionAuthorsAr;
				var presentationOrderAr = new Array();
				var submissionTitleAr = new Array();
				var submissionAuthorsAr = new Array();
				records = getDoc("Program.xml", "record");
				for (i=0; i<records.length; i++) {
					if (records[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue == session) {
						sessionCategory = records[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						if (sessionCategory == 'Research' || sessionCategory == 'Industrial' || sessionCategory == 'Demo') {
							sessionDescription = records[i].getElementsByTagName("sessionDescription")[0].childNodes[0].nodeValue;
							location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
							presentationOrderAr.push (records[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						} else if (sessionCategory == 'Keynote' || sessionCategory == 'Panel' || sessionCategory == 'Tutorial') {
							location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
							submissionTitle = records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue;	
							submissionAuthors = records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;	
						} else if (sessionCategory == 'ChallengesAndVision' || sessionCategory == 'PhDWorkshop') {
							location = records[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
							presentationOrderAr.push (records[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (records[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (records[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						}
					};
				}
				
				var allInfo;
				if (sessionCategory == 'Keynote') {
					allInfo = '<div class = "allPresentations"><p><b>Author:</b> '+submissionAuthors+'</p></div>';	
				} if (sessionCategory == 'Panel' || sessionCategory == 'Tutorial') {
					allInfo = '<div class = "allPresentations"><p><b>Authors:</b> '+submissionAuthors+'</p></div>';	
				}else if (sessionCategory == 'ChallengesAndVision' || sessionCategory == 'PhDWorkshop' || sessionCategory == 'Research' || sessionCategory == 'Industrial' || sessionCategory == 'Demo') {
					var allPresentation = '';			
					for (j=0; j<presentationOrderAr.length; j++){
						if (sessionCategory == 'ChallengesAndVision' || sessionCategory == 'PhDWorkshop' || sessionCategory == 'Research' || sessionCategory == 'Industrial') {
							presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
						} else if (sessionCategory == 'Demo') {
							presentation = '<p class = "presentationName">Demo # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
						}
						allPresentation = allPresentation + presentation;
					}		
					allInfo ='<div class = "allPresentations">'+allPresentation+'</div>';	
				} 
				
				if (sessionCategory == 'Research' || sessionCategory == 'Industrial' || sessionCategory == 'Demo') {
					txt ='<div class = "header"><div class = "sessionName">'+session+': '+sessionDescription+'</div><a class="location" href="rooms.html#'+roomId(location)+'">('+location+')</a></div><br>'+allInfo;	
				} else if (sessionCategory == 'Keynote' || sessionCategory == 'Panel' || sessionCategory == 'Tutorial'){
					txt = '<div class = "header"><div class = "sessionName">'+session+': '+submissionTitle+'</div><a class="location" href="rooms.html#'+roomId(location)+'">('+location+')</a></div><br>'+allInfo;	
				} else if (sessionCategory == 'ChallengesAndVision' || sessionCategory == 'PhDWorkshop'){
					txt = '<div class = "header"><div class = "sessionName">'+session+'</div><a class="location" href="rooms.html#'+roomId(location)+'">('+location+')</a></div><br>'+allInfo;	
				}
			addToCalendar();
			};

			function getGeneralInfo(workshop){
				var workshopName;
				var workshopDescription;
				var location;
				var organizers;
				var website;
				workshops = getDoc("XMLworkshops.xml", "workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						workshopDescription = workshops[i].getElementsByTagName("workshopDescription")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
						website = workshops[i].getElementsByTagName("website")[0].childNodes[0].nodeValue;
					};
				}
				txt ='<div class = "workshopName">'+workshopName+'</div><br><p class = "room"><b>Room: </b><a href="rooms.html#'+roomId(location)+'">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p><p class = "website"><b>Website: </b><a href="'+website+'">'+website+'</a></p><br><div class = "workshopDescription">'+workshopDescription+'</div>';
				addToCalendar();	
			};
				
			function getDetailInfo(workshop) {
				var workshopName;
				var location;
				var organizers;
				var website;
				var sessionCategory;
				var sessionName;
				var submissionTitle;
				var submissionAuthors;
				var sessionNameAr = new Array();
				var presentationOrderAr = new Array();
				var submissionTitleAr = new Array();
				var submissionAuthorsAr = new Array();
				workshops = getDoc("XMLworkshops.xml", "workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
						website = workshops[i].getElementsByTagName("website")[0].childNodes[0].nodeValue;
						sessionCategory = workshops[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						if (sessionCategory == 'KeynoteSession') {
							sessionName = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							submissionTitle = workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue;	
							submissionAuthors = workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue;
						} else if (sessionCategory == 'ResearchSession') {
							sessionName = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
							presentationOrderAr.push (workshops[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						} else if (sessionCategory == 'KeynoteResearchSession'){
							sessionNameAr.push (workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue);
							presentationOrderAr.push (workshops[i].getElementsByTagName("presentationOrder")[0].childNodes[0].nodeValue);	
							submissionTitleAr.push (workshops[i].getElementsByTagName("submissionTitle")[0].childNodes[0].nodeValue);	
							submissionAuthorsAr.push (workshops[i].getElementsByTagName("submissionAuthors")[0].childNodes[0].nodeValue);	
						}
					}
				}

				var allInfo;
				if (sessionCategory == 'KeynoteSession') {
					allInfo = '<p class = "workshopSessionName">'+sessionName+'</p><br><p><b>Title:</b> "'+submissionTitle+'"</p><p><b>Author:</b> '+submissionAuthors+'</p>';
				} else if (sessionCategory == 'ResearchSession') {
					var allPresentation = '';		
					for (j=0; j<presentationOrderAr.length; j++){
								presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
							allPresentation = allPresentation + presentation;
						}		
					allInfo = '<p class = "workshopSessionName">'+sessionName+'</p><br>'+allPresentation; 	
				} else if (sessionCategory == 'KeynoteResearchSession'){
					var allInfo1 = '<p class = "workshopSessionName">'+sessionNameAr[0]+'</p><br><p><b>Title: </b>"'+submissionTitleAr[0]+'"</p><p><b>Author: </b>'+submissionAuthorsAr[0]+'</p>';
					var allInfo2 = '';
					for (l=1; l<presentationOrderAr.length; l++){
							presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[l]+'</p><p><b>Title:</b> "'+submissionTitleAr[l]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[l]+'</p>';
						allInfo2 = allInfo2 + presentation;
					}		
					allInfo = allInfo1+'<br>'+'<p class = "workshopSessionName">'+sessionNameAr[1]+'<p><br>'+allInfo2;		
				}
				
				txt ='<div class = "workshopName">'+workshopName+'</div><br><p class = "room"><b>Room: </b><a href="rooms.html#'+roomId(location)+'">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p><p class = "website"><b>Website: </b><a href="'+website+'">'+website+'</a></p><br><div class = "allPresentations">'+allInfo+'</div>';
			
			addToCalendar();
			}	
			
			function getDetailMergedInfo(workshop) {
				var workshopName;
				var location;
				var organizers;
				var website;
				var workshopNameMerged;
				var organizersMerged;
				var websiteMerged;
				var workshopDescriptionMerged;
				var sessionCategory;
				var sessionName;
				var submissionTitle;
				var submissionAuthors;
				var presentationOrderAr = new Array();
				var submissionTitleAr = new Array();
				var submissionAuthorsAr = new Array();
				workshops = getDoc("XMLworkshops.xml", "workshop");
				for (i=0; i<workshops.length; i++) {
					if (workshops[i].getElementsByTagName("workshopID")[0].childNodes[0].nodeValue == workshop) {
						workshopName = workshops[i].getElementsByTagName("workshopName")[0].childNodes[0].nodeValue;
						location = workshops[i].getElementsByTagName("location")[0].childNodes[0].nodeValue;
						organizers = workshops[i].getElementsByTagName("organizers")[0].childNodes[0].nodeValue;
						website = workshops[i].getElementsByTagName("website")[0].childNodes[0].nodeValue;
						workshopNameMerged = workshops[i].getElementsByTagName("workshopNameMerged")[0].childNodes[0].nodeValue;
						organizersMerged = workshops[i].getElementsByTagName("organizersMerged")[0].childNodes[0].nodeValue;
						websiteMerged = workshops[i].getElementsByTagName("websiteMerged")[0].childNodes[0].nodeValue;
						workshopDescriptionMerged = workshops[i].getElementsByTagName("workshopDescriptionMerged")[0].childNodes[0].nodeValue;
						sessionCategory = workshops[i].getElementsByTagName("sessionCategory")[0].childNodes[0].nodeValue;
						if (sessionCategory == 'KeynoteSession') {
							sessionName = workshops[i].getElementsByTagName("sessionName")[0].childNodes[0].nodeValue;
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

				var allInfo;
				if (sessionCategory == 'KeynoteSession') {
					allInfo = '<p class = "workshopSessionName">'+sessionName+'</p><br><p><b>Title:</b> "'+submissionTitle+'"</p><p><b>Author:</b> '+submissionAuthors+'</p>';
				} else if (sessionCategory == 'ResearchSession') {
					var allPresentation = '';		
					for (j=0; j<presentationOrderAr.length; j++){
								presentation = '<p class = "presentationName">Presentation # '+presentationOrderAr[j]+'</p><p><b>Title:</b> "'+submissionTitleAr[j]+'"</p><p><b>Authors:</b> '+submissionAuthorsAr[j]+'</p>';
							allPresentation = allPresentation + presentation;
						}		
					allInfo = '<p class = "workshopSessionName">'+sessionName+'</p><br>'+allPresentation; 	
				} 
				
				txt ='<div class = "workshopName">'+workshopName+'</div><br><p class = "room"><b>Room: </b><a href="rooms.html#'+roomId(location)+'">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizers+'</p><p class = "website"><b>Website: </b><a href="'+website+'">'+website+'</a></p><br><div class = "allPresentations">'+allInfo+'</div><br><br><div class = "workshopName">'+workshopNameMerged+'</div><br><p class = "room"><b>Room: </b><a href="rooms.html#'+roomId(location)+'">'+location+'</a></p><p class = "organizers"><b>Organizers: </b>'+organizersMerged+'</p><p class = "website"><b>Website: </b><a href="'+websiteMerged+'">'+websiteMerged+'</a></p><br><div class = "workshopDescription">'+workshopDescriptionMerged+'</div>';
			
			addToCalendar();
			}	
	
			
			
			
			
			
			
			