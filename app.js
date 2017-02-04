function myFunction() {

  // Ask and use the user's name

  var userName = prompt ('What\'s your name?');
  alert('Hi ' + userName + '. Let\'s play a guessing game!');
  console.log('User\'s name is ' + userName + '.')

  // Guessing Game
  // We want to ask the user a question
  // Take their answer as input; stored in a var
  // Validate that their answer matches my answer
  // Depending on True or False, provide feedback

  // Question #1

  var responseOne = prompt('Guess what country was I born in? Hint: South America');
  var myAnswerOne = 'CHILE';

  if(responseOne.toUpperCase() === myAnswerOne) {
    alert('Wow! You got it right. I was born in Chile.');
    console.log(userName + '\'s guessed' + responseOne + ' correctly!' )
  } else {
    alert('Sorry, that\'s wrong. I was born in Chile.');
    console.log(userName + '\'s guess of ' + responseOne + ' is wrong!' )
  }

  // Question #2

  var responseTwo = prompt('Guess my first language?');
  var myAnswerTwo = 'SPANISH';

  if(responseTwo.toUpperCase() === myAnswerTwo) {
    alert('Si! My first language is Spanish. Great job ' + userName + '!')
    console.log(userName + '\'s guess of Spanish.')
  } else {
    alert('Sorry, that\'s wrong. My first language is Spanish.')
    console.log(userName + '\'s guess of ' + responseTwo + ' is wrong!' )
  }

  // Question #3

  var responseThree = prompt('What is my favorite sport? Hint: pointy');
  var myAnswerThree = 'football';

  if(responseThree.toLowerCase() === myAnswerThree) {
    alert('That\'s correct! GO HAWKS!!!')
    console.log(userName + ' guessed correctly that ' + myAnswerThree + ' is my favorite sport. GO HAWKS!!!')
  } else {
    alert('Sorry, that\'s wrong. Football is my favorite followed by futbol aka soccer.')
    console.log(userName + '\'s guess of ' + responseThree + ' is wrong!' )
  }

  // Question #4
  // Logical operator
  // User input must accept either y/n or yes/no responses
  // With either .toUpperCase() or .toLowerCase() used to validate input

  var responseFour = prompt('Do I have any children?');

  if(responseFour.toLowerCase() === 'yes' || responseFour.toLowerCase() === 'y') {
    alert('You guessed right! I have one son who is 21 years old.')
    console.log(userName + ' guessed correctly that I have a child.')
  } else {
    alert('Sorry, that\'s wrong. I do have a son.')
    console.log(userName + ' guessed wrong.')
  }

  // Question #5
  // Multiple right answers

  var responseFive = prompt('Name anyone of my three favorite colors.');
  var favColor = ['blue', 'green', 'red'];

  if (favColor.indexOf(responseFive.toLowerCase()) >  -1) {
    alert('You got it right. It is one of my favorite colors.')
    console.log(userName + ' guessed ' + responseFive + ' which is one of my favorite colors.')
  } else {
    alert('Sorry, ' + responseFive + ' is incorrect. Blue, green and red are my favorites.')
    console.log(userName + ' guessed wrong.')
  }

  // Question #6
  // Numeric input and indicate whether the guess is
  // too high or too low

  var numberTries = 0;
  var myNumber = 11;

  do {
    numberTries +=1
    var userNumber = prompt( 'Guess my favorite number. It\'s between 1 and 100.' );
    if ( userNumber > myNumber ) {
      alert( 'Your guess was too high.' );
    }
    else if ( userNumber < myNumber ) {
      alert( 'Your guess was too low.' );
    }

  } while ( userNumber != myNumber && numberTries < 4);

  if (userNumber == myNumber) {
    alert( 'You guessed it!' );
  } else {
    alert('Sorry, no more tries.');
  }

  // Question #7
  // Guessing game that accepts multiple correct answers stored in an array
  // User has 6 tries
  // Message to the user indicating all of the possible correct answers

  var countryGuesses = 0;
  var countriesVisited = [ 'chile' , 'brazil' , 'peru' , 'mexico' , 'canada'];
  var countriesVisitedString = countriesVisited.join(" , ");

  do {
    countryGuesses +=1
    var responseSeven = prompt('Guess which countries I have visited.');
    if (countriesVisited.indexOf(responseSeven.toLowerCase()) !==  -1) {
      console.log('This is where they got the right answer.')
    }
    else {
      alert('Sorry. ' + responseSeven + ' is not a country I have visited.');
    }

  } while (countriesVisited.indexOf(responseSeven.toLowerCase()) === -1 && countryGuesses < 7);

  if (countriesVisited.indexOf(responseSeven.toLowerCase()) === 0) {
    alert('You guessed right! ' + countriesVisitedString + ' are all the countries I have visited.');
  }  else {
    alert('Sorry. You ran out of tries. ' + countriesVisitedString + ' are all the countries I have visited.');
  }



  }
