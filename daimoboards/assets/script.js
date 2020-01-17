var participants = [
	{
		"name": "Anastasia",
		"img":"Anastasia.png"
	},
	{
		"name": "Aril",
		"img":"Aril.png"
	},
	{
		"name": "Arne Kristian",
		"img":"Arne_Kristian.png"
	},
	{
		"name": "Christoffer",
		"img":"Christoffer.png"
	},
	{
		"name": "Ildiko",
		"img":"Ildiko.png"
	},
	{
		"name": "Ingvil",
		"img":"Ingvil.png"
	},
	{
		"name": "Johannes",
		"img":"Johannes.png"
	},
	{
		"name": "Kasturi",
		"img":"Kasturi.png"
	},
	{
		"name": "Kjetil",
		"img":"Kjetil.png"
	},
	{
		"name": "Kristian",
		"img":"Kristian.png"
	},
	{
		"name": "Linda",
		"img":"Linda.png"
	},
	{
		"name": "Margrethe",
		"img":"Margrethe.png"
	},
	{
		"name": "Marin",
		"img":"Marin.png"
	},
	{
		"name": "Mats",
		"img":"Mats.png"
	},
	{
		"name": "Merethe",
		"img":"Merethe.png"
	},
	{
		"name": "Nisrine",
		"img":"Nisrine.png"
	},
	{
		"name": "Oivind",
		"img":"Oivind.png"
	},
	{
		"name": "Richard",
		"img":"Richard.png"
	},
	{
		"name": "Rikke",
		"img":"Rikke.png"
	},
	{
		"name": "Solveig",
		"img":"Solveig.png"
	},
	{
		"name": "Stein",
		"img":"Stein.png"
	},
	{
		"name": "Stian",
		"img":"Stian.png"
	},
	{
		"name": "Vidar",
		"img":"Vidar.png"
	}
];


function loadParts(){
	var data = participants.slice();

	for(var i =1; i<participants.length; i++){
		var rnd = Math.floor(Math.random() * data.length-1)+1; 
		var part = data[rnd];
		data.splice(rnd,1);
		
		document.getElementById("_" + i).style.backgroundImage = "url(bilder/" + part.img + ")";
		document.getElementById("_" + i).innerHTML = "<h6>" + part.name + "</h6>";
		console.log(i + ": is img " + part.img);
	}

	var rest = 25 - participants.length;

	for(var i =0; i<rest+1; i++){
		var data = participants.slice();
		var rnd = Math.floor(Math.random() * data.length-1)+1; 
		var part = data[rnd];
		data.splice(rnd,1);
		
		var idx = participants.length + i;

		console.log(i + ": is img " + part.img);
		document.getElementById("_" + idx).style.backgroundImage = "url(bilder/" + part.img + ")";
		document.getElementById("_" + idx).innerHTML = "<h6>" + part.name + "</h6>";
	}
}