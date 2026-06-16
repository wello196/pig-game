'use strict';
const score0 = document.querySelector('#score--0');
const score1= document.querySelector('#score--1');
const dice=document.querySelector('.dice');
const rollDice=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const btnNew=document.querySelector('.btn--new');
const currentScore0=document.querySelector('#current--0')
const currentScore1=document.querySelector('#current--1')
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
let currentScore,activePlayer,score,playing;



function init(){
   
    score0.textContent=0;
    score1.textContent=0;
    dice.classList.add('hidden');
    currentScore=0;
     activePlayer=0;
    score=[0,0];
    playing=true;
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active');
    currentScore0.textContent=0;
    currentScore1.textContent=0;
   
}

init();


function swipe(){
    currentScore=0;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        activePlayer=activePlayer===0?1:0;
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

rollDice.addEventListener('click',function(){
    if(playing){
         let random=Math.trunc(Math.random()*6)+1;
        dice.src=`dice-${random}.png`
        dice.classList.remove('hidden');
        if(random!==1){
        currentScore+=random;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else{
       swipe();

    }
    }
   
})

btnHold.addEventListener('click',function(){
    if(playing){
        score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    

    if(score[activePlayer]>=50){
        playing=false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    }
    else{
        swipe()
    }
    }
    
})

btnNew.addEventListener('click',init)