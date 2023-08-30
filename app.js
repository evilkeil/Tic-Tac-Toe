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
            decrementTurns:function(){
                this.turns--;
                return this.turns
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

    function reduceTurns(playerIndex){
        if (playerIndex >= 0 && playerIndex < players.length) {
            players[playerIndex].decrementTurns(); // Call the addScore method of the specific player
        }
    }

    return{
        players,
        getPlayerScore,
        addScore,
        reduceTurns,
        render
    }

})();

const matchStart = (function(){
    //variables
    let gameBoard = [null,null,null,null,null,null,null,null,null];
    //caches
    const playArea = document.querySelector('.container');

    //bindEvents
  
    playArea.addEventListener('click',(e)=>{
       
            markPlayArea(e);
        
        
    })
    
     
    //methods 
    const markGameboard =(i,marker)=>{
        if (i >= 0 && i < gameBoard.length &&gameBoard[i] === null) {
         if(marker === "X"){
             gameBoard[i]="X"
         }else if (marker === "O"){
             gameBoard[i] = "O"
         }
     }
     }
     const  winCondition =() =>{
    
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
    function markPlayArea(e){
        const clicked= e.target.closest('div');
        const markpoint = clicked.dataset.number;
       
        
        if (clicked.dataset.status === "un-marked"){
            
            clicked.dataset.status = "marked";
            const currentPlayer = checkPlayerTurn();
            clicked.textContent = currentPlayer;
            markGameboard(markpoint,currentPlayer);
            console.log(`marked on ${markpoint}`)
            console.log(`mark is ${currentPlayer}`)
        }
        
        
        console.log(gameBoard);
        
        
        const win = winCondition();
        const isDraw = gameBoard.every(cell => cell !== null);
    
        if (win !== "draw") {
            if(win === Onload.players[0].marker){
                Onload.addScore(0);
            }else if(win === Onload.players[1].marker){
                Onload.addScore(0);
            }
            
        } else if (isDraw) {
           
            console.log("It's a draw!");
        }

    }

    const checkPlayerTurn=()=>{
        if (Onload.players[1].turns >= Onload.players[0].turns){
            Onload.reduceTurns(1)
            return Onload.players[1].marker
            
        }else{
            Onload.reduceTurns(0);
            return Onload.players[0].marker
        }
    }

    function clearGameBoard(){
        gameBoard=[null,null,null,null,null,null,null,null,null]
        

    
    }

    return{
        gameBoard,
        clearGameBoard,
    }
})();


const resetGame = (function(){
    //cache
    const boxDivs = document.querySelectorAll('.box')
    const resetGame = document.querySelector('.game');
    const resetMatch = document.querySelector('.match');
    const modalRestartGame  = document.querySelector('.newGame-modal');
    const restartGameY = document.getElementById('yes-game');
    const restartGameN = document.getElementById('no-game');
    // const modalRestartMatch = document.querySelector('.newMatch-modal');


    // //bind events
    resetGame.addEventListener('click',(e)=> _startNewGame(e));
    resetMatch.addEventListener('click',_startNewMatch())
    restartGameY.addEventListener('click',(e)=> _resetGame(e))
    restartGameN.addEventListener('click',(e)=> _closemodal(e,modalRestartGame))
    

    //methods
    function _startNewGame(e){
        e.preventDefault();
        modalRestartGame.showModal();
    }
    console.log(boxDivs)

    function _resetGame(e){
        e.preventDefault();
        matchStart.clearGameBoard();
        boxDivs.forEach(box =>{
            box.dataset.status="un-marked";
            box.textContent=""
            console.log(matchStart.gameBoard)
            modalRestartGame.close();
        })
        
    }
    function  _closemodal(e,modal){
        e.preventDefault();
        modal.close();
    }
    function _startNewMatch(){

    }
})();

