timer = new Countdown ();
  timer.init();

  var pos =0, test, test_status, question, notchecked, choices, chA, chB, chC, chD, correct = 0;
  
  var questions = [
      [ "Which of the following is true about Javascript?", "Java script was developed by Netscape.", "Java script was developed by Microsoft", "It is the same as Jscript", "They serve no purpose at all", "A"],
      [ "Where are cookies actually stored on the hard disk?", "In the browser!", "Its highly confidential.", "The storage of cookies on the hard disk depends on OS and the browser.", "I have no idea.", "C"],
      [ "What Boolean operators does JavaScript not support?", "==", "<=", "!=", "--", "D"],
      [ "Is a Javascript script faster than an ASP script?", "Yes", "No", "I don't know, I'm not the internet", "Not sure", "A"],
      [ "What does isNaN function do?", "It is a function.", "It is used in dividing a negative number by zero.", "It shows a value", "Determines if the value is a number or not and depending upon the result, it returns true or false", "D"]
  ];

  var incorrectQuestions = [];

  function _(x){
    return document.getElementById(x);
  }

//populating the questions here
  function renderQuestion() {
    test = _("test");

    if (pos >= questions.length) {
      _("test_status").innerHTML = "Test Completed";
      test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct. </h2>";
      unchecked.innerHTML = "<h5> You have " + notchecked + "questions not answered. </h5>" //just added.

      // to display the answers for the ones gotten wrong.
      var wrongAnswers = "";

      //to go through the incorrectQuestions array to get each of the wrong questions and its answers
      for (var i = 0; i < incorrectQuestions.length; i++) {
        var q = incorrectQuestions[i];
        var questionString = q[0];
        var answerString = q[5];
        wrongAnswers += questionString + ". Answer: " + answerString + "<br />";
      }

      // If there are wrong answers, show them on the screen
      if (wrongAnswers != "") {
        test.innerHTML = test.innerHTML + wrongAnswers;
      }

      pos = 0; //resets after the test has been completed.
      correct = 0; //same reset.
      return false; //ensures that the questions don't keep coming up after the test has been completed.
    }//to display the questions gotten right at the end of the quiz.

    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type= 'radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type= 'radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button id='submit-button' onclick='checkAnswer()'>Submit Answer </button> ";

     //submit button
  }

  //The function checkAnswer will run at the click of the submit button.
  function checkAnswer() {

    if (timer.formSubmitted === true) {
      alert("Time up!");
      pos = questions.length;
      renderQuestion();
      return;
    }
      var notchecked = 0;
      var choice;

      choices = document.getElementsByName("choices");
      for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked){
          choice = choices[i].value;
          /*
           * At this point, the selected choice has been found. There is
           * no need to continue the loop.
           */
           break;
        }
        else{
          notchecked += 1;//if no answer was checked display 
        }  
      }

      if (choice == null) {
        // No choice was made. User must choose a choice. :)
        alert("Please choose an option.");
        return;
      }
  
      if (choice == questions[pos][5]) {
        correct++;
      }  else {
        // The answer is incorrect. Keep the incorrect question.
        incorrectQuestions.push(questions[pos]);
      }

      


      pos++; //increments the pos by one which renders the next question
      renderQuestion();//the test questions keep coming in sequence
    }
    // }else{
    //   alert("You must choose an answer!");
    // }


  window.addEventListener ("load", renderQuestion, false); /*this tells the html page to wait for the page to load before running the function renderQuestion (loading the first question.)*/