import './index.css'
const skills=[
  {skill:"HTML+CSS",
   level:"advanced",
   color:"#2662ea"
  },
  {
    skill:"Javascript",
    level:"advanced",
    color:"#EFD81D"
  },
  {
    skill:"Web Developer",
    level:"advanced",
    color:"#54af09"
  },
  {
    skill:"React",
    level:"advanced",
    color:"#EFD81D"
  },
  {
    skill:"Git and Github",
    level:"intermediate",
    color:"#e84f33"
  },
  {
    skill:"Node JS",
    level:"intermediate",
    color:"#d206a6"
  },
]
function App() {
  return (
    <>
    <Container />
    </>
  );
}

function Container(){
  const skillss= skills;
  const numberSkill = skillss.length;
  return(

      <div className='box' >
            <img  className='imag' src="img/hero.png" alt="" />
            <div style={{margin:"5px"}} >
              <h3>Partha Sarathi Dutta</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem, id consequatur molestias 
                vel voluptatibus tempore hic placeat rerum, itaque obcaecati iste nobis laboriosam ea, voluptas cumque
                consequuntur in harum.
              </p>
              {numberSkill > 0 ? (
                skillss.map((skil)=> <Tools skill={skil} key={skil.name}/> )
              ):"No skill"}
            </div>
      </div>

  )
}

function Tools({skill}){
      return(
        <>
          <span style={{background: skill.color,color: "black", padding:"2px", margin:"4px",display:"inline-block"}} >{skill.skill}</span>
        </>
      )
}

export default App;
