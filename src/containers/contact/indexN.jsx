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
import { useState, useEffect } from "react";
import { useRef } from "react";

//import {useNavigate} from "react-router-dom";
//import About from '../about/index';
//<Route path='/about' element={<About/>}/>



const Contact = () => {
    const initialValues = { name: "", email: "", description: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const form=useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


     const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
          //  toast.error("email is required")
        }else if(!regex.test(values.email)){
            errors.email="This is not a valid email format"
        }
        if (!values.description) {
            errors.description = "Description is required";
        }
        return errors;
    };

    
    const sendEmail = () => {
      //  e.preventDefault();


        emailjs
            .sendForm(
                "service_986vz1a",
                "template_x1kprkj",
               form.current,
                //  e.target,
                "TDBJ0lRd_OTr6W6tz"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!",result.text);
                    alert("Message sent successfully");
                    setFormValues(initialValues);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Failed to send message. Please try again");
                }
            );

     //   e.target.reset();
        // showResult(false);
    };
  const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validate(formValues);
        setFormErrors(validationErrors);
        setIsSubmit(true);

        if (Object.keys(validationErrors).length === 0) {
            // Validation passed!
            console.log("Form is valid. Sending email...");
            sendEmail();
        } else {
            // Validation failed
            console.log("Form has errors.  Email not sent.");
        }
    }
  useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    },[formErrors,isSubmit, formValues])
   
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
                    <div className="contact__content__form" >
                        {Object.keys(formErrors).length === 0 && isSubmit?(<div className="ui message success"></div>):( <pre>{JSON.stringify(formValues, undefined, 2)}</pre>)}
                       
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="contact__content__form__controlswrapper">
                                <div>
                                    <input
                                     //   required
                                        name="name"
                                        type={"text"}
                                        className="inputName"
                                        value={formValues.name}
                                        onChange={handleChange}
                                    // value={contact.name}
                                    //   onChange={handleInput}
                                    //onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label htmlFor="name" className="nameLabel">
                                        Name
                                    </label>
                                </div>
                                {formErrors.name && <p className="error">{formErrors.name}</p>}
                                <div>
                                    <input
                                      //  required
                                        name="email"
                                        type={"text"}
                                        className="inputEmail"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    //  value={contact.email}
                                    //onChange={handleInput}
                                    // onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label htmlFor="email" className="emailLabel">
                                        Email
                                    </label>
                                </div>
                               {formErrors.email && <p className="error">{formErrors.email}</p>}
                                <div>
                                    <textarea
                                     //   required
                                        name="description"
                                        type={"text"}
                                        className="inputDescription"
                                        rows="5"
                                        value={formValues.description}
                                        onChange={handleChange}
                                    //  value={contact.description}
                                    // onChange={handleInput}
                                    //  onChange={(e)=>onTextFieldChange(e)}
                                    />
                                    <label htmlFor="description" className="descriptionLabel">
                                        Description
                                    </label>
                                </div>
                                {formErrors.description && <p className="error">{formErrors.description}</p>}
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
