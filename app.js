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



// function winCondition(m){
//     const gameBoard = game.getGameboard();
//      if(
//         (gameBoard[0]===m && gameBoard[1]===m && gameBoard[2]===m) ||
//         (gameBoard[3]===m && gameBoard[4]===m && gameBoard[5]===m) ||
//         (gameBoard[6]===m && gameBoard[7]===m && gameBoard[8]===m) ||
//         (gameBoard[2]===m && gameBoard[5]===m && gameBoard[8]===m) ||
//         (gameBoard[1]===m && gameBoard[4]===m && gameBoard[7]===m) ||
//         (gameBoard[0]===m && gameBoard[3]===m && gameBoard[6]===m) ||
//         (gameBoard[2]===m && gameBoard[4]===m && gameBoard[6]===m) ||
//         (gameBoard[0]===m && gameBoard[4]===m && gameBoard[8]===m) 
//     ){
//         return m;
//     }else{
//         return "draw"
//     }
// }
  


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

game.markGameboard(0,"X");
game.markGameboard(1,"O");
game.markGameboard(2,"X");
game.markGameboard(3,"X");
game.markGameboard(4,"O");
game.markGameboard(5,"O");
game.markGameboard(6,"O");
game.markGameboard(7,"X");
game.markGameboard(8,"X");

console.log(game.getGameboard());




console.log(winCondition());
// console.log(winCondition("X"));



