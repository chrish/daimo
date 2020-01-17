var qs = [ {
	"Q":"Kjører MC",
	"A": "Vidar, Stian , Stein" }
	,
	{
	"Q":"Trakterer Trommer",
	"A": "Christoffer" }
	,
	{
	"Q":"Har hytte ved sjøen",
	"A": "Johannes" }
	,
	{
	"Q":"Medlem i Mensa",
	"A": "Vidar" }
	,
	{
	"Q":"Har hoppet i fallskjerm",
	"A": "Margareth" }
	,
	{
	"Q":"Kan plystre nasjonalsangen med Mariekjeks i munnen",
	"A": "Ingen" }
	,
	{
	"Q":"Går på swing-kurs",
	"A": "Vidar,??" }
	,
	 {
	"Q":"Er utdannet Radiolog",
	"A": "Merethe" }
	,
	 {
	"Q":"Har gullmedalje fra Junior-VM i sparkesykkel",
	"A": "Arne Kristian" }
	,
	 {
	"Q":"Damper som en skorstein på fest, men røyker ikke",
	"A": "Arild" }
	,
	 {
	"Q":"Koser seg med ett glass chardonay i ny og ne",
	"A": "Rikke" }
	,
	 {
	"Q":"Kjøpt seg ny bil til jul",
	"A": "Christoffer" }
	,
	 {
	"Q":"Er hobbyfotograf",
	"A": "Stein" }
	,
	 {
	"Q":"Er en ivrig speider",
	"A": "Kjetil" }
	,
	 {
	"Q":"Har jobbet som instruktør på skole",
	"A": "Vidar" }
	,
	 {
	"Q":"Stiller gjerne i smoking i barnebursdag",
	"A": "Stein" }
	,
	 {
	"Q":"Er en racer på hoderegning",
	"A": "Ingvild" }
	,
	 {
	"Q":"Samler på frimerker",
	"A": "Solveig" }
	,
	 {
	"Q":"Fisker gjerne i flere timer uten å få fisk, bare fordi det er gøy å fiske",
	"A": "Vidar" }
	,
	 {
	"Q":"Spiller bass i band",
	"A": "Stein" }
	,
	 {
	"Q":"Digger hoppeslott",
	"A": "Marin" }
	,
	 {
	"Q":"Elsker å lage mat fra bunnen av",
	"A": "Kasturi" }
	,
	 {
	"Q":"GOT er kult",
	"A": "Anders" }
	,
	 {
	"Q":"Bruker bartevoks",
	"A": "Sølve" }
	,
	 {
	"Q":"Snakker 7 språk flytende",
	"A": "Ildiko" }
	,
	 {
	"Q":"Kunne tenke seg å jobbe som reiseguide",
	"A": "Helen" }
	,
	 {
	"Q":"Ble født med 6 tær på ene foten",
	"A": "Linda" }
	,
	 {
	"Q":"Har 14 i handikap i golf",
	"A": "Mads" }
	];

var isStarted = false;
var skipToNext = false;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}



async function startEvent(){
	var timeForEachQuestionInSeconds = 120;
	var skipToNextQuestion = false;
	isStarted = true;

	var questions = qs.slice();
	console.log(qs[1].Q);
	console.log("Startet...");
	var changeAudio = new Audio('assets/boing006.wav');
	var countdownAudio = new Audio('assets/Kurz08-Perc04.wav'); 
	changeAudio.play();
	for (var i = 0; i<questions.length; i++){
		var timeleft = timeForEachQuestionInSeconds;
		// plukk spm, print til skjerm. 
		//Start timer.
		//Timer er sak som går med delay på 1 sec, 
		//for hver iterasjon sjekkes skipToNextQuestion
		//dersom true nixes timeren, og vi går videre. 

		var rnd = Math.floor(Math.random() * questions.length-1)+1; 
		var rndQ = questions.splice(rnd,1)[0];
		console.log(rndQ);

		$("div#actualquestion").fadeOut(function(){
			$(this).empty().append(rndQ.Q).fadeIn();
		});

		for(var tk =0; tk< timeForEachQuestionInSeconds; tk++){
			await sleep(1000);
			timeleft--;

			if (skipToNext){
				timeleft = 0;
				skipToNext = false;
				break;
			}

			var minutes = Math.floor(timeleft / 60);
			var seconds = timeleft - minutes * 60;
			var ts = minutes + "m " + seconds + "s";
			if (minutes == 0){
				ts = seconds + "s";
			}
			$("#timer").empty().append(ts);

			if (minutes == 0 && seconds < 6){
				countdownAudio.play();
			}
		}
		
		changeAudio.play();
	}
};

$("div#btns").click(function (){
	if (!isStarted){
		startEvent();
		$("div#btns").empty().append("Skip");
	} else {
		skipToNext = true;
	}
});