import React from 'react'


const TodoHead = ({title,length}) => {
  return (
    
        <div className=' section-1 '>
        <div className='flex items-center'>
           <h2 className='h2-todo'>{title} </h2>
           <p className=' length'>
            (Total {length==1?'task':"tasks"}:{length})
            </p>
        </div>
           
           
        </div>
        
        
   
  )
}

TodoHead.defaultProps ={
    title: "Work entry panel"
}
export default TodoHead