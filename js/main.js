// this is the array to store the data 
var questions=[
                {
		            question:"Who is the presidential nominee from republican party of the USA?",
	                answer:"trump"
                },

                {
		            question:"What is the capital city of Nepal?",
	                answer:"kathmandu"
                },

                {
		            question:"what is the name of the biggest planet?",
	                answer:"jupiter"
                },

                {
		            question:"What is the biggest country of the world?",
	                answer:"russia"
                },

                {
		            question:"Where is buddha was born?",
	                answer:"nepal"
                },

                {
		            question:"What is the hight of the mount Everest?",
	                answer:8848
                },

                {
		            question:"What is the capital city of france?",
	                answer:"paris"
                }
              ]

 // this is the for loop for the question
 for(i=0;i<questions.length;i++){
 	question=questions[i].question
 	document.getElementById('question'+[i]).textContent=question;

 }
 // this is the function for the result
 function checkresults(){
 	var correct=0;
 	var incorrect=0;
 	// this is the for loop for the answer
 	for(i=0;i<questions.length;i++){
 	 var answer=questions[i].answer;
 	 // adding the other funcitonlity

 	

 	var guessanswer=document.getElementById('answer'+[i]).value
 	var questionnumber=document.getElementById('question'+[i])
 	if(answer==guessanswer){
 		questionnumber.className="correct"
 		correct++
 	}
 

 	
 	else{
 		questionnumber.className="incorrect"
 		incorrect++
 	}
 	
 }
 
 	document.getElementById('correct').textContent="The total no of correct answer is: "+correct
 	document.getElementById('incorrect').textContent="The total no of incorrect answer is: "+incorrect
// this is for the popup blocks
for(i=0;i<questions.length;i++){
 	if(correct>6){
 		alert("congratulation!! you won the 100000 dollars!!!")
 		return
 	}
    
 	else{
    alert("Sorry!try again?")
    return
 	}

 	}

}
 // this is for the snow plugin.we need to put plug in after the function works 

//$(document).ready(function(){
//$('button').click(function(){    
    //$("#divSnow").websnowjq();
    
//});
//});

