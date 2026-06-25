
import { useState } from 'react';
import './App.css';

function App() {
  const [expand ,setExpand] = useState(true)
    const short = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima eaque, 
                        veniam est, impedit veritatis amet eos cupiditate distinctio alias rerum dolores, illo ipsa dolorum recusandae.
                        Officia quasi expedita hic porro soluta est recusandae fugit sunt delectus repellat dolores, facere at fugiat...`;
    const long = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi placeat illum similique blanditiis minus? Architecto velit
                  aperiam omnis facilis aut laudantium ad expedita laborum voluptas quod ipsa minus, ducimus nulla rerum sunt rem aspernatur ex
                  officiis natus! Fugiat nisi veritatis molestias iste pariatur laudantium voluptate veniam ipsa vel autem. Asperiores voluptate ipsa
                    aliquam facilis hic explicabo laboriosam, sint officia animi aliquid similique adipisci, veniam temporibus minima debitis iste nostrum neque! 
                    Soluta numquam et nam? Repellat quo error aliquid ad hic perferendis voluptatum quibusdam, iste inventore adipisci atque non fugiat veritatis neque
                    tempora consequuntur, doloremque vitae repudiandae, dolore aliquam quam quae!`
  const[des, setDes] = useState();



  return (
    <>
    <div className='text-expander' >
          {expand ? short :long}<button onClick={() => setExpand(!expand)} >{expand ? "Show more ": "Show less"}</button>
    </div>
    </>
  );
}


export default App;
