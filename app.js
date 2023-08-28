

document.addEventListener('DOMContentLoaded',()=>{

    let setPlayer = (function(){

        //variables
        let players = [];
    
        //cache
        const modal = document.querySelector('.modal');
        const resetBtn = document.querySelector('.reset');
        const form = document.getElementById('set-player');
        const usernameOne = document.getElementById('user-name1');
        const usernameTwo = document.getElementById('user-name2');
    
        modal.showModal();

        //bind events
        form.addEventListener('submit',(e)=>{
            submitInfo(e);
        });
    
        //methods
    
        function submitInfo(e){
            e.preventDefault();
    
            const user1 = usernameOne.value;
            const user2 = usernameTwo.value;
            
            const player1 = _createPlayer(user1,"X",5);
            const player2 = _createPlayer(user2,"O",4);
    
            _addToPlayers(player1,player2);
            form.reset();
            modal.close();
            RenderScore.renderUserNames();
            
        }
        const _createPlayer = function(name,marker,turns){
            let score = 0;
            let playerturns = turns;
            const addScore = ()=> {
                score++
                return score;
            
            }
            return {name,marker,addScore,score,playerturns}
        }
    
        function _addToPlayers(p1,p2){
            players.push(p1);
            players.push(p2);
        }
        
        function getPlayerScore(){
            return players.map(player => ({name:player.name , score: player.score}))
        }
    
        return {
            players,
            getPlayerScore
        }
    })()
    
    
    
    const RenderScore =(function(){
    
        //cache
        const score = document.querySelectorAll('.score');
        //variables
        // const scoreArr = Array.from(score);
        // const playerNames = setPlayer.players.map(player => player.name);
        const playerScores = setPlayer.getPlayerScore();
    
        //functions 
        function renderUserNames(){
            const scoreArr = Array.from(score);
            const playerNames = setPlayer.players.map(player => player.name);
            scoreArr.forEach((scoreDiv,index)=>{
                const h2Elem = scoreDiv.querySelector('.playerName');
                h2Elem.textContent = playerNames[index];
                console.log(playerNames);
                
            })
        }
        
        
    return {renderUserNames}
        
    
    })();
    
});




// RenderScore.renderUserNames();
// const startDialog =function (){
//     document.addEventListener('DOMContentLoaded',function(){
//         show
//     })
// }

// const cache ={

// }



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




