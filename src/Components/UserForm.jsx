import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './styles/userForm.css'

const UserForm = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm}) => {

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
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div onClick={() => setCloseForm(true)} className="form_x">x</div>
      <h2 className="form_title">{updateInfo ? 'Update User' : 'Create User'}</h2>
      <div className="form_div">
        <label className="form_label" htmlFor="email">Email</label>
        <input className = 'form_input' type="email" id="email" placeholder="Write your Email" {...register('email')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="password">Password</label>
        <input className = 'form_input' type="password" id="password" placeholder="Write your Password" {...register('password')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="first_name">First Name</label>
        <input className = 'form_input' type="text" id="first_name" placeholder="Write your First Name" {...register('first_name')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="last_name">Last Name</label>
        <input className = 'form_input' type="text" id="last_name" placeholder="Write your Last Name" {...register('last_name')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="birthday">Birthday</label>
        <input className = 'form_input' type="date" id="birthday"  {...register('birthday')} />
      </div>
      <button onClick={() => setCloseForm(true)} className="form_btn">Submit</button>
    </form>
  );
};

export default UserForm;
