import './App.css'
import { useState } from 'react'

function App() {
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');

    const cambiarNombre = (newName) => {
        setName(newName);
    }

    
    const changeName = (event) => {
        event.preventDefault();
        if (newName.trim() !== '') {
        setName(newName);
        setNewName('');
        }
    };

    return (
        
        /*<div>
            <h2>Teacher: {name}</h2>
            <ul>
                <li onClick={() => cambiarNombre("Data")}>Data</li>
                <li onClick={() => cambiarNombre("Reyes")}>Reyes</li>
                <li onClick={() => cambiarNombre("Yolanda")}>Yolanda</li>
            </ul>
        </div>*/

        <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
          <input 
            type="text" 
            value={newName} 
            onChange={(event) => setNewName(event.target.value)} 
            placeholder="Añade un nombre" 
          />
          <button type="submit">Añadir</button>
        </form>
      </div>


    )
}

export default App;
