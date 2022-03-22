import {db} from './firebase';
import { collection, getDocs, query, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

//Guarda en una nueva coleccion llamada 'person', y data {name: 'lo que ingrese en el input'}
const guardarNombrePersona = (name) => {
  addDoc(collection(db, 'persons'), { name })
}

const getPersons = async () => {
  const resultado = await getDocs(query(collection(db, 'persons')))

  return resultado;
}

const deletePerson = async (id) =>{
  await deleteDoc(doc(db, 'persons', id))
}

const updatePerson = async (id, name) =>{
  await updateDoc(doc(db, 'persons', id), { name })
}

export { guardarNombrePersona, getPersons, deletePerson, updatePerson }