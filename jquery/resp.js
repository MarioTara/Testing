FB.getLoginStatus(function(response) {
				if(response.status=="connected" && response.status=="unknown"){
					
					$("#loauth", "#popup").show();
					console.log("Sono nella if");
				}else{
					$("#loauth").hide();
					console.log("sono in else");
				}
			});
			
			
			
FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		var uid = response.authResponse.userID;
		var accessToken = response.authResponse.accessToken;		
	}		
	console.log(accessToken);
	});