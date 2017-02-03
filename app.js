
function myFunction() {

  // Ask and use the user's name

  var userName = prompt ('What\'s your name?');
  alert('Hi ' + userName + '. Thanks for visiting my site!')

  // Guessing Game
  // We want to ask the user a question
  // Take their answer as input; stored in a var
  // Validate that their answer matches my answer
  // Depending on True or False, provide feedback

  // Question #1

  var answerOne = prompt('What country was I born in? Hint: South America');
  var myAnswerOne = 'CHILE';

  if(answerOne.toUpperCase() === myAnswerOne) {
    alert('Wow! You got it right. I was born in Chile.')
    // Do something
  } else {
    alert('Sorry, that\'s wrong')
    // Do something else
  }

  // Question #2

  var answerTwo = prompt('What\'s my first language?');
  var myAnswerTwo = 'SPANISH';

  if(answerTwo.toUpperCase() === myAnswerTwo) {
    alert('Si! My first language is Spanish.')
    // Do something
  } else {
    alert('Sorry, that\'s wrong')
    // Do something else
  }

  // Question #3

  var answerThree = prompt('What is my favorite sport? Hint: pointy');
  var myAnswerThree = 'FOOTBALL';

  if(answerThree.toUpperCase() === myAnswerThree) {
    alert('Correct! GO HAWKS!!!')
    // Do something
  } else {
    alert('Sorry, that\'s wrong')
    // Do something else
  }

  // User input must accept either y/n or yes/no responses
  // With either .toUpperCase() or .toLowerCase() used to validate input

  var answerFour = prompt('Is my favorite color blue?');

  if(answerFour.toLowerCase() === 'yes' || answerFour.toLowerCase() === 'y') {
    alert('You guessed right!')
  } else {
    alert('Sorry, that\'s wrong')
  }

  var myFavColor = prompt('What is my favorite color?');
  var favColor = ['blue', 'green', 'red'];

  if (favColor.indexOf(myFavColor.toLowerCase()) ===  -1) {
    alert('Not close.')
  } else if (favColor.indexOf(myFavColor.toLowerCase()) === 0) {
    alert('You got it.')
  } else {
    alert('You are close.')
  }




  var userNumber;
  var myNumber = 11;

  do {

      if ( userNumber ) {
          if ( userNumber > myNumber ) {
              alert( "Your guess was too high." );
          }
          else {
              alert( "Your guess was too low." );
          }
      }

      userNumber = prompt( "Guess my favorite number. It\'s between 1 and 100." );
  } while ( userNumber != myNumber );

  alert( "You guessed it!" );


}
