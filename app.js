
let setPlayer = (function(){
    let players = [];

    //cache
    const modal = document.querySelector('.modal');
    const submitBtn = document.querySelector('.submit');
    const resetBtn = document.querySelector('.reset');

    
})()


// const startDialog =function (){
//     document.addEventListener('DOMContentLoaded',function(){
//         show
//     })
// }

// const cache ={

// }


const createPlayer = function(name,marker){
    let score = 0;
    const addScore = ()=> {
        score++
        return score;
    
    }

    return {name,marker,addScore}
}



 
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

game.markGameboard(0,"O");
game.markGameboard(1,"X");
game.markGameboard(2,"O");
game.markGameboard(3,"O");
game.markGameboard(4,"X");
game.markGameboard(5,"O");
game.markGameboard(6,"X");
game.markGameboard(7,"O");
game.markGameboard(8,"X");

console.log(game.getGameboard());




console.log(winCondition());




