import { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
// import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs"
// import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
// import { GrMail } from "react-icons/gr"
// import { SweetAlert } from "react-bootstrap-sweetalert";
import Footer from "../components/Footer";
import image from "../images/image";
import "../styles/contact.css";
import axios from 'axios';


export default function Contact(){
    
    const inputs = useRef([]);
    const [validform, setvalidform] = useState([
        'validform', 
        'validform', 
        'validform', 
        'validform', 
        'validform', 
        'validform',
        'validform']);
    const [validvalue, setvalidvalue] = useState([
        'validvalue', 
        'validvalue', 
        'validvalue', 
        'validvalue', 
        'validvalue', 
        'validvalue',
        'validvalue']);

    const [validinput, setvalidinput] = useState({
            firstname: false,
            lastname : false,
            phone    : false,
            email    : false,
            company  : false,
            message  : false
        });
       
    
//    const [sent, setsent] = useState(false);

   const inputvalue = e => {

        if(inputs.current.length < validform.length){
            inputs.current.push(e);
        }

   }

    
   const handleSubmit = event => { 
   
    
    var validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    for(let i=0; i < inputs.current.length; i++){
        if(inputs.current[i].value === ''){
            setvalidform(val => ({...val, [i]:'invalidform'}));
            setvalidvalue(val => ({...val, [i]:'validvalue'}));
            event.preventDefault();
        }else{
            if(inputs.current[i].name === 'firstname'){
                if(isNaN(inputs.current[i].value)){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, firstname:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, firstname:false}));
                }
            }

            if(inputs.current[i].name === 'lastname'){
                if(isNaN(inputs.current[i].value)){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, lastname:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, lastname:false}));
                }
            }
            
            if(inputs.current[i].name === 'phonenumber'){
                if(inputs.current[i].value.length === 10){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, phone:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, phone:false}));
                }
            }

            if(inputs.current[i].name === 'email'){
                if(inputs.current[i].value.match(validEmail)){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, email:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, email:false}));
                }
            }

            if(inputs.current[i].name === 'companyname'){
                if(inputs.current[i].value.trim().length !== 0){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, company:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, company:false}));
                }
            }

            if(inputs.current[i].name === 'message'){
                var inputmsg = inputs.current[i].value.replaceAll('\n','').split(' ').join('').length; 
                if(inputmsg > 19){
                    setvalidvalue(val => ({...val, [i]:'validvalue'}));
                    setvalidform(val => ({...val, [i]:'validform'}));
                    setvalidinput(val => ({...val, message:true}));
                }else{
                    event.preventDefault();
                    setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
                    setvalidinput(val => ({...val, message:false}));
                }
            }
           
            setvalidform(val => ({...val, [i]:'validform'}));
            event.preventDefault();
            
            
        

        }
        
       
    }

    
        


for(let i=0; i < validform.length; i++){
    inputs.current[i].addEventListener('input', handleChange);
}
}

const handleChange = () => { 


var validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

for(let i=0; i < inputs.current.length; i++){
    if(inputs.current[i].value === ''){
        setvalidform(val => ({...val, [i]:'invalidform'}));
        setvalidvalue(val => ({...val, [i]:'validvalue'}));
    }else{
        if(inputs.current[i].name === 'firstname'){
            if(isNaN(inputs.current[i].value)){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }

        if(inputs.current[i].name === 'lastname'){
            if(isNaN(inputs.current[i].value)){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }
        
        if(inputs.current[i].name === 'phonenumber'){
            if(inputs.current[i].value.length === 10){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }

        if(inputs.current[i].name === 'email'){
            if(inputs.current[i].value.match(validEmail)){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }

        if(inputs.current[i].name === 'companyname'){
            if(inputs.current[i].value.trim().length !== 0){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }

        if(inputs.current[i].name === 'message'){
            var inputmsg = inputs.current[i].value.replaceAll('\n','').split(' ').join('').length; 
            if(inputmsg > 19){
                setvalidvalue(val => ({...val, [i]:'validvalue'}));
                setvalidform(val => ({...val, [i]:'validform'}));
            }else{
                setvalidvalue(val => ({...val, [i]:'invalidvalue'}));
            }
        }
       
        setvalidform(val => ({...val, [i]:'validform'}));
        
    }
    
   
}

}

function success(){
    Swal.fire({
        title: 'Thank you for Contacting us',
        text : 'Message sent Sucessfully',
        icon : 'success',
        confirmButtonColor : '#128d2b'    
    })
}


useEffect(() => {

    if((validinput.firstname && validinput.lastname && validinput.phone &&
        validinput.email && validinput.company && validinput.message) === true){
            let data = {
                firstname  : inputs.current[0].value,
                lastname   : inputs.current[1].value,
                phonenumber: inputs.current[2].value,
                email      : inputs.current[3].value,
                company    : inputs.current[4].value,
                title      : inputs.current[5].value,
                message    : inputs.current[6].value
            } 
            
            axios.post('/api/forma', data)
            .then((res) => {
                success();
                resetform();
            }).catch(() => {
                console.log('Message not sent');
            })
        }

        const resetform = () => {
            for(let i=0; i < inputs.current.length; i++){
                inputs.current[i].value = "";
            }
        }

},[validinput]);
    

    return(
        <>
        <div className="contact_body">
                
                
                <div className="container">
                    <div className="row">
                        <div className="contact_img col-sm-6 p-0">
                            <img src={image.contactimg} alt="contactus"/>
                        </div>

                        <div className="contact_form col-sm-6">
                            <h1>Contact us</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row contact_forminputs">
                                            <div className="col-sm-6">
                                                <label>First Name</label> <br/>
                                                <input type="text" 
                                                       name="firstname" 
                                                       placeholder="Enter your first name"
                                                       ref={inputvalue}     
                                                />
                                                <div className="valid">
                                                    <div className={validform[0]}>Enter your firstname.</div>
                                                    <div className={validvalue[0]}>Name must be alphabets.</div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-6">
                                                <label>Last Name</label> <br/>
                                                <input type="text" 
                                                       name="lastname" 
                                                       placeholder="Enter your last name" 
                                                       ref={inputvalue}
                                                />
                                                <div className="valid">
                                                    <div className={validform[1]}>Enter your lastname.</div>
                                                    <div className={validvalue[1]}>Name must be alphabets.</div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <label>Phone Number</label> <br/>
                                                <input type="number" 
                                                       name="phonenumber" 
                                                       placeholder="Enter your phone number"
                                                       ref={inputvalue}
                                                />
                                                <div className="valid">
                                                    <div className={validform[2]}>Enter your phone number.</div>
                                                    <div className={validvalue[2]}>Phone number must be 10 digits.</div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-6">
                                                <label>E-mail</label> <br/>
                                                <input type="text" 
                                                       name="email" 
                                                       placeholder="Enter your email"
                                                       ref={inputvalue}
                                                />
                                                <div className="valid">
                                                    <div className={validform[3]}>Enter your e-mail address.</div>
                                                    <div className={validvalue[3]}>Invalid email.</div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <label>Company</label> <br/>
                                                <input type="text"
                                                       name="companyname" 
                                                       placeholder="Enter your company name"
                                                       ref={inputvalue} 
                                                />
                                                <div className="valid">
                                                    <div className={validform[4]}>Enter your company name.</div>
                                                    <div className={validvalue[4]}>Enter your company name.</div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <label>Title</label> <br/>
                                                <input type="text" 
                                                       placeholder="Title(Optional)"
                                                       ref={inputvalue} 
                                                />
                                                <div className="valid">
                                                    <div className={validform[5]}></div>
                                                    <div className={validvalue[5]}></div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>Message</label> <br/>
                                                <textarea
                                                      name="message"
                                                      placeholder="Enter your message" 
                                                      ref={inputvalue} 
                                                ></textarea>
                                                <div className="valid">
                                                    <div className={validform[6]}>Enter your message.</div>
                                                    <div className={validvalue[6]}>Maximum 20 characters.</div>
                                                </div>
                                            </div>
                                    </div>
                                                 
                                        <div className="submit_btn mt-2">
                                            <input type="submit" value="Submit"/>
                                        </div>
                                </form>
                        </div>

                    </div>   
                </div>

                
            </div>

            <Footer />
        </>
            
        
    );
}