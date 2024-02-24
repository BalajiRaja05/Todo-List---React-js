import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ListItems = ({handleCheck,handleDelete,items}) => {
  return (
    <div >
        <ul >
           {items.map((item)=>(
               <li key={item.id} className='flex justify-center text-base border px-10 py-5  text-left '>
                   <input
                       type='checkbox'
                       checked={item.checked}
                       className='mr-5 cursor-pointer  w-10 '
                       onChange={()=>handleCheck(item.id)}
                   />

                   <label 
                      onDoubleClick={()=>handleCheck(item.id)}
                      style={(item.checked)?{textDecoration:'line-through'}:null}
                    >
                    {item.content}
                    </label>

                   <span className='ml-auto mr-5' >
                   <FaTrashAlt 
                    role='button' 
                    tabIndex={0} 
                    size={30} 
                    className='h-6 mt-1 outline-none hover:text-red-400'
                    onClick={()=>handleDelete(item.id)}
                    aria-label={`Delete ${item.content}`}
                    
                    
                    />
                   </span>
                   
                   
               </li>
        ))}
        
        </ul>
    </div>
  )
}

export default ListItems