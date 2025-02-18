
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Logs from './components/Log.jsx'
import {useState} from 'react'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/GameOver.jsx'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X')
  {
    currentPlayer = 'O'
  }
  return currentPlayer;
}


function App() {

  const [gameTurns, setGameTurns ] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2"
  })


  let gameBoard = [...initialGameBoard.map(array => [...array])]; //deep copy dell'array per sganciare la reference
  for (const turn of gameTurns){
      const {square, player} = turn;
      const {row,col} = square;
      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol && 
        firstSquareSymbol === thirdSquareSymbol)
    {
      winner = playerNames[firstSquareSymbol];
    }
  }

  function handleSelectSquare(rowIndex, colIndex){

    setGameTurns(prevTurns => {

      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X')
      {
        currentPlayer = 'O'
      }

      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer} , ...prevTurns];
      return updatedTurns;
    })
  }

  const activePlayer = deriveActivePlayer(gameTurns);
  
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch(){
    setGameTurns(() => []);
  }

  function handlePlayerNameChange(symbol, playerName){
    
    setPlayerNames((currentPlayerNames) => {
      return {
        ...currentPlayerNames, // ritorna una copia dell'array e in più
        [symbol]: playerName   // setta dinamicamente una sua property
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerNameChange}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerNameChange}/>
        </ol>
        {( winner || hasDraw ) && <GameOver winner={winner} onRematch={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board ={gameBoard}/>
      </div>
      <Logs turns={gameTurns}></Logs>
    </main>
  )
}

export default App
