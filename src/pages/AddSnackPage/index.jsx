import React, {useState} from 'react'
import { SnackForm } from '../../components';

export default function AddSnackPage() {
  const [inputText, setInputText] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [vegetarian, setVegetarianCheckbox] = useState(false);
  const [healthy, setHealthyCheckbox] = useState(false);

  return (
    <main>
        <h2>Add your favorite snack:</h2>
        <SnackForm inputText={inputText} setInputText={setInputText} description={description} setDescription={setDescription} message={message} setMessage={setMessage} vegetarian={vegetarian} setVegetarianCheckbox={setVegetarianCheckbox} healthy={healthy} setHealthyCheckbox={setHealthyCheckbox}/>
    </main>
  )
}
