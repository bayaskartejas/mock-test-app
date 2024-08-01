import React from 'react'

function Tile(props) {
  return (
    <div className='flex w-56 items-center bg-white px-4 py-2 rounded-3xl hover:bg-slate-100 cursor-pointer'>
        <img src={props.img} alt='' className='h-8 mr-2'></img>
        <div>{props.name}</div>
    </div>
  )
}

export default Tile