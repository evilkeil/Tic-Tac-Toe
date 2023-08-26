const createPlayer = function(name,marker){
    let score = 0;
    const addScore = ()=> {
        score++
        return score;
    
    }

    return {name,marker,addScore}
}


const player1 = createPlayer("kevin","X");


 player1.addScore();




