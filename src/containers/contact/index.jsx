import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
//import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import {useState} from "react";
import './styles.scss';
import { CgArrowBottomLeftO } from "react-icons/cg";
import { useNavigate,Route} from 'react-router-dom';
import axios from 'axios'; 
import emailjs from '@emailjs/browser';
import About from '../about/index';
<Route path='/about' element={<About/>}/>



const Result=()=>{
   return(
    <p>Youe message has been sucessfully sent I will concat you soon</p>
   )


};


const Contact=() => {
  //  const classes=useStyles();
    const [result,showResult]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_986vz1a', 'template_x1kprkj', e.target,'TDBJ0lRd_OTr6W6tz',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
      showResult(false);
  };

  console.log("djdfdkdkj contact started");
    const [contact,setContact]=useState({
        name:"",
        email:"",
        discription:"",
    });

    const[status,setStatus] = useState(false);
    const navigate=useNavigate();
    const onTextFieldChange=(e)=>{
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };
    
    const onFormSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:8000/contact`,contact);
            console.log(contact);
            console.log("contact.....")
            setStatus(true);
            navigate(<About/>);
        }catch(error){
           console.log("something is wrong");
        }
    };
     if(status===true){
        return<Contact/>;
     }else{
        console.log("something is wrong");
     }


    return(
    <section id='contact' className='contact'>
    <PageHeaderContent
     headerText="My Contact"
    // icon={<BsInfoCircleFill size={40}/>}
icon={<CgArrowBottomLeftO size={40}/>}
    />
    <div className="contact__content">
        <Animate
        play
        duration={1}
        delay={0}
        start={{
            transform:"translatex(-200px)"
        }}
        end={{
            transform:"translate(0px)"
        }}
        >
<h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
        play
        duration={1}
        delay={0}
        start={{
            transform:"translatex(200px)"
        }}
        end={{
            transform:"translate(0px)"
        }}
        >
 <div className="contact__content__form" onSubmit={sendEmail}>
    <div className="contact__content__form__controlswrapper">
        <div>
            <input required name="name" type={'text'} className="inputName" 
            onChange={(e)=>onTextFieldChange(e)}/>
            <label htmlFor="name" className="nameLabel">Name</label>
            </div>
        <div>
        <input required name="email" type={'text'} className="inputEmail"
         onChange={(e)=>onTextFieldChange(e)}/>
        <label htmlFor="email" className="emailLabel">Email</label>
        </div>
        
        <div>
        <textarea required name="descripation" type={'text'} className="inputDescription" rows="5"
         onChange={(e)=>onTextFieldChange(e)}/>
        <label htmlFor="description" className="descriptionLabel">Description</label>
        </div>

    </div>
    <button onClick={(e)=>onFormSubmit(e)}>Submit</button>
    <div className='row'>{result?<Result/>: null} </div>
 </div>
        </Animate>
    </div>
 </section>
    )
}
export default Contact;