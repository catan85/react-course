import {useState} from 'react';

export default function Player({ initialName, symbol, isActive, onNameChange}){

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);


    function handleEditClick(){
        setIsEditing((editing) => !editing);
        if (isEditing)
        {
            onNameChange(symbol, playerName);
        }
    }

    function handleInputEdit(event){
        setPlayerName((name)=>event.target.value);
    }

    let playerNameControl = <span className="player-name">{playerName}</span>;
    if (isEditing){
        playerNameControl = <input type="text" required value={playerName} onChange={handleInputEdit}></input>
    }

    return (
        <li className={ isActive ? 'active' : undefined } >
        <span className="player">
          {playerNameControl}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit" }</button>
        </span>
      </li>
    );
}