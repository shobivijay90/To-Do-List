import React from 'react'

function Lists(props){
    return(
        <div className="flex">
        <input type="checkbox" name='checkbox'/>
        <p className='desc'>{props.item.name}</p>
        </div>
    )
} 


export default Lists