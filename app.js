
let setPlayer = (function(){
    let players = [];

    //cache
    const modal = document.querySelector('.modal');
    const resetBtn = document.querySelector('.reset');
    const form = document.getElementById('set-player');
    const usernameOne = document.getElementById('user-name1');
    const usernameTwo = document.getElementById('user-name2');

    //bind events

    document.addEventListener('DOMContentLoaded',modal.showModal());
    form.addEventListener('submit',(e)=>{
        submitInfo(e);
    });


    function submitInfo(e){
        e.preventDefault();

        const user1 = usernameOne.value;
        const user2 = usernameTwo.value;
        
        const player1 = createPlayer(user1,"X");
        const player2 = createPlayer(user2,"O");

        addToPlayers(player1,player2);
        form.reset();
        modal.close();
        console.log(players);
    }
    const createPlayer = function(name,marker){
        let score = 0;
        const addScore = ()=> {
            score++
            return score;
        
        }
        return {name,marker,addScore,score}
    }

    function addToPlayers(p1,p2){
        players.push(p1);
        players.push(p2);
    }
   
    
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




