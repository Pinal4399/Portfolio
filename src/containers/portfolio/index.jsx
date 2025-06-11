import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
//import { BsInfoCircleFill } from 'react-icons/bs';
import { CgArrowBottomLeftO } from "react-icons/cg";
import ImageOne from '../..//images/dv2.png';
import ImageTwo from '../../images/d2.png';
import ImageThree from '../../images/d1.png';
import ImageFour from '../../images/dv3.png';
import ImageFive from '../../images/giftshop.png';
import "./styles.scss";
import {useState} from "react";

const portfolioData=[
  {
    id:2,
    name :"Notes App",
    image :ImageOne,
    link:''
  },
  {
    id:3,
    name:"Menu List",
    image:ImageTwo,
     link:'',
  },
  {
    id:3,
    name:"Restaurant Design",
    image:ImageThree,
     link:''
  },
  {
    id:2,
    name:"Reservation Site",
    image:ImageFour,
     link:''
  },
  {
    id:3,
    name:"Shopping Cart", 
    image:ImageFive,
     link:''
  }
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