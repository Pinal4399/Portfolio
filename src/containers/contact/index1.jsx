import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
//import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { CgArrowBottomLeftO } from "react-icons/cg";
const Contact=() => {
    
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
 <div className="contact__content__form">
    <div className="contact__content__form__controlswrapper">
        <div>
            <input required name="name" type={'text'} className="inputName"/>
            <label htmlFor="name" className="nameLabel">Name</label>
            </div>
        <div>
        <input required name="email" type={'text'} className="inputEmail"/>
        <label htmlFor="email" className="emailLabel">Email</label>
        </div>
        
        <div>
        <textarea required name="descripation" type={'text'} className="inputDescription" rows="5"/>
        <label htmlFor="description" className="descriptionLabel">Description</label>
        </div>

    </div>
    <button>Submit</button>
 </div>
        </Animate>
    </div>
 </section>
    )
}
export default Contact;