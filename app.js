const Onload =(function(){
   
    //cache
    const modal = document.querySelector('.modal');
    const resetBtn = document.querySelector('.reset');
    const form = document.getElementById('set-player');
    const usernameOne = document.getElementById('user-name1');
    const usernameTwo = document.getElementById('user-name2');
    const score = document.querySelectorAll('.score');

    
    //variables
    let players = [];
    const scoreArr = Array.from(score);

    //bind events
    document.addEventListener('DOMContentLoaded',()=>{
        modal.showModal();
    })
    form.addEventListener('submit',(e)=>{
        submitInfo(e);
    });

    //methods

    function submitInfo(e){
        e.preventDefault();

        const user1 = usernameOne.value;
        const user2 = usernameTwo.value;
        
        const player1 = _createPlayer(user1,"X");
        const player2 = _createPlayer(user2,"O");

        _addToPlayers(player1,player2);
        form.reset();
        modal.close();
        render('name');
        render('score');
        
    }
    const _createPlayer = function(name,marker){
        
        let turns;
            if (marker === "X"){
                turns = 5;
            }else if (marker === "O"){
                turns = 4;
            }
        return {
            name,
            marker,
            addScore: function(){
                this.score++;
                return this.score;
            },
            score: 0,
            turns:turns}
    }
    function _addToPlayers(p1,p2){
        players.push(p1);
        players.push(p2);
    }
    function getPlayerScore(){
        return players.map(player => ({name:player.name , score: player.score}))
    }
    function render(key) {
        const playerData = key === 'name' ? players.map(player => player.name) : players.map(player => player.score);
        
        scoreArr.forEach((scoreDiv, index) => {
            if (key === 'name') {
                const h2Elem = scoreDiv.querySelector('.playerName');
                h2Elem.textContent = playerData[index];
            } else if (key === 'score') {
                const pElem = scoreDiv.querySelector('.playerScore');
                pElem.textContent = playerData[index];
            }
        });
    }

    function addScore(playerIndex) {
        if (playerIndex >= 0 && playerIndex < players.length) {
            players[playerIndex].addScore(); // Call the addScore method of the specific player
        }
        render('score');
    }

    return{
        players,
        getPlayerScore,
        addScore,
        render
    }

})();




const game = (function (){
    let gameBoard = [null,null,null,null,null,null,null,null,null];
    const markGameboard =(i,marker)=>{
       if (i >= 0 && i < gameBoard.length &&gameBoard[i] === null) {
        if(marker === "X"){
            gameBoard[i]="X"
        }else if (marker === "O"){
            gameBoard[i] = "O"
        }
    }
    }
    const getGameboard =()=>{
        return gameBoard;
    }
    
    return{
        markGameboard,
        getGameboard
    }

})();

function winCondition(){
    const gameBoard = game.getGameboard();
    const markers =["X","O"];
    
    const result = markers.reduce((acc,curr) =>{
        if(
            (gameBoard[0]===curr && gameBoard[1]===curr && gameBoard[2]===curr) ||
            (gameBoard[3]===curr && gameBoard[4]===curr && gameBoard[5]===curr) ||
            (gameBoard[6]===curr && gameBoard[7]===curr && gameBoard[8]===curr) ||
            (gameBoard[2]===curr && gameBoard[5]===curr && gameBoard[8]===curr) ||
            (gameBoard[1]===curr && gameBoard[4]===curr && gameBoard[7]===curr) ||
            (gameBoard[0]===curr && gameBoard[3]===curr && gameBoard[6]===curr) ||
            (gameBoard[2]===curr && gameBoard[4]===curr && gameBoard[6]===curr) ||
            (gameBoard[0]===curr && gameBoard[4]===curr && gameBoard[8]===curr) 
        ){
            acc = curr
        }
        return acc;
    },"draw")
return result
}

// game.markGameboard(0,"O");
// game.markGameboard(1,"X");
// game.markGameboard(2,"O");
// game.markGameboard(3,"O");
// game.markGameboard(4,"X");
// game.markGameboard(5,"O");
// game.markGameboard(6,"X");
// game.markGameboard(7,"O");
// game.markGameboard(8,"X");

// console.log(game.getGameboard());




// console.log(winCondition());




