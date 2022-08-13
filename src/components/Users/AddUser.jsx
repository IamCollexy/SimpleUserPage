import React from 'react'
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    const [usernameInput, setUsernameInput] = useState('');
    const [userAgeInput, setUserAgeInput] = useState('');
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameInput.trim().length === 0 || userAgeInput.trim().length === 0) {
        setError({
            title: 'invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
        });
        }
        if (+userAgeInput < 1) {
            setError({
                title: 'invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        setUserAgeInput('')
        setUsernameInput('')
          props.onAddUser(usernameInput, userAgeInput);
    };

    const handleUsernameChange = (e) => {
        setUsernameInput(e.target.value);
    }
    const handleAgeChange = (e) => {
        setUserAgeInput(e.target.value);
    }

         const errorHandler = () => {
            setError(null);
         }
   return (
    
    <div>
    { error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
   
   <form 
   onSubmit={handleSubmit}>
    <label 
    htmlFor='username'>
    Username
    </label>
<input 
id='username' 
type='text' 
onChange={handleUsernameChange}
value={usernameInput}
/>
    <label 
    htmlFor='age'>
        Age(years)
        </label>
<input 
id='age' 
type='number' 
onChange={handleAgeChange}
value={userAgeInput}
/>
<Button 
type='submit'>
    Add User
    </Button>
   </form>
   </Card>
   </div>
  )
}

export default AddUser