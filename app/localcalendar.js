
var txt1 = "<p class='txt'>Do you want to add this event to your local calendar?</p>";
var txt2 = "<p class='txt'>Event is added to your local calendar</p>";

function addToLocalCalendar(){
			function mycallbackform(v,m,f){
				if (v==1)
			//	location=""; запись в файл!!!
			$.prompt(txt2);					
			
			}
			$.prompt(txt1,{
				callback: mycallbackform,
				buttons: {"Add to my local calendar": '1', "Close": '2' },
				
			});
			
		};