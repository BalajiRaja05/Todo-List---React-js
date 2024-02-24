import { useState } from 'react';
import './App.css';
import TodoContent from './Components/TodoContent';
import TodoHead from './TodoHead';
import InputAddItem from './Components/InputAddItem';

function App() {
  const [items,setItems] =useState(
    [
        {
            id:1,
            checked :true,
            content:"Work Hard"
        },
        {
            id:2,
            checked :false,
            content:"Keep focus"
        },
        {
            id:3,
            checked :false,
            content:"You reach success"
        }
])

const [newItem,setNewItem] = useState('')

const addItem =(newItem)=>{
    const id = items.length?items[items.length -1].id +1 : 1 ;
    const addNewItem ={id,checked:false,content:newItem}
    const listItems =[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}



const handleCheck =(id)=>{
const listItems = items.map((item)=>
item.id===id ? {...item,checked:!item.checked} : item)
setItems(listItems)
localStorage.setItem("todo_list",JSON.stringify(listItems))


}
const handleDelete =(id)=>{
const listItems = items.filter((item)=>item.id !== id)
setItems(listItems)
localStorage.setItem("todo_list",JSON.stringify(listItems))
}

function handleSubmit(e) {
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('')
}





  return (
    <div className="App w-1/2 mx-auto ">
          <TodoHead title= "Todo-list" length={items.length}/>
          <InputAddItem
            newItem ={newItem}
            setNewItem ={setNewItem}
            handleSubmit ={handleSubmit}
          />
          <TodoContent
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
    </div>
  );
}

export default App;
