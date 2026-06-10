import { useState } from "react";
import {question } from "./questions";
export default function App(){
  const [step , setStep] = useState("start");
  const [current, setCurrent] = useState("start");
  const  currentQuestion = question[current];

  return(
    <div>
      {step === 'start' && (
        <div>
          <h1>Start Screen</h1>
          <button onClick={() => setStep("quiz")} >Start Quiz</button>
        </div>
      )}

      {step === "quiz" && (
        <div>
          <h1>{currentQuestion.scenario}</h1>
          
          {currentQuestion.options.map((option, index)=>(
            <p key={index}> {option.text}</p>
          ))}

          <button onClick={() => setCurrent(current+1)} >NEXT</button>
        </div>
      )}

      {step === "result" && (
        <div>
          <h1>Result Screen</h1>

          <button onClick={() => setStep("start")} >Restart Quiz</button>
        </div>
      )}
    </div>
  );
}
