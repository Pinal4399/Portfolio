import { useEffect,useState } from "react";
import React from "react";
//import "./App.css";
import axios from 'axios'
//import 'bootstrap/dist/scc/bootstrap.min.css'
console.log("get contacts front end....")
const Contact=() => {
    console.log("get contacts front end....000000000")
        const [contact,setContact]=useState([])
        console.log("get contacts front end...11111111111111.")
        useEffect(()=>{
          axios.get('http://localhost:8000/getContacts')
          .then(contact=>setContact(contact.data))
          .catch(err=>console.log(err))
         console.log("get contacts front end....")
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

}
    
export default Contact;