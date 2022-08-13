import React, {useState} from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const App = () => {

const [userList, setUserList] = useState([]);

const addUserHandler = (username, userAge) => {
setUserList((prevUsersList) => {
  return [...prevUsersList, {name: username, age: userAge, id: Math.random().toString()},];
})
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  )
}

export default App