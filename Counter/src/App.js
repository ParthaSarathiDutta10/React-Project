

// **useEffect()** = React Hook that tells React DO SOME CODE WHEN (pick one):
//       This component re-renders
//       This component mounts
//       The state of a value

// **useEffect(function, [dependencies])**

// 1. `useEffect(() => {})` // Runs after every re-render
// 2. `useEffect(() => {}, [])` // Runs only on mount
// 3. `useEffect(() => {}, [value])` // Runs on mount + when value changes

// **USES**
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import React ,{useState , useEffect} from 'react'
function App() {
  const[count, setCount] = useState(0);
  const[color, setColor] = useState("green");
  const[width, setWidth]= useState(window.innerWidth);
  const[height, setHeight] = useState(window.innerHeight);

  // useEffect(function ,[dependencies]);
  useEffect(() => {
    document.title =`Count: ${count} ${color}`;
  },[count,color]);

  // useEffect(()=> {
  //   window.addEventListener("resize" , handleResize);
  //   console.log("Event Listeners");

  //   return ()=>{
  //     window.removeEventListener("resize",handleResize);
  //      console.log("Event Remove");
  //   }

  // },[])

  function addCount(){
    setCount( c => c+1);
  }
  function substractCount(){
    setCount(c => c-1 );
  }
  function changeColor(){
    setColor(c => c === "green"  ? "red" :"green");
  }
  
  // function handleResize(){
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // }

  return (
  <>
    <div className='box'>
        <p style={{color:color}} >Count:{count}</p>
      <button className='add'  onClick={addCount} >Add</button>
      <button className='delete' onClick={substractCount} >Subtract</button> <br/> <br/>
      <button className='color' onClick={changeColor} >Color Change</button>
    </div>
     {/* <p>Window Width:{width}px</p>
    <p>Window Height:{height}px</p> */}
  </>
  );
}

export default App;
