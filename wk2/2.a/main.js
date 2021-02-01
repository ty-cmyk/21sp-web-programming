
// Question Array
      // Tyler Mann


//Quiz Questions
      const quiz = [
                  { question: 'How many planets are in the Solar System?', answer:'Eight planets' },
                  { question: 'What is the biggest planet in our solar system?', answer:'Jupitar' },
                  { question: 'What is the smallest planet in our solar system?', answer:'Mercury' },
                  { question: 'What is the most common type of star found in the Milky Way?', answer:'Red dwarf stars' },
                  { question: 'What has a gravitational pull so strong that even light cannot escape it?', answer:'A black hole' },
                  { question: 'How many moons are in our Solar System? (Hint: It’s over 50.)', answer:'181 moons' }
            ];

//Random Question
      const randomNumber = Math.round(Math.random() * (quiz.length - 1));
      console.log(randomNumber);
      console.log(quiz[randomNumber]);

//User Prompt and Input
      const userInput = window.prompt(quiz[randomNumber].question);
      console.log(userInput);
      window.alert('You answered: ' + userInput + '.' + ' The correct answer is: '+ quiz[randomNumber].answer + '.');


