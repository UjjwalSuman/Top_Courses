import React from 'react'

const Filter = ({filterData, category, setCategory}) => {

  function filterHandler(title){
    setCategory(title);
  } 

  return (
    <div className='w-11/12 flex flex-wrap font-bold max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterData.map( (data)=>{
            return(
                <button className={`text-lg px-2 py-2 rounded-md font-medium
                text-white bg-black hover:bg-opacity-50 border-2 ransition-all duration-300
                ${category === data.title ? 
                "bg-opacity-60 border-white" : 
                "bg-opacity-30 border-transparent"}
                `}
                 key ={data.id} 
                 onClick={() => filterHandler(data.title)}
                 >
                    {data.title}
                </button>
            )
        })}
    </div>
  )
}

export default Filter
