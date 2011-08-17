function createHotmailEvent() {
	 
	
	

	WL.login(
		{ scope: "wl.events_create" },
		function (response) {
			if (response.status == "connected") {
				createEvent();
			}
			else {
				log("Could not connect, status = " + response.status);
			}
		});

	function createEvent() {
		var startTime = new Date();
		var endTime = new Date(startTime.getTime() + (60 * 60 * 1000));

		log("Start time: " + startTime);
		log("End time: " + endTime);

		WL.api({
			path: "/me/events",
			method: "POST",
			body: {
				name: "Family Dinner",
				description: "Dinner with Cynthia's family",
				start_time: startTime,
				end_time: endTime,
				location: "Coho Vineyard and Winery, 123 Main St., Redmond WA 98052",
				is_all_day_event: false,
				availability: "busy",
				visibility: "public"
			}
		}, onApi);
	}

	function onApi(response) {
		if (!response.error) {
			log("Successfully created event. Response: " + JSON.stringify(response).replace(/,/g, "\n"));
		}
		else {
			log("Could not create event: " + JSON.stringify(response.error).replace(/,/g, "\n"));
		}
	}
						
	function log(message) {
		var child = document.createTextNode(message);
		var parent = document.body;
		parent.appendChild(child);
		parent.appendChild(document.createElement("br"));
	}
}