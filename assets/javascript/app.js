var questions = [{
	question: "",
	choices: [],
	correctAnswer: //value
{
	question: "what car company introduced the first electric trunk release?",
	choices: [ "Chevrolet" , "Ford" , "Honda" , "Chrysler"],
	correctAnswer: 1
},
{
	question: "In what year did Chevrolet introduce the Chevy Bow-Tie emblem?",
	choices: ["1972" , "1955" , "1914" , "1945"],
	correctAnswer: 2 //value
},
{
	question: "What is considered to be the first Muscle Car in U.S. production?",
	choices: ["Chrysler C-300" , "Ford Mustang" , "Oldsmobile Rocket 88" , "Studebaker Golden Hawk"
],
	correctAnswer: 2 //value
},
{
	question: "What is currently the most expensive car in production?",
	choices: ["Lamborghini Veneno" , "Koenigsegg CCXR Trevita" , "Pagani Huayra BC" , "Bugatti Chiron"],
	correctAnswer: 1 //value
}, 
{
	question: "What is the most expsensive car sold at auction?",
	choices: ["1962 Ferrari 250 GTO" , "1954 Mercedes-Benz W196" , "1955 Jaguar D-Type" , "1961 Ferrari 250 GT SWB California Spider"],
	correctAnswer: 0 //value
}, 
{
	question: "What vehicle is recorded as having the most miles on their dash?",
	choices: ["2006 Chevrolet Silverado 3500 HD" , "1990 Honda Accord" , "1989 Saab SPG" , "1966 Volvo P1800"],
	correctAnswer: 3 //value
} //this is an array of OBJECTS

  		$(".radio").click(function(){
       	capture = $(this).val();
       	console.log(capture);
       	check_answer(capture);
    	});
];

var intervalidId;
var time: 0;

function gameStart(){



}
