import React  from 'react'
import ListItems from './ListItems';

const TodoContent = ({handleCheck,handleDelete,items}) => {
   
  return (
    <>
    <main className='bg-yellow-200 '>
        {(items.length)?(
                <ListItems
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    items={items}
                />
        ):(
            <p className='empty'>your list is Empty</p>
        )}
        </main>
    </>
  )
}

export default TodoContent

