import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

    const [likedCourses, setLikedCourses] =useState([]);
    
    // return you a list of all courses recieved from the api response
    const getCourses=()=>{

        if(category=== "All"){
            const allCourses =[];
            Object.values(courses).forEach((array)=>{
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //main sirf specific category ka data aarray karunga 
            return courses[category];
        }

       
    }



  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
    getCourses().map((course) => {
        return <Card key={course.id} 
        course={course}
        likedCourses={likedCourses}
        setLikedCourses={setLikedCourses}    
        />
    })
    }
    </div>
  )
}

export default Cards