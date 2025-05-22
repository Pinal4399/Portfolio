import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
//import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from "react-simple-animate";
//import { useEffect } from "react";
import "./styles.scss";
//import axios from 'axios'
import { CgArrowBottomLeftO } from "react-icons/cg";
//import { useNavigate,Route} from 'react-router-dom';

import emailjs from "@emailjs/browser";

//import {useNavigate} from "react-router-dom";
//import About from '../about/index';
//<Route path='/about' element={<About/>}/>

/*
const Result=()=>{
   return(
    <p>Youe message has been sucessfully sent I will concat you soon</p>
   )
};
*/

/*
const defaultContactFormData={
    name:"",
    email:"",
    description:"",
}
*/

const Contact = () => {
    /*
        const [contact,setContact]=useState([])
            useEffect(()=>{
              axios.get('http://localhost:8000/getContacts')
              .then(contact=>setContact(contact.data))
              .catch(err=>console.log(err))
    
            },[])
    
    return(
        <div>
            <table>
                <thead>
    
                </thead>
                <tbody>
                    {
                        contact.map(user=>{
                     return       <tr>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.description}</td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    
    */
    /*
      
      useEffect(()=>{
           
          const fetchData=async()=>{
              const res=await fetch('http://localhost:8000/getContacts')
              const data=await res.json()
              console.log("fontenddataaaaaaaaaaa",data)
          }
      
      fetchData();
      
      },[])
      return(
          <></>
      )
      
      */

    //  const classes=useStyles();

    /*
    
      const[contact,setContact]=useState(defaultContactFormData);
    
    const navigate=useNavigate();
    
     const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    
        setContact({
            ...contact,
            [name]:value,
        });
     }
         
    const handleSubmit=async (e)=>{
    
        e.preventDefault();
        
        console.log(contact);
        try{
        const response=await fetch("http://localhost:8000/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(contact),
        })
    
        if(response.ok){
            setContact(defaultContactFormData)
            alert("message send successfully")
    
            navigate("/about");
        }
         
    
    
        console.log(response)
    }catch(error){
        alert("message not send")
        console.log("contact",error)
    }
    }
    
    */

    //  const [result,showResult]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_986vz1a",
                "template_x1kprkj",
                e.target,
                "TDBJ0lRd_OTr6W6tz"
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    alert("Message sent successfully");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );

        e.target.reset();
        // showResult(false);
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                // icon={<BsInfoCircleFill size={40}/>}
                icon={<CgArrowBottomLeftO size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translatex(-200px)",
                    }}
                    end={{
                        transform: "translate(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translatex(200px)",
                    }}
                    end={{
                        transform: "translate(0px)",
                    }}
                >
                    <div className="contact__content__form" onSubmit={sendEmail}>
                        <form>
                            <div className="contact__content__form__controlswrapper">
                                <div>
                                    <input
                                        required
                                        name="name"
                                        type={"text"}
                                        className="inputName"
                                    // value={contact.name}
                                    //   onChange={handleInput}
                                    //onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label for="name" className="nameLabel">
                                        Name
                                    </label>
                                </div>
                                <div>
                                    <input
                                        required
                                        name="email"
                                        type={"text"}
                                        className="inputEmail"
                                    //  value={contact.email}
                                    //onChange={handleInput}
                                    // onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label for="email" className="emailLabel">
                                        Email
                                    </label>
                                </div>

                                <div>
                                    <textarea
                                        required
                                        name="description"
                                        type={"text"}
                                        className="inputDescription"
                                        rows="5"
                                    //  value={contact.description}
                                    // onChange={handleInput}
                                    //  onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label for="description" className="descriptionLabel">
                                        Description
                                    </label>
                                </div>
                            </div>
                            <button>Submit</button>
                        </form>

                        <div className="row"></div>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
