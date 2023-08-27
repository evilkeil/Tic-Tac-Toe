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
       if (gameBoard[i] === null) {
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


console.log(game.getGameboard());

game.markGameboard(5,"X");
game.markGameboard(7,"O");
console.log(game.getGameboard());
game.markGameboard(7,"X")
console.log(game.getGameboard());



