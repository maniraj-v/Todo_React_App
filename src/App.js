import { useState } from "react";
import Item from './Item';
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([
    {id: "1654174570398", value: "mango"},
    {id: "1654174572162", value: "banana"},
    {id: "1654174574456", value: "orange"},
  ]);
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(!editMode){
      const item ={
        id: new Date().getTime().toString(),
        value: text
      }
      setItems([...items, item]);
    }else{
      const updatedItems = items.map((item) =>{
        if(item.id === editId){
          return {...item, value: text}
        }
        return item
      })
      setItems(updatedItems);
      setEditMode(false);
    }
    setText('');
  }

  const handleDelete = (id) =>{
    const filteredData = items.filter(item => item.id !== id)
    setItems(filteredData)
  }
  
  const handleEdit = (id) =>{
    const data = items.find(item => item.id === id);
    // console.log(data.id, data.value)
    setText(data.value)
    setEditMode(true);
    setEditId(id);
  }

  return (
    <main className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name='text'
          value={text}
          autoComplete='off'
          onChange={(e)=> setText(e.target.value)}
        />
        <button type='submit'>
          {editMode ? 'Update': 'Add'}
          </button>  
      </form>
      <section className='item-container'>
        {
          items.map((item, index) =>{
            const {id, value} = item
            return(
              <Item 
              key={id}
              id={id} 
              item={value}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              />
              )
            })
          }
      </section>
      <button 
        type='button'
        onClick={() => setItems([])} 
      >Clear All</button>       
    </main>
  );
}
