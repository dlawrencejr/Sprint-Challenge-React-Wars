import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Characters';
import './components/CharStyle.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data,setData] = useState([]);

  useEffect(() =>{

    axios.get('https://swapi.co/api/people/')
    .then(res =>{
      console.log(res.data);
      setData(res.data.results);

    })
    .catch(err =>{
      console.log('ERROR',err)
    })

  }, []);

  // console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className = 'Cards'>

        {data.map((info,idx) => {

          return <Character key = {idx} name = {info.name}
            birth_year = {info.birth_year}
            hair_color = {info.hair_color}
            height = {info.height}
            eye_color = {info.eye_color}
            gender = {info.gender} />
          
        })
        }
       
      </div>

    </div>
  );
}

export default App;
