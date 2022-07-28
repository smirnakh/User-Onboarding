import React, {useState} from 'react';
import Form from './components/Form';
import schema from './validation/formSchema';
import './App.css';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  tos: false
}

const initialFormErrors = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  tos: ''
}

function App() {

  const [formValues, setForValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

  const handleChange = (name, value) => {
    validate(name, value);
  setForValues({...formValues, [name]: value})
}
const handleSubmit = () => {
  axios.post('https://reqres.in/api/users`', formValues)
       .then((response) => {
         setUsers([response.data, users])
       })
       .catch((error) => console.error(error))
}

const validate = (name, value) => {
  yup.reach(schema, name)
     .validate(value)
     .then(() => setFormErrors({...formErrors, [name]: ''}))
     .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user => (
        <div key={user.id}>
          {user.createdAt}
          {user.email}
        </div>
      ))}
    </div>
  );
}

export default App;
