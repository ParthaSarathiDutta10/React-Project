import { useState } from "react";



export default function App() {
    const [items , setItems] = useState([]);


     function addItem(newItem){
        setItems((items) => [...items ,newItem]);
     }

     function onDeleteItems(id){
        setItems((items) => items.filter(item=> item.id !== id))
     }
  return(
  <div className='app'>
    <Logo />
    <Form onAddItems={addItem} />
    <PackingList items={items} onDeleteItems = {onDeleteItems} />
    <Stats />
  </div>
  );
}



function Logo(){
  return <h1>🏕️ Far Away 🏕️ </h1>
}


function Form({onAddItems}){
  const [description , setDescription] = useState('');
  const [quantity ,  setQuantity] =useState(1);

  function handleSubmit(e){
      e.preventDefault();

      if(!description)return;

      const newItem =   { id:Date.now(), description, quantity, packed:false };
     // handleAddItems(newItem);
;
      onAddItems(newItem);
      setDescription('');
      setQuantity(1);
  }


return( 
  <form className="add-form" onSubmit={(e)=>handleSubmit(e)}>
    <h3>What do you need for your trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
      {Array.from({length:20}, (_ , i)=> i+1).map
        ((num) => (
        <option value={num} key={num} > 
          {num}
        </option>
      ))}
    </select>

    <input type="text" placeholder="Item..."  value = {description}  onChange= { (e)=> setDescription(e.target.value) } />
    <button>Add</button>
  </form>)
}




function PackingList({items , onDeleteItems}){

  return (
    <div className="list">
        <ul>
          {items.map(item => <Item item= {item}  onDeleteItems ={onDeleteItems} key={item.id}/>)}
        </ul>
    </div>
  );
}




function Item({item , onDeleteItems}){
  return (
    <li>
      <input type="checkbox"   />
      <span style={item.packed ? {textDecoration:'line-through'}:{}} > 
        {item.quantity} {item.description} 
      </span>
      <button onClick={()=> onDeleteItems(item.id)}  >❌</button>
    </li>
  )
}



function Stats(){
  return (
      <footer className="stats">
        <em>💼 You have X items on your list , and you already packed X (X%)</em>
      </footer>
  );
}






