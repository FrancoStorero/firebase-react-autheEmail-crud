import './App.css';
import { useEffect, useState } from 'react';
import { guardarNombrePersona, getPersons, deletePerson, updatePerson } from './firebase/api'

function App() {

  const [personName, setPersonName] = useState('')
  const [personId, setPersonId] = useState('')
  const [persons, setPersons] = useState([])

  useEffect(()=>{

    consultarPersonasData();

  },[])

  
  const consultarPersonasData = async () =>{
    const personas = await getPersons()
    setPersons(personas.docs)

  }

  const guardarPerson = async ()=>{
   await guardarNombrePersona(personName)
    consultarPersonasData()
  }

  const removePerson = async ()=>{
   await deletePerson(personId)
   consultarPersonasData()
  }

  const updatePersonData = async () =>{
   await updatePerson(personId, personName)
    consultarPersonasData()
  }

  return (
    <div className="App">
     <input onChange={ e => setPersonId(e.target.value)} placeholder='personId' /> 
     <input onChange={ e => setPersonName(e.target.value)} placeholder='personName' /> 
     
     
     <button onClick={guardarPerson}>Guardar</button>
     <button onClick={removePerson}>Eliminar</button>
     <button onClick={updatePersonData}>Actualizar</button>

     {
      !persons ? undefined : persons.map(person => <h3 key={person.data().name}>{person.id} - {person.data().name}</h3>)
     }

    </div>
  );
}

export default App;
