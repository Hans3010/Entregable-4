import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import UserForm from "./Components/UserForm";
import useCrud from "./hooks/useCrud";

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {users,getAllUsers,createNewUser,deleteUserById,updateUserById} = useCrud()

  const [updateInfo, setUpdateInfo] = useState()
  
  useEffect(() => {
    getAllUsers()
  }, []);

  
  
  return (
    <div className="App">
      <h1 className="App_title">Users</h1>
      <button onClick={() => setCloseForm(false)} className="App_btn">+ Create New User</button>
      <div className= {`form_container ${closeForm && 'close_form'}`}>
        <UserForm
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}
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
