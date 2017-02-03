
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
    console.log(userName + '\'s guess of ' + responseOne + ' is correct!' )
  } else {
    alert('Sorry, that\'s wrong');
    console.log(userName + '\'s guess of ' + responseOne + ' is wrong!' )
  }

  // Question #2

  var responseTwo = prompt('Guess my first language?');
  var myAnswerTwo = 'SPANISH';

  if(responseTwo.toUpperCase() === myAnswerTwo) {
    alert('Si! My first language is Spanish. Great job ' + userName + '!')
    console.log(userName + '\'s guess of ' + responseTwo + ' is correct.')
  } else {
    alert('Sorry, that\'s wrong')
    console.log(userName + '\'s guess of ' + responseTwo + ' is wrong!' )
  }

  // Question #3

  var responseThree = prompt('What is my favorite sport? Hint: pointy');
  var myAnswerThree = 'football';

  if(responseThree.toLowerCase() === myAnswerThree) {
    alert('That\'s correct! GO HAWKS!!!')
    console.log(userName + ' guessed correctly that ' + myAnswerThree + ' is my favorite sport. GO HAWKS!!!')
  } else {
    alert('Sorry, that\'s wrong')
        console.log(userName + '\'s guess of ' + responseThree + ' is wrong!' )
  }

  // Question #4
  // Logical operator
  // User input must accept either y/n or yes/no responses
  // With either .toUpperCase() or .toLowerCase() used to validate input

  var responseFour = prompt('Do I have any children?');

  if(responseFour.toLowerCase() === 'yes' || responseFour.toLowerCase() === 'y') {
    alert('You guessed right! I have one son who is 21 years old.')
  } else {
    alert('Sorry, that\'s wrong. I do have a son.')
  }

  // Question #5
  // Multiple right answers

  var responseFive = prompt('Name three of my favorite colors.');
  var favColor = ['blue', 'green', 'red'];

  if (favColor.indexOf(responseFive.toLowerCase()) >  -1) {
    alert('You got it right. ' + responseFive + ' is one of my favorite colors.')
  } else {
    alert('Sorry, ' + responseFive + ' is incorrect. Blue, green and red are my favorites.')
  }

// Question #6
// Numeric input and indicate whether the guess is
// too high or too low

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
