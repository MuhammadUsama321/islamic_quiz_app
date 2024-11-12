var questions = [
    {
      question: "Q1.  Which sahaba did Prophet Muhammad (ﷺ) help to become free from being a slave by planting 300+ date palm trees?",
      option1: "Thawban ibn Bujdud (ra)",
      option2: "Zayd ibn Harisa (ra)",
      option3: "Salman al Farisi  (ra)",
      corrAnswer: "Salman al Farisi (ra)",
    },
    {
      question: "Q2. What is the virtue of reciting Ayatul Kursi before going to bed at night to sleep?",

      option1: "Takes away hunger",
      option2: "You are protected from harm till sunrise",
      option3: "House in Jannah",
      corrAnswer: "You are protected from harm till sunrise",
    },
    {
      question: "Q3. Which Prophet (as) had control of the Jinn and was able to talk to animals?",
      option1: "Sulaiman (as)",
      option2: "Dawud (as)",
      option3: "Yunus (as)",
      corrAnswer: "Sulaiman (as)",
    },
    {
      question: "Q4. What does Zam Zam mean?",
      option1: "Drink",
      option2: "Water well  ",
      option3: "Stop",
      corrAnswer: "iStop",
    },
    {
      question: "Q5. What is Az-Zaqqum? ",
      option1: "Food for the people of hellfire ",
      option2: "A lote tree of the farthest boundary",
      option3: "Drink for the people of Jannah",
      corrAnswer: "A lote tree of the farthest boundary ",
    },
    {
      question: "Q6.What was the relation between Prophet Musa (alayhi as-salaam) & Prophet Haroon (alayhi as-salaam)?",
      option1: "Friends",
      option2: "Father & son3",
      option3: "Brothers",
      corrAnswer: "Brothers",
    },
    {
      question: "Q7. Which Surah is referred as the oft-repeating verses Surah? ",
      option1: "Surah Ikhlas",
      option2: "Surah Fatihah ",
      option3: "Surah Naas",
      corrAnswer: "Surah Fatihah",
    },
    {
      question: "Q8. Which uncle of Prophet Muhammad (peace be upon him) didn’t accept Islam? ",
      option1: "Hamza",
      option2: "Al-Abbas",
      option3: "Abu Lahab",
      corrAnswer: "Abu Lahab",
    },
    {
      question: "Q9.Which Surah doesn’t begin with the basmallah? ",
      option1: "Surah Yasin",
      option2: "Surah Rehman",
      option3: "Surah Tauba",
      corrAnswer: "Surah Tauba",
    },
    {
      question: "Q10. How much Arkan of Islam? ",
      option1: "10",
      option2: "5",
      option3: "20",
      corrAnswer: "5",
    },
  ];

  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");

  var index = 0;
  score = 0;
  var sec = 59;
  var min = 1;


  var TimerElement = document.getElementById("timer")

  function timer(){
    TimerElement.innerText = `${min}:${sec}`;
    sec--;
    if (sec < 0){
        min --;
        sec = 59;
        

        if (min < 0){
            min = 1;
            sec = 59;
            nextQuestion();
        }
    }
  }

  setInterval(timer,100);

function nextQuestion(){
    var options = document.getElementsByClassName("options");
    for (var i=0; i< options.length; i++){
        if(options[i].checked){
            var selectedOption = (options[i].value);
            var getOption =  questions[index -1][`option${selectedOption}`];
            var correctAnswer = questions[index -1 ][`corrAnswer`];

            if(getOption===correctAnswer){
                score++;
            }
            console.log(getOption);
        }
        options[i].checked = false;
    }
    button.disabled=true;



if (index > questions.length - 1){
    Swal.fire({
        title: "Good job!",
        text: `You Score is ${((score/questions.length)*100).toFixed(2)}`,
        icon: "success"
      });
    console.log("questions Finished");  
}
else{
    question.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
}
min =1;
sec = 59;
}

function clicked(){
    button.disabled = false;
}