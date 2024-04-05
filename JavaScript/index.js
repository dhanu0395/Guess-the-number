// creating random number

let randomNumber = Math.trunc(Math.random()*20+1);
console.log(randomNumber);

let score = 20;
let highscore = 0;

document.getElementById('check-btn').addEventListener('click', ()=>{

    let guessNum = Number(document.getElementById('guess').value);

    // if there is no number in text field
    if(guessNum==""){
        document.querySelector('.message').innerHTML="Enter a Number!";
    }
    // match with secret number
    else if (guessNum === randomNumber){
        document.querySelector('.message').innerHTML="Correct Number!";
        document.getElementById('find-number').innerHTML=randomNumber;
        document.querySelector('body').style.backgroundColor='green';

        //  for highscore

        if(score>highscore){
            highscore=score;
            document.getElementById('high-score').innerHTML=highscore;
        }
    }

    // when secret number is high

    else if(guessNum > randomNumber){
        if(score>1){
            document.querySelector('.message').innerHTML="Too High!"; 
            // reduce score for incorrect guessing
            score=score-1;
            // update score for incorrect guessing
            document.getElementById('score').innerText=score;
        }else{
            document.querySelector('.message').innerHTML="You lost the game!"; 
            document.getElementById('score').innerText=0;
        }
    }

    // when secret number is low
    else if(guessNum < randomNumber){
        if(score>1){
            document.querySelector('.message').innerHTML="Too Low!"; 
            // reduce score for incorrect guessing
            score=score-1;
            // update score for incorrect guessing
            document.getElementById('score').innerText=score;
        }else{
            document.querySelector('.message').innerHTML="You lost the game!"; 
            document.getElementById('score').innerText=0;
        }
    }
})

    document.querySelector('.again-btn').addEventListener('click',()=>{
        score=20;
        randomNumber = Math.trunc(Math.random()*20+1);
        console.log(randomNumber);
        document.querySelector('.message').innerHTML="Start Guessing...!"; 
        document.getElementById('score').innerText=score;
        document.querySelector('body').style.backgroundColor='black';
        document.getElementById('find-number').innerHTML='?';
        document.getElementById('guess').value='';
    })
