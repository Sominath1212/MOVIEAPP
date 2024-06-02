import React from 'react'

function Card(props) {
  return (
    <div className='bg-[#efefef] text-[#646368] rounded-lg hover:scale-75 duration-300 border-[1px] border-black w-[250px] flex flex-col justify-center items-center p-auto mt-3 font-bold '> 
          <img src={props.image} alt="" className='w-[200px] h-[200px] mt-1'/>
          <h3>{props.title}</h3>
        <p>{props.rating}</p>
    </div>
  )
}

export default Card