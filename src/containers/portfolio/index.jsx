import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
//import { BsInfoCircleFill } from 'react-icons/bs';
import { CgArrowBottomLeftO } from "react-icons/cg";
import ImageOne from '../..//images/dv3.png';
import ImageTwo from '../../images/d2.png';
import ImageThree from '../../images/d1.png';
import ImageFour from '../../images/dv2.png';
import ImageFive from '../../images/giftshop.png';
import ImageSix from '../../images/img6.webp';
import ImageSeven from '../../images/img7.avif';
import ImageEight from '../../images/payroll.png';
import ImageNine from '../../images/temp.jpg';
import ImageTen from '../../images/machine.webp';

import "./styles.scss";
import {useState} from "react";

const portfolioData=[
  {
       id:4,
     name:"Machine Learning Model",
      content:"linear regression, decision tree regressor, random forest regressor, support vector machine, and gradient boosting regressor",
     image:ImageTen,
     link:''
  },
  {
       id:4,
     name:"Temperature Monitoring System",
      content:"Raspberry pi, BME280 sensor,LED 5*5 Matrix,OpenStack",
     image:ImageNine,
     link:''
  },
  
  {
    id:2,
    name :"Reservation Site",
    content:"React + vite, Node.js, MongoDB ",
    image :ImageOne,
    link:''
  },
  {
    id:3,
    name:"Menu List",
    content:"React + vite, Node.js",
    image:ImageTwo,
     link:'',
  },
  {
    id:3,
    name:"Restaurant Design",
    image:ImageThree,
    content:"React + vite, Node.js",
     link:''
  },
  {
    id:2,
    name:"Notes App",
    image:ImageFour,
    content:"React, Node.js, MongoDB ",
     link:''
  },
  {
    id:3,
    name:"Shopping Cart", 
     content:"React, Node.js, MongoDB ",
    image:ImageFive,
     link:''
  },
  {
    
     id:2,
     name:"Ecommerce Website",
      content:"React, Node.js, MongoDB It's Alibaba Concept",
     image:ImageSix,
     link:''
  },
  {
       id:4,
     name:"Online Giftshop wesite",
      content:"ASP.Net, SQLSever",
     image:ImageSeven,
     link:''
  },
{
       id:4,
     name:"Pyroll Management Software",
      content:"VB.Net, SQLSever",
     image:ImageEight,
     link:''
  },
 
  

]

const filterData=[
  {
    filterId:1,
    label:'All'
  },
  {
    filterId:2,
    label:'Development'
  },
  {
    filterId:3,
    label:'Design'
  },
  {
    filterId:4,
    label:'University Projects'
  }
]

const Portfolio=()=>{
 
 const [filteredvalue,setFilteredValue]=useState(1);
 const [hoveredValue,setHovredValue]=useState(null);

 function handleFilter(currentId){
  setFilteredValue(currentId)
 };

 function handleHover(index){
  setHovredValue(index)
 }

 console.log('=========');
 console.log(hoveredValue);
 console.log('==========');

const filteredItems=filteredvalue===1?portfolioData:
portfolioData.filter(item=>item.id===filteredvalue)

console.log(filteredItems)


  return(

    <section id='portfolio' className='portfolio'>
    <PageHeaderContent
     headerText="My Portfolio"
    // icon={<BsInfoCircleFill size={40}/>}
    icon={<CgArrowBottomLeftO size={40}/>}
    />
    <div className='portfolio__content'>
      <ul className='portfolio__content__filter'>
        {
          filterData.map((item)=>(
            <li className={item.filterId===filteredvalue? 'active' : '' } 
            onClick={()=>handleFilter(item.filterId)} 
            key={item.filterId}
            >
              {
                item.label
              }
            </li>
          ))
        }

      </ul>
<div className="portfolio__content__cards">
{
  filteredItems.map((item,index)=>(
    <div className="portfolio__content__cards__item" 
    key={`cardItem${item.name.trim()}`}
    onMouseEnter={()=>handleHover(index)}
    onMouseLeave={()=>handleHover(null)}
    >
      <div className="portfolio__content__cards__item__img-wrapper">
        <a>
          <img alt="dummy data" src={item.image}/>
        </a>
        </div>
        <div className="overlay">
       
          {
            index===hoveredValue &&(
              <div>
                <p>{item.name}</p>
                <button>Visit</button>
                 <p className='contents'>{item.content}</p>
                </div>
            )
          }
          
          
          </div>

      </div>
  ))
}
</div>
    </div>
 </section>
  );
}
export default Portfolio;