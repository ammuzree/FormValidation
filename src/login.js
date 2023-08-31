import React, {useState} from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

export default function FomValidation(){
 const navigate = useNavigate();
 const [form,setForm]=useState({});
 const [errors, setErrors] = useState({
  name:'',
  password:'',
  email:''
 });

const validation=()=>{
  let isValid = true;
  var newErrors = {};
  var pattern =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  var namePattern =/^[a-zA-Z ]+$/;

  if(!form.name){
    newErrors.name = 'Name is required!';
    isValid=false;
  }else if(!namePattern.test(form.name)){
    newErrors.name = 'Name only!';
    isValid=false;

  }

  if(!form.password){
    newErrors.password = 'Enter the password!';
    isValid= false;
  }

  if(!form.email){
    newErrors.email = 'Enter the email required!';
    isValid=false;
  }else if(!pattern.test(form.email)){
    newErrors.email = 'Enter correct e-mail add!';
    isValid = false;
  }

setErrors(newErrors);

return isValid;


}

 
const handelSub = (e)=>{

if(!validation()){
e.preventDefault();
}else{
  console.log('form submited:' , form);
  navigate('/dash');
}
}

const handelOnchange = (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setForm((val)=>({...val ,[name]:value}));

}

  return(<>
  <h1>...</h1>
  <form onSubmit={handelSub} method="post">
    <label htmlFor="nam">Name : <br/>
    <input type="text" id="nam" placeholder="Name..." name='name' value={form.name ||''} onChange={handelOnchange} />
    </label>
    <br/>
    {errors.name && <span className="error">{errors.name}</span> }
    <br/><br/>
   
    <label htmlFor="pass"> Password : <br/> 
    <input type="text" id="pass" name="password"  placeholder="Password..."  value={form.password ||''} onChange={handelOnchange}/>
    </label>
    <br/>
    {errors.password && <span className="error">{errors.password}</span>}
    <br/><br/>
    <label htmlFor="email">Email : <br/>
    <input type="text" id="email" placeholder="Enter E-mail ..." name="email" value={form.email ||''} onChange={handelOnchange} />
    </label><br/>
    {errors.email && <span className="error">{errors.email}</span>}
    <br/><br/>
    <button type="submit">Submit</button>
  </form>
  </>)
}