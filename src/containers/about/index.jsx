import React from 'react';
//import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { CgArrowBottomLeftO } from "react-icons/cg";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiApple,DiAndroid } from 'react-icons/di';
import { FaDev,FaDatabase } from 'react-icons/fa';
const personalDetails =[
{
    label:"Name",
    value:"Pinal Mansara",
},
{
    label:"Address",
    value:"United Kingdom",
},
{
    label:"Email",
    value:"pinalmansara4@gmail.com",

},

];
 
const jobSummary ='I’m a skilled and passionate Full Stack Developer with over 4 years of experience in building dynamic, responsive, and user-focused web applications. Proficient in modern web technologies such as React, Node.js, MongoDB, and SQL, I specialize in creating scalable solutions that deliver excellent user experiences.My journey in software development spans across various domains, including financial services, web development, and database management. I’m constantly learning and adapting to new technologies, with a keen interest in AI and Machine Learning. If you’re looking for a dedicated developer with a passion for coding and problem-solving, let’s connect!'


const About=() => {
   console.log("About PAGE.....");
       return(
       
         <section id='about' className='about'>
            <PageHeaderContent
             headerText="About Me"
            // icon={<BsInfoCircleFill size={40}/>}
             icon={<CgArrowBottomLeftO size={40}/>}
            />

            <div className="about__content">
               <div className="about__content__personalWrapper">
               <Animate
                 play
                 duration={1.5}
                 delay={1}
                 start={{
                    transform:"translateX(-900px)"
                 }}
                 end={{
                    transform:"translatex(0px)"
                 }}
               >
                <h3>What I Do</h3>
                <p>{jobSummary}</p>
                
                </Animate>

                <Animate
                 play
                 duration={1.5}
                 delay={1}
                 start={{
                    transform:"translateX(500px)"
                 }}
                 end={{
                    transform:"translatex(0px)"
                 }}
               >

                <h3 className='personalInformationHeaderText'>Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                               <span className="title">{item.label}</span>
                               <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
               </div>
               <div className="about__content__serviceWrapper"> 
               <Animate
                 play
                 duration={1.5}
                 delay={1}
                 start={{
                    transform:"translateX(600px)"
                 }}
                 end={{
                    transform:"translatex(0px)"
                 }}
               >
               
               
                 <div className='about__content__serviceWrapper__innerContent'>
                 <div>
                       <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                  </div>
                   <div>
                   <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
                   </div>
                   <div>
                   <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
                   </div>
                   <div>
                   <DiApple size={60} color="var(--yellow-theme-main-color)"/>
                    </div> 
               </div>
                
                </Animate>
                 </div>
                 
             
            </div>
         </section>
       )

}
export default About;