import { useState } from "react";

export default function App() {

    const[items, setItems]=useState([]);
    function handleAddItem(item){
      setItems(items => [...items, item]);
    }

    function handleDeleteItem(id){
      setItems((items) => items.filter(item =>  item.id !== id))
    }

    function handleToggleItem(id){
      setItems(items => items.map((item) => item.id === id ? {...item , packed: !item.packed}:item));
    }

  return(
  <div className='app'>
    <Logo />
    <Form  onAddItem={handleAddItem} />
    <PackingList  onToggleItems ={handleToggleItem}  items={items} onDeleteItem={handleDeleteItem} />
    <Stats items={items} />
  </div>
  );
}



function Logo(){
  return <h1>🏕️ Far Away 🏕️ </h1>
}



function Form({onAddItem}){

    const[description, setDescription] = useState('');
    const[quantity,setQuntity]= useState(1);

   
    function handleSubmit(e){
      e.preventDefault();
      
      if(!description)return;

      const newItem =   { id:Date.now(), description, quantity, packed:false };
      onAddItem(newItem);

      setDescription('');
      setQuntity(1);

    }

return (<form className="add-form" onSubmit={(e)=> {handleSubmit(e)}}>
    <h3>What do you need for your trip?</h3>
    <select name="" value={quantity} onChange={(e) => setQuntity(Number(e.target.value))} id="">
      {Array.from({length:20} , (_ , i) => i+1).map((num) =>(
          <option value={num} key={num} >{num}</option>
      ) )} 
    </select>
    <input type="text" value={description} placeholder="Item..." onChange={(e) =>  setDescription(e.target.value)} name="" id="" />
    <button>Add</button>
  </form>)

}





function PackingList({items , onDeleteItem , onToggleItems }){
  return (
    <div className="list">
        <ul>
          {items.map(item => <Item item= {item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItems} />)}
        </ul>
    </div>
  )
}





function Item({item, onDeleteItem, onToggleItem}){
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} name="" id="" /> 
      <span style={item.packed ? {textDecoration:'line-through'}:{}} > 
         {item.quantity} {item.description} 
      </span>
      <button onClick={() => onDeleteItem(item.id)} >❌</button>
    </li>
  )
}











function Stats({items}){
  if(!items.length){
    return(
      <p className="stats"> Starts adding some items to your packing list ✈️ </p>
    );
  }


  
  const  numItems = items.length;
  const numPacked = items.filter((item) => (item.packed)).length;
  const percentage = Math.round((numPacked / numItems)*100);
  return (
      <footer className="stats">
        <em>
          {percentage === 100 ? 'You got everything Ready to go ✈️' :` 🧳 You have ${numItems} items on your list,
        and you already packed ${numPacked} (${percentage}%) `}
        </em>
      </footer>
  );
}








