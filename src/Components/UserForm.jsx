import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])
    

    const {register, reset, handleSubmit} = useForm()

    const submit = data => {
        if(updateInfo){
            //update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }
        else{
            //create
            createNewUser(data)
        }
        
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:'',
        })
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>{updateInfo ? 'Update User' : 'Create User'}</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Write your Email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Write your Password" {...register('password')} />
      </div>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" placeholder="Write your First Name" {...register('first_name')} />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" placeholder="Write your Last Name" {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday"  {...register('birthday')} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
