import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const handleClick=(e)=>{
    e.preventDefault();
    if(dictionary.some(item=>item.word.toLowerCase() === word.toLowerCase())){
      setMeaning(dictionary.find(item => item.word.toLowerCase() === word.toLowerCase()).meaning);
    }else{
      setMeaning("Word not found in the dictionary.");
    }
  }


  return (
    <div>
      <h1>Dictionary App</h1>
      <br />
      <form onSubmit={(e)=>handleClick(e)}>
      <input placeholder='Search for a word...' type="text" style={{ width: 300, height: 40 }} value={word} onChange={(e) => setWord(e.target.value)} />
      <button type='submit' style={{ height: 43, marginLeft:1 }}>Search</button>
      </form>
      <div style={{ marginTop: 0, padding : 0 }}>
        <h3 style={{margin : 0, padding : 0}}>Definition:</h3> <p>{meaning}</p>
      </div>
    </div>
  )
}

export default App
