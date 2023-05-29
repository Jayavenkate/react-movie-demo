import {useState}from "react";
export function TicTacToe() {
 
  const [board,setBoard]=useState(["X",null,null,"X","O",null,null,null,"X"]);
   const[isXTurn,setIsXTurn]=useState(true);
  const handClick=(index)=>{
    console.log(index);
    const boardCopy =[...board];
    boardCopy[index]=isXTurn?"X":"O";
    setIsXTurn(!isXTurn);
    setBoard(boardCopy);
  }

  return (
    <div>
      <h1>TicTacToe Game</h1>
      <div className="board">
      {board.map((val)=>(<GameBox  val={val}
      onPlayerClick={()=>handClick(index)} />
      ))}
      </div>
    </div>
  );
}
function GameBox({val,onPlayerClick}){
  // const [val,setval]=useState("");
  const styles={
    color:val=='X'?"green":"red",
  }
  return(
       <div style={styles} onClick={onPlayerClick} className="game-box" >
     {val}
      </div>
  )
}
