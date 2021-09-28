var readLine = require('readline-sync')

var userName = readLine.question('What is your name ?')

console.log("Welcome " + userName + "! to Do YOU KNOW Prakash?" )
console.log()
console.log("Use small case for answers..")
console.log()


var score = 0

function play(question,answer) {
  
  var userAnswer = readLine.question(question)

  if(userAnswer === answer) {
    console.log("Correct!!")
    score++;

  }
  else {
    console.log("No man wrong..")
    score--;
  }

  console.log("Your score "+ score)
  console.log("-------------------------------")
}

var questions = [{
  question: "Where do i live ?",
  answer : "madurai"
},{
  question:"My fav color?",
  answer:"black"
}, {
  question:"My fav movie?",
  answer:"harry potter"
},{
  question:"My fav ipl team ?",
  answer:"csk"
}
]

for(var i=0;i<questions.length;i++) {

    var question = questions[i]
    
    play(question.question,question.answer)
}
