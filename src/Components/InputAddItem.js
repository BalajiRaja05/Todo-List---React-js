import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";

const InputAddItem = ({newItem,setNewItem,handleSubmit}) => {
  

  return (
    <>
    <form className='flex bg-yellow-200 px-10' onSubmit={handleSubmit}>
       
                <label htmlFor='add item'></label>
                 <input 
                   type='text' 
                   autoFocus
                   required
                   placeholder='Add item' 
                   className='input'
                   onChange={(e)=>{setNewItem(e.target.value)}}
                   value={newItem}
                  />
                   <button 
                        type='submit'
                        aria-label='Add Item'
                        className='add-btn'
                    >

                        <MdAddCircleOutline />
                   </button>                                 
             
    </form>
                           
     </>
  )
}

export default InputAddItem;