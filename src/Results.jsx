import React from 'react'
import Card from './Card'

export default function Results(props) {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const cards=props.movies.map((item,i)=>{
        return (<Card key={i} image={IMGPATH+item.poster_path} title={item.original_title} rating={item.vote_average} />)
    })
  return (
    <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-4 '>
          {cards}
    </div>
  )
}
