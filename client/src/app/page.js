"use client";
import Image from 'next/image'
import './page.css'
import React, { useEffect } from 'react';

const CreateButton = () => {
  //const handleClick = () => {
    
  //};
  // onClick={handleClick}

  return(
    <button> 
    Click to log food!
    </button>
  );
};

// generates a timeline component
const CreateEntry = (description) => {
  //return our html code
  return(
    //create a timeline class then loop through our array and make a html box with that information
    <ul className = "timeline">
      {description.map((item, index) => (
          <li data-date={item.date}>
          <div className="data">
              <h3>Food log for {item.date}</h3>
              <p>{item.food}: <br /> - {item.amount} serving(s), {item.calories} calories</p>
              {CreateButton()}
          </div>
        </li>

      ))}
    </ul>
  );
}

const Page = () => {
  useEffect(() => {
    const timeline_wrapper = document.querySelector('.timeline-wrapper');
    const timelines = document.querySelectorAll('.timeline li .data');
    const timeline = document.querySelector('.timeline');

    // data will become visible on click
    const handleDataClick = (event) => {
      const{target} = event;
      if(target.classList.contains('data')){
        target.classList.toggle('show');
      }
    };

    for(const time of timelines){
      // when clicking on div with class name data, will add .data .show properties 
      time.addEventListener('click', handleDataClick);              
    }
    
    //const HandleMouseMove = () => {

    //};

    /* whenever you are moving your mouse, */
    //timeline_wrapper.addEventListener('mousemove', HandleMouseMove);

    return () => {
      // removes the eventlisteners
      for (const time of timelines) {
        time.removeEventListener('click', handleDataClick);
      }
      //timeline_wrapper.removeEventListener('mousemove', HandleMouseMove);
    };
  }, []);

  const items = [{date:"1/1/2024", food:"ham", amount: 1, calories: 1000},
  {date:"1/2/2024", food:"ham", amount: 1, calories: 1000},
  {date:"1/3/2024", food:"ham", amount: 1, calories: 1000},
  {date:"1/4/2024", food:"ham", amount: 1, calories: 1000},
  {date:"1/5/2024", food:"ham", amount: 1, calories: 1000}]

  return(
    <div>
      <h1> Name's Food Log</h1>
      <div className="timeline-wrapper">
        <ul className="timeline">
          <li>
            <div className="data">
            </div>
          </li>
        </ul>
        {CreateEntry(items)}
      </div>
    </div>
    
  );

};

export default Page;