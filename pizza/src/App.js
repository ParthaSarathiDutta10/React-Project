import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];



function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){
    return(
      <header>
         <h1 className='header' > Fast React Pizza Co. </h1>
      </header>
    );
}

function Menu(){
  const pizzas = pizzaData;
  const numPizzas= pizzas.length;

  return(
    <main className='menu'>
         <h2>Our Menu</h2>
       {numPizzas >0 ? (
      <>
       <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
       <ul className='pizzas'>
          {pizzas.map((pizza)=> 
            <Pizza pizzaObj = {pizza} key={pizza.name} />
          )}
       </ul>
      </>
    ):(<p>We're still working on our menu. Please come back later:</p>)}
    </main>
  );
}


function Pizza(props){
  return(
    <>
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out":""}`} >
      <img src={props.pizzaObj.photoName} alt="props.pizzaObj.name" />

      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD OUT": props.pizzaObj.price}</span>
      </div>
    </li>
    </>
  )
}



function Footer(){
  const hour =new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return(
   <footer className='footer' >
    { isOpen ? <Order closeHour={closeHour} openHour={openHour}/>:
      <p> We're happy to welcome you between {openHour}:00 and {closeHour}:00 .</p>
    }
   </footer> 
  )
}

function Order({closeHour , openHour}){
    return(
      <>
        <p>
            We're open form {openHour}:00  to   {closeHour}:00 . Come to visit us or order online.
        </p>
        <div className='oder-box' >  <button className='btn' >Orders</button></div>
      </>
    )
}

export default App;
