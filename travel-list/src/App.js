import { useState } from "react";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
//   { id: 3, description: "Laptop", quantity: 12, packed: false },
// ];




export default function App() {

    const[items, setItems]=useState([]);
    function handleAddItem(item){
      setItems(items => [...items, item]);
    }
  return(
  <div className='app'>
    <Logo />
    <Form  onAddItem={handleAddItem} />
    <PackingList  items={items}  />
    <Stats />
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

      const newItem =   { id:Date.now(), description, quantity, packe:false };
      onAddItem(newItem);

      setDescription('');
      setQuntity(1);

    }

  return (<form className="add-form" onSubmit={(e)=> {handleSubmit(e)}}>
    <h3>What do you need for your trip?</h3>
    <select name="" value={quantity} onChange={(e) => setDescription(Number(e.target.value))} id="">

    {Array.from({length:20} , (_ , i) => i+1).map((num) =>(
       <option value={num} key={num} >{num}</option>
    ) )}

 
    </select>

    <input type="text" value={description} placeholder="Item..." onChange={(e) =>  setDescription(e.target.value)} name="" id="" />
    <button>Add</button>
  </form>)

}





function PackingList({items}){
  return (
    <div className="list">
        <ul>
          {items.map(item => <Item item= {item} key={item.id}/>)}
        </ul>
    </div>
  )
  

}


function Item({item}){
  return (
    <li>
      <span style={item.packed ? {textDecoration:'line-through'}:{}} > 
        {item.quantity} {item.description} 
      </span>
      <button>❌</button>
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