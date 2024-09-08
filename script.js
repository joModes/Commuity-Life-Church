const questions = [

    {
        question: "which is the largest animal in the world?",
        answer: [

            {text:"shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},

        ]
    },
    {
        question: "what is the largest continent?",
        answer: [

            {text:"Africa", correct: false},
            {text:"Asia", correct: true},
            {text:"Austria", correct: false},
            {text:"America", correct: false},

        ]
    },
    {
        question: "On which mountain did moses receive the ten commandments?",
        answer: [

            {text:"shark", correct: false},
            {text:"Blue whale", correct: false},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},

        ]
    }
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo  + "." + currentQuestion.question;

     currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){

            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

     });

    }

  function resetStat(){
   nextButton.style.display = "none";
  while(answerButtons.firstChild){

    answerButtons.removeChild(answerButtons.firstChild);
   }

 }
 function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){

        selectedBtn.classList.add("correct");
    }else{

        selectedBtn.classList.add("incorrect");
  
    }
    Array.from(answerButtons.children).forEach(button => {

        if(button.dataset.correct === "true"){

            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

 nextButton.addEventListener("click", ()=>{

    if(currentQuestionIndex < questions.length){

        handleNextButton();
    }else{
        startQuiz();
    }
 })
 
 function showScore(){

   
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

 function handleNextButton(){
    currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}else{
    showScore();
 }  

nextButton();
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
     handleNextButton();
}else{

    showScore();
}
 });
 }
 startQuiz();

/*

        var  nameError = document.querySelector('.name-error');
                       let emailError = document.querySelector(".email-error");
                       let passwordError = document.querySelector(".password-error");
                       let submitError = document.querySelector(".submit-error");
                                                
 function validateName(){
                               
            var name = document.getElementById('contact-name').value;
             if(name.length == 0){
                               
           nameError.innerHTML = 'Name is required';
               return false;
           }
           if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){  
                           
                 nameError.innerHTML = 'write full name';
                   return false;
                 }
                           nameError.innerHTML = 'valid';
                  return true;
        }                                    
                           
                          function validateEmail(){
                               
                              let email = document.getElementById('contact-email').value;
                              
                              if(email.length == 0){
                                  
                                  emailError.innerHTML = "email is required";
                                  return false;
                      
                              }
                               if(!email.match(/^[A-Za-z\._\–[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
                                              
                            emailError.innerHTML = 'invalid email';   
                            return false;
                            }
                            emailError.innerHTML = 'valid'; 
                            return true;       
                           }                               
       
                           function validatePassword(){
                               
                           let password = document.getElementById('contact-password').value;
                           
                           if(password.length == 0){  
                           
                           phoneError.innerHTML = 'Email is required';
                           return false;
                           }
                           phoneError.innerHTML = 'valid';
                           return true;
                           }
                         
                        function validateForm(){
                            
                        if(!validateName() || !validateEmail() || !validatePhone() || !validatePhone() || !validateEmail()){  
                                                     
                         submitError.style.display = 'block';
                        submitError.innerHTML = 'please fix error to submit';
                        setTimeout(function(){ submitError.style.display = 'none';},3000);
                        return false;
                        }
                        
                    
                        }
*/