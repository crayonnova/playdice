/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,dice, roll;
    init();


    document.querySelector(".btn-roll").addEventListener('click',function(){
        roundScore = 0; 
        var dice = Math.floor((Math.random()*6)+1);      
        window.dice.style.display = "block";
        window.dice.src = 'dice-'+dice+'.png';
        if (dice!==1) { 
            roundScore += dice;
            document.querySelector("#current-"+activePlayer).textContent = roundScore;
            // console.log(roundScore);
            // scores[activePlayer] += roundScore;
            // document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
            // console.log(scores[activePlayer]);
        }else{
            alert('Player '+activePlayer +' droped 1 so score will get 0');
            document.getElementById('score-'+activePlayer).textContent = 0;
            roundScore = 0;
            nextTurn();
        }
    });

    document.querySelector('.btn-hold').addEventListener('click',function(){
            roundScore = 0;
            var hold = parseInt(document.querySelector('#current-'+activePlayer).textContent);
            // console.log(scores[activePlayer]);
            scores[activePlayer] += hold;
            // console.log(scores[activePlayer]);
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            if(scores[activePlayer]>=20){
                
                if (activePlayer == 1) {
                    document.querySelector("#name-"+activePlayer).textContent = "WINNER is Player 1";
                document.querySelector(".player-"+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-0-panel').style.display = 'none';
                    document.querySelector('.btn-roll').style.display = 'none';
                    document.querySelector('.btn-hold').style.display = 'none';
                    document.querySelector('.player-current-box').style.display = 'none';
                    document.querySelector('.player-1-panel').style.width = '100%';
                }else{
                    document.querySelector("#name-"+activePlayer).textContent = "WINNER is Player 2";
                document.querySelector(".player-"+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-1-panel').style.display = 'none';
                    document.querySelector('.player-current-box').style.display = 'none';
                    document.querySelector('.btn-roll').style.display = 'none';
                    document.querySelector('.btn-hold').style.display = 'none';
                    document.querySelector('.player-0-panel').style.width = '100%';
                }
            };
            nextTurn();
        });
    document.querySelector('.btn-new').addEventListener('click',function(){
        location.reload();
        init();
    });


function init(){

    scores          = [0,0];
    roundScore      = 0;
    activePlayer    = 0;
    dice =  document.querySelector(".dice");
    dice.style.display = "none";
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
}


function nextTurn(){
            document.querySelector("#current-"+activePlayer).textContent = 0;
            activePlayer === 0?activePlayer =1 :activePlayer=0;
            roundScore = 0;
            document.querySelector(".player-0-panel").classList.toggle('active');
            document.querySelector(".player-1-panel").classList.toggle('active');
            window.dice.style.display = "none";
}




