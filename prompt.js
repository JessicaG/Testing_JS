var score = function(){
	var score = prompt ("Enter your Klout Score");
	if (score >=30 && score<60) {
	 result = "Eh, you're pretty good! Do you do the Twitter?";
	} 
	if (score >=61 && score<74) {
	 result = "Hot damn, look at you! Social Media Rockstar.";
	} 
	if (score >=75 && score<100) {
	 result = "Show-off. I bet you have the overshare badge on Foursquare eh?";
	} 
	if (score >=1 && score<30) {
	 result = "Hey, maybe you should get out more, creeper.";
	}
	if (score.length ===0 || score >100 ){
		result = "Hold up, you gotta enter a number between 1-100."
	}
	alert(result);
}

//As a rule of thumb, a Klout score of between 30 and 60 is considered good/high, Klout scores above 60 are considered very high.  Scores above 75 are rare.
