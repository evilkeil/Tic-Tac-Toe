const createPlayer = function(name,marker){
    let score = 0;
    const addScore = ()=> {
        score++
        return score;
    
    }

    return {name,marker,addScore}
}


// const player1 = createPlayer("kevin","X");


//  player1.addScore();


 
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



function winCondition(m){
    const gameBoard = game.getGameboard();
     if(
        (gameBoard[0]===m && gameBoard[1]===m && gameBoard[2]===m) ||
        (gameBoard[3]===m && gameBoard[4]===m && gameBoard[5]===m) ||
        (gameBoard[6]===m && gameBoard[7]===m && gameBoard[8]===m) ||
        (gameBoard[2]===m && gameBoard[5]===m && gameBoard[8]===m) ||
        (gameBoard[1]===m && gameBoard[4]===m && gameBoard[7]===m) ||
        (gameBoard[0]===m && gameBoard[3]===m && gameBoard[6]===m) ||
        (gameBoard[2]===m && gameBoard[4]===m && gameBoard[6]===m) ||
        (gameBoard[0]===m && gameBoard[4]===m && gameBoard[8]===m) 
    ){
        return m;
    }else{
        return "draw"
    }
}
    
  



game.markGameboard(4,"X");
game.markGameboard(7,"X");
game.markGameboard(5,"O");
game.markGameboard(8,"O");
game.markGameboard(3,"O");
game.markGameboard(0,"X");
game.markGameboard(6,"O");
game.markGameboard(1,"X");
game.markGameboard(2,"O");

console.log(game.getGameboard());

console.log(winCondition("O"));
console.log(winCondition("X"));



