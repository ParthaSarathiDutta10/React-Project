import { useState } from "react";
import {questions} from './data/questions';

export default function App(){
  const [step , setStep] = useState("start");
  const [current , setCurrent] = useState(0);
  const currentQuestion = questions[current];


  const [scores,setScores] =useState(0);
  const result = findResult(scores);
  function handleCurrent(type){
       setScores((prev) => ({
          ...prev , 
          [type]:(prev[type] || 0)+1,
    }));


    if(current < questions.length-1){

      {setCurrent(current+1)}
    }
    else{
      setStep("result");
    }
  }

  function findResult(scores){
    let dominantype = '';
    let maxScore =-1;
    Object.entries(scores).forEach(([type, count]) =>{
          if(maxScore < count) {
            maxScore= count;
            dominantype=type;
        }
    })

    return dominantype;
  }

  return(
    <div>
        {step === 'start' && (
          <div>
              <h1> Start Screen  </h1>
              <button onClick={()=> setStep("quiz") } > Start quiz </button>
          </div>
        )}
        {step === "quiz"&&(
          <div>
              <h1>Question:{currentQuestion.scenario}?</h1>
              {currentQuestion.options.map((option , index ) => (
                 <button key={index} className="block" onClick={() => handleCurrent(option.type)} > {option.text} </button>
                  )
                )
              }
          </div>
        )}
        {step === 'result' && (
          <div>
            <h1>{result}</h1>
            <button onClick={() => setStep('start')} >Retake Quiz</button>
          </div>
        )}
    </div>
  );



}