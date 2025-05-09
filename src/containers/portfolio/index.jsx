import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
//import { BsInfoCircleFill } from 'react-icons/bs';
import { CgArrowBottomLeftO } from "react-icons/cg";
import ImageOne from '../..//images/school1.jpg';
import ImageTwo from '../../images/giftshop.png';
import ImageThree from '../../images/school.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image1.jpg';
import "./styles.scss";
import {useState} from "react";

const portfolioData=[
  {
    id:2,
    name :"Ecommerce",
    image :ImageOne,
    link:''
  },
  {
    id:3,
    name:"Notes App",
    image:ImageTwo,
     link:'',
  },
  {
    id:2,
    name:"Supplier Design",
    image:ImageThree,
     link:''
  },
  {
    id:3,
    name:"Todo App",
    image:ImageFour,
     link:''
  },
  {
    id:3,
    name:"Shopping Cart Design", 
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