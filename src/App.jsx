import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import UserForm from "./Components/UserForm";
import useCrud from "./hooks/useCrud";

function App() {

  const {users,getAllUsers,createNewUser,deleteUserById,updateUserById} = useCrud()

  const [updateInfo, setUpdateInfo] = useState()
  
  useEffect(() => {
    getAllUsers()
  }, []);

  
  
  return (
    <div className="App">
      <h1>User App</h1>
      <div>
        <UserForm
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className="user_container">
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            />
          ))          
        }
      </div>
    </div>
  );
}

export default App;
