  window.fbAsyncInit = function() {
    FB.init({
      appId      : '257033708316150',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2'
    });
      
    FB.AppEvents.logPageView(); 
	console.log("sono nel js");
  }
    
	 
	
	
			 // FB.Event.subscribe('auth.login', function(response) {
				 // console.log('1'+response.status);
				 // alert('connesso');
				// do something with response
			 // });

  


  
 (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
	   